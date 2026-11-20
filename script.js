// ======================================
// 1. SELECT HTML ELEMENTS
// ======================================

const searchInput = document.getElementById("search-input");
const topicCards = document.querySelectorAll(".topic-card");
const exploreButtons = document.querySelectorAll(".explore-button");

const lessonView = document.getElementById("lesson-view");
const subtopicNav = document.getElementById("subtopic-nav");
const lessonCategory = document.getElementById("lesson-category");
const lessonTitle = document.getElementById("lesson-title");
const lessonDescription = document.getElementById("lesson-description");
const lessonContent = document.getElementById("lesson-content");

const backButton = document.getElementById("back-to-topics");
const completeButton = document.getElementById("complete-lesson");
const prevLessonButton = document.getElementById("prev-lesson");
const nextLessonButton = document.getElementById("next-lesson");
const lessonStatus = document.getElementById("lesson-status");
const completedCount = document.getElementById("completed-count");


// ======================================
// 2. LOAD SAVED LEARNING PROGRESS
// ======================================

let completedSubtopics = new Set(
    JSON.parse(
        localStorage.getItem("engilearnCompletedSubtopics") || "[]"
    )
);

function getTopicLessons(topic) {
    return typeof lessons !== "undefined" && Array.isArray(lessons[topic])
        ? lessons[topic]
        : [];
}

function isTopicFullyCompleted(topic) {
    const topicLessons = getTopicLessons(topic);
    if (topicLessons.length === 0) return false;
    return topicLessons.every(function (item) {
        return completedSubtopics.has(item.id);
    });
}

function updateProgress() {
    let fullyCompletedTopics = 0;

    topicCards.forEach(function (card) {
        const topicName = card.dataset.name;
        const topicLessons = getTopicLessons(topicName);
        const doneInTopic = topicLessons.filter(function (item) {
            return completedSubtopics.has(item.id);
        }).length;

        const isTopicDone = isTopicFullyCompleted(topicName);
        if (isTopicDone) {
            fullyCompletedTopics++;
        }

        card.classList.toggle("completed", isTopicDone);

        let progressBadge = card.querySelector(".topic-progress");
        if (!progressBadge) {
            progressBadge = document.createElement("div");
            progressBadge.className = "topic-progress";
            const button = card.querySelector(".explore-button");
            card.insertBefore(progressBadge, button);
        }

        progressBadge.textContent =
            topicLessons.length > 0
                ? `${doneInTopic} / ${topicLessons.length} subtopics completed`
                : "Coming soon";
    });

    if (completedCount) {
        completedCount.textContent =
            String(fullyCompletedTopics).padStart(2, "0");
    }
}

updateProgress();


// ======================================
// 3. DISPLAY TOPIC & SUBTOPICS
// ======================================

let currentTopic = null;
let currentLessonIndex = 0;

function renderSubtopicNav(topic, activeIndex) {
    const topicLessons = getTopicLessons(topic);
    subtopicNav.innerHTML = "";

    if (topicLessons.length === 0) {
        subtopicNav.hidden = true;
        return;
    }

    subtopicNav.hidden = false;

    topicLessons.forEach(function (item, index) {
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = "subtopic-pill";

        if (index === activeIndex) {
            pill.classList.add("active");
        }
        if (completedSubtopics.has(item.id)) {
            pill.classList.add("done");
        }

        const number = String(index + 1).padStart(2, "0");
        const check = completedSubtopics.has(item.id) ? " ✓" : "";
        pill.textContent = `${number}. ${item.title}${check}`;

        pill.addEventListener("click", function () {
            openLesson(topic, index, false);
        });

        subtopicNav.appendChild(pill);
    });
}

function openLesson(topic, lessonIndex = 0, shouldScroll = true) {
    closeGraphView();
    currentTopic = topic;
    const topicLessons = getTopicLessons(topic);

    currentLessonIndex = Math.max(
        0,
        Math.min(lessonIndex, Math.max(0, topicLessons.length - 1))
    );

    const activeLesson = topicLessons[currentLessonIndex];

    renderSubtopicNav(topic, currentLessonIndex);

    if (activeLesson) {
        lessonCategory.textContent =
            `${topic.toUpperCase()} • SUBTOPIC ${currentLessonIndex + 1} OF ${topicLessons.length}`;
        lessonTitle.textContent = activeLesson.title;
        lessonDescription.textContent = activeLesson.description;
        lessonContent.innerHTML = activeLesson.content;

        const isCompleted = completedSubtopics.has(activeLesson.id);
        completeButton.disabled = isCompleted;
        completeButton.textContent = isCompleted
            ? "Subtopic completed ✓"
            : "Mark lesson as completed";
        lessonStatus.textContent = isCompleted
            ? "You've already completed this subtopic."
            : "";
    } else {
        lessonCategory.textContent = `ENGINEERING MATHEMATICS • ${topic.toUpperCase()}`;
        lessonTitle.textContent = topic;
        lessonDescription.textContent =
            "This learning module is coming soon. Stay tuned!";
        lessonContent.innerHTML =
            "<p>We're preparing the subtopics for this module.</p>";
        completeButton.disabled = true;
        completeButton.textContent = "Mark lesson as completed";
        lessonStatus.textContent = "";
    }

    prevLessonButton.disabled = !activeLesson || currentLessonIndex === 0;
    nextLessonButton.disabled =
        !activeLesson || currentLessonIndex >= topicLessons.length - 1;

    lessonView.hidden = false;

    if (typeof initLessonGraphs === "function") {
        initLessonGraphs(lessonContent);
    }

    const openTopicQuizBtn = document.getElementById("open-topic-quiz");
    if (openTopicQuizBtn) {
        const hasQuiz =
            typeof quizzes !== "undefined" &&
            Array.isArray(quizzes[topic]) &&
            quizzes[topic].length > 0;
        openTopicQuizBtn.hidden = !hasQuiz;
        openTopicQuizBtn.onclick = function () {
            selectQuizTopic(topic);
            jumpToPractice();
        };
    }

    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetClear([lessonContent]);
        MathJax.typesetPromise([lessonContent]).catch(function (err) {
            console.error("MathJax rendering error:", err);
        });
    }

    if (shouldScroll) {
        lessonView.scrollIntoView({ behavior: "smooth" });
    }
}

// Event delegation for step reveals, decision helpers, and quick-check quizzes inside lessons
if (lessonContent) {
    lessonContent.addEventListener("click", function (e) {
        // 1. Progressive Step-Reveal buttons
        const stepBtn = e.target.closest(".step-btn[data-reveal-next]");
        if (stepBtn) {
            const group = stepBtn.dataset.revealNext;
            const box = lessonContent.querySelector(`[data-step-group="${group}"]`);
            if (!box) return;
            const hiddenSteps = box.querySelectorAll(".step-item.step-hidden");
            const totalSteps = box.querySelectorAll(".step-item").length;

            if (hiddenSteps.length > 0) {
                hiddenSteps[0].classList.remove("step-hidden");
                const revealedCount = totalSteps - (hiddenSteps.length - 1);
                if (hiddenSteps.length - 1 === 0) {
                    stepBtn.textContent = `All ${totalSteps} Steps Revealed ✓`;
                    stepBtn.disabled = true;
                } else {
                    stepBtn.textContent = `Reveal Next Step (${revealedCount} / ${totalSteps})`;
                }
            }
            return;
        }

        // 2. Rule Decision Helper tabs
        const dhBtn = e.target.closest(".dh-btn[data-case]");
        if (dhBtn) {
            const helper = dhBtn.closest(".decision-helper");
            const targetCase = dhBtn.dataset.case;
            if (!helper) return;
            helper.querySelectorAll(".dh-btn").forEach(function (b) {
                b.classList.toggle("active", b === dhBtn);
            });
            helper.querySelectorAll(".dh-panel").forEach(function (panel) {
                panel.classList.toggle("active", panel.id === targetCase);
            });
            return;
        }

        // 3. Embedded "Your Turn" Quick Check buttons
        const qcBtn = e.target.closest(".qc-btn[data-idx]");
        if (qcBtn) {
            const qcBox = qcBtn.closest(".quick-check");
            if (!qcBox || qcBox.dataset.answered === "true") return;
            qcBox.dataset.answered = "true";

            const chosenIdx = parseInt(qcBtn.dataset.idx, 10);
            const correctIdx = parseInt(qcBox.dataset.answer, 10);
            const explanation = qcBox.dataset.explanation || "";
            const feedbackEl = qcBox.querySelector(".qc-feedback");

            qcBox.querySelectorAll(".qc-btn").forEach(function (btn) {
                const idx = parseInt(btn.dataset.idx, 10);
                btn.disabled = true;
                if (idx === correctIdx) btn.classList.add("correct");
                else if (idx === chosenIdx) btn.classList.add("wrong");
            });

            if (feedbackEl) {
                const isRight = chosenIdx === correctIdx;
                feedbackEl.innerHTML = `${isRight ? "<strong>✓ Correct!</strong>" : "<strong>✕ Not quite.</strong>"} ${explanation}`;
                if (window.MathJax && window.MathJax.typesetPromise) {
                    MathJax.typesetPromise([feedbackEl]).catch(function () {});
                }
            }
        }
    });
}

exploreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        setActiveNav("#topics");
        const selectedTopic = button.dataset.topic;
        const topicLessons = getTopicLessons(selectedTopic);

        const firstUnfinished = topicLessons.findIndex(function (item) {
            return !completedSubtopics.has(item.id);
        });

        openLesson(
            selectedTopic,
            firstUnfinished !== -1 ? firstUnfinished : 0,
            true
        );
    });
});

prevLessonButton.addEventListener("click", function () {
    if (currentTopic && currentLessonIndex > 0) {
        openLesson(currentTopic, currentLessonIndex - 1, true);
    }
});

nextLessonButton.addEventListener("click", function () {
    const topicLessons = getTopicLessons(currentTopic);
    if (currentTopic && currentLessonIndex < topicLessons.length - 1) {
        openLesson(currentTopic, currentLessonIndex + 1, true);
    }
});


// ======================================
// 4. MARK SUBTOPIC AS COMPLETED
// ======================================

completeButton.addEventListener("click", function () {
    const topicLessons = getTopicLessons(currentTopic);
    const activeLesson = topicLessons[currentLessonIndex];

    if (!activeLesson) return;

    completedSubtopics.add(activeLesson.id);

    localStorage.setItem(
        "engilearnCompletedSubtopics",
        JSON.stringify([...completedSubtopics])
    );

    updateProgress();
    renderSubtopicNav(currentTopic, currentLessonIndex);

    completeButton.textContent = "Subtopic completed ✓";
    completeButton.disabled = true;

    lessonStatus.textContent =
        "Excellent work! Your progress for this subtopic has been saved.";
});


// ======================================
// 5. RETURN TO MATHEMATICS TOPICS
// ======================================

backButton.addEventListener("click", function () {
    lessonView.hidden = true;
    setActiveNav("#topics");

    document.getElementById("topics").scrollIntoView({
        behavior: "smooth"
    });
});


// ======================================
// 6. SEARCH TOPICS & SUBTOPICS
// ======================================

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        topicCards.forEach(function (card) {
            const topicName = card.dataset.name;
            const matchesTopic = topicName.toLowerCase().includes(searchValue);

            const matchesSubtopic = getTopicLessons(topicName).some(function (item) {
                return item.title.toLowerCase().includes(searchValue);
            });

            card.style.display =
                matchesTopic || matchesSubtopic ? "block" : "none";
        });
    });
}


// ======================================
// 7. PRACTICE QUIZ ENGINE
// ======================================

const practiceStatValue = document.getElementById("practice-stat-value");
const practiceStatSub = document.getElementById("practice-stat-sub");

const quizTopicTabs = document.getElementById("quiz-topic-tabs");
const quizLessonFilters = document.getElementById("quiz-lesson-filters");
const quizCard = document.getElementById("quiz-card");
const quizProgressLabel = document.getElementById("quiz-progress-label");
const quizLessonTag = document.getElementById("quiz-lesson-tag");
const quizScoreLabel = document.getElementById("quiz-score-label");
const quizProgressFill = document.getElementById("quiz-progress-fill");
const quizQuestionText = document.getElementById("quiz-question-text");
const quizOptionsContainer = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizFeedbackTitle = document.getElementById("quiz-feedback-title");
const quizExplanation = document.getElementById("quiz-explanation");
const quizPrevBtn = document.getElementById("quiz-prev-btn");
const quizNextBtn = document.getElementById("quiz-next-btn");
const quizRestartBtn = document.getElementById("quiz-restart-btn");

const quizSummary = document.getElementById("quiz-summary");
const quizFinalScore = document.getElementById("quiz-final-score");
const quizFinalMessage = document.getElementById("quiz-final-message");
const quizReviewBtn = document.getElementById("quiz-review-btn");
const quizRetakeBtn = document.getElementById("quiz-retake-btn");

let savedQuizScores = JSON.parse(
    localStorage.getItem("engilearnQuizScores") || "{}"
);

const availableQuizzes = typeof quizzes !== "undefined" ? quizzes : {};
let activeQuizTopic = "Algebra";
let activeLessonFilter = "All";
let filteredQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};

function updatePracticeStats() {
    const totalQuestions = Object.values(availableQuizzes).reduce(function (sum, arr) {
        return sum + (Array.isArray(arr) ? arr.length : 0);
    }, 0);

    if (practiceStatValue) {
        practiceStatValue.textContent = String(totalQuestions).padStart(2, "0");
    }

    const attemptedEntries = Object.entries(savedQuizScores);
    if (practiceStatSub) {
        if (attemptedEntries.length === 0) {
            practiceStatSub.textContent = "Best score: Not attempted";
        } else {
            const bestOverall = Math.max(...attemptedEntries.map(([, score]) => score));
            practiceStatSub.textContent = `Best score: ${bestOverall}% (${attemptedEntries.length} topic${attemptedEntries.length > 1 ? "s" : ""})`;
        }
    }
}

function typesetQuizMath() {
    if (window.MathJax && window.MathJax.typesetPromise && quizCard) {
        MathJax.typesetClear([quizCard]);
        MathJax.typesetPromise([quizCard]).catch(function (err) {
            console.error("MathJax quiz rendering error:", err);
        });
    }
}

function renderQuizTopicTabs() {
    if (!quizTopicTabs) return;
    quizTopicTabs.innerHTML = "";

    Object.keys(availableQuizzes).forEach(function (topic) {
        const count = availableQuizzes[topic].length;
        const tab = document.createElement("button");
        tab.type = "button";
        tab.className = "subtopic-pill";

        if (topic === activeQuizTopic) {
            tab.classList.add("active");
        }

        tab.disabled = count === 0;
        tab.textContent = count > 0
            ? `${topic} (${count})`
            : `${topic} (Soon)`;

        tab.addEventListener("click", function () {
            selectQuizTopic(topic);
        });

        quizTopicTabs.appendChild(tab);
    });
}

function renderQuizLessonFilters() {
    if (!quizLessonFilters) return;
    const allTopicQuestions = availableQuizzes[activeQuizTopic] || [];
    const tags = ["All", ...new Set(allTopicQuestions.map(function (q) {
        return q.lessonTag;
    }))];

    quizLessonFilters.innerHTML = "";

    tags.forEach(function (tag) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter-chip";
        if (tag === activeLessonFilter) {
            btn.classList.add("active");
        }
        btn.textContent = tag === "All" ? "All Subtopics" : tag;

        btn.addEventListener("click", function () {
            activeLessonFilter = tag;
            startFilteredQuiz();
        });

        quizLessonFilters.appendChild(btn);
    });
}

function selectQuizTopic(topic) {
    if (!availableQuizzes[topic] || availableQuizzes[topic].length === 0) return;
    activeQuizTopic = topic;
    activeLessonFilter = "All";
    startFilteredQuiz();
}

function startFilteredQuiz() {
    const allTopicQuestions = availableQuizzes[activeQuizTopic] || [];
    filteredQuestions = activeLessonFilter === "All"
        ? allTopicQuestions
        : allTopicQuestions.filter(function (q) {
            return q.lessonTag === activeLessonFilter;
        });

    currentQuestionIndex = 0;
    userAnswers = {};
    if (quizSummary) quizSummary.hidden = true;
    if (quizCard) quizCard.hidden = false;

    renderQuizTopicTabs();
    renderQuizLessonFilters();
    renderCurrentQuestion();
}

function calculateScore() {
    let correct = 0;
    let answered = 0;

    filteredQuestions.forEach(function (q) {
        if (userAnswers[q.id] !== undefined) {
            answered++;
            if (userAnswers[q.id] === q.correctIndex) {
                correct++;
            }
        }
    });

    return { correct, answered, total: filteredQuestions.length };
}

function renderCurrentQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    if (!question) return;

    const { correct, answered, total } = calculateScore();
    const selectedChoice = userAnswers[question.id];
    const hasAnswered = selectedChoice !== undefined;

    quizProgressLabel.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
    quizLessonTag.textContent = question.lessonTag;
    quizScoreLabel.textContent = `Score: ${correct} / ${answered}`;

    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    quizQuestionText.innerHTML = question.question;
    quizOptionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.options.forEach(function (optionText, index) {
        const optionBtn = document.createElement("button");
        optionBtn.type = "button";
        optionBtn.className = "quiz-option-btn";
        optionBtn.disabled = hasAnswered;

        if (hasAnswered) {
            if (index === question.correctIndex) {
                optionBtn.classList.add("correct");
            } else if (index === selectedChoice) {
                optionBtn.classList.add("incorrect");
            }
        }

        optionBtn.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-content">${optionText}</span>
        `;

        optionBtn.addEventListener("click", function () {
            handleOptionSelect(index);
        });

        quizOptionsContainer.appendChild(optionBtn);
    });

    if (hasAnswered) {
        const isCorrect = selectedChoice === question.correctIndex;
        quizFeedback.hidden = false;
        quizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
        quizFeedbackTitle.textContent = isCorrect
            ? "✓ Correct!"
            : `✕ Incorrect — Correct answer: ${letters[question.correctIndex]}`;
        quizExplanation.innerHTML = question.explanation;
    } else {
        quizFeedback.hidden = true;
    }

    quizPrevBtn.disabled = currentQuestionIndex === 0;
    quizNextBtn.textContent = currentQuestionIndex === total - 1
        ? "Finish Quiz ✓"
        : "Next Question →";

    typesetQuizMath();
}

function handleOptionSelect(selectedIndex) {
    const question = filteredQuestions[currentQuestionIndex];
    if (!question || userAnswers[question.id] !== undefined) return;

    userAnswers[question.id] = selectedIndex;
    renderCurrentQuestion();
}

function showQuizSummary() {
    const { correct, total } = calculateScore();
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    if (activeLessonFilter === "All") {
        const prevBest = savedQuizScores[activeQuizTopic] || 0;
        if (percentage >= prevBest) {
            savedQuizScores[activeQuizTopic] = percentage;
            localStorage.setItem(
                "engilearnQuizScores",
                JSON.stringify(savedQuizScores)
            );
            updatePracticeStats();
        }
    }

    quizCard.hidden = true;
    quizSummary.hidden = false;

    quizFinalScore.textContent = `You scored ${correct} / ${total} (${percentage}%)`;

    if (percentage >= 80) {
        quizFinalMessage.textContent =
            `Outstanding command of ${activeQuizTopic}! You're ready for advanced engineering problems.`;
    } else if (percentage >= 50) {
        quizFinalMessage.textContent =
            "Solid foundation! Review the worked solutions for any missed questions to lock in full marks.";
    } else {
        quizFinalMessage.textContent =
            "Good warm-up—revisit the lesson examples above and retake the quiz to boost your score.";
    }
}

quizPrevBtn.addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
    }
});

quizNextBtn.addEventListener("click", function () {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
    } else {
        showQuizSummary();
    }
});

quizRestartBtn.addEventListener("click", function () {
    startFilteredQuiz();
});

quizReviewBtn.addEventListener("click", function () {
    quizSummary.hidden = true;
    quizCard.hidden = false;
    currentQuestionIndex = 0;
    renderCurrentQuestion();
});

quizRetakeBtn.addEventListener("click", function () {
    startFilteredQuiz();
});

updatePracticeStats();
startFilteredQuiz();


// ======================================
// 8. SIDEBAR ACTIVE TAB, GLIDER & GRAPHING VIEW
// ======================================

const sidebarNav = document.querySelector(".sidebar nav");
const navLinks = document.querySelectorAll(".nav-link");
const heroButton = document.querySelector(".hero-button");
const practiceStatCard =
    document.getElementById("practise-stat-card") ||
    document.getElementById("practice-stat-card");
const practiceSection = document.getElementById("practice");
const topicsSection = document.getElementById("topics");
const graphSection = document.getElementById("graph");

function openGraphView() {
    if (!graphSection) return;
    lockScrollSpy();
    if (lessonView) lessonView.hidden = true;
    document.body.classList.add("graph-mode");
    graphSection.hidden = false;
    setActiveNav("#graph");
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (typeof initLessonGraphs === "function") {
        initLessonGraphs(graphSection);
    }

    // Re-measure and redraw HiDPI canvas once #graph becomes visible
    requestAnimationFrame(function () {
        window.dispatchEvent(new Event("resize"));
    });
}

function closeGraphView() {
    if (!graphSection) return;
    document.body.classList.remove("graph-mode");
    graphSection.hidden = true;
}

let navGlider = null;
if (sidebarNav) {
    navGlider = document.createElement("div");
    navGlider.className = "nav-glider";
    sidebarNav.prepend(navGlider);
}

let isProgrammaticScroll = false;
let scrollUnlockTimer = null;

function lockScrollSpy() {
    isProgrammaticScroll = true;
    clearTimeout(scrollUnlockTimer);
    scrollUnlockTimer = setTimeout(function () {
        isProgrammaticScroll = false;
    }, 900);
}

function moveGliderTo(link) {
    if (!navGlider || !link || link.offsetHeight === 0) return;
    navGlider.style.transform = `translateY(${link.offsetTop}px)`;
    navGlider.style.height = `${link.offsetHeight}px`;
}

function setActiveNav(targetHref) {
    let matchedLink = null;

    navLinks.forEach(function (link) {
        const isMatch = link.getAttribute("href") === targetHref;
        link.classList.toggle("active", isMatch);
        if (isMatch) {
            matchedLink = link;
        }
    });

    if (matchedLink) {
        moveGliderTo(matchedLink);
    }
}

function jumpToPractice() {
    closeGraphView();
    if (lessonView) lessonView.hidden = true;
    lockScrollSpy();
    setActiveNav("#practice");

    if (typeof quizSummary !== "undefined" && typeof quizCard !== "undefined") {
        if (quizCard.hidden && filteredQuestions.length > 0) {
            quizSummary.hidden = true;
            quizCard.hidden = false;
        }
    }

    if (practiceSection) {
        practiceSection.hidden = false;
        practiceSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

if (practiceStatCard) {
    practiceStatCard.addEventListener("click", jumpToPractice);
    practiceStatCard.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            jumpToPractice();
        }
    });
}

if (heroButton) {
    heroButton.addEventListener("click", function (e) {
        e.preventDefault();
        closeGraphView();
        if (lessonView) lessonView.hidden = true;
        lockScrollSpy();
        setActiveNav("#topics");
        if (topicsSection) {
            topicsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (href === "#graph") {
            e.preventDefault();
            openGraphView();
            return;
        }

        closeGraphView();
        if (lessonView) lessonView.hidden = true;
        lockScrollSpy();
        setActiveNav(href);

        if (href === "#") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (href === "#practice") {
            e.preventDefault();
            jumpToPractice();
        } else {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

window.addEventListener("scroll", function () {
    if (isProgrammaticScroll || document.body.classList.contains("graph-mode")) return;

    const triggerLine = window.innerHeight * 0.35;

    if (practiceSection && practiceSection.getBoundingClientRect().top <= triggerLine) {
        setActiveNav("#practice");
    } else if (topicsSection && topicsSection.getBoundingClientRect().top <= triggerLine) {
        setActiveNav("#topics");
    } else if (window.scrollY < 200) {
        setActiveNav("#");
    }
}, { passive: true });

const initialActive = document.querySelector(".nav-link.active");
if (initialActive) {
    moveGliderTo(initialActive);
}
window.addEventListener("resize", function () {
    const currentActive = document.querySelector(".nav-link.active");
    if (currentActive) {
        moveGliderTo(currentActive);
    }
});