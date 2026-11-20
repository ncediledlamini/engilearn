// ======================================
// ALGEBRA CURRICULUM (MATH1041A & MATH1043)
// ======================================

const algebraLessons = [

    // ==================================
    // LESSON 1: POLYNOMIALS, FACTORING & PARTIAL FRACTIONS (1.1 - 1.7)
    // ==================================
    {
        id: "alg-01-polynomials-partial-fractions",
        title: "Lesson 1: Polynomials, Factoring & Partial Fractions",
        description:
            "1.1 Polynomial Structure • 1.2 Long Division • 1.3 Factoring • 1.4 Completing the Square • 1.5 Remainder & Factor Theorems • 1.6 Partial Fractions • 1.7 Improper Fractions",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 1 Overview & Learning Objectives</h3>
                <p>Polynomials are the algebraic backbone of calculus—nearly every limit, curve sketch, and rational integral relies on breaking complex expressions into simpler pieces:</p>
                <ul>
                    <li><strong>1.1–1.2</strong> Identify polynomial degree and perform long division safely when terms are missing.</li>
                    <li><strong>1.3–1.5</strong> Use the Remainder and Factor Theorems alongside grouping and cube identities to factor higher-degree polynomials.</li>
                    <li><strong>1.4</strong> Complete the square when $a \neq 1$ to locate vertices and prepare integrals for $\arctan$ substitutions.</li>
                    <li><strong>1.6–1.7</strong> Split proper and improper rational functions into partial fractions.</li>
                </ul>
            </div>

            <!-- 1.1 & 1.2 -->
            <h3>1.1–1.2 Polynomial Structure & Long Division</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Dividing two polynomials works identically to primary-school long division with numbers: you repeatedly match the <em>leading term</em>, multiply back, and subtract until the leftover remainder has a smaller degree than the divisor.</p>
            </div>
            <p>
                A <strong>polynomial</strong> of degree $n$ ($n \in \mathbb{N}_0$) has the form $P(x) = a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0$ with $a_n \neq 0$ and non-negative integer exponents. Dividing $P(x)$ by a non-zero divisor $D(x)$ produces a unique quotient $Q(x)$ and remainder $R(x)$:
            </p>
            <div class="math-example">
                <div class="math-equation">
                    $$P(x) = D(x)Q(x) + R(x) \quad \Longleftrightarrow \quad \frac{P(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}, \qquad \deg(R) < \deg(D)$$
                </div>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Missing Power Placeholders:</strong> If a polynomial skips a power (like $2x^4 - 5x^2 + 3x - 7$, which has no $x^3$ term), you <strong>must</strong> insert $+ 0x^3$ before dividing. Skipping placeholders misaligns every column underneath.</p>
            </div>

            <div class="math-example" data-step-group="alg-1-2">
                <p><strong>Worked Example 1.2:</strong> Divide $P(x) = 2x^4 - 5x^2 + 3x - 7$ by $D(x) = x - 2$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Missing $x^3$ term $\implies$ insert $0x^3$ and divide leading terms</span>
                    <p>Match $2x^4 \div x = 2x^3$, multiply $2x^3(x - 2) = 2x^4 - 4x^3$, and subtract carefully:</p>
                    <div class="math-equation">
                        $$(2x^4 + 0x^3) - (2x^4 - 4x^3) = +4x^3 \implies \text{bring down } -5x^2 \text{ to get } 4x^3 - 5x^2$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Remainder degree ($3$) $\ge$ divisor degree ($1$) $\implies$ repeat</span>
                    <p>Continue matching leading terms ($4x^3 \div x = 4x^2$, then $3x^2 \div x = 3x$, then $9x \div x = 9$):</p>
                    <div class="math-equation">
                        $$\begin{aligned}
                        (4x^3 - 5x^2) - (4x^3 - 8x^2) &= 3x^2 \implies \text{bring down } +3x \\
                        (3x^2 + 3x) - (3x^2 - 6x) &= 9x \implies \text{bring down } -7 \\
                        (9x - 7) - (9x - 18) &= 11 \quad (\text{degree } 0 < 1, \text{ stop})
                        \end{aligned}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Write in quotient + remainder fraction form</span>
                    <div class="math-equation">
                        $$\frac{2x^4 - 5x^2 + 3x - 7}{x - 2} = 2x^3 + 4x^2 + 3x + 9 + \frac{11}{x - 2}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-1-2">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Insert $0x^2$ to write $x^3 + 0x^2 - 3x + 5$. Dividing by $x + 2$ yields quotient $x^2 - 2x + 1$ and remainder $3$ (verified by $P(-2) = (-2)^3 - 3(-2) + 5 = 3$). Option C ($15$) comes from forgetting the $0x^2$ placeholder.">
                <p><strong>Your Turn (Quick Check 1.2):</strong> What is the remainder when $x^3 - 3x + 5$ is divided by $x + 2$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$7$</button>
                    <button type="button" class="qc-btn" data-idx="1">$3$</button>
                    <button type="button" class="qc-btn" data-idx="2">$15$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 1.3 & 1.5 -->
            <h3>1.3 & 1.5 Remainder Theorem, Factor Theorem & Cubic Factoring</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Long division gives you the full quotient, but if you only want the <em>remainder</em> after dividing by $(x - a)$, plugging $x = a$ straight into $P(x)$ makes $D(a)Q(a) = 0 \cdot Q(a) = 0$, leaving $P(a) = R$ instantly.</p>
            </div>
            <div class="math-example">
                <ul>
                    <li><strong>Remainder Theorem:</strong> When $P(x)$ is divided by $(x - a)$, the remainder is $R = P(a)$. (For linear divisor $bx - a$, $R = P\left(\frac{a}{b}\right)$.)</li>
                    <li><strong>Factor Theorem:</strong> $(x - a)$ is a factor of $P(x)$ if and only if $P(a) = 0$.</li>
                </ul>
                <details class="refresher-pill">
                    <summary>Need a refresher on Sum/Difference of Cubes & Rational Root candidates?</summary>
                    <p><strong>Cubes (SOAP sign pattern — Same, Opposite, Always Positive):</strong></p>
                    <div class="math-equation">
                        $$a^3 + b^3 = (a + b)(a^2 - ab + b^2), \qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
                    </div>
                    <p><strong>Rational Root Candidates:</strong> Any rational root $\frac{p}{q}$ of $a_n x^n + \dots + a_0 = 0$ must have $p \mid a_0$ (factors of constant term) and $q \mid a_n$ (factors of leading coefficient).</p>
                </details>
            </div>

            <div class="math-example" data-step-group="alg-1-5">
                <p><strong>Worked Example 1.5:</strong> Factorize $P(x) = 2x^3 - 3x^2 - 11x + 6$ completely.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Degree 3 with no common factor $\implies$ hunt for one root via Factor Theorem</span>
                    <p>Test factors of $6$ ($\pm 1, \pm 2, \pm 3$): $P(1) = -6 \neq 0$, so try $x = -2$:</p>
                    <div class="math-equation">
                        $$P(-2) = 2(-2)^3 - 3(-2)^2 - 11(-2) + 6 = -16 - 12 + 22 + 6 = 0 \implies (x + 2) \text{ is a factor}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: One linear factor known $\implies$ divide to reduce cubic to a quadratic</span>
                    <p>Divide $2x^3 - 3x^2 - 11x + 6$ by $(x + 2)$ to get the quadratic quotient:</p>
                    <div class="math-equation">
                        $$P(x) = (x + 2)(2x^2 - 7x + 3)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Quadratic factor remains $\implies$ factorize into linear brackets</span>
                    <div class="math-equation">
                        $$P(x) = (x + 2)(2x - 1)(x - 3)$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-1-5">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="By the Remainder Theorem, dividing by $(x - 2)$ means evaluating $P(2)$: $2^3 + k(2)^2 - 5(2) + 6 = 4k + 4$. Setting $4k + 4 = 12$ gives $4k = 8 \implies k = 2$. Choosing $k = 1$ comes from mistakenly plugging in $x = -2$.">
                <p><strong>Your Turn (Quick Check 1.5):</strong> When $P(x) = x^3 + kx^2 - 5x + 6$ is divided by $(x - 2)$, the remainder is $12$. Find $k$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$k = 2$</button>
                    <button type="button" class="qc-btn" data-idx="1">$k = 1$</button>
                    <button type="button" class="qc-btn" data-idx="2">$k = -2$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 1.4 -->
            <h3>1.4 Completing the Square ($a \neq 1$)</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A quadratic $ax^2 + bx + c$ has $x$ trapped in two places. Completing the square repackages $x$ inside a single squared bracket $a(x - h)^2 + k$ so you can read off the turning point $(h, k)$ immediately—and later integrate expressions like $\frac{1}{ax^2 + bx + c}$ using $\arctan$.</p>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Factoring Out $a$ First:</strong> Never add $\left(\frac{b}{2}\right)^2$ while $a \neq 1$ is still attached to $x^2$. Always factor $a$ out of the $x^2$ and $x$ terms first, and remember that any constant you add/subtract <em>inside</em> the bracket gets multiplied by $a$ when pulled outside.</p>
            </div>

            <div class="math-example" data-step-group="alg-1-4">
                <p><strong>Worked Example 1.4:</strong> Write $f(x) = -2x^2 + 12x - 13$ in vertex form $a(x - h)^2 + k$ and find its maximum value.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Leading coefficient $a = -2 \neq 1$ $\implies$ factor $-2$ from $x^2$ and $x$ terms only</span>
                    <div class="math-equation">
                        $$f(x) = -2(x^2 - 6x) - 13$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Inside coefficient is $-6$ $\implies$ add and subtract $\left(\frac{-6}{2}\right)^2 = 9$ inside the bracket</span>
                    <div class="math-equation">
                        $$f(x) = -2\big[(x^2 - 6x + 9) - 9\big] - 13 = -2(x - 3)^2 + (-2)(-9) - 13$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Simplify outer constants and read vertex $(h, k)$</span>
                    <div class="math-equation">
                        $$f(x) = -2(x - 3)^2 + 5$$
                    </div>
                    <p>Since $a = -2 < 0$, the parabola opens downward with vertex $(3, 5)$ and <strong>maximum value $5$</strong> at $x = 3$.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-1-4">Reveal Next Step (1 / 3)</button>
            </div>
            <div class="graph-widget" data-graph="quadratic-vertex"></div>

            <!-- 1.6 & 1.7 -->
            <h3>1.6–1.7 Partial Fractions (Proper & Improper)</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Partial fractions is simply <em>adding fractions in reverse</em>. Instead of combining $\frac{2}{x - 1} + \frac{1}{x + 2}$ over a common denominator, you start with the combined fraction and split it back into simple building blocks that are easy to integrate.</p>
            </div>

            <div class="decision-helper" data-helper="pf-chooser">
                <p><strong>Rule Chooser — What does your denominator look like? (Click a case):</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="pf-1">1. Improper ($\deg T \ge \deg B$)</button>
                    <button type="button" class="dh-btn" data-case="pf-2">2. Distinct Linear $(x - a)(x - b)$</button>
                    <button type="button" class="dh-btn" data-case="pf-3">3. Repeated Linear $(x - a)^2$</button>
                    <button type="button" class="dh-btn" data-case="pf-4">4. Irreducible Quadratic $(x^2 + bx + c)$</button>
                </div>
                <div class="dh-panel active" id="pf-1">
                    <strong>First Move:</strong> Do <strong>Polynomial Long Division</strong> first! Split $\frac{T(x)}{B(x)} = Q(x) + \frac{R(x)}{B(x)}$, then apply partial fractions only to the proper remainder $\frac{R(x)}{B(x)}$.
                </div>
                <div class="dh-panel" id="pf-2">
                    <strong>Template:</strong> $\dfrac{P(x)}{(x - a)(x - b)} = \dfrac{A}{x - a} + \dfrac{B}{x - b}$  (each linear factor gets a single constant numerator).
                </div>
                <div class="dh-panel" id="pf-3">
                    <strong>Template:</strong> $\dfrac{P(x)}{(x - a)^2} = \dfrac{A}{x - a} + \dfrac{B}{(x - a)^2}$  (build up powers from $1$ to $k$; omitting $\frac{A}{x - a}$ makes the system unsolvable).
                </div>
                <div class="dh-panel" id="pf-4">
                    <strong>Template:</strong> When $b^2 - 4ac < 0$ (cannot factor over $\mathbb{R}$), use a <strong>linear numerator</strong> $Bx + C$: $\dfrac{P(x)}{(x - a)(x^2 + bx + c)} = \dfrac{A}{x - a} + \dfrac{Bx + C}{x^2 + bx + c}$.
                </div>
            </div>

            <div class="math-example" data-step-group="alg-1-6">
                <p><strong>Worked Example 1.6 (Proper — Linear + Irreducible Quadratic):</strong> Decompose $\dfrac{3x^2 - 4x + 5}{(x - 1)(x^2 + 1)}$ into partial fractions.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: $\deg(T) = 2 < \deg(B) = 3$ (proper) and $\Delta_{x^2+1} = -4 < 0$ $\implies$ use $A$ and $Bx + C$</span>
                    <div class="math-equation">
                        $$\frac{3x^2 - 4x + 5}{(x - 1)(x^2 + 1)} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + 1}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Multiply through by $(x - 1)(x^2 + 1)$ to clear all fractions</span>
                    <div class="math-equation">
                        $$3x^2 - 4x + 5 = A(x^2 + 1) + (Bx + C)(x - 1)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Substitute root $x = 1$ first to isolate $A$, then match coefficients for $B$ and $C$</span>
                    <div class="math-equation">
                        $$\begin{aligned}
                        \text{Set } x = 1: &\quad 3(1) - 4(1) + 5 = A(2) + 0 \implies 4 = 2A \implies A = 2 \\
                        \text{Equate } x^2: &\quad 3 = A + B \implies 3 = 2 + B \implies B = 1 \\
                        \text{Set } x = 0: &\quad 5 = A(1) + C(-1) \implies 5 = 2 - C \implies C = -3
                        \end{aligned}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 4 • Trigger: Substitute $A, B, C$ back into the original template</span>
                    <div class="math-equation">
                        $$\frac{3x^2 - 4x + 5}{(x - 1)(x^2 + 1)} = \frac{2}{x - 1} + \frac{x - 3}{x^2 + 1}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-1-6">Reveal Next Step (1 / 4)</button>
            </div>

            <div class="math-example" data-step-group="alg-1-7">
                <p><strong>Worked Example 1.7 (Improper Fraction):</strong> Express $\dfrac{x^3 + 2x^2 - x + 1}{x^2 + x - 2}$ in partial fractions.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: $\deg(T) = 3 \ge \deg(B) = 2$ (improper!) $\implies$ perform polynomial long division first</span>
                    <div class="math-equation">
                        $$\frac{x^3 + 2x^2 - x + 1}{x^2 + x - 2} = (x + 1) + \frac{3}{x^2 + x - 2}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Factor denominator $x^2 + x - 2 = (x + 2)(x - 1)$ and decompose proper remainder</span>
                    <div class="math-equation">
                        $$\frac{3}{(x + 2)(x - 1)} = \frac{A}{x + 2} + \frac{B}{x - 1} \implies 3 = A(x - 1) + B(x + 2)$$
                    </div>
                    <p>Setting $x = 1 \implies 3 = 3B \implies B = 1$; setting $x = -2 \implies 3 = -3A \implies A = -1$.</p>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Combine the polynomial quotient with the partial fractions</span>
                    <div class="math-equation">
                        $$\frac{x^3 + 2x^2 - x + 1}{x^2 + x - 2} = x + 1 - \frac{1}{x + 2} + \frac{1}{x - 1}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-1-7">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="2" data-explanation="Because $x^2 + 4$ has discriminant $\Delta = -16 < 0$ (irreducible quadratic), its numerator must be linear ($Cx + D$), while the repeated factor $(x - 3)^2$ requires both $\frac{A}{x - 3}$ and $\frac{B}{(x - 3)^2}$.">
                <p><strong>Your Turn (Quick Check 1.6):</strong> Which partial-fraction template is required for $\dfrac{5x + 1}{(x - 3)^2(x^2 + 4)}$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\dfrac{A}{(x - 3)^2} + \dfrac{B}{x^2 + 4}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\dfrac{A}{x - 3} + \dfrac{B}{(x - 3)^2} + \dfrac{C}{x^2 + 4}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\dfrac{A}{x - 3} + \dfrac{B}{(x - 3)^2} + \dfrac{Cx + D}{x^2 + 4}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 2: TRIGONOMETRY, IDENTITIES & POLAR CO-ORDINATES (2.1 - 2.4)
    // ==================================
    {
        id: "alg-02-trigonometry-polar",
        title: "Lesson 2: Trigonometry, Identities & Polar Co-ordinates",
        description:
            "2.1 Compound & Double-Angle Identities • 2.2 Proving Trig Identities • 2.3 General Solutions of Trig Equations • 2.4 Polar Co-ordinates & Curves",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 2 Overview & Learning Objectives</h3>
                <p>This lesson equips you to simplify trigonometric expressions, solve general periodic equations, and switch between Cartesian and polar co-ordinates:</p>
                <ul>
                    <li><strong>2.1–2.2</strong> Apply compound-angle, double-angle, and half-angle identities to rewrite expressions and prove identities.</li>
                    <li><strong>2.3</strong> Solve trigonometric equations over $\mathbb{R}$ using principal angles, quadrant symmetry, and periodicity.</li>
                    <li><strong>2.4</strong> Convert points and equations between Cartesian $(x, y)$ and polar $(r, \theta)$ forms and sketch rose/cardioid curves.</li>
                </ul>
            </div>

            <!-- 2.1 & 2.2 -->
            <h3>2.1–2.2 Compound, Double & Half-Angle Identities</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Calculus struggles with squared trig functions like $\sin^2 x$ or $\cos^2 x$, but integrates linear terms like $\cos(2x)$ effortlessly. Double- and half-angle identities are your algebraic "power-reducers" that trade exponents for doubled angles.</p>
            </div>
            <div class="graph-widget" data-graph="trig-explorer"></div>

            <div class="math-example">
                <div class="math-equation">
                    $$\begin{aligned}
                    \sin(A \pm B) &= \sin A\cos B \pm \cos A\sin B, & \cos(A \pm B) &= \cos A\cos B \mp \sin A\sin B \\
                    \sin(2\theta) &= 2\sin\theta\cos\theta, & \cos(2\theta) &= \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta \\
                    \sin^2\theta &= \frac{1 - \cos(2\theta)}{2}, & \cos^2\theta &= \frac{1 + \cos(2\theta)}{2}
                    \end{aligned}$$
                </div>
                <details class="refresher-pill">
                    <summary>Need a refresher on Pythagorean Identities & CAST Quadrant Signs?</summary>
                    <p><strong>Pythagorean Identities:</strong> $\sin^2\theta + \cos^2\theta = 1$,  $1 + \tan^2\theta = \sec^2\theta$,  $1 + \cot^2\theta = \csc^2\theta$.</p>
                    <p><strong>CAST Rule (Positive Functions):</strong> Q1: <strong>A</strong>ll • Q2 ($180^\circ - \alpha$): <strong>S</strong>ine • Q3 ($180^\circ + \alpha$): <strong>T</strong>an • Q4 ($360^\circ - \alpha$): <strong>C</strong>osine.</p>
                </details>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Never Distribute Functions Over Brackets:</strong> $\sin(A + B) \neq \sin A + \sin B$ and $\cos(2\theta) \neq 2\cos\theta$. Likewise, when proving an identity, work on <strong>one side independently</strong> until it matches the other—never cross-multiply across an equals sign you haven't proved yet.</p>
            </div>

            <div class="math-example" data-step-group="alg-2-1">
                <p><strong>Worked Example 2.1:</strong> Prove the identity $\dfrac{\sin(2x)}{1 + \cos(2x)} = \tan x$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Double angles on LHS $\implies$ expand $\sin(2x)$ and choose $\cos(2x) = 2\cos^2 x - 1$ to cancel the $+1$</span>
                    <div class="math-equation">
                        $$\text{LHS} = \frac{2\sin x\cos x}{1 + (2\cos^2 x - 1)} = \frac{2\sin x\cos x}{2\cos^2 x}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Common factor $2\cos x$ in top and bottom $\implies$ cancel and convert to $\tan x$</span>
                    <div class="math-equation">
                        $$\text{LHS} = \frac{\sin x}{\cos x} = \tan x = \text{RHS}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-2-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="Using the double-angle formula $\cos(2\theta) = 1 - 2\sin^2\theta$ with $\theta = 3x$ doubles the angle from $3x$ to $6x$, yielding $\cos(6x)$.">
                <p><strong>Your Turn (Quick Check 2.1):</strong> Which single trigonometric expression equals $1 - 2\sin^2(3x)$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\cos(6x)$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\sin(6x)$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\cos(3x)$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 2.3 -->
            <h3>2.3 General Solutions of Trigonometric Equations</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A calculator only gives you <em>one</em> angle (the principal value), yet sine and cosine waves repeat every $2\pi$ radians forever. Finding the general solution means capturing every symmetry angle inside $[0, 2\pi)$ and adding $+ 2\pi k$ ($k \in \mathbb{Z}$) to include every full revolution.</p>
            </div>

            <div class="math-example" data-step-group="alg-2-3">
                <p><strong>Worked Example 2.3:</strong> Find the general solution (in radians) of $2\cos^2 x + \sin x - 1 = 0$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Mixed $\cos^2 x$ and $\sin x$ $\implies$ replace $\cos^2 x = 1 - \sin^2 x$ to get a single-function quadratic</span>
                    <div class="math-equation">
                        $$2(1 - \sin^2 x) + \sin x - 1 = 0 \implies 2\sin^2 x - \sin x - 1 = 0$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Quadratic in $\sin x$ $\implies$ factorize and isolate $\sin x$</span>
                    <div class="math-equation">
                        $$(2\sin x + 1)(\sin x - 1) = 0 \implies \sin x = -\frac{1}{2} \quad \text{or} \quad \sin x = 1$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Find angles in $[0, 2\pi)$ and append $+ 2\pi k$ ($k \in \mathbb{Z}$)</span>
                    <ul>
                        <li>For $\sin x = -\frac{1}{2}$ (Q3 & Q4, ref angle $\frac{\pi}{6}$): $x = \frac{7\pi}{6} + 2\pi k$ or $x = \frac{11\pi}{6} + 2\pi k$.</li>
                        <li>For $\sin x = 1$: $x = \frac{\pi}{2} + 2\pi k \quad (k \in \mathbb{Z})$.</li>
                    </ul>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-2-3">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="As $x$ spans $[0, 2\pi)$, the inner angle $2x$ spans $[0, 4\pi)$ (two full cycles). Since $\sin(2x) = \frac{1}{2}$ occurs twice per cycle, there are $2 \times 2 = 4$ solutions.">
                <p><strong>Your Turn (Quick Check 2.3):</strong> How many solutions does $\sin(2x) = \dfrac{1}{2}$ have on the interval $x \in [0, 2\pi)$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$2$</button>
                    <button type="button" class="qc-btn" data-idx="1">$4$</button>
                    <button type="button" class="qc-btn" data-idx="2">$1$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 2.4 -->
            <h3>2.4 Polar Co-ordinates & Curve Conversions</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Instead of walking right by $x$ and up by $y$, polar co-ordinates $(r, \theta)$ work like radar: rotate through angle $\theta$ from the positive $x$-axis (the polar axis) and walk straight out a distance $r$ from the origin (the pole).</p>
            </div>
            <div class="graph-widget" data-graph="polar-curves"></div>

            <div class="decision-helper" data-helper="polar-chooser">
                <p><strong>Conversion Toolkit — What are you converting? (Click a mode):</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="pol-1">Polar $(r, \theta) \to$ Cartesian $(x, y)$</button>
                    <button type="button" class="dh-btn" data-case="pol-2">Cartesian $(x, y) \to$ Polar $(r, \theta)$</button>
                    <button type="button" class="dh-btn" data-case="pol-3">Rose Curve Petal Rule</button>
                </div>
                <div class="dh-panel active" id="pol-1">
                    <strong>Direct Substitution:</strong> $x = r\cos\theta$ and $y = r\sin\theta$. To convert a polar equation like $r = 4\cos\theta$, multiply both sides by $r$ first to create $r^2 = x^2 + y^2$ and $r\cos\theta = x$.
                </div>
                <div class="dh-panel" id="pol-2">
                    <strong>Pythagoras & Quadrant Check:</strong> $r = \sqrt{x^2 + y^2}$ and $\tan\theta = \frac{y}{x}$. Always check which quadrant $(x, y)$ lies in—if $x < 0$, add $\pi$ to $\arctan(y/x)$.
                </div>
                <div class="dh-panel" id="pol-3">
                    <strong>Petal Count for $r = a\cos(n\theta)$ or $r = a\sin(n\theta)$:</strong> If $n$ is <strong>odd</strong>, the rose has $n$ petals; if $n$ is <strong>even</strong>, the rose has $2n$ petals.
                </div>
            </div>

            <div class="math-example" data-step-group="alg-2-4">
                <p><strong>Worked Example 2.4:</strong> Convert the polar equation $r = 4\cos\theta$ into a Cartesian equation and identify the curve.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: $\cos\theta$ lacks an $r$ factor $\implies$ multiply both sides by $r$</span>
                    <div class="math-equation">
                        $$r^2 = 4r\cos\theta$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Replace $r^2 = x^2 + y^2$ and $r\cos\theta = x$, then complete the square</span>
                    <div class="math-equation">
                        $$x^2 + y^2 = 4x \implies (x^2 - 4x + 4) + y^2 = 4 \implies (x - 2)^2 + y^2 = 4$$
                    </div>
                    <p>This is a <strong>circle</strong> of radius $2$ centered at $(2, 0)$.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-2-4">Reveal Next Step (1 / 2)</button>
            </div>
        `
    },

    // ==================================
    // LESSON 3: SEQUENCES, INDUCTION & THE BINOMIAL THEOREM (3.1 - 3.4)
    // ==================================
    {
        id: "alg-03-sequences-induction-binomial",
        title: "Lesson 3: Sequences, Induction & The Binomial Theorem",
        description:
            "3.1 Arithmetic & Geometric Series • 3.2 Infinite Geometric Series • 3.3 Proof by Mathematical Induction • 3.4 Binomial Theorem & Approximations",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 3 Overview & Learning Objectives</h3>
                <p>This lesson develops discrete summation formulas, rigorous inductive proof structure, and polynomial/rational power series expansions:</p>
                <ul>
                    <li><strong>3.1–3.2</strong> Compute finite arithmetic/geometric sums in sigma notation and test infinite geometric series for convergence.</li>
                    <li><strong>3.3</strong> Structure complete, logically valid proofs by Mathematical Induction.</li>
                    <li><strong>3.4</strong> Expand $(a + b)^n$ for positive integers and approximate $(1 + x)^n$ for rational/negative exponents when $|x| < 1$.</li>
                </ul>
            </div>

            <!-- 3.1 & 3.2 -->
            <h3>3.1–3.2 Arithmetic, Geometric & Infinite Series</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> An <strong>arithmetic</strong> sequence steps by addition ($+d$), whereas a <strong>geometric</strong> sequence scales by multiplication ($\times r$). When $|r| < 1$, multiplying repeatedly shrinks terms toward zero so fast that even infinitely many terms add up to a finite number $S_\infty$.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\begin{aligned}
                    \text{Arithmetic (AP):} &\quad T_n = a + (n - 1)d, \qquad S_n = \frac{n}{2}\big[2a + (n - 1)d\big] = \frac{n}{2}(a + l) \\
                    \text{Geometric (GP):} &\quad T_n = ar^{n-1}, \qquad S_n = \frac{a(1 - r^n)}{1 - r} \quad (r \neq 1), \qquad S_\infty = \frac{a}{1 - r} \quad (|r| < 1)
                    \end{aligned}$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-3-1">
                <p><strong>Worked Example 3.1:</strong> Evaluate the infinite series $\displaystyle\sum_{k=1}^{\infty} 5\left(-\frac{1}{3}\right)^{k-1}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Exponential index $k - 1$ $\implies$ identify $a$ ($k=1$ term) and common ratio $r$</span>
                    <p>When $k = 1$, $a = 5\left(-\frac{1}{3}\right)^0 = 5$, and each step multiplies by $r = -\frac{1}{3}$.</p>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Check $|r| = \frac{1}{3} < 1$ (converges!) $\implies$ apply $S_\infty = \frac{a}{1 - r}$</span>
                    <div class="math-equation">
                        $$S_\infty = \frac{5}{1 - \left(-\frac{1}{3}\right)} = \frac{5}{\frac{4}{3}} = \frac{15}{4}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-3-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Here $a = 12$ and $r = \frac{4}{12} = \frac{1}{3}$. Since $|r| < 1$, $S_\infty = \frac{12}{1 - 1/3} = \frac{12}{2/3} = 18$.">
                <p><strong>Your Turn (Quick Check 3.1):</strong> Find the sum to infinity of the geometric series $12 + 4 + \dfrac{4}{3} + \dots$</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$16$</button>
                    <button type="button" class="qc-btn" data-idx="1">$18$</button>
                    <button type="button" class="qc-btn" data-idx="2">$36$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 3.3 -->
            <h3>3.3 Proof by Mathematical Induction</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Think of an infinite line of dominoes. You don't push every domino by hand—you prove <strong>(1)</strong> the first domino falls ($n = 1$), and <strong>(2)</strong> <em>if</em> domino $k$ falls, it knocks over domino $k + 1$. Together, every domino must fall.</p>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Never Assume What You Are Proving:</strong> In the inductive step, do <strong>not</strong> write the $P(k + 1)$ equation and simplify both sides simultaneously. Start strictly from the <strong>LHS of $P(k + 1)$</strong>, substitute the $P(k)$ hypothesis into it, and manipulate until you reach the RHS of $P(k + 1)$.</p>
            </div>

            <div class="math-example" data-step-group="alg-3-3">
                <p><strong>Worked Example 3.3:</strong> Prove by mathematical induction that $1 + 3 + 5 + \dots + (2n - 1) = n^2$ for all integers $n \ge 1$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Base Case) • Trigger: Verify $n = 1$ explicitly on both sides</span>
                    <p>For $n = 1$: $\text{LHS} = 2(1) - 1 = 1$, and $\text{RHS} = 1^2 = 1$. Thus $P(1)$ is true.</p>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Inductive Hypothesis) • Trigger: Assume $P(k)$ holds for an arbitrary integer $k \ge 1$</span>
                    <div class="math-equation">
                        $$\text{Assume } 1 + 3 + 5 + \dots + (2k - 1) = k^2$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 (Inductive Step) • Trigger: Start with LHS of $P(k + 1)$, substitute $k^2$, and reach $(k + 1)^2$</span>
                    <div class="math-equation">
                        $$\begin{aligned}
                        \text{LHS}_{k+1} &= \underbrace{\big[1 + 3 + \dots + (2k - 1)\big]}_{= k^2 \text{ by hypothesis}} + \big(2(k + 1) - 1\big) \\
                        &= k^2 + (2k + 1) = (k + 1)^2 = \text{RHS}_{k+1}
                        \end{aligned}$$
                    </div>
                    <p>By the Principle of Mathematical Induction, $P(n)$ holds for all integers $n \ge 1$.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-3-3">Reveal Next Step (1 / 3)</button>
            </div>

            <!-- 3.4 -->
            <h3>3.4 The Binomial Theorem & Rational Approximations</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> When expanding $(a + b)^n$, each term picks either $a$ or $b$ from each of the $n$ brackets; $\binom{n}{r}$ simply counts how many ways you can pick $b$ from $r$ brackets. Extending this pattern to negative/fractional $n$ turns awkward roots and fractions into simple polynomials—provided $|x| < 1$ so higher powers shrink to zero.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\begin{aligned}
                    \text{Positive Integer } n: &\quad (a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r}b^r, \qquad \binom{n}{r} = \frac{n!}{r!(n - r)!} \\
                    \text{General } n \in \mathbb{R}\;(|x| < 1): &\quad (1 + x)^n = 1 + nx + \frac{n(n - 1)}{2!}x^2 + \frac{n(n - 1)(n - 2)}{3!}x^3 + \dots
                    \end{aligned}$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-3-4">
                <p><strong>Worked Example 3.4:</strong> (a) Find the coefficient of $x^3$ in $(2 - x)^5$.  (b) Expand $\sqrt{1 + 2x}$ up to $x^2$ and state its range of validity.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: General term $T_{r+1} = \binom{5}{r}(2)^{5-r}(-x)^r$ $\implies$ set $r = 3$</span>
                    <div class="math-equation">
                        $$T_4 = \binom{5}{3}(2)^{2}(-x)^3 = 10 \cdot 4 \cdot (-x^3) = -40x^3 \implies \text{coefficient is } -40$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: Rewrite $\sqrt{1 + 2x} = (1 + 2x)^{1/2}$ and substitute $n = \frac{1}{2}$, inner term $2x$</span>
                    <div class="math-equation">
                        $$(1 + 2x)^{1/2} = 1 + \frac{1}{2}(2x) + \frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2!}(2x)^2 + \dots = 1 + x - \frac{1}{2}x^2 + \dots$$
                    </div>
                    <p>Valid when $|2x| < 1 \iff |x| < \frac{1}{2}$.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-3-4">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="In $(1 + u)^n$, convergence requires $|u| < 1$. Here $u = 3x$, so $|3x| < 1 \implies |x| < \frac{1}{3}$.">
                <p><strong>Your Turn (Quick Check 3.4):</strong> For what values of $x$ is the binomial expansion of $(1 + 3x)^{-2}$ valid?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$|x| < 1$</button>
                    <button type="button" class="qc-btn" data-idx="1">$|x| < \dfrac{1}{3}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$|x| < 3$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
            <div class="graph-widget" data-graph="binomial-approx"></div>
        `
    },

    // ==================================
    // LESSON 4: CONIC SECTIONS, ROTATION OF AXES & VECTORS (4.1 - 4.4)
    // ==================================
    {
        id: "alg-04-conics-rotation-vectors",
        title: "Lesson 4: Conic Sections, Rotation of Axes & Vectors",
        description:
            "4.1 Parabolas, Ellipses & Hyperbolas • 4.2 Foci, Eccentricity & Asymptotes • 4.3 Rotation of Axes • 4.4 Vectors, Dot/Cross Products & Planes",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 4 Overview & Learning Objectives</h3>
                <p>This lesson connects quadratic curves in 2D with vector geometry in 3D:</p>
                <ul>
                    <li><strong>4.1–4.2</strong> Classify parabolas, ellipses, and hyperbolas from standard equations and locate vertices, foci, and asymptotes.</li>
                    <li><strong>4.3</strong> Eliminate mixed $xy$-terms in second-degree equations by rotating coordinate axes through angle $\theta$.</li>
                    <li><strong>4.4</strong> Compute dot and cross products and write vector/Cartesian equations of lines and planes in $\mathbb{R}^3$.</li>
                </ul>
            </div>

            <!-- 4.1 & 4.2 -->
            <h3>4.1–4.2 Conic Sections: Standard Forms, Foci & Asymptotes</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Every conic section is defined by a distance rule: a <strong>parabola</strong> balances distance to a point and a line ($e = 1$), an <strong>ellipse</strong> keeps the <em>sum</em> of distances to two foci constant ($e < 1$), and a <strong>hyperbola</strong> keeps the <em>difference</em> of distances to two foci constant ($e > 1$).</p>
            </div>

            <div class="decision-helper" data-helper="conic-chooser">
                <p><strong>Conic Identifier — Click a conic to compare its standard equation and foci formula:</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="con-1">Parabola ($e = 1$)</button>
                    <button type="button" class="dh-btn" data-case="con-2">Ellipse ($0 < e < 1$)</button>
                    <button type="button" class="dh-btn" data-case="con-3">Hyperbola ($e > 1$)</button>
                </div>
                <div class="dh-panel active" id="con-1">
                    <strong>Equation:</strong> $(x - h)^2 = 4p(y - k)$ (opens up/down) or $(y - k)^2 = 4p(x - h)$ (opens right/left). Focus is $p$ units from vertex; directrix is $p$ units behind vertex.
                </div>
                <div class="dh-panel" id="con-2">
                    <strong>Equation:</strong> $\dfrac{(x - h)^2}{a^2} + \dfrac{(y - k)^2}{b^2} = 1$ (plus sign!). Here $a$ is always the <strong>larger</strong> semi-axis, and $c^2 = a^2 - b^2$ (note the minus sign inside $c^2$).
                </div>
                <div class="dh-panel" id="con-3">
                    <strong>Equation:</strong> $\dfrac{(x - h)^2}{a^2} - \dfrac{(y - k)^2}{b^2} = 1$ (opens horizontally; $a^2$ is under the <strong>positive</strong> term). Foci satisfy $c^2 = a^2 + b^2$, and asymptotes are $y - k = \pm\frac{b}{a}(x - h)$.
                </div>
            </div>

            <div class="math-example" data-step-group="alg-4-1">
                <p><strong>Worked Example 4.1:</strong> Find the center, vertices, foci, and asymptotes of $\dfrac{(x - 1)^2}{9} - \dfrac{(y + 2)^2}{16} = 1$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Minus sign with $x^2$ positive $\implies$ horizontal hyperbola centered at $(1, -2)$</span>
                    <p>Read $a^2 = 9 \implies a = 3$ and $b^2 = 16 \implies b = 4$. Compute $c = \sqrt{a^2 + b^2} = \sqrt{9 + 16} = 5$.</p>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Move $\pm a$ for vertices, $\pm c$ for foci, and use $\pm\frac{b}{a}$ for asymptotes</span>
                    <ul>
                        <li><strong>Vertices:</strong> $(1 \pm 3, -2) \implies (-2, -2)$ and $(4, -2)$.</li>
                        <li><strong>Foci:</strong> $(1 \pm 5, -2) \implies (-4, -2)$ and $(6, -2)$.</li>
                        <li><strong>Asymptotes:</strong> $y + 2 = \pm\dfrac{4}{3}(x - 1)$.</li>
                    </ul>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-4-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="For the ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$, $a^2 = 25$ is under $x^2$ (horizontal major axis), and $c = \sqrt{a^2 - b^2} = \sqrt{25 - 9} = 4$, giving foci $(\pm 4, 0)$.">
                <p><strong>Your Turn (Quick Check 4.1):</strong> Find the foci of the ellipse $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$(\pm 4, 0)$</button>
                    <button type="button" class="qc-btn" data-idx="1">$(0, \pm 4)$</button>
                    <button type="button" class="qc-btn" data-idx="2">$(\pm 5, 0)$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 4.3 -->
            <h3>4.3 Rotation of Axes to Eliminate the $xy$-Term</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> When a conic equation has a mixed $Bxy$ term ($B \neq 0$), the curve is simply tilted at an angle $\theta$. Rotating the $(x, y)$ grid into a tilted $(x', y')$ grid lines the axes back up with the conic's symmetry lines and makes the $x'y'$ term vanish.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\cot(2\theta) = \frac{A - C}{B}, \qquad \begin{cases} x = x'\cos\theta - y'\sin\theta \\ y = x'\sin\theta + y'\cos\theta \end{cases}$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-4-3">
                <p><strong>Worked Example 4.3:</strong> Rotate axes to eliminate the $xy$-term from $x^2 + 2xy + y^2 - 8 = 0$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: $A = 1, B = 2, C = 1$ $\implies$ find rotation angle $\theta$ via $\cot(2\theta) = \frac{A - C}{B}$</span>
                    <div class="math-equation">
                        $$\cot(2\theta) = \frac{1 - 1}{2} = 0 \implies 2\theta = \frac{\pi}{2} \implies \theta = \frac{\pi}{4}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Substitute $x = \frac{x' - y'}{\sqrt{2}}$ and $y = \frac{x' + y'}{\sqrt{2}}$ and simplify</span>
                    <div class="math-equation">
                        $$(x + y)^2 - 8 = 0 \implies \left(\frac{2x'}{\sqrt{2}}\right)^2 = 8 \implies 2(x')^2 = 8 \implies x' = \pm 2 \quad (\text{two parallel lines})$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-4-3">Reveal Next Step (1 / 2)</button>
            </div>
            <div class="graph-widget" data-graph="conic-rotation"></div>

            <!-- 4.4 -->
            <h3>4.4 Vectors, Dot/Cross Products & Planes in $\mathbb{R}^3$</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> The <strong>dot product</strong> $\mathbf{u}\cdot\mathbf{v}$ returns a scalar that equals $0$ when two vectors are perpendicular. The <strong>cross product</strong> $\mathbf{u}\times\mathbf{v}$ returns a brand-new vector perpendicular to <em>both</em> $\mathbf{u}$ and $\mathbf{v}$—ideal for finding the normal vector $\mathbf{n}$ of a plane.</p>
            </div>

            <div class="math-example" data-step-group="alg-4-4">
                <p><strong>Worked Example 4.4:</strong> Find the Cartesian equation of the plane passing through $P(1, 0, 2)$ with normal vector $\mathbf{n} = \langle 2, -1, 3 \rangle$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Every vector $\overrightarrow{PX}$ in the plane is perpendicular to $\mathbf{n}$ $\implies \mathbf{n}\cdot\overrightarrow{PX} = 0$</span>
                    <div class="math-equation">
                        $$2(x - 1) - 1(y - 0) + 3(z - 2) = 0 \implies 2x - y + 3z = 8$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-4-4">All 1 Steps Revealed</button>
            </div>
        `
    },

    // ==================================
    // LESSON 5: COMPLEX NUMBERS, DE MOIVRE'S THEOREM & MATRICES (5.1 - 5.4)
    // ==================================
    {
        id: "alg-05-complex-numbers-matrices",
        title: "Lesson 5: Complex Numbers, De Moivre's Theorem & Matrices",
        description:
            "5.1 Cartesian & Argand Plane • 5.2 Polar Form & De Moivre's Theorem • 5.3 nth Roots of Complex Numbers • 5.4 Determinants & Matrix Inverses",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 5 Overview & Learning Objectives</h3>
                <p>This lesson completes the foundational Algebra modules with complex arithmetic in polar form and linear matrix systems:</p>
                <ul>
                    <li><strong>5.1–5.2</strong> Represent complex numbers on the Argand diagram, find modulus and principal argument, and raise powers via De Moivre's Theorem.</li>
                    <li><strong>5.3</strong> Extract all $n$ distinct $n$-th roots of a complex number symmetrically around the origin.</li>
                    <li><strong>5.4</strong> Evaluate $2\times 2$ and $3\times 3$ determinants, test invertibility, and solve systems using inverse matrices.</li>
                </ul>
            </div>

            <!-- 5.1 & 5.2 -->
            <h3>5.1–5.2 Polar Form & De Moivre's Theorem</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Multiplying two complex numbers in Cartesian form $(a + bi)(c + di)$ requires four FOIL terms, whereas in polar form $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$, you simply <strong>multiply the lengths $r$</strong> and <strong>add the angles $\theta$</strong>.</p>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Principal Argument Quadrant Check:</strong> The principal argument $\text{Arg}(z)$ lies in $(-\pi, \pi]$. Never trust raw $\arctan(y/x)$ blindly: for $z = -1 + i\sqrt{3}$ (Quadrant II), $\arctan(-\sqrt{3}) = -\frac{\pi}{3}$ points into Quadrant IV—you must add $\pi$ to get $\theta = \frac{2\pi}{3}$.</p>
            </div>

            <div class="math-example" data-step-group="alg-5-1">
                <p><strong>Worked Example 5.1:</strong> Use De Moivre's Theorem to express $(1 - i)^6$ in Cartesian form $a + bi$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: High power ($6$) $\implies$ convert $z = 1 - i$ (Quadrant IV) to polar form</span>
                    <div class="math-equation">
                        $$r = \sqrt{1^2 + (-1)^2} = \sqrt{2}, \qquad \theta = -\frac{\pi}{4} \implies 1 - i = \sqrt{2}\left[\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right]$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Apply De Moivre's Theorem $[r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)$</span>
                    <div class="math-equation">
                        $$(1 - i)^6 = (\sqrt{2})^6\left[\cos\left(-\frac{6\pi}{4}\right) + i\sin\left(-\frac{6\pi}{4}\right)\right] = 8\left[\cos\left(-\frac{3\pi}{2}\right) + i\sin\left(-\frac{3\pi}{2}\right)\right]$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Evaluate $\cos(-3\pi/2) = 0$ and $\sin(-3\pi/2) = 1$</span>
                    <div class="math-equation">
                        $$(1 - i)^6 = 8(0 + i \cdot 1) = 8i$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-5-1">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="$z = -1 + i\sqrt{3}$ has $x = -1 < 0$ and $y = \sqrt{3} > 0$, placing it in Quadrant II. The reference angle is $\frac{\pi}{3}$, so $\text{Arg}(z) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.">
                <p><strong>Your Turn (Quick Check 5.1):</strong> Find the principal argument $\text{Arg}(z) \in (-\pi, \pi]$ of $z = -1 + i\sqrt{3}$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$-\dfrac{\pi}{3}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\dfrac{2\pi}{3}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\dfrac{4\pi}{3}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 5.3 -->
            <h3>5.3 $n$-th Roots of Complex Numbers</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Every non-zero complex number has exactly $n$ distinct $n$-th roots. Visually, they sit like equally spaced spokes of a wheel around a circle of radius $r^{1/n}$, separated by $\frac{2\pi}{n}$ radians.</p>
            </div>
            <div class="graph-widget" data-graph="complex-argand"></div>

            <div class="math-example" data-step-group="alg-5-3">
                <p><strong>Worked Example 5.3:</strong> Find all three cube roots of $w = 8i$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Write $w = 8i$ in polar form with periodic $+ 2\pi k$ angle</span>
                    <div class="math-equation">
                        $$8i = 8\left[\cos\left(\frac{\pi}{2} + 2\pi k\right) + i\sin\left(\frac{\pi}{2} + 2\pi k\right)\right]$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Take cube root of modulus ($8^{1/3} = 2$) and divide angle by $3$ for $k = 0, 1, 2$</span>
                    <ul>
                        <li>$k = 0$: $z_0 = 2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right) = \sqrt{3} + i$</li>
                        <li>$k = 1$: $z_1 = 2\left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right) = -\sqrt{3} + i$</li>
                        <li>$k = 2$: $z_2 = 2\left(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right) = -2i$</li>
                    </ul>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-5-3">Reveal Next Step (1 / 2)</button>
            </div>

            <!-- 5.4 -->
            <h3>5.4 Matrices, Determinants & Inverses</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A square matrix $A$ transforms vectors; its determinant $\det(A)$ measures the area/volume scaling factor. If $\det(A) = 0$, $A$ squashes space flat so information is lost and no inverse $A^{-1}$ exists.</p>
            </div>

            <div class="math-example" data-step-group="alg-5-4">
                <p><strong>Worked Example 5.4:</strong> Find the inverse of $A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$ and use it to solve $A\mathbf{x} = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Compute $\det(A) = ad - bc$ and swap diagonal / negate off-diagonal</span>
                    <div class="math-equation">
                        $$\det(A) = 3(2) - 5(1) = 1 \neq 0 \implies A^{-1} = \frac{1}{1}\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Left-multiply $\mathbf{x} = A^{-1}\mathbf{b}$</span>
                    <div class="math-equation">
                        $$\mathbf{x} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 8 - 5 \\ -4 + 3 \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-5-4">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="A square matrix has no inverse when $\det(A) = 0$. Setting $6k - (4)(3) = 0 \implies 6k - 12 = 0 \implies k = 2$.">
                <p><strong>Your Turn (Quick Check 5.4):</strong> For what value of $k$ does the matrix $\begin{pmatrix} k & 4 \\ 3 & 6 \end{pmatrix}$ have <strong>no</strong> inverse?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$k = 2$</button>
                    <button type="button" class="qc-btn" data-idx="1">$k = -2$</button>
                    <button type="button" class="qc-btn" data-idx="2">$k = 8$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 6: 2D VECTORS, DOT PRODUCT & PROJECTIONS (MATH1043 CH 1)
    // ==================================
    {
        id: "alg-06-2d-vectors",
        title: "Lesson 6: 2D Vectors, Dot Product & Projections",
        description:
            "6.1 Position & Unit Vectors • 6.2 Vector & Cartesian Lines in 2D • 6.3 Dot Product & Angles • 6.4 Orthogonal Projections",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 6 Overview & Learning Objectives</h3>
                <p>This lesson introduces planar vector geometry, parametric lines, and inner-product decompositions:</p>
                <ul>
                    <li><strong>6.1–6.2</strong> Compute displacement vectors, magnitudes, unit vectors, and vector/Cartesian equations of lines in $\mathbb{R}^2$.</li>
                    <li><strong>6.3</strong> Evaluate the dot product algebraically and geometrically to find angles and test orthogonality.</li>
                    <li><strong>6.4</strong> Decompose a vector into components parallel and perpendicular to a reference direction using orthogonal projections.</li>
                </ul>
            </div>

            <!-- 6.1 & 6.2 -->
            <h3>6.1–6.2 Position Vectors, Unit Vectors & 2D Lines</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A vector $\mathbf{v} = \langle v_1, v_2 \rangle = v_1\mathbf{i} + v_2\mathbf{j}$ records <em>displacement</em> rather than location—sliding an arrow anywhere in the plane without stretching or rotating it leaves the vector unchanged. Dividing $\mathbf{v}$ by its own length $\|\mathbf{v}\|$ strips away magnitude to leave a pure direction arrow $\hat{\mathbf{u}}$ of length $1$.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\begin{aligned}
                    \overrightarrow{PQ} &= \mathbf{q} - \mathbf{p} = \langle q_1 - p_1, \, q_2 - p_2 \rangle, \qquad \|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2}, \qquad \hat{\mathbf{u}} = \frac{\mathbf{v}}{\|\mathbf{v}\|} \\
                    \text{Vector Line:} &\quad \mathbf{r} = \mathbf{r}_0 + t\mathbf{v} \quad (t \in \mathbb{R}) \quad \Longleftrightarrow \quad \frac{x - x_0}{v_1} = \frac{y - y_0}{v_2}
                    \end{aligned}$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-6-1">
                <p><strong>Worked Example 6.1:</strong> Given $A(2, -1)$ and $B(5, 3)$, find the unit vector in the direction of $\overrightarrow{AB}$ and write both the vector and Cartesian equations of the line passing through $A$ and $B$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Two points $A, B$ $\implies$ compute displacement $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$ and norm $\|\overrightarrow{AB}\|$</span>
                    <div class="math-equation">
                        $$\overrightarrow{AB} = \langle 5 - 2, \, 3 - (-1) \rangle = \langle 3, 4 \rangle, \qquad \|\overrightarrow{AB}\| = \sqrt{3^2 + 4^2} = 5$$
                    </div>
                    <p>Dividing by the length gives the unit vector $\hat{\mathbf{u}} = \left\langle \dfrac{3}{5}, \dfrac{4}{5} \right\rangle$.</p>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Anchor at $A(2, -1)$ with direction $\mathbf{v} = \langle 3, 4 \rangle$, then eliminate parameter $t$</span>
                    <div class="math-equation">
                        $$\text{Vector form: } \mathbf{r} = \langle 2, -1 \rangle + t\langle 3, 4 \rangle \implies \frac{x - 2}{3} = \frac{y + 1}{4} \implies 4x - 3y = 11$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-6-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="First find $\|\mathbf{v}\| = \sqrt{(-6)^2 + 8^2} = \sqrt{100} = 10$. The unit vector is $\hat{\mathbf{v}} = \langle -0.6, 0.8 \rangle$, so a vector of length $10$ in the opposite direction is $-10\hat{\mathbf{v}} = \langle 6, -8 \rangle$.">
                <p><strong>Your Turn (Quick Check 6.1):</strong> Find the vector of length $10$ pointing in the <em>opposite</em> direction to $\mathbf{v} = \langle -6, 8 \rangle$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\langle -6, 8 \rangle$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\langle 6, -8 \rangle$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\langle 8, 6 \rangle$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 6.3 & 6.4 -->
            <h3>6.3–6.4 The Dot Product & Orthogonal Projections</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Orthogonal projection $\text{proj}_{\mathbf{v}}\mathbf{u}$ casts the "shadow" of vector $\mathbf{u}$ directly onto the line of $\mathbf{v}$. Subtracting that shadow from $\mathbf{u}$ leaves $\mathbf{u}_\perp = \mathbf{u} - \text{proj}_{\mathbf{v}}\mathbf{u}$, which is guaranteed to be perpendicular to $\mathbf{v}$.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\mathbf{u}\cdot\mathbf{v} = u_1v_1 + u_2v_2 = \|\mathbf{u}\|\|\mathbf{v}\|\cos\theta, \qquad \text{comp}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u}\cdot\mathbf{v}}{\|\mathbf{v}\|}, \qquad \text{proj}_{\mathbf{v}}\mathbf{u} = \left(\frac{\mathbf{u}\cdot\mathbf{v}}{\|\mathbf{v}\|^2}\right)\mathbf{v}$$
                </div>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Order of Subscripts in $\text{proj}_{\mathbf{v}}\mathbf{u}$:</strong> The subscript vector $\mathbf{v}$ is the <em>base</em> receiving the shadow—so $\mathbf{v}$ appears in both the denominator $\|\mathbf{v}\|^2$ and as the direction vector outside. Swapping $\mathbf{u}$ and $\mathbf{v}$ projects onto the wrong line.</p>
            </div>

            <div class="math-example" data-step-group="alg-6-3">
                <p><strong>Worked Example 6.3:</strong> Let $\mathbf{u} = \langle 4, 3 \rangle$ and $\mathbf{v} = \langle 1, -2 \rangle$. Decompose $\mathbf{u} = \mathbf{u}_\parallel + \mathbf{u}_\perp$ into components parallel and perpendicular to $\mathbf{v}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Compute $\mathbf{u}\cdot\mathbf{v}$ and $\|\mathbf{v}\|^2$ for the projection scalar</span>
                    <div class="math-equation">
                        $$\mathbf{u}\cdot\mathbf{v} = 4(1) + 3(-2) = -2, \qquad \|\mathbf{v}\|^2 = 1^2 + (-2)^2 = 5$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Compute $\mathbf{u}_\parallel = \text{proj}_{\mathbf{v}}\mathbf{u}$ and subtract from $\mathbf{u}$ for $\mathbf{u}_\perp$</span>
                    <div class="math-equation">
                        $$\mathbf{u}_\parallel = -\frac{2}{5}\langle 1, -2 \rangle = \left\langle -\frac{2}{5}, \, \frac{4}{5} \right\rangle, \qquad \mathbf{u}_\perp = \langle 4, 3 \rangle - \left\langle -\frac{2}{5}, \, \frac{4}{5} \right\rangle = \left\langle \frac{22}{5}, \, \frac{11}{5} \right\rangle$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-6-3">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="Two non-zero vectors are orthogonal when $\mathbf{a}\cdot\mathbf{b} = 0$: $k(4) + 3(-8) = 0 \implies 4k = 24 \implies k = 6$.">
                <p><strong>Your Turn (Quick Check 6.3):</strong> For what value of $k$ are $\mathbf{a} = \langle k, 3 \rangle$ and $\mathbf{b} = \langle 4, -8 \rangle$ orthogonal?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$k = 6$</button>
                    <button type="button" class="qc-btn" data-idx="1">$k = -6$</button>
                    <button type="button" class="qc-btn" data-idx="2">$k = \dfrac{3}{2}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 7: LINEAR EQUATIONS, GAUSSIAN ELIMINATION & MATRICES (MATH1043 CH 2)
    // ==================================
    {
        id: "alg-07-linear-systems-matrices",
        title: "Lesson 7: Linear Equations, Gaussian Elimination & Matrices",
        description:
            "7.1 Augmented Matrices & Row Operations • 7.2 Gaussian Elimination & Solution Types • 7.3 Matrix Multiplication & Transpose • 7.4 Determinants & Cramer's Rule",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 7 Overview & Learning Objectives</h3>
                <p>This lesson systematizes solving $m \times n$ linear systems and introduces algebraic properties of matrices and determinants:</p>
                <ul>
                    <li><strong>7.1–7.2</strong> Reduce augmented matrices $[A \mid \mathbf{b}]$ to Row Echelon Form (REF) and classify unique, infinite, and inconsistent systems.</li>
                    <li><strong>7.3</strong> Perform matrix multiplication, apply transpose identities, and recognize symmetric/skew-symmetric matrices.</li>
                    <li><strong>7.4</strong> Evaluate $3\times 3$ determinants, use determinant scaling rules, and solve systems with Cramer's Rule.</li>
                </ul>
            </div>

            <!-- 7.1 & 7.2 -->
            <h3>7.1–7.2 Gaussian Elimination & Consistency Analysis</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Elementary row operations (swapping rows, scaling a row by $k \neq 0$, adding a multiple of one row to another) reshape a system into a triangular staircase (Row Echelon Form) without altering its solution set—letting you read off variables from the bottom row upward.</p>
            </div>

            <div class="decision-helper" data-helper="sys-chooser">
                <p><strong>Echelon Form Diagnostic — Inspect the bottom non-zero rows of $[A \mid \mathbf{b}]$:</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="sys-1">1. Row $[0\;\dots\;0 \mid c]$ ($c \neq 0$)</button>
                    <button type="button" class="dh-btn" data-case="sys-2">2. Every Variable Has a Pivot</button>
                    <button type="button" class="dh-btn" data-case="sys-3">3. Consistent + Non-Pivot Columns</button>
                </div>
                <div class="dh-panel active" id="sys-1">
                    <strong>Inconsistent (Zero Solutions):</strong> The row translates to $0x_1 + \dots + 0x_n = c \neq 0$, an impossible equation. Stop immediately—no solution exists.
                </div>
                <div class="dh-panel" id="sys-2">
                    <strong>Unique Solution:</strong> Every variable column contains a leading $1$ (pivot), so $\text{rank}(A) = n$. Back-substitution yields a single point.
                </div>
                <div class="dh-panel" id="sys-3">
                    <strong>Infinitely Many Solutions:</strong> Columns without pivots correspond to <em>free variables</em>—assign parameters $t, s, \dots \in \mathbb{R}$ and express pivot variables in terms of them.
                </div>
            </div>

            <div class="math-example" data-step-group="alg-7-1">
                <p><strong>Worked Example 7.1:</strong> Solve the system via Gaussian elimination:
                $$x + y + z = 6, \qquad 2x + 3y + z = 11, \qquad x - y + 2z = 5$$</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Write augmented matrix $[A \mid \mathbf{b}]$ and eliminate $x$ below the top-left pivot</span>
                    <p>Apply $R_2 \leftarrow R_2 - 2R_1$ and $R_3 \leftarrow R_3 - R_1$:</p>
                    <div class="math-equation">
                        $$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 3 & 1 & 11 \\ 1 & -1 & 2 & 5 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & -1 & -1 \\ 0 & -2 & 1 & -1 \end{array}\right)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Use $R_2$ pivot to eliminate $-2$ in $R_3$ ($R_3 \leftarrow R_3 + 2R_2$)</span>
                    <div class="math-equation">
                        $$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & -1 & -1 \\ 0 & 0 & -1 & -3 \end{array}\right)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Back-substitute from Row 3 upward</span>
                    <p>From Row 3: $-z = -3 \implies z = 3$. From Row 2: $y - 3 = -1 \implies y = 2$. From Row 1: $x + 2 + 3 = 6 \implies x = 1$. Unique solution: <strong>$(1, 2, 3)$</strong>.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-7-1">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="The augmented row $[0 \;\; 0 \;\; 0 \;\mid\; 4]$ represents the equation $0x + 0y + 0z = 4$, which has no solution (the system is inconsistent).">
                <p><strong>Your Turn (Quick Check 7.1):</strong> An augmented matrix reduces to Row Echelon Form with bottom row $[0 \;\; 0 \;\; 0 \;\mid\; 4]$. How many solutions does the system have?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$0$ (Inconsistent)</button>
                    <button type="button" class="qc-btn" data-idx="1">$1$ (Unique solution)</button>
                    <button type="button" class="qc-btn" data-idx="2">Infinitely many ($1$ parameter)</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 7.3 & 7.4 -->
            <h3>7.3–7.4 Matrix Properties, Determinants & Cramer's Rule</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Scaling a Determinant $\det(kA) \neq k\det(A)$:</strong> Every row of $kA$ is multiplied by $k$. For an $n \times n$ matrix $A$, factoring $k$ out of all $n$ rows gives $\det(kA) = k^n \det(A)$. Likewise, matrix multiplication is non-commutative ($AB \neq BA$) and reverses under transpose: $(AB)^T = B^T A^T$.</p>
            </div>

            <div class="math-example" data-step-group="alg-7-4">
                <p><strong>Worked Example 7.4:</strong> Evaluate $\det(A)$ for $A = \begin{pmatrix} 2 & -1 & 3 \\ 0 & 4 & 1 \\ 1 & 2 & -2 \end{pmatrix}$ and solve $\begin{cases} 2x - y = 5 \\ 3x + 4y = 2 \end{cases}$ using Cramer's Rule.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Expand $\det(A)$ along Column 1 (exploiting the zero entry!)</span>
                    <div class="math-equation">
                        $$\det(A) = 2\begin{vmatrix} 4 & 1 \\ 2 & -2 \end{vmatrix} - 0 + 1\begin{vmatrix} -1 & 3 \\ 4 & 1 \end{vmatrix} = 2(-8 - 2) + 1(-1 - 12) = -20 - 13 = -33$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: For Cramer's Rule, replace column $i$ of $A$ with RHS vector $\mathbf{b}$</span>
                    <div class="math-equation">
                        $$D = \begin{vmatrix} 2 & -1 \\ 3 & 4 \end{vmatrix} = 11, \qquad D_x = \begin{vmatrix} 5 & -1 \\ 2 & 4 \end{vmatrix} = 22 \implies x = \frac{22}{11} = 2, \qquad D_y = \begin{vmatrix} 2 & 5 \\ 3 & 2 \end{vmatrix} = -11 \implies y = \frac{-11}{11} = -1$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-7-4">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="2" data-explanation="For a $3\times 3$ matrix, scaling all $3$ rows by $2$ multiplies the determinant by $2^3 = 8$: $\det(2A) = 2^3 \cdot 4 = 32$.">
                <p><strong>Your Turn (Quick Check 7.4):</strong> If $A$ is a $3 \times 3$ matrix with $\det(A) = 4$, what is $\det(2A)$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$8$</button>
                    <button type="button" class="qc-btn" data-idx="1">$16$</button>
                    <button type="button" class="qc-btn" data-idx="2">$32$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 8: 3D VECTORS, CROSS PRODUCT, LINES & PLANES (MATH1043 CH 3)
    // ==================================
    {
        id: "alg-08-3d-vectors-geometry",
        title: "Lesson 8: 3D Vectors, Cross Product, Lines & Planes",
        description:
            "8.1 Cross Product & Areas • 8.2 Scalar Triple Product & Volumes • 8.3 3D Lines (Parallel, Intersecting & Skew) • 8.4 Planes & Point-to-Plane Distance",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 8 Overview & Learning Objectives</h3>
                <p>This lesson extends vector operations into three-dimensional Euclidean space $\mathbb{R}^3$:</p>
                <ul>
                    <li><strong>8.1–8.2</strong> Compute cross products and scalar triple products to find triangle/parallelogram areas, parallelepiped volumes, and coplanarity.</li>
                    <li><strong>8.3</strong> Write vector, parametric, and symmetric equations of 3D lines and distinguish parallel, intersecting, and skew lines.</li>
                    <li><strong>8.4</strong> Find plane intersections and perpendicular distances from points to planes.</li>
                </ul>
            </div>

            <!-- 8.1 & 8.2 -->
            <h3>8.1–8.2 Cross Product & Scalar Triple Product</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> The magnitude $\|\mathbf{u} \times \mathbf{v}\| = \|\mathbf{u}\|\|\mathbf{v}\|\sin\theta$ equals the area of the parallelogram spanned by $\mathbf{u}$ and $\mathbf{v}$ (so half of it gives a triangle's area). Dotting that area-normal vector with a third vector $\mathbf{w}$ multiplies base area by height to give the signed volume of a 3D parallelepiped.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\mathbf{u}\times\mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}, \qquad \text{Area}_{\triangle} = \frac{1}{2}\|\mathbf{u}\times\mathbf{v}\|, \qquad \text{Vol}_{\text{box}} = \big|\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w})\big| = \left|\det\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{pmatrix}\right|$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-8-1">
                <p><strong>Worked Example 8.1:</strong> Find the exact area of $\triangle PQR$ with vertices $P(1, 0, 1)$, $Q(2, 3, 0)$, and $R(-1, 1, 2)$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Form two edge vectors sharing vertex $P$</span>
                    <div class="math-equation">
                        $$\overrightarrow{PQ} = \langle 1, 3, -1 \rangle, \qquad \overrightarrow{PR} = \langle -2, 1, 1 \rangle$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Compute $\overrightarrow{PQ} \times \overrightarrow{PR}$ (remember the minus sign on the $\mathbf{j}$-cofactor!)</span>
                    <div class="math-equation">
                        $$\overrightarrow{PQ} \times \overrightarrow{PR} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 3 & -1 \\ -2 & 1 & 1 \end{vmatrix} = (3 + 1)\mathbf{i} - (1 - 2)\mathbf{j} + (1 + 6)\mathbf{k} = \langle 4, 1, 7 \rangle$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Take half the norm for triangle area</span>
                    <div class="math-equation">
                        $$\text{Area}_{\triangle} = \frac{1}{2}\sqrt{4^2 + 1^2 + 7^2} = \frac{\sqrt{66}}{2}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-8-1">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Three vectors in $\mathbb{R}^3$ lie in a single flat plane (zero 3D volume) if and only if their scalar triple product vanishes: $\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w}) = 0$.">
                <p><strong>Your Turn (Quick Check 8.1):</strong> Three non-zero vectors $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^3$ are coplanar if and only if:</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\mathbf{u}\cdot\mathbf{v} = 0$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w}) = 0$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\mathbf{u}\times\mathbf{v} = \mathbf{w}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 8.3 & 8.4 -->
            <h3>8.3–8.4 3D Lines, Intersecting Planes & Point-to-Plane Distance</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Skew Lines vs. Intersecting Lines in 3D:</strong> Two non-parallel lines in 3D do <em>not</em> have to intersect—they can pass over/under each other as <strong>skew lines</strong>. Always use <em>different</em> parameter names ($t$ and $s$) when equating two lines, solve two coordinate equations for $(t, s)$, and verify whether the third coordinate agrees!</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\text{Distance from } P_1(x_1, y_1, z_1) \text{ to Plane } ax + by + cz + d = 0: \qquad D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-8-3">
                <p><strong>Worked Example 8.3:</strong> (a) Find the distance from $P_1(3, -1, 2)$ to the plane $2x - 2y + z - 4 = 0$. (b) Find the vector equation of the line of intersection of the planes $x + y + z = 3$ and $2x - y + z = 0$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: Apply the point-to-plane distance formula directly</span>
                    <div class="math-equation">
                        $$D = \frac{|2(3) - 2(-1) + 1(2) - 4|}{\sqrt{2^2 + (-2)^2 + 1^2}} = \frac{|6 + 2 + 2 - 4|}{\sqrt{9}} = \frac{6}{3} = 2$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: Line lies in both planes $\implies$ direction $\mathbf{v} = \mathbf{n}_1 \times \mathbf{n}_2$</span>
                    <div class="math-equation">
                        $$\mathbf{v} = \langle 1, 1, 1 \rangle \times \langle 2, -1, 1 \rangle = \langle 1 - (-1), \, -(1 - 2), \, -1 - 2 \rangle = \langle 2, 1, -3 \rangle$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 (Part b) • Trigger: Set $z = 0$ to locate one shared point $P_0$ on both planes</span>
                    <p>Setting $z = 0$ gives $x + y = 3$ and $2x - y = 0 \implies x = 1, \; y = 2$. Thus $P_0(1, 2, 0)$ lies on the line, giving $\mathbf{r} = \langle 1, 2, 0 \rangle + t\langle 2, 1, -3 \rangle$.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-8-3">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Plug $(0, 0, 0)$ into $D = \frac{|3(0) + 4(0) + 12(0) - 26|}{\sqrt{3^2 + 4^2 + 12^2}} = \frac{26}{\sqrt{169}} = \frac{26}{13} = 2$.">
                <p><strong>Your Turn (Quick Check 8.3):</strong> What is the perpendicular distance from the origin $(0, 0, 0)$ to the plane $3x + 4y + 12z - 26 = 0$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$13$</button>
                    <button type="button" class="qc-btn" data-idx="1">$2$</button>
                    <button type="button" class="qc-btn" data-idx="2">$26$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 9: COMPLEX NUMBERS, EULER'S FORMULA & TRIG IDENTITIES (MATH1043 CH 4)
    // ==================================
    {
        id: "alg-09-complex-numbers-euler",
        title: "Lesson 9: Complex Numbers, Euler's Formula & Trig Identities",
        description:
            "9.1 Conjugates & Complex Division • 9.2 Euler's Exponential Form • 9.3 Multiple-Angle Identities via De Moivre • 9.4 Conjugate Root Theorem",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 9 Overview & Learning Objectives</h3>
                <p>This lesson deepens complex analysis with Euler's exponential notation, binomial-De Moivre trigonometric derivations, and polynomial factorization over $\mathbb{C}$:</p>
                <ul>
                    <li><strong>9.1–9.2</strong> Simplify complex quotients using conjugates and convert between Cartesian, polar, and Euler exponential form $re^{i\theta}$.</li>
                    <li><strong>9.3</strong> Derive multiple-angle identities for $\cos(n\theta)$ and $\sin(n\theta)$ by equating real and imaginary parts of $(\cos\theta + i\sin\theta)^n$.</li>
                    <li><strong>9.4</strong> Apply the Complex Conjugate Root Theorem to factor polynomials with real coefficients.</li>
                </ul>
            </div>

            <!-- 9.1 & 9.2 -->
            <h3>9.1–9.2 Conjugates, Division & Euler's Formula</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Multiplying any complex number $z = x + iy$ by its mirror reflection $\bar{z} = x - iy$ across the real axis always cancels the imaginary part and produces a non-negative real number: $z\bar{z} = x^2 + y^2 = |z|^2$. Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ turns polar trigonometry into ordinary exponent laws!</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$e^{i\theta} = \cos\theta + i\sin\theta, \qquad z = re^{i\theta}, \qquad z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}, \qquad \frac{z_1}{z_2} = \frac{r_1}{r_2}e^{i(\theta_1 - \theta_2)}$$
                </div>
            </div>

            <div class="math-example" data-step-group="alg-9-1">
                <p><strong>Worked Example 9.1:</strong> (a) Express $z = \dfrac{3 + 4i}{1 - 2i}$ in Cartesian form $a + bi$. (b) Write $w = -2 + 2i$ in Euler exponential form $re^{i\theta}$ with $\theta \in (-\pi, \pi]$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: Multiply numerator and denominator by conjugate $\overline{1 - 2i} = 1 + 2i$</span>
                    <div class="math-equation">
                        $$z = \frac{(3 + 4i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \frac{3 + 6i + 4i + 8i^2}{1^2 + 2^2} = \frac{-5 + 10i}{5} = -1 + 2i$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: $w = -2 + 2i$ is in Quadrant II $\implies \theta = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$</span>
                    <div class="math-equation">
                        $$r = \sqrt{(-2)^2 + 2^2} = 2\sqrt{2}, \qquad \theta = \frac{3\pi}{4} \implies w = 2\sqrt{2}\,e^{i3\pi/4}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-9-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="By Euler's formula, $e^{i\pi} = \cos\pi + i\sin\pi = -1 + 0i = -1$ (Euler's identity $e^{i\pi} + 1 = 0$). Adding $3$ gives $-1 + 3 = 2$.">
                <p><strong>Your Turn (Quick Check 9.1):</strong> Using Euler's formula, evaluate $e^{i\pi} + 3$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$2$</button>
                    <button type="button" class="qc-btn" data-idx="1">$4$</button>
                    <button type="button" class="qc-btn" data-idx="2">$3 + i$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
            <div class="graph-widget" data-graph="complex-argand"></div>

            <!-- 9.3 & 9.4 -->
            <h3>9.3–9.4 Multiple-Angle Identities & Conjugate Root Theorem</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Two complex numbers $A + Bi = C + Di$ are equal if and only if their real parts match ($A = C$) and their imaginary parts match ($B = D$). Expanding $(\cos\theta + i\sin\theta)^n$ by the Binomial Theorem and comparing it to $\cos(n\theta) + i\sin(n\theta)$ generates two trig identities in one stroke!</p>
            </div>

            <div class="math-example" data-step-group="alg-9-3">
                <p><strong>Worked Example 9.3:</strong> (a) Use De Moivre's Theorem to prove $\cos(3\theta) = 4\cos^3\theta - 3\cos\theta$. (b) Find all roots of $P(z) = z^3 - 4z^2 + 9z - 10$ given that $z_1 = 1 + 2i$ is a root.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: Expand $(\cos\theta + i\sin\theta)^3$ and match real parts with $\cos(3\theta) + i\sin(3\theta)$</span>
                    <div class="math-equation">
                        $$\begin{aligned}
                        \cos(3\theta) + i\sin(3\theta) &= \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta \\
                        \implies \cos(3\theta) &= \cos^3\theta - 3\cos\theta(1 - \cos^2\theta) = 4\cos^3\theta - 3\cos\theta
                        \end{aligned}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: Real coefficients + complex root $1 + 2i$ $\implies$ conjugate $1 - 2i$ is also a root</span>
                    <p>Multiply the conjugate linear factors to obtain a real quadratic factor:</p>
                    <div class="math-equation">
                        $$\big[z - (1 + 2i)\big]\big[z - (1 - 2i)\big] = (z - 1)^2 - (2i)^2 = z^2 - 2z + 5$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 (Part b) • Trigger: Divide $P(z)$ by $z^2 - 2z + 5$ to find the remaining real root</span>
                    <div class="math-equation">
                        $$z^3 - 4z^2 + 9z - 10 = (z^2 - 2z + 5)(z - 2) \implies \text{Roots: } z = 1 + 2i, \; 1 - 2i, \; 2$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="alg-9-3">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="2" data-explanation="By the Complex Conjugate Root Theorem, non-real roots of polynomials with real coefficients always occur in conjugate pairs: if $2 - 5i$ is a root, then $\overline{2 - 5i} = 2 + 5i$ must also be a root.">
                <p><strong>Your Turn (Quick Check 9.3):</strong> A cubic polynomial with real coefficients has roots $z_1 = 3$ and $z_2 = 2 - 5i$. What is its third root?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$-3$</button>
                    <button type="button" class="qc-btn" data-idx="1">$-2 + 5i$</button>
                    <button type="button" class="qc-btn" data-idx="2">$2 + 5i$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    }

];