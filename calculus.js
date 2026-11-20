// ======================================
// CALCULUS CURRICULUM (MATH1042A & MATH1043)
// ======================================

const calculusLessons = [

    // ==================================
    // LESSON 1: FUNCTIONS, TRIGONOMETRY & INVERSES (1.1 - 1.4)
    // ==================================
    {
        id: "calc-01-functions-trigonometry",
        title: "Lesson 1: Functions, Trigonometry & Inverses",
        description:
            "1.1 Domain & Range • 1.2 Composition & Symmetry • 1.3 Radian Measure & Special Angles • 1.4 Inverse Functions, Logarithms & Inverse Trig",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 1 Overview & Learning Objectives</h3>
                <p>This lesson establishes the foundational function, logarithmic, and trigonometric tools required for differential and integral calculus:</p>
                <ul>
                    <li><strong>1.1</strong> Determine natural domains and ranges, apply the Vertical Line Test, and evaluate piecewise and absolute value functions.</li>
                    <li><strong>1.2</strong> Form composite functions $(f \circ g)(x)$ and test functions for even or odd symmetry.</li>
                    <li><strong>1.3</strong> Work fluently in radian measure for arc lengths, sector areas, and exact special-angle values.</li>
                    <li><strong>1.4</strong> Compute inverse functions, apply logarithm laws, and evaluate restricted inverse trigonometric functions.</li>
                </ul>
            </div>

            <!-- 1.1 -->
            <h3>1.1 Functions, Domain & Range</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Finding a function's natural domain is a "safety inspection": start with all real numbers $\mathbb{R}$, then throw out any $x$ that causes division by zero, a negative number inside an even root, or a non-positive number inside a logarithm.</p>
            </div>
            <p>
                A <strong>function</strong> $f$ from a set $D$ to a set $Y$ assigns a <strong>unique</strong> output $f(x) \in Y$ to every input $x \in D$. Graphically, a curve is a function if and only if it passes the <strong>Vertical Line Test</strong>.
            </p>
            <div class="pitfall-card">
                <p><strong>Exam Trap — $\sqrt{x^2} = |x| \neq x$:</strong> Because the principal square root $\sqrt{\cdot}$ is always non-negative, $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5|$. Forgetting the absolute value bars when simplifying $\sqrt{x^2}$ causes sign errors in limits at $-\infty$.</p>
            </div>

            <div class="math-example" data-step-group="calc-1-1">
                <p><strong>Worked Example 1.1:</strong> Find the natural domain of $h(x) = \dfrac{\sqrt{x^2 - 4}}{x - 4}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Even root in numerator $\implies$ require radicand $\ge 0$</span>
                    <div class="math-equation">
                        $$x^2 - 4 \ge 0 \implies (x - 2)(x + 2) \ge 0 \implies x \le -2 \quad \text{or} \quad x \ge 2$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Variable in denominator $\implies$ exclude $x - 4 = 0$</span>
                    <div class="math-equation">
                        $$x \neq 4$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Intersect both conditions in interval notation</span>
                    <div class="math-equation">
                        $$\text{Domain}(h) = (-\infty, -2] \cup [2, 4) \cup (4, \infty)$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-1-1">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="Natural logarithms require strictly positive arguments: $5 - x > 0 \implies x < 5$, which is $(-\infty, 5)$.">
                <p><strong>Your Turn (Quick Check 1.1):</strong> What is the natural domain of $f(x) = \ln(5 - x)$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$(-\infty, 5)$</button>
                    <button type="button" class="qc-btn" data-idx="1">$(-\infty, 5]$</button>
                    <button type="button" class="qc-btn" data-idx="2">$(5, \infty)$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 1.2 -->
            <h3>1.2 Composite Functions & Even/Odd Symmetry</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> An <strong>even</strong> function ($f(-x) = f(x)$) mirrors itself across the $y$-axis like $x^2$ or $\cos x$, while an <strong>odd</strong> function ($f(-x) = -f(x)$) flips upside-down across the origin like $x^3$ or $\sin x$. Recognizing symmetry cuts definite integral calculations in half.</p>
            </div>

            <div class="math-example" data-step-group="calc-1-2">
                <p><strong>Worked Example 1.2:</strong> Determine whether $f(x) = \dfrac{x^3 - x}{\cos x}$ is even, odd, or neither.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Replace $x$ with $-x$ and simplify using $(-x)^3 = -x^3$ and $\cos(-x) = \cos x$</span>
                    <div class="math-equation">
                        $$f(-x) = \frac{(-x)^3 - (-x)}{\cos(-x)} = \frac{-x^3 + x}{\cos x} = -\frac{x^3 - x}{\cos x} = -f(x)$$
                    </div>
                    <p>Since $f(-x) = -f(x)$, the function $f$ is <strong>odd</strong>.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-1-2">All 1 Steps Revealed</button>
            </div>

            <!-- 1.3 -->
            <h3>1.3 Radian Measure & Special Angles</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Radians measure angles by actual arc length around a unit circle ($180^\circ = \pi\text{ rad}$). Using radians eliminates messy $\frac{\pi}{180}$ conversion factors so that $\frac{d}{dx}(\sin x) = \cos x$ works cleanly.</p>
            </div>
            <div class="graph-widget" data-graph="trig-explorer"></div>
            <div class="math-example">
                <div class="math-equation">
                    $$\text{Arc Length } s = r\theta, \qquad \text{Sector Area } A = \frac{1}{2}r^2\theta \quad (\theta \text{ in radians})$$
                </div>
                <details class="refresher-pill">
                    <summary>Need a refresher on Exact Special-Angle Values ($0, \frac{\pi}{6}, \frac{\pi}{4}, \frac{\pi}{3}, \frac{\pi}{2}$)?</summary>
                    <div class="math-equation">
                        $$\begin{aligned}
                        \sin 0 &= 0, & \sin\frac{\pi}{6} &= \frac{1}{2}, & \sin\frac{\pi}{4} &= \frac{1}{\sqrt{2}}, & \sin\frac{\pi}{3} &= \frac{\sqrt{3}}{2}, & \sin\frac{\pi}{2} &= 1 \\
                        \cos 0 &= 1, & \cos\frac{\pi}{6} &= \frac{\sqrt{3}}{2}, & \cos\frac{\pi}{4} &= \frac{1}{\sqrt{2}}, & \cos\frac{\pi}{3} &= \frac{1}{2}, & \cos\frac{\pi}{2} &= 0
                        \end{aligned}$$
                    </div>
                </details>
            </div>

            <div class="math-example" data-step-group="calc-1-3">
                <p><strong>Worked Example 1.3:</strong> A circular sector has perimeter $4\text{ cm}$ and area $1\text{ cm}^2$. Find its radius $r$ and central angle $\theta$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Perimeter $P = 2r + r\theta = 4$ $\implies$ isolate $r\theta$ to substitute into $A = \frac{1}{2}r(r\theta)$</span>
                    <div class="math-equation">
                        $$r\theta = 4 - 2r \implies \frac{1}{2}r(4 - 2r) = 1$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Solve the resulting quadratic for $r$ and back-substitute for $\theta$</span>
                    <div class="math-equation">
                        $$r^2 - 2r + 1 = 0 \implies (r - 1)^2 = 0 \implies r = 1\text{ cm}, \qquad \theta = \frac{4 - 2(1)}{1} = 2\text{ radians}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-1-3">Reveal Next Step (1 / 2)</button>
            </div>

            <!-- 1.4 -->
            <h3>1.4 Inverse Functions, Logarithms & Inverse Trig</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> An inverse function $f^{-1}$ simply swaps inputs and outputs (reflecting the graph across $y = x$). Because trig waves repeat infinitely, we restrict their domains so each inverse trig function returns one unique principal angle.</p>
            </div>
            <div class="math-example">
                <ul>
                    <li><strong>$y = \arcsin x$:</strong> Domain $[-1, 1]$, Principal Range $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.</li>
                    <li><strong>$y = \arccos x$:</strong> Domain $[-1, 1]$, Principal Range $[0, \pi]$.</li>
                    <li><strong>$y = \arctan x$:</strong> Domain $(-\infty, \infty)$, Principal Range $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.</li>
                </ul>
            </div>

            <div class="math-example" data-step-group="calc-1-4">
                <p><strong>Worked Example 1.4:</strong> Find the inverse function $f^{-1}(x)$ for $f(x) = \dfrac{x + 2}{1 - 2x}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Set $y = f(x)$, clear denominator, and group all $x$-terms on one side</span>
                    <div class="math-equation">
                        $$y(1 - 2x) = x + 2 \implies y - 2 = x + 2xy \implies y - 2 = x(1 + 2y)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Solve for $x$, then swap $x \leftrightarrow y$ to write $f^{-1}(x)$</span>
                    <div class="math-equation">
                        $$x = \frac{y - 2}{2y + 1} \implies f^{-1}(x) = \frac{x - 2}{2x + 1} \quad \left(x \neq -\frac{1}{2}\right)$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-1-4">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="$\frac{5\pi}{6}$ lies outside the principal range $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ of $\arcsin$. Since $\sin\left(\frac{5\pi}{6}\right) = \frac{1}{2}$, $\arcsin\left(\frac{1}{2}\right) = \frac{\pi}{6}$.">
                <p><strong>Your Turn (Quick Check 1.4):</strong> Evaluate $\arcsin\left(\sin\dfrac{5\pi}{6}\right)$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\dfrac{5\pi}{6}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\dfrac{\pi}{6}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$-\dfrac{\pi}{6}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 2: LIMITS, CONTINUITY & BASIC DERIVATIVES (2.1 - 2.4)
    // ==================================
    {
        id: "calc-02-limits-derivatives",
        title: "Lesson 2: Limits, Continuity & Basic Derivatives",
        description:
            "2.1 Limits & Sandwich Theorem • 2.2 Continuity Test • 2.3 First Principles & Basic Rules • 2.4 Tangents, Normals & Turning Points",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 2 Overview & Learning Objectives</h3>
                <p>This lesson introduces limits, continuity, and the geometric and analytical foundations of differentiation:</p>
                <ul>
                    <li><strong>2.1</strong> Evaluate finite and infinite limits using limit laws, algebraic cancellation, and the Sandwich Theorem.</li>
                    <li><strong>2.2</strong> Apply the three-condition continuity test and classify removable, jump, and infinite discontinuities.</li>
                    <li><strong>2.3</strong> Compute derivatives from first principles and apply power, linearity, and fundamental trigonometric rules.</li>
                    <li><strong>2.4</strong> Find tangent and normal lines and classify stationary points using the Second Derivative Test.</li>
                </ul>
            </div>

            <!-- 2.1 -->
            <h3>2.1 Limits & The Sandwich Theorem</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A limit doesn't care what happens <em>at</em> $x = c$ (even if there is a hole or $0/0$ there)—it only asks where the curve is heading as you walk toward $c$ from the left and right.</p>
            </div>
            <div class="math-example">
                <div class="math-equation">
                    $$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L, \qquad \lim_{\theta \to 0} \frac{\sin\theta}{\theta} = 1$$
                </div>
                <details class="refresher-pill">
                    <summary>Need a refresher on Half-Angle Identities for Trig Limits?</summary>
                    <p>When you see $1 - \cos\theta$ over $\theta^2$, replace $1 - \cos\theta = 2\sin^2\left(\frac{\theta}{2}\right)$ so you can match $\left(\frac{\sin u}{u}\right)^2 \to 1$.</p>
                </details>
            </div>

            <div class="math-example" data-step-group="calc-2-1">
                <p><strong>Worked Example 2.1:</strong> Evaluate $\displaystyle\lim_{\theta \to 0} \dfrac{\sec\theta - 1}{\theta^2}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: $\frac{0}{0}$ indeterminate form $\implies$ rewrite $\sec\theta = \frac{1}{\cos\theta}$ and combine</span>
                    <div class="math-equation">
                        $$\lim_{\theta \to 0} \frac{\frac{1}{\cos\theta} - 1}{\theta^2} = \lim_{\theta \to 0} \frac{1 - \cos\theta}{\theta^2\cos\theta}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Use $1 - \cos\theta = 2\sin^2(\theta/2)$ to build $\frac{\sin(\theta/2)}{\theta/2} \to 1$</span>
                    <div class="math-equation">
                        $$\lim_{\theta \to 0} \frac{2\sin^2(\theta/2)}{\theta^2\cos\theta} = \lim_{\theta \to 0} \frac{2}{4\cos\theta}\left(\frac{\sin(\theta/2)}{\theta/2}\right)^2 = \frac{1}{2(1)}(1)^2 = \frac{1}{2}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-2-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Multiply numerator and denominator by $5$: $\lim_{x \to 0} 5 \cdot \frac{\sin(5x)}{5x} = 5(1) = 5$.">
                <p><strong>Your Turn (Quick Check 2.1):</strong> Evaluate $\displaystyle\lim_{x \to 0} \dfrac{\sin(5x)}{x}$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$1$</button>
                    <button type="button" class="qc-btn" data-idx="1">$5$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\dfrac{1}{5}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 2.2 -->
            <h3>2.2 Continuity & Discontinuities</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A function is continuous at $x = c$ if you can draw through $(c, f(c))$ without lifting your pen: <strong>(1)</strong> $f(c)$ exists, <strong>(2)</strong> the left and right limits agree, and <strong>(3)</strong> the limit equals the dot $f(c)$.</p>
            </div>

            <div class="math-example" data-step-group="calc-2-2">
                <p><strong>Worked Example 2.2:</strong> Find $k$ so that $f(x) = \begin{cases} \dfrac{x^2 - 9}{x - 3}, & x \neq 3 \\ k, & x = 3 \end{cases}$ is continuous at $x = 3$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Factor and cancel $(x - 3)$ to find the limit, then set $k = \lim_{x \to 3} f(x)$</span>
                    <div class="math-equation">
                        $$k = \lim_{x \to 3} \frac{(x - 3)(x + 3)}{x - 3} = \lim_{x \to 3}(x + 3) = 6$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-2-2">All 1 Steps Revealed</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Factoring $\frac{(x - 4)(x + 4)}{x - 4} = x + 4$. Taking $x \to 4$ gives $4 + 4 = 8$, so $k = 8$ plugs the removable hole.">
                <p><strong>Your Turn (Quick Check 2.2):</strong> What value of $k$ makes $g(x) = \begin{cases} \dfrac{x^2 - 16}{x - 4}, & x \neq 4 \\ k, & x = 4 \end{cases}$ continuous at $x = 4$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$4$</button>
                    <button type="button" class="qc-btn" data-idx="1">$8$</button>
                    <button type="button" class="qc-btn" data-idx="2">$16$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 2.3 -->
            <h3>2.3 Differentiation from First Principles & Basic Rules</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A secant line connects two points separated by $\Delta x$. Shrinking $\Delta x \to 0$ slides the second point onto the first, turning the average rate of change into the exact instantaneous tangent slope $f'(x)$.</p>
            </div>

            <div class="math-example" data-step-group="calc-2-3">
                <p><strong>Worked Example 2.3:</strong> Differentiate $y = 1 + 5x - x^2$ from first principles.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Form $\frac{f(x + \Delta x) - f(x)}{\Delta x}$ and expand brackets</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{\big[1 + 5(x + \Delta x) - (x + \Delta x)^2\big] - (1 + 5x - x^2)}{\Delta x} = \lim_{\Delta x \to 0} \frac{5\Delta x - 2x\Delta x - (\Delta x)^2}{\Delta x}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Factor out $\Delta x$, cancel, and let $\Delta x \to 0$</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} = \lim_{\Delta x \to 0} (5 - 2x - \Delta x) = 5 - 2x$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-2-3">Reveal Next Step (1 / 2)</button>
            </div>

            <!-- 2.4 -->
            <h3>2.4 Tangents, Normals & Turning Points</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> At any stationary point where the tangent is flat ($f'(a) = 0$), the sign of $f''(a)$ tells you how the curve bends: $f''(a) > 0$ bends upward like a cup ($\cup$, local minimum), while $f''(a) < 0$ bends downward like a cap ($\cap$, local maximum).</p>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Tangent vs. Normal Gradient:</strong> The derivative $f'(x_0)$ gives the <strong>tangent</strong> gradient $m_t$. For the perpendicular <strong>normal</strong> line, take the negative reciprocal $m_n = -\frac{1}{m_t}$ (do not forget the minus sign!).</p>
            </div>

            <div class="math-example" data-step-group="calc-2-4">
                <p><strong>Worked Example 2.4:</strong> Find the tangent and normal equations to $y = 2x^3 - 3x^2 - 9x + 15$ at $x = -2$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Evaluate $y(-2)$ for the contact point, then $y'(-2)$ for $m_t$</span>
                    <div class="math-equation">
                        $$y(-2) = 5 \implies P(-2, 5), \qquad y' = 6x^2 - 6x - 9 \implies m_t = 27, \quad m_n = -\frac{1}{27}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Substitute into $y - y_0 = m(x - x_0)$</span>
                    <div class="math-equation">
                        $$\text{Tangent: } y = 27x + 59, \qquad \text{Normal: } x + 27y = 133$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-2-4">Reveal Next Step (1 / 2)</button>
            </div>
            <div class="graph-widget" data-graph="tangent-derivative"></div>
        `
    },

    // ==================================
    // LESSON 3: DIFFERENTIATION RULES & TRANSCENDENTALS (3.1 - 3.4)
    // ==================================
    {
        id: "calc-03-advanced-differentiation",
        title: "Lesson 3: Differentiation Rules & Transcendentals",
        description:
            "3.1 Product, Quotient & Chain Rules • 3.2 Implicit Differentiation • 3.3 Exponential, Log & Inverse Trig Derivatives • 3.4 Logarithmic Differentiation & First Approximations",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 3 Overview & Learning Objectives</h3>
                <p>This lesson expands differentiation to composite, implicit, and transcendental functions and introduces linear error estimation:</p>
                <ul>
                    <li><strong>3.1</strong> Differentiate products, quotients, and nested composite functions using the Product, Quotient, and Chain Rules.</li>
                    <li><strong>3.2</strong> Compute $\frac{dy}{dx}$ for implicitly defined curves $F(x, y) = 0$.</li>
                    <li><strong>3.3</strong> Master the derivatives of exponential, logarithmic, and inverse trigonometric functions.</li>
                    <li><strong>3.4</strong> Use logarithmic differentiation for variable-base/exponent powers $u(x)^{v(x)}$ and estimate small changes via linearization.</li>
                </ul>
            </div>

            <div class="decision-helper" data-helper="diff-chooser">
                <p><strong>Rule Chooser — What structure are you differentiating? (Click a pattern):</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="dif-1">1. Product $u(x)\cdot v(x)$</button>
                    <button type="button" class="dh-btn" data-case="dif-2">2. Quotient $\frac{u(x)}{v(x)}$</button>
                    <button type="button" class="dh-btn" data-case="dif-3">3. Nested $f(g(x))$</button>
                    <button type="button" class="dh-btn" data-case="dif-4">4. Variable Power $[f(x)]^{g(x)}$</button>
                </div>
                <div class="dh-panel active" id="dif-1">
                    <strong>Product Rule:</strong> $\dfrac{d}{dx}(uv) = u\dfrac{dv}{dx} + v\dfrac{du}{dx}$  (differentiate one factor at a time and add).
                </div>
                <div class="dh-panel" id="dif-2">
                    <strong>Quotient Rule:</strong> $\dfrac{d}{dx}\left(\dfrac{u}{v}\right) = \dfrac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$  (if the numerator is just a constant $c$, rewrite as $c\cdot[v(x)]^{-1}$ and use Chain Rule instead!).
                </div>
                <div class="dh-panel" id="dif-3">
                    <strong>Chain Rule:</strong> $\dfrac{d}{dx}\big[f(g(x))\big] = f'(g(x))\cdot g'(x)$  (differentiate the outer shell leaving the inside untouched, then multiply by the derivative of the inside).
                </div>
                <div class="dh-panel" id="dif-4">
                    <strong>Logarithmic Differentiation:</strong> When <em>both</em> base and exponent contain $x$ (e.g., $x^{\sin x}$), take $\ln y = g(x)\ln f(x)$ first, then differentiate implicitly.
                </div>
            </div>

            <!-- 3.1 -->
            <h3>3.1 Product, Quotient & Chain Rules</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> The Chain Rule works like linked gears: if $y$ turns $3$ times as fast as $u$, and $u$ turns $2$ times as fast as $x$, then $y$ turns $3 \times 2 = 6$ times as fast as $x$.</p>
            </div>

            <div class="math-example" data-step-group="calc-3-1">
                <p><strong>Worked Example 3.1:</strong> Differentiate $y = \dfrac{x^2 - 1}{x^2 + 1}$ with respect to $x$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Ratio of two $x$-expressions $\implies$ Quotient Rule ($u = x^2 - 1, v = x^2 + 1$)</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} = \frac{(x^2 + 1)(2x) - (x^2 - 1)(2x)}{(x^2 + 1)^2}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Expand numerator and cancel $2x^3$ terms</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} = \frac{2x^3 + 2x - 2x^3 + 2x}{(x^2 + 1)^2} = \frac{4x}{(x^2 + 1)^2}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-3-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="By the Chain Rule, differentiate the outer $\sin(\cdot)$ to $\cos(3x^2)$, then multiply by the derivative of the inner $3x^2$, which is $6x$: $6x\cos(3x^2)$.">
                <p><strong>Your Turn (Quick Check 3.1):</strong> Differentiate $y = \sin(3x^2)$ with respect to $x$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\cos(3x^2)$</button>
                    <button type="button" class="qc-btn" data-idx="1">$6x\cos(3x^2)$</button>
                    <button type="button" class="qc-btn" data-idx="2">$3x^2\cos(3x^2)$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 3.2 -->
            <h3>3.2 Implicit Differentiation</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Even when an equation like $3xy^3 + x^2 - y = 2$ cannot be rearranged into $y = \dots$, $y$ still depends on $x$. Differentiate straight across with respect to $x$, attaching $\frac{dy}{dx}$ every time you differentiate a $y$ term.</p>
            </div>

            <div class="math-example" data-step-group="calc-3-2">
                <p><strong>Worked Example 3.2:</strong> Find $\dfrac{dy}{dx}$ if $3xy^3 + x^2 - y = 2$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Product Rule on $3xy^3$ + Chain Rule on $y$ terms</span>
                    <div class="math-equation">
                        $$\left(3x \cdot 3y^2\frac{dy}{dx} + y^3 \cdot 3\right) + 2x - \frac{dy}{dx} = 0$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Factor out $\frac{dy}{dx}$ and divide</span>
                    <div class="math-equation">
                        $$(9xy^2 - 1)\frac{dy}{dx} = -2x - 3y^3 \implies \frac{dy}{dx} = \frac{-2x - 3y^3}{9xy^2 - 1}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-3-2">Reveal Next Step (1 / 2)</button>
            </div>

            <!-- 3.3 -->
            <h3>3.3 Exponential, Logarithmic & Inverse Trig Derivatives</h3>
            <div class="math-example">
                <div class="math-equation">
                    $$\begin{aligned}
                    \frac{d}{dx}(e^x) &= e^x, & \frac{d}{dx}(a^x) &= a^x\ln a, & \frac{d}{dx}(\ln|x|) &= \frac{1}{x} \\
                    \frac{d}{dx}(\arcsin x) &= \frac{1}{\sqrt{1 - x^2}}, & \frac{d}{dx}(\arccos x) &= -\frac{1}{\sqrt{1 - x^2}}, & \frac{d}{dx}(\arctan x) &= \frac{1}{1 + x^2}
                    \end{aligned}$$
                </div>
            </div>

            <div class="math-example" data-step-group="calc-3-3">
                <p><strong>Worked Example 3.3:</strong> Differentiate $f(x) = \arctan(3x) + \ln(x^2 + 1)$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Apply Chain Rule to both $\arctan(u)$ and $\ln(u)$</span>
                    <div class="math-equation">
                        $$f'(x) = \frac{1}{1 + (3x)^2}\cdot 3 + \frac{1}{x^2 + 1}\cdot 2x = \frac{3}{1 + 9x^2} + \frac{2x}{x^2 + 1}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-3-3">All 1 Steps Revealed</button>
            </div>

            <!-- 3.4 -->
            <h3>3.4 Logarithmic Differentiation & First Approximations</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Variable Base & Exponent:</strong> For $y = (2x)^{\sin x}$, neither the Power Rule ($\frac{d}{dx}x^n$) nor the Exponential Rule ($\frac{d}{dx}a^x$) applies because <strong>both</strong> base and exponent contain $x$. Take $\ln y$ first!</p>
            </div>

            <div class="math-example" data-step-group="calc-3-4">
                <p><strong>Worked Example 3.4:</strong> Find $\dfrac{dy}{dx}$ for $y = (2x)^{\sin x}$ ($x > 0$).</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Take $\ln$ of both sides to bring $\sin x$ down in front</span>
                    <div class="math-equation">
                        $$\ln y = \sin x \cdot \ln(2x)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Differentiate implicitly and multiply through by $y = (2x)^{\sin x}$</span>
                    <div class="math-equation">
                        $$\frac{1}{y}\frac{dy}{dx} = \cos x \ln(2x) + \frac{\sin x}{x} \implies \frac{dy}{dx} = (2x)^{\sin x}\left(\cos x \ln(2x) + \frac{\sin x}{x}\right)$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-3-4">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="Using $f(x) = \sqrt{x}$ at $x = 4$ with $\Delta x = 0.2$: $f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4} = 0.25$. Thus $\sqrt{4.2} \approx 2 + (0.25)(0.2) = 2.05$.">
                <p><strong>Your Turn (Quick Check 3.4):</strong> Using the linear first approximation $f(x + \Delta x) \approx f(x) + \Delta x \cdot f'(x)$ near $x = 4$, estimate $\sqrt{4.2}$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$2.05$</button>
                    <button type="button" class="qc-btn" data-idx="1">$2.10$</button>
                    <button type="button" class="qc-btn" data-idx="2">$2.025$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 4: INTEGRATION, AREAS, VOLUMES & POLAR CURVES (4.1 - 4.4)
    // ==================================
    {
        id: "calc-04-integration-applications",
        title: "Lesson 4: Integration, Areas, Volumes & Polar Curves",
        description:
            "4.1 Indefinite Integrals • 4.2 Riemann Sums & FTC • 4.3 Area Between Curves • 4.4 Volumes of Revolution & Polar Curve Area",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 4 Overview & Learning Objectives</h3>
                <p>This lesson covers antidifferentiation, definite integrals, and geometric integration applications in Cartesian and polar co-ordinates:</p>
                <ul>
                    <li><strong>4.1</strong> Evaluate indefinite integrals and reverse the Chain Rule for linear and logarithmic forms.</li>
                    <li><strong>4.2</strong> Connect Riemann sums to definite integrals via Parts 1 and 2 of the Fundamental Theorem of Calculus.</li>
                    <li><strong>4.3</strong> Compute net signed integrals and total geometric areas enclosed between intersecting curves.</li>
                    <li><strong>4.4</strong> Calculate volumes by cross-sectional slicing, disc solids of revolution, and areas enclosed by polar curves.</li>
                </ul>
            </div>

            <div class="decision-helper" data-helper="int-chooser">
                <p><strong>Integration Setup Helper — Click what you are computing:</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="int-1">1. Linear Inner $(ax + b)^n$</button>
                    <button type="button" class="dh-btn" data-case="int-2">2. Fraction $\frac{f'(x)}{f(x)}$</button>
                    <button type="button" class="dh-btn" data-case="int-3">3. Area Between Curves</button>
                    <button type="button" class="dh-btn" data-case="int-4">4. Disc Volume vs. Polar Area</button>
                </div>
                <div class="dh-panel active" id="int-1">
                    <strong>Reverse Linear Chain Rule:</strong> $\displaystyle\int (ax + b)^n\,dx = \frac{(ax + b)^{n+1}}{a(n + 1)} + c$  (remember to divide by the inner slope $a$!).
                </div>
                <div class="dh-panel" id="int-2">
                    <strong>Logarithmic Antiderivative:</strong> Whenever the numerator is the derivative of the denominator (up to a constant factor), $\displaystyle\int \frac{f'(x)}{f(x)}\,dx = \ln|f(x)| + c$.
                </div>
                <div class="dh-panel" id="int-3">
                    <strong>Top Minus Bottom:</strong> Always find intersection points first; split the integral wherever the curves cross so each piece integrates $[\text{Top} - \text{Bottom}] \ge 0$.
                </div>
                <div class="dh-panel" id="int-4">
                    <strong>Watch the Leading Constant & Power:</strong> Disc volume around $x$-axis uses $\pi \int_a^b [f(x)]^2\,dx$ ($\pi$ and square), whereas polar area uses $\frac{1}{2}\int_\alpha^\beta [f(\theta)]^2\,d\theta$ ($\frac{1}{2}$ and square).
                </div>
            </div>

            <!-- 4.1 -->
            <h3>4.1 Indefinite Integrals & Reversing the Chain Rule</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Differentiation multiplies by the inner derivative $a$; therefore, integration must <strong>divide by $a$</strong> to undo it. Always add $+ c$ to indefinite integrals because any constant disappears upon differentiation.</p>
            </div>

            <div class="math-example" data-step-group="calc-4-1">
                <p><strong>Worked Example 4.1:</strong> Evaluate $\displaystyle\int \left[(4 - 9x)^{-1/2} + \frac{2x}{x^2 + 5}\right] dx$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: First term has linear inner $4 - 9x$ ($a = -9$); second term has top $= (x^2 + 5)'$</span>
                    <div class="math-equation">
                        $$\int \left[(4 - 9x)^{-1/2} + \frac{2x}{x^2 + 5}\right] dx = \frac{(4 - 9x)^{1/2}}{-9(1/2)} + \ln(x^2 + 5) + c = -\frac{2}{9}\sqrt{4 - 9x} + \ln(x^2 + 5) + c$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-4-1">All 1 Steps Revealed</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Reversing the Chain Rule on $e^{ax}$ divides by $a = 3$: $\int e^{3x}\,dx = \frac{1}{3}e^{3x} + c$.">
                <p><strong>Your Turn (Quick Check 4.1):</strong> Evaluate $\displaystyle\int e^{3x}\,dx$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$3e^{3x} + c$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\dfrac{1}{3}e^{3x} + c$</button>
                    <button type="button" class="qc-btn" data-idx="2">$e^{3x} + c$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 4.2 -->
            <h3>4.2 Riemann Sums & The Fundamental Theorem of Calculus</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> FTC Part 1 says differentiation and integration cancel each other out: $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$ (provided the variable $x$ is at the <strong>top</strong> limit and the bottom limit is a constant).</p>
            </div>

            <div class="math-example" data-step-group="calc-4-2">
                <p><strong>Worked Example 4.2:</strong> Find $\dfrac{d}{dx}\displaystyle\int_x^5 \sqrt{t^3 + 1}\,dt$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Variable $x$ is in the lower limit $\implies$ swap limits (adding a minus sign) and apply FTC Part 1</span>
                    <div class="math-equation">
                        $$\frac{d}{dx}\int_x^5 \sqrt{t^3 + 1}\,dt = -\frac{d}{dx}\int_5^x \sqrt{t^3 + 1}\,dt = -\sqrt{x^3 + 1}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-4-2">All 1 Steps Revealed</button>
            </div>

            <!-- 4.3 -->
            <h3>4.3 Area Between Curves</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Net Integral vs. Total Geometric Area:</strong> Integrating $\int_a^b f(x)\,dx$ counts area below the $x$-axis as <strong>negative</strong>. If two curves cross inside $[a, b]$, you must split the integral at the crossing point so negative regions don't cancel positive regions.</p>
            </div>

            <div class="math-example" data-step-group="calc-4-3">
                <p><strong>Worked Example 4.3:</strong> Find the total area enclosed by $y = x^3 + x^2$ and $y = 2x$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Set curves equal to find all intersection points</span>
                    <div class="math-equation">
                        $$x^3 + x^2 - 2x = 0 \implies x(x + 2)(x - 1) = 0 \implies x = -2,\; 0,\; 1$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Split at $x = 0$ where top and bottom curves swap</span>
                    <div class="math-equation">
                        $$A = \int_{-2}^0 (x^3 + x^2 - 2x)\,dx + \int_0^1 (2x - x^3 - x^2)\,dx = \frac{8}{3} + \frac{5}{12} = \frac{37}{12}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-4-3">Reveal Next Step (1 / 2)</button>
            </div>
            <div class="graph-widget" data-graph="area-integral"></div>

            <!-- 4.4 -->
            <h3>4.4 Volumes of Revolution & Polar Curve Areas</h3>
            <div class="math-example" data-step-group="calc-4-4">
                <p><strong>Worked Example 4.4:</strong> Find the volume generated when $y = \sec x$ on $\left[0, \frac{\pi}{3}\right]$ is rotated $2\pi$ radians about the $x$-axis.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Rotation about $x$-axis $\implies V_x = \pi\int_a^b [f(x)]^2\,dx$</span>
                    <div class="math-equation">
                        $$V_x = \pi\int_0^{\pi/3} \sec^2 x\,dx = \pi\Big[\tan x\Big]_0^{\pi/3} = \pi\sqrt{3}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-4-4">All 1 Steps Revealed</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="A thin polar wedge of angle $d\theta$ is a circular sector of area $\frac{1}{2}r^2\,d\theta$, so polar area is $A = \frac{1}{2}\int_\alpha^\beta [f(\theta)]^2\,d\theta$.">
                <p><strong>Your Turn (Quick Check 4.4):</strong> What constant factor sits in front of $\displaystyle\int_\alpha^\beta [f(\theta)]^2\,d\theta$ in the polar area formula?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\pi$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\dfrac{1}{2}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$2\pi$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 5: OPTIMIZATION, CURVE SKETCHING & RELATED RATES (5.1 - 5.3)
    // ==================================
    {
        id: "calc-05-optimization-curves-rates",
        title: "Lesson 5: Optimization, Curve Sketching & Related Rates",
        description:
            "5.1 Applied Optimization • 5.2 Curve Sketching, Concavity & Asymptotes • 5.3 Related Rates of Change",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 5 Overview & Learning Objectives</h3>
                <p>This lesson synthesizes differential calculus to solve real-world engineering design, graphing, and dynamic rate problems:</p>
                <ul>
                    <li><strong>5.1</strong> Formulate single-variable objective functions from geometric or physical constraints and verify global extrema.</li>
                    <li><strong>5.2</strong> Sketch complete graphs using intercepts, stationary points, concavity, inflection points, and all three asymptote types.</li>
                    <li><strong>5.3</strong> Relate rates of change of coupled time-varying quantities using implicit differentiation and the Chain Rule.</li>
                </ul>
            </div>

            <!-- 5.1 -->
            <h3>5.1 Applied Optimization</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Every optimization problem has <em>two</em> equations: an <strong>objective</strong> you want to maximize/minimize (like volume or flow), and a <strong>constraint</strong> (like fixed perimeter or material). Use the constraint to eliminate one variable before you differentiate.</p>
            </div>

            <div class="math-example" data-step-group="calc-5-1">
                <p><strong>Worked Example 5.1:</strong> Tunnel traffic flow $y$ relates to density $x$ by $y = -32x\ln\left(\frac{x}{100}\right)$ ($0 < x < 100$). Find the maximum flow rate.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Product of $-32x$ and $\ln(x/100)$ $\implies$ differentiate via Product Rule</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} = -32\ln\left(\frac{x}{100}\right) - 32x \cdot \frac{1}{x} = -32\left[\ln\left(\frac{x}{100}\right) + 1\right]$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Solve $\frac{dy}{dx} = 0$, verify $y'' < 0$, and compute $y_{\max}$</span>
                    <div class="math-equation">
                        $$\ln\left(\frac{x}{100}\right) = -1 \implies x = \frac{100}{e}, \qquad y_{\max} = -32\left(\frac{100}{e}\right)(-1) = \frac{3200}{e} \approx 1177.2\text{ cars/hr}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-5-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Single-variable calculus requires expressing $A$ in terms of one variable first: $2x + 2y = 40 \implies y = 20 - x$, so $A(x) = x(20 - x)$.">
                <p><strong>Your Turn (Quick Check 5.1):</strong> To maximize rectangular area $A = xy$ subject to fixed perimeter $2x + 2y = 40$, what is your first step?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">Differentiate $xy$ directly</button>
                    <button type="button" class="qc-btn" data-idx="1">Eliminate $y = 20 - x$ first</button>
                    <button type="button" class="qc-btn" data-idx="2">Set $x = 0$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 5.2 -->
            <h3>5.2 Curve Sketching, Concavity & Asymptotes</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> When a rational function $y = \frac{T(x)}{B(x)}$ has numerator degree exactly $1$ higher than denominator degree ($\deg T = \deg B + 1$), polynomial long division reveals a straight line $y = mx + c$ that the curve hugs as $x \to \pm\infty$ (an <strong>oblique asymptote</strong>).</p>
            </div>

            <div class="math-example" data-step-group="calc-5-2">
                <p><strong>Worked Example 5.2:</strong> Find all asymptotes of $y = \dfrac{x^2 + x + 1}{x + 1}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Denominator zero gives vertical asymptote; long division gives oblique asymptote</span>
                    <div class="math-equation">
                        $$x + 1 = 0 \implies \text{Vertical: } x = -1; \qquad y = x + \frac{1}{x + 1} \implies \text{Oblique: } y = x$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-5-2">All 1 Steps Revealed</button>
            </div>

            <!-- 5.3 -->
            <h3>5.3 Related Rates of Change</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Freeze the Snapshot <em>After</em> Differentiating:</strong> Never plug in instantaneous numbers (like $V = 9\pi$ or $r = 5$) before taking $\frac{d}{dt}$. Differentiating a number gives $0$; differentiate the general variable formula first, then substitute the snapshot values.</p>
            </div>

            <div class="math-example" data-step-group="calc-5-3">
                <p><strong>Worked Example 5.3:</strong> Sand falls at $\pi\text{ m}^3/\text{min}$ onto a conical pile with $r = h$. Find $\frac{dh}{dt}$ when $V = 9\pi\text{ m}^3$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Replace $r = h$ in $V = \frac{1}{3}\pi r^2 h$ and differentiate with respect to $t$</span>
                    <div class="math-equation">
                        $$V = \frac{1}{3}\pi h^3 \implies \frac{dV}{dt} = \pi h^2 \frac{dh}{dt}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Find snapshot $h$ from $V = 9\pi$, then plug in $\frac{dV}{dt} = \pi$</span>
                    <div class="math-equation">
                        $$\frac{1}{3}\pi h^3 = 9\pi \implies h = 3\text{ m} \implies \pi = \pi(3)^2\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{1}{9}\text{ m/min}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-5-3">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Differentiating $A = \pi r^2$ with respect to $t$ gives $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$. Substituting $r = 3$ and $\frac{dr}{dt} = 2$ yields $2\pi(3)(2) = 12\pi$.">
                <p><strong>Your Turn (Quick Check 5.3):</strong> A circle's radius grows at $\frac{dr}{dt} = 2\text{ cm/s}$. How fast is its area $A = \pi r^2$ growing when $r = 3\text{ cm}$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$6\pi\text{ cm}^2/\text{s}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$12\pi\text{ cm}^2/\text{s}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$18\pi\text{ cm}^2/\text{s}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 6: TECHNIQUES OF INTEGRATION & IMPROPER INTEGRALS (MATH1043 CH 1)
    // ==================================
    {
        id: "calc-06-integration-techniques",
        title: "Lesson 6: Techniques of Integration & Improper Integrals",
        description:
            "6.1 u-Substitution • 6.2 Integration by Parts (LIATE) • 6.3 Trig Integrals & Trig Substitution • 6.4 Partial Fractions & Improper Integrals",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 6 Overview & Learning Objectives</h3>
                <p>This lesson equips you with the complete arsenal of analytical integration methods and convergence tests for infinite or singular integrals:</p>
                <ul>
                    <li><strong>6.1–6.2</strong> Apply $u$-substitution (with limit conversion) and Integration by Parts (LIATE priority and cyclic boomerang integrals).</li>
                    <li><strong>6.3</strong> Evaluate trigonometric power integrals and eliminate radicals $\sqrt{a^2 \pm x^2}, \sqrt{x^2 - a^2}$ via trigonometric substitution.</li>
                    <li><strong>6.4</strong> Integrate rational functions with completed-square $\arctan$ terms and evaluate Type 1 and Type 2 improper integrals.</li>
                </ul>
            </div>

            <div class="decision-helper" data-helper="tech-int-chooser">
                <p><strong>Integration Technique Selector — Match your integrand's signature:</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="ti-1">1. Composite $f(g(x))g'(x)$</button>
                    <button type="button" class="dh-btn" data-case="ti-2">2. Mixed Product ($x^n e^x$, $x^n \ln x$)</button>
                    <button type="button" class="dh-btn" data-case="ti-3">3. Radicals $\sqrt{a^2 - x^2}, \sqrt{a^2 + x^2}, \sqrt{x^2 - a^2}$</button>
                    <button type="button" class="dh-btn" data-case="ti-4">4. Infinite Bound $\infty$ or Asymptote</button>
                </div>
                <div class="dh-panel active" id="ti-1">
                    <strong>$u$-Substitution:</strong> Let $u = g(x)$, $du = g'(x)\,dx$. For definite integrals, convert the limits $x \in [a, b] \to u \in [g(a), g(b)]$ so you never need to back-substitute.
                </div>
                <div class="dh-panel" id="ti-2">
                    <strong>Integration by Parts ($\int u\,dv = uv - \int v\,du$):</strong> Choose $u$ using <strong>LIATE</strong> (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential)—whichever appears first becomes $u$.
                </div>
                <div class="dh-panel" id="ti-3">
                    <strong>Trigonometric Substitution:</strong> Use $x = a\sin\theta$ for $\sqrt{a^2 - x^2}$; $x = a\tan\theta$ for $\sqrt{a^2 + x^2}$; $x = a\sec\theta$ for $\sqrt{x^2 - a^2}$. Draw a right triangle to return to $x$.
                </div>
                <div class="dh-panel" id="ti-4">
                    <strong>Improper Integrals:</strong> Replace $\infty$ (or a discontinuity point) with a dummy limit $t$, integrate normally on a closed interval, and take $\lim_{t \to \infty}$ (or one-sided limit) at the very end.
                </div>
            </div>

            <!-- 6.1 & 6.2 -->
            <h3>6.1–6.2 $u$-Substitution & Integration by Parts</h3>
            <div class="math-example" data-step-group="calc-6-1">
                <p><strong>Worked Example 6.1:</strong> Evaluate (a) $\displaystyle\int_0^1 x e^{-x^2}\,dx$ and (b) $\displaystyle\int x^2 \ln x\,dx$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: Inner $-x^2$ has derivative $-2x$ outside $\implies$ substitute $u = -x^2$ and update limits</span>
                    <div class="math-equation">
                        $$u = -x^2 \implies du = -2x\,dx; \quad x = 0 \to u = 0, \; x = 1 \to u = -1 \implies \int_0^{-1} -\frac{1}{2}e^u\,du = \frac{1}{2}\Big[e^u\Big]_{-1}^0 = \frac{1 - e^{-1}}{2}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: Algebraic $\times$ Logarithmic $\implies$ LIATE picks $u = \ln x$ and $dv = x^2\,dx$</span>
                    <div class="math-equation">
                        $$\int x^2 \ln x\,dx = \frac{x^3}{3}\ln x - \int \frac{x^3}{3}\cdot\frac{1}{x}\,dx = \frac{x^3}{3}\ln x - \frac{x^3}{9} + C$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-6-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="By LIATE, Algebraic ($x$) precedes Trigonometric ($\sin 3x$), so setting $u = x$ ($du = dx$) and $dv = \sin(3x)\,dx$ reduces the power of $x$ to $1$.">
                <p><strong>Your Turn (Quick Check 6.1):</strong> When evaluating $\displaystyle\int x\sin(3x)\,dx$ via Integration by Parts, which choice of $u$ and $dv$ simplifies the integral?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$u = x, \quad dv = \sin(3x)\,dx$</button>
                    <button type="button" class="qc-btn" data-idx="1">$u = \sin(3x), \quad dv = x\,dx$</button>
                    <button type="button" class="qc-btn" data-idx="2">$u = x\sin(3x), \quad dv = dx$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 6.3 -->
            <h3>6.3 Trigonometric Substitution</h3>
            <div class="math-example" data-step-group="calc-6-3">
                <p><strong>Worked Example 6.3:</strong> Evaluate $\displaystyle\int \frac{dx}{(4 + x^2)^{3/2}}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Form $a^2 + x^2$ with $a = 2$ $\implies$ substitute $x = 2\tan\theta$, $dx = 2\sec^2\theta\,d\theta$</span>
                    <div class="math-equation">
                        $$\int \frac{2\sec^2\theta\,d\theta}{(4 + 4\tan^2\theta)^{3/2}} = \int \frac{2\sec^2\theta}{8\sec^3\theta}\,d\theta = \frac{1}{4}\int \cos\theta\,d\theta = \frac{1}{4}\sin\theta + C$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Right triangle with $\tan\theta = \frac{x}{2}$ ($\text{hyp} = \sqrt{x^2 + 4}$) $\implies$ convert $\sin\theta$ back to $x$</span>
                    <div class="math-equation">
                        $$\sin\theta = \frac{x}{\sqrt{x^2 + 4}} \implies \int \frac{dx}{(4 + x^2)^{3/2}} = \frac{x}{4\sqrt{x^2 + 4}} + C$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-6-3">Reveal Next Step (1 / 2)</button>
            </div>

            <!-- 6.4 -->
            <h3>6.4 Improper Integrals (Type 1 & Type 2)</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Hidden Vertical Asymptotes (Type 2):</strong> Before applying FTC Part 2 to $\int_a^b f(x)\,dx$, check whether $f(x)$ blows up at an endpoint or inside $(a, b)$ (for example, $\int_{-1}^1 \frac{1}{x^2}\,dx$ has a pole at $x = 0$ and <strong>diverges</strong>—evaluating $[-1/x]_{-1}^1 = -2$ is completely wrong!).</p>
            </div>

            <div class="math-example" data-step-group="calc-6-4">
                <p><strong>Worked Example 6.4:</strong> Determine convergence and evaluate (a) $\displaystyle\int_1^\infty \frac{1}{x^3}\,dx$ and (b) $\displaystyle\int_0^4 \frac{1}{\sqrt{x}}\,dx$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Type 1) • Trigger: Upper limit $\infty$ $\implies$ replace with $t$ and take $t \to \infty$</span>
                    <div class="math-equation">
                        $$\int_1^\infty x^{-3}\,dx = \lim_{t \to \infty}\left[-\frac{1}{2x^2}\right]_1^t = \lim_{t \to \infty}\left(-\frac{1}{2t^2} + \frac{1}{2}\right) = \frac{1}{2} \quad (\text{Converges})$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Type 2) • Trigger: Discontinuous at $x = 0$ $\implies$ approach from the right ($t \to 0^+$)</span>
                    <div class="math-equation">
                        $$\int_0^4 x^{-1/2}\,dx = \lim_{t \to 0^+}\Big[2\sqrt{x}\Big]_t^4 = \lim_{t \to 0^+}(4 - 2\sqrt{t}) = 4 \quad (\text{Converges})$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-6-4">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="The $p$-integral $\int_1^\infty \frac{1}{x^p}\,dx$ converges if and only if $p > 1$ (evaluating to $\frac{1}{p - 1}$) and diverges for $p \le 1$.">
                <p><strong>Your Turn (Quick Check 6.4):</strong> For what values of $p$ does the improper $p$-integral $\displaystyle\int_1^\infty \frac{1}{x^p}\,dx$ converge?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$p \ge 1$</button>
                    <button type="button" class="qc-btn" data-idx="1">$p > 1$</button>
                    <button type="button" class="qc-btn" data-idx="2">$0 < p < 1$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 7: AREAS, ARC LENGTHS, PARAMETRIC & POLAR CURVES (MATH1043 CH 2)
    // ==================================
    {
        id: "calc-07-areas-arc-lengths",
        title: "Lesson 7: Areas, Arc Lengths, Parametric & Polar Curves",
        description:
            "7.1 Horizontal Area Slicing (dy) • 7.2 Plane Curve Arc Length • 7.3 Parametric Derivatives & Arc Length • 7.4 Polar Areas & Arc Lengths",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 7 Overview & Learning Objectives</h3>
                <p>This lesson generalizes geometric integration to horizontal slicing, curve lengths, parametric trajectories, and polar regions:</p>
                <ul>
                    <li><strong>7.1–7.2</strong> Compute areas by integrating with respect to $y$ and find exact arc lengths of plane curves $y = f(x)$.</li>
                    <li><strong>7.3</strong> Compute first and second derivatives $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$ and arc lengths for parametric curves.</li>
                    <li><strong>7.4</strong> Calculate enclosed areas between intersecting polar curves and polar arc lengths.</li>
                </ul>
            </div>

            <!-- 7.1 & 7.2 -->
            <h3>7.1–7.2 Horizontal Slicing & Plane Curve Arc Length</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> Zooming in on a tiny piece of a smooth curve turns it into the hypotenuse of a microscopic right triangle with legs $dx$ and $dy$, giving $ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{1 + (dy/dx)^2}\,dx$. Textbook arc-length problems are engineered so that $1 + [f'(x)]^2$ factors into a <em>perfect square</em> that cancels the square root!</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$A = \int_c^d \big[x_{\text{right}}(y) - x_{\text{left}}(y)\big]\,dy, \qquad L = \int_a^b \sqrt{1 + \big[f'(x)\big]^2}\,dx$$
                </div>
            </div>

            <div class="math-example" data-step-group="calc-7-1">
                <p><strong>Worked Example 7.1:</strong> Find the exact arc length of $y = \dfrac{1}{3}(x^2 + 2)^{3/2}$ from $x = 0$ to $x = 3$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Differentiate $f(x)$ and simplify $1 + [f'(x)]^2$ into a perfect square</span>
                    <div class="math-equation">
                        $$f'(x) = \frac{1}{3}\cdot\frac{3}{2}(x^2 + 2)^{1/2}(2x) = x\sqrt{x^2 + 2} \implies 1 + [f'(x)]^2 = 1 + x^4 + 2x^2 = (x^2 + 1)^2$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Cancel square root against $(x^2 + 1)^2$ and integrate</span>
                    <div class="math-equation">
                        $$L = \int_0^3 \sqrt{(x^2 + 1)^2}\,dx = \int_0^3 (x^2 + 1)\,dx = \left[\frac{x^3}{3} + x\right]_0^3 = 9 + 3 = 12$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-7-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="0" data-explanation="Differentiating $y = \ln(\cos x)$ gives $y' = -\tan x$. Thus $\sqrt{1 + (-\tan x)^2} = \sqrt{\sec^2 x} = \sec x$ on $[0, \frac{\pi}{4}]$.">
                <p><strong>Your Turn (Quick Check 7.1):</strong> Which definite integral gives the exact arc length of $y = \ln(\cos x)$ on $\left[0, \dfrac{\pi}{4}\right]$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\displaystyle\int_0^{\pi/4} \sec x\,dx$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\displaystyle\int_0^{\pi/4} \tan x\,dx$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\displaystyle\int_0^{\pi/4} \sec^2 x\,dx$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 7.3 & 7.4 -->
            <h3>7.3–7.4 Parametric Calculus & Polar Arc Lengths / Areas</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Parametric Second Derivative $\frac{d^2y}{dx^2}$:</strong> Do <strong>not</strong> divide $y''(t)$ by $x''(t)$! Apply the Chain Rule to $y' = \frac{dy}{dx}$: differentiate $\frac{dy}{dx}$ with respect to $t$, and then divide <em>again</em> by $\frac{dx}{dt}$.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}, \qquad \frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}, \qquad L_{\text{param}} = \int_\alpha^\beta \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt, \qquad L_{\text{polar}} = \int_\alpha^\beta \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$$
                </div>
            </div>

            <div class="math-example" data-step-group="calc-7-3">
                <p><strong>Worked Example 7.3:</strong> (a) Find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$ at $t = 2$ for $x = t^2 + 1$, $y = t^3 - 3t$. (b) Find the total perimeter (arc length) of the cardioid $r = 1 + \cos\theta$ ($\theta \in [0, 2\pi]$).</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: Compute $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$, differentiate wrt $t$, and divide by $\frac{dx}{dt}$</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} = \frac{3t^2 - 3}{2t} = \frac{3}{2}t - \frac{3}{2}t^{-1} \implies \frac{d^2y}{dx^2} = \frac{\frac{3}{2} + \frac{3}{2t^2}}{2t} \xrightarrow{t=2} \frac{15/8}{4} = \frac{15}{32}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: Use $1 + \cos\theta = 2\cos^2(\theta/2)$ to remove the radical</span>
                    <div class="math-equation">
                        $$r^2 + \left(\frac{dr}{d\theta}\right)^2 = (1 + \cos\theta)^2 + (-\sin\theta)^2 = 2 + 2\cos\theta = 4\cos^2\left(\frac{\theta}{2}\right)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 (Part b) • Trigger: Use symmetry ($2\int_0^\pi$) so $\cos(\theta/2) \ge 0$ on $[0, \pi]$</span>
                    <div class="math-equation">
                        $$L = 2\int_0^\pi 2\cos\left(\frac{\theta}{2}\right) d\theta = 4\left[2\sin\left(\frac{\theta}{2}\right)\right]_0^\pi = 8$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-7-3">Reveal Next Step (1 / 3)</button>
            </div>
            <div class="graph-widget" data-graph="polar-curves"></div>

            <div class="quick-check" data-answer="1" data-explanation="By the Chain Rule, $\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}(dy/dx)}{dx/dt}$.">
                <p><strong>Your Turn (Quick Check 7.3):</strong> For a parametric curve $x = f(t), \; y = g(t)$, which formula gives $\dfrac{d^2y}{dx^2}$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$\dfrac{d^2y/dt^2}{d^2x/dt^2}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$\dfrac{\frac{d}{dt}(dy/dx)}{dx/dt}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$\dfrac{\frac{d}{dt}(dy/dx)}{dy/dt}$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 8: L'HOPITAL'S RULE, SERIES CONVERGENCE & TAYLOR SERIES (MATH1043 CH 3)
    // ==================================
    {
        id: "calc-08-lhopital-series-taylor",
        title: "Lesson 8: l'Hôpital's Rule, Series Convergence & Taylor Series",
        description:
            "8.1 l'Hôpital's Rule & Exponential Forms • 8.2 Series Convergence Tests • 8.3 Power Series & Interval of Convergence • 8.4 Taylor & Maclaurin Series",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 8 Overview & Learning Objectives</h3>
                <p>This lesson covers indeterminate limit evaluation, infinite series convergence diagnostics, and polynomial series representations:</p>
                <ul>
                    <li><strong>8.1</strong> Evaluate $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0\cdot\infty$, $\infty - \infty$, and $1^\infty, 0^0, \infty^0$ limits using l'Hôpital's Rule.</li>
                    <li><strong>8.2</strong> Test infinite series for absolute, conditional, or divergent behavior using Divergence, $p$-Series, Comparison, Alternating Series, and Ratio Tests.</li>
                    <li><strong>8.3</strong> Determine the radius $R$ and interval of convergence $I$ (including endpoint checks) for power series.</li>
                    <li><strong>8.4</strong> Construct Taylor and Maclaurin series and use them to approximate functions and evaluate limits.</li>
                </ul>
            </div>

            <!-- 8.1 -->
            <h3>8.1 Indeterminate Forms & l'Hôpital's Rule</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Verify Indeterminate Form First & Differentiate Top/Bottom Separately:</strong> l'Hôpital's Rule ONLY applies to $\frac{0}{0}$ or $\frac{\infty}{\infty}$—never apply it if the denominator limit is non-zero, and differentiate numerator and denominator <em>independently</em> ($\frac{f'(x)}{g'(x)}$, NOT the Quotient Rule!). For $1^\infty, 0^0, \infty^0$, take $\ln y$ first and remember to exponentiate $e^L$ at the end.</p>
            </div>

            <div class="math-example" data-step-group="calc-8-1">
                <p><strong>Worked Example 8.1:</strong> Evaluate $\displaystyle\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^{2x}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Form $1^\infty$ $\implies$ set $y = \left(1 + \frac{3}{x}\right)^{2x}$ and take $\ln y$ to form a $\frac{0}{0}$ ratio</span>
                    <div class="math-equation">
                        $$\ln y = 2x\ln\left(1 + \frac{3}{x}\right) = \frac{2\ln(1 + 3/x)}{1/x} \quad \left(\text{type } \frac{0}{0} \text{ as } x \to \infty\right)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Apply l'Hôpital's Rule and exponentiate back ($y = e^{\ln y}$)</span>
                    <div class="math-equation">
                        $$\lim_{x \to \infty} \ln y = \lim_{x \to \infty} \frac{2\cdot\frac{-3/x^2}{1 + 3/x}}{-1/x^2} = \lim_{x \to \infty} \frac{6}{1 + 3/x} = 6 \implies \lim_{x \to \infty} y = e^6$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-8-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Both top and bottom vanish at $x = 0$ ($\frac{0}{0}$). Applying l'Hôpital's Rule twice gives $\lim_{x \to 0}\frac{2e^{2x} - 2}{2x} = \lim_{x \to 0}\frac{4e^{2x}}{2} = 2$.">
                <p><strong>Your Turn (Quick Check 8.1):</strong> Evaluate $\displaystyle\lim_{x \to 0} \dfrac{e^{2x} - 1 - 2x}{x^2}$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$1$</button>
                    <button type="button" class="qc-btn" data-idx="1">$2$</button>
                    <button type="button" class="qc-btn" data-idx="2">$4$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 8.2 & 8.3 -->
            <h3>8.2–8.3 Series Convergence Tests & Power Series Interval</h3>
            <div class="decision-helper" data-helper="series-chooser">
                <p><strong>Series Convergence Diagnostic — Pick the structure of $\sum a_n$:</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="ser-1">1. $\lim a_n \neq 0$</button>
                    <button type="button" class="dh-btn" data-case="ser-2">2. $p$-Series $\sum \frac{1}{n^p}$</button>
                    <button type="button" class="dh-btn" data-case="ser-3">3. Alternating $\sum (-1)^n b_n$</button>
                    <button type="button" class="dh-btn" data-case="ser-4">4. Factorials $n!$ or Powers $x^n$</button>
                </div>
                <div class="dh-panel active" id="ser-1">
                    <strong>$n$-th Term Divergence Test:</strong> If $\lim_{n \to \infty} a_n \neq 0$, the series <strong>diverges immediately</strong>. (Warning: $\lim a_n = 0$ alone does <em>not</em> guarantee convergence!)
                </div>
                <div class="dh-panel" id="ser-2">
                    <strong>$p$-Series Benchmark:</strong> Converges if $p > 1$; diverges if $p \le 1$ (including the harmonic series $p = 1$).
                </div>
                <div class="dh-panel" id="ser-3">
                    <strong>Alternating Series Test (Leibniz):</strong> If $b_n > 0$ is eventually non-increasing ($b_{n+1} \le b_n$) and $\lim_{n \to \infty} b_n = 0$, the alternating series converges.
                </div>
                <div class="dh-panel" id="ser-4">
                    <strong>Ratio Test:</strong> Compute $L = \lim_{n \to \infty}\left|\frac{a_{n+1}}{a_n}\right|$. Converges absolutely if $L < 1$, diverges if $L > 1$, and is <strong>inconclusive if $L = 1$</strong> (which is why power series endpoints must be tested separately!).
                </div>
            </div>

            <div class="math-example" data-step-group="calc-8-2">
                <p><strong>Worked Example 8.2:</strong> Find the radius $R$ and interval of convergence $I$ of $\displaystyle\sum_{n=1}^{\infty} \frac{(x - 2)^n}{n \cdot 3^n}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Apply the Ratio Test to find where $L < 1$</span>
                    <div class="math-equation">
                        $$L = \lim_{n \to \infty}\left|\frac{(x - 2)^{n+1}}{(n + 1)3^{n+1}} \cdot \frac{n \cdot 3^n}{(x - 2)^n}\right| = \frac{|x - 2|}{3} < 1 \iff |x - 2| < 3 \implies R = 3, \quad x \in (-1, 5)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Test both endpoints $x = -1$ and $x = 5$ individually</span>
                    <ul>
                        <li>At $x = -1$: $\displaystyle\sum_{n=1}^{\infty} \frac{(-3)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ (Alternating Harmonic Series $\implies$ <strong>converges</strong>).</li>
                        <li>At $x = 5$: $\displaystyle\sum_{n=1}^{\infty} \frac{3^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{1}{n}$ (Harmonic $p$-series, $p = 1 \implies$ <strong>diverges</strong>).</li>
                    </ul>
                    <p>Hence the interval of convergence is <strong>$I = [-1, 5)$</strong>.</p>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-8-2">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="2" data-explanation="When $L = \lim_{n \to \infty}|a_{n+1}/a_n| = 1$, the Ratio Test gives no information—both $\sum \frac{1}{n}$ (divergent) and $\sum \frac{1}{n^2}$ (convergent) have $L = 1$.">
                <p><strong>Your Turn (Quick Check 8.2):</strong> If the Ratio Test gives $L = \displaystyle\lim_{n \to \infty}\left|\frac{a_{n+1}}{a_n}\right| = 1$, what can you conclude?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">The series converges conditionally</button>
                    <button type="button" class="qc-btn" data-idx="1">The series diverges</button>
                    <button type="button" class="qc-btn" data-idx="2">The Ratio Test is inconclusive</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 8.4 -->
            <h3>8.4 Taylor & Maclaurin Series</h3>
            <div class="math-example">
                <div class="math-equation">
                    $$\begin{aligned}
                    f(x) &= \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n, & e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots \\
                    \sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n + 1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots, & \cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots
                    \end{aligned}$$
                </div>
            </div>

            <div class="math-example" data-step-group="calc-8-4">
                <p><strong>Worked Example 8.4:</strong> Find the degree-3 Taylor polynomial $T_3(x)$ for $f(x) = \ln x$ centered at $a = 1$, and use the Maclaurin series for $\sin x$ to evaluate $\displaystyle\lim_{x \to 0} \frac{\sin x - x}{x^3}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Evaluate $f(1), f'(1), f''(1), f'''(1)$ and divide by $n!$</span>
                    <div class="math-equation">
                        $$f(1) = 0, \; f'(1) = 1, \; f''(1) = -1, \; f'''(1) = 2 \implies T_3(x) = (x - 1) - \frac{1}{2}(x - 1)^2 + \frac{1}{3}(x - 1)^3$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Substitute $\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \dots$ into the limit</span>
                    <div class="math-equation">
                        $$\lim_{x \to 0} \frac{\left(x - \frac{x^3}{6} + \frac{x^5}{120} - \dots\right) - x}{x^3} = \lim_{x \to 0}\left(-\frac{1}{6} + \frac{x^2}{120} - \dots\right) = -\frac{1}{6}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-8-4">Reveal Next Step (1 / 2)</button>
            </div>
        `
    },

    // ==================================
    // LESSON 9: PARTIAL DIFFERENTIATION, GRADIENTS & 3D OPTIMIZATION (MATH1043 CH 4)
    // ==================================
    {
        id: "calc-09-partial-differentiation",
        title: "Lesson 9: Partial Differentiation, Gradients & 3D Optimization",
        description:
            "9.1 Partial Derivatives & Clairaut's Theorem • 9.2 Tangent Planes & Total Differentials • 9.3 Multivariable Chain Rule • 9.4 Gradients, Directional Derivatives & Saddle Points",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 9 Overview & Learning Objectives</h3>
                <p>This lesson extends differential calculus to multivariable surfaces $z = f(x, y)$:</p>
                <ul>
                    <li><strong>9.1–9.2</strong> Compute first- and second-order partial derivatives, tangent plane equations, and total differentials $dz$.</li>
                    <li><strong>9.3</strong> Apply the Multivariable Chain Rule and implicit partial differentiation.</li>
                    <li><strong>9.4</strong> Compute directional derivatives via the gradient vector $\nabla f$ and classify 3D local extrema and saddle points using the Second Derivative Test.</li>
                </ul>
            </div>

            <!-- 9.1 & 9.2 -->
            <h3>9.1–9.2 Partial Derivatives, Tangent Planes & Total Differentials</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> To compute $\frac{\partial f}{\partial x}$ ($f_x$), treat $y$ as a frozen constant and differentiate normally with respect to $x$. Geometrically, $f_x(x_0, y_0)$ and $f_y(x_0, y_0)$ are the slopes of the surface in the $x$- and $y$-directions, spanning the tangent plane at $(x_0, y_0, z_0)$.</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\text{Tangent Plane: } z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0), \qquad \text{Total Differential: } dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy$$
                </div>
            </div>

            <div class="math-example" data-step-group="calc-9-1">
                <p><strong>Worked Example 9.1:</strong> Find the equation of the tangent plane to $z = f(x, y) = x^2 y + e^{y - 1}$ at $(2, 1)$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Evaluate $z_0 = f(2, 1)$ and both first partial derivatives at $(2, 1)$</span>
                    <div class="math-equation">
                        $$z_0 = 2^2(1) + e^0 = 5, \qquad f_x = 2xy \implies f_x(2, 1) = 4, \qquad f_y = x^2 + e^{y - 1} \implies f_y(2, 1) = 4 + 1 = 5$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Substitute into the tangent plane formula and simplify</span>
                    <div class="math-equation">
                        $$z - 5 = 4(x - 2) + 5(y - 1) \implies z = 4x + 5y - 8$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-9-1">Reveal Next Step (1 / 2)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="Differentiate $f(x, y) = x^3 y^2 + 5y$ first with respect to $x$ (holding $y$ constant): $f_x = 3x^2 y^2$. Then differentiate with respect to $y$ (holding $x$ constant): $f_{xy} = 6x^2 y$.">
                <p><strong>Your Turn (Quick Check 9.1):</strong> If $f(x, y) = x^3 y^2 + 5y$, find the mixed partial derivative $f_{xy} = \dfrac{\partial^2 f}{\partial y\,\partial x}$.</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$3x^2 y^2 + 5$</button>
                    <button type="button" class="qc-btn" data-idx="1">$6x^2 y$</button>
                    <button type="button" class="qc-btn" data-idx="2">$6xy^2$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 9.3 & 9.4 -->
            <h3>9.3–9.4 Gradient, Directional Derivatives & 3D Extrema</h3>
            <div class="pitfall-card">
                <p><strong>Exam Trap — Always Normalize $\mathbf{u}$ in Directional Derivatives:</strong> The directional derivative formula $D_{\mathbf{u}} f = \nabla f \cdot \hat{\mathbf{u}}$ requires a <strong>unit vector</strong> $\hat{\mathbf{u}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$. Dotting $\nabla f$ directly with a non-unit vector scales your answer by $\|\mathbf{v}\|$!</p>
            </div>

            <div class="math-example">
                <div class="math-equation">
                    $$\nabla f = \langle f_x, f_y \rangle, \qquad D_{\mathbf{u}} f = \nabla f \cdot \frac{\mathbf{v}}{\|\mathbf{v}\|}, \qquad D(a, b) = f_{xx}(a, b)f_{yy}(a, b) - \big[f_{xy}(a, b)\big]^2$$
                </div>
                <ul>
                    <li>$D > 0$ and $f_{xx}(a, b) > 0 \implies$ <strong>Local Minimum</strong>;  $D > 0$ and $f_{xx}(a, b) < 0 \implies$ <strong>Local Maximum</strong>.</li>
                    <li>$D < 0 \implies$ <strong>Saddle Point</strong> (curves up in one direction, down in another);  $D = 0 \implies$ Inconclusive.</li>
                </ul>
            </div>

            <div class="math-example" data-step-group="calc-9-4">
                <p><strong>Worked Example 9.4:</strong> (a) Find $D_{\mathbf{u}} f(2, -1)$ for $f(x, y) = x^2 - 3xy$ in the direction of $\mathbf{v} = \langle 3, 4 \rangle$. (b) Find and classify all critical points of $g(x, y) = x^3 - 3xy + y^3$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 (Part a) • Trigger: Evaluate $\nabla f(2, -1)$ and normalize $\mathbf{v} = \langle 3, 4 \rangle$</span>
                    <div class="math-equation">
                        $$\nabla f = \langle 2x - 3y, -3x \rangle \implies \nabla f(2, -1) = \langle 7, -6 \rangle, \qquad \hat{\mathbf{u}} = \frac{\langle 3, 4 \rangle}{5} \implies D_{\mathbf{u}} f = 7\left(\frac{3}{5}\right) - 6\left(\frac{4}{5}\right) = -\frac{3}{5}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 (Part b) • Trigger: Solve $g_x = 0$ and $g_y = 0$ simultaneously for critical points</span>
                    <div class="math-equation">
                        $$\begin{cases} g_x = 3x^2 - 3y = 0 \implies y = x^2 \\ g_y = -3x + 3y^2 = 0 \implies x = x^4 \implies x(x^3 - 1) = 0 \end{cases} \implies \text{Critical points: } (0, 0) \text{ and } (1, 1)$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 (Part b) • Trigger: Compute discriminant $D(x, y) = g_{xx}g_{yy} - (g_{xy})^2 = (6x)(6y) - (-3)^2 = 36xy - 9$</span>
                    <ul>
                        <li>At $(0, 0)$: $D(0, 0) = -9 < 0 \implies$ <strong>Saddle Point</strong>.</li>
                        <li>At $(1, 1)$: $D(1, 1) = 27 > 0$ and $g_{xx}(1, 1) = 6 > 0 \implies$ <strong>Local Minimum</strong> $g(1, 1) = -1$.</li>
                    </ul>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-9-4">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="2" data-explanation="When $D = f_{xx}f_{yy} - (f_{xy})^2 < 0$ at a critical point, the surface has opposite principal curvatures (like a horse saddle), so $(a, b)$ is a saddle point.">
                <p><strong>Your Turn (Quick Check 9.4):</strong> At a critical point $(a, b)$ where $\nabla f(a, b) = \mathbf{0}$, if $D = f_{xx}f_{yy} - (f_{xy})^2 < 0$, then $(a, b)$ is a:</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">Local maximum</button>
                    <button type="button" class="qc-btn" data-idx="1">Local minimum</button>
                    <button type="button" class="qc-btn" data-idx="2">Saddle point</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    },

    // ==================================
    // LESSON 10: FIRST- & SECOND-ORDER DIFFERENTIAL EQUATIONS (MATH1043 CH 5)
    // ==================================
    {
        id: "calc-10-differential-equations",
        title: "Lesson 10: First- & Second-Order Differential Equations",
        description:
            "10.1 Separable ODEs • 10.2 First-Order Linear ODEs (Integrating Factor) • 10.3 Second-Order Homogeneous ODEs • 10.4 Undetermined Coefficients",
        content: String.raw`
            <div class="objective-card">
                <h3>Lesson 10 Overview & Learning Objectives</h3>
                <p>This final Calculus lesson equips you to solve first- and second-order ordinary differential equations (ODEs) modeling dynamic engineering systems:</p>
                <ul>
                    <li><strong>10.1–10.2</strong> Solve separable ODEs and first-order linear ODEs using the integrating factor $\mu(x) = e^{\int P(x)\,dx}$.</li>
                    <li><strong>10.3</strong> Solve homogeneous second-order constant-coefficient ODEs across real distinct, repeated, and complex conjugate roots.</li>
                    <li><strong>10.4</strong> Construct particular solutions $y_p$ via the Method of Undetermined Coefficients (including the duplication rule).</li>
                </ul>
            </div>

            <!-- 10.1 & 10.2 -->
            <h3>10.1–10.2 Separable & First-Order Linear ODEs</h3>
            <div class="intuition-card">
                <p><strong>The Big Idea:</strong> A first-order linear equation $y' + P(x)y = Q(x)$ looks stuck because $y'$ and $y$ are added together. Multiplying every term by the <strong>integrating factor</strong> $\mu(x) = e^{\int P(x)\,dx}$ turns the entire left-hand side into a single reverse Product Rule: $\frac{d}{dx}\big[\mu(x)y\big] = \mu(x)Q(x)$!</p>
            </div>

            <div class="pitfall-card">
                <p><strong>Exam Trap — Normalize the Leading Coefficient of $y'$ First:</strong> Before reading off $P(x)$ to compute $\mu(x) = e^{\int P(x)\,dx}$, ensure the coefficient in front of $\frac{dy}{dx}$ is <strong>$1$</strong>! If you start with $x y' + 2y = 4x^2$, divide through by $x$ first so $P(x) = \frac{2}{x}$ (not $2$).</p>
            </div>

            <div class="math-example" data-step-group="calc-10-1">
                <p><strong>Worked Example 10.1:</strong> Solve the initial value problem $x\dfrac{dy}{dx} + 2y = 4x^2$ ($x > 0$) subject to $y(1) = 3$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Divide by $x$ to reach standard form $y' + P(x)y = Q(x)$, then find $\mu(x)$</span>
                    <div class="math-equation">
                        $$\frac{dy}{dx} + \frac{2}{x}y = 4x \implies \mu(x) = e^{\int \frac{2}{x}\,dx} = e^{2\ln x} = x^2$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Multiply standard form by $\mu(x) = x^2$, collapse LHS via Product Rule, and integrate</span>
                    <div class="math-equation">
                        $$\frac{d}{dx}\big(x^2 y\big) = 4x^3 \implies x^2 y = x^4 + C \implies y(x) = x^2 + \frac{C}{x^2}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Apply initial condition $y(1) = 3$ to determine $C$</span>
                    <div class="math-equation">
                        $$3 = 1^2 + \frac{C}{1^2} \implies C = 2 \implies y(x) = x^2 + \frac{2}{x^2}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-10-1">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="1" data-explanation="The equation $\frac{dy}{dx} + 3y = e^{2x}$ is already in standard form with $P(x) = 3$, so $\mu(x) = e^{\int 3\,dx} = e^{3x}$.">
                <p><strong>Your Turn (Quick Check 10.1):</strong> What is the integrating factor $\mu(x)$ for $\dfrac{dy}{dx} + 3y = e^{2x}$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$e^{2x}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$e^{3x}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$3x$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>

            <!-- 10.3 & 10.4 -->
            <h3>10.3–10.4 Second-Order Constant-Coefficient ODEs</h3>
            <div class="decision-helper" data-helper="ode-chooser">
                <p><strong>Auxiliary Equation $ar^2 + br + c = 0$ — Click the root type for $y_c(x)$:</strong></p>
                <div class="dh-buttons">
                    <button type="button" class="dh-btn active" data-case="ode-1">1. Distinct Real ($r_1 \neq r_2$)</button>
                    <button type="button" class="dh-btn" data-case="ode-2">2. Repeated Real ($r_1 = r_2 = r$)</button>
                    <button type="button" class="dh-btn" data-case="ode-3">3. Complex ($r = \alpha \pm i\beta$)</button>
                </div>
                <div class="dh-panel active" id="ode-1">
                    <strong>Complementary Solution:</strong> $y_c(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$.
                </div>
                <div class="dh-panel" id="ode-2">
                    <strong>Complementary Solution:</strong> Multiply the second exponential by $x$ for linear independence: $y_c(x) = (c_1 + c_2 x)e^{rx}$.
                </div>
                <div class="dh-panel" id="ode-3">
                    <strong>Complementary Solution:</strong> Real part $\alpha$ gives exponential envelope, imaginary part $\beta$ gives oscillation: $y_c(x) = e^{\alpha x}\big(c_1\cos\beta x + c_2\sin\beta x\big)$.
                </div>
            </div>

            <div class="math-example" data-step-group="calc-10-3">
                <p><strong>Worked Example 10.3:</strong> Find the general solution of $y'' - 4y' + 4y = 6e^{2x}$.</p>

                <div class="step-item">
                    <span class="trigger-badge">Step 1 • Trigger: Solve auxiliary equation $r^2 - 4r + 4 = 0$ for complementary function $y_c$</span>
                    <div class="math-equation">
                        $$(r - 2)^2 = 0 \implies r = 2 \text{ (repeated)} \implies y_c(x) = (c_1 + c_2 x)e^{2x}$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 2 • Trigger: Standard trial $Ae^{2x}$ and $Axe^{2x}$ duplicate $y_c$ $\implies$ multiply by $x^2$: $y_p = Ax^2 e^{2x}$</span>
                    <p>Differentiating $y_p = Ax^2 e^{2x}$ gives $y_p' = A(2x + 2x^2)e^{2x}$ and $y_p'' = A(2 + 8x + 4x^2)e^{2x}$. Substituting into the ODE:</p>
                    <div class="math-equation">
                        $$A\big[(2 + 8x + 4x^2) - 4(2x + 2x^2) + 4x^2\big]e^{2x} = 6e^{2x} \implies 2Ae^{2x} = 6e^{2x} \implies A = 3$$
                    </div>
                </div>

                <div class="step-item step-hidden">
                    <span class="trigger-badge">Step 3 • Trigger: Combine $y = y_c + y_p$</span>
                    <div class="math-equation">
                        $$y(x) = (c_1 + c_2 x)e^{2x} + 3x^2 e^{2x}$$
                    </div>
                </div>

                <button type="button" class="step-btn" data-reveal-next="calc-10-3">Reveal Next Step (1 / 3)</button>
            </div>

            <div class="quick-check" data-answer="2" data-explanation="The auxiliary equation $r^2 + 9 = 0$ has complex conjugate roots $r = 0 \pm 3i$ ($\alpha = 0, \beta = 3$), yielding $y = e^{0x}(c_1\cos 3x + c_2\sin 3x) = c_1\cos(3x) + c_2\sin(3x)$.">
                <p><strong>Your Turn (Quick Check 10.3):</strong> Which general solution corresponds to $y'' + 9y = 0$?</p>
                <div class="qc-options">
                    <button type="button" class="qc-btn" data-idx="0">$y = c_1 e^{3x} + c_2 e^{-3x}$</button>
                    <button type="button" class="qc-btn" data-idx="1">$y = (c_1 + c_2 x)e^{3x}$</button>
                    <button type="button" class="qc-btn" data-idx="2">$y = c_1\cos(3x) + c_2\sin(3x)$</button>
                </div>
                <p class="qc-feedback"></p>
            </div>
        `
    }

];