// ======================================
// ENGILEARN PRACTICE QUIZ BANK
// ======================================

const quizzes = {

    "Algebra": [
        // --- LESSON 1: POLYNOMIALS, FACTORING & PARTIAL FRACTIONS ---
        {
            id: "alg-q1",
            lessonTag: "Lesson 1: Polynomials, Factoring & Partial Fractions",
            question: String.raw`Find the quotient and remainder when $P(x) = 2x^3 - 5x + 6$ is divided by $D(x) = x - 2$.`,
            options: [
                String.raw`Quotient $2x^2 + 4x + 3$, Remainder $12$`,
                String.raw`Quotient $2x^2 - 5$, Remainder $-4$`,
                String.raw`Quotient $2x^2 + 4x + 3$, Remainder $0$`,
                String.raw`Quotient $2x^2 - 4x + 3$, Remainder $12$`
            ],
            correctIndex: 0,
            explanation: String.raw`Insert the missing placeholder $+0x^2$ to write $2x^3 + 0x^2 - 5x + 6$. Dividing by $x - 2$ produces quotient $2x^2 + 4x + 3$ and remainder $R = P(2) = 2(8) - 5(2) + 6 = 12$. Option B comes from forgetting the $0x^2$ column placeholder.`
        },
        {
            id: "alg-q2",
            lessonTag: "Lesson 1: Polynomials, Factoring & Partial Fractions",
            question: String.raw`When $P(x) = x^3 + ax^2 - 4x + b$ is divided by $(x - 1)$, the remainder is $3$, and $(x + 2)$ is an exact factor of $P(x)$. Find $a$ and $b$.`,
            options: [
                String.raw`$a = 2, \; b = 4$`,
                String.raw`$a = -2, \; b = 8$`,
                String.raw`$a = -2, \; b = -8$`,
                String.raw`$a = 4, \; b = 2$`
            ],
            correctIndex: 1,
            explanation: String.raw`By the Remainder and Factor Theorems: $P(1) = 1 + a - 4 + b = 3 \implies a + b = 6$, and $P(-2) = -8 + 4a + 8 + b = 0 \implies 4a + b = 0$. Subtracting gives $3a = -6 \implies a = -2$, so $b = 6 - (-2) = 8$.`
        },
        {
            id: "alg-q3",
            lessonTag: "Lesson 1: Polynomials, Factoring & Partial Fractions",
            question: String.raw`Express $f(x) = 3x^2 - 12x + 7$ in vertex form $a(x - h)^2 + k$ and identify its vertex.`,
            options: [
                String.raw`$3(x - 2)^2 + 3$, Vertex $(2, 3)$`,
                String.raw`$3(x - 2)^2 - 5$, Vertex $(2, -5)$`,
                String.raw`$3(x + 2)^2 - 5$, Vertex $(-2, -5)$`,
                String.raw`$3(x - 4)^2 - 5$, Vertex $(4, -5)$`
            ],
            correctIndex: 1,
            explanation: String.raw`Factor $3$ out of the $x^2$ and $x$ terms first: $3(x^2 - 4x) + 7 = 3\big[(x - 2)^2 - 4\big] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5$, giving vertex $(2, -5)$. Option A forgets to multiply $-4$ by $3$.`
        },
        {
            id: "alg-q4",
            lessonTag: "Lesson 1: Polynomials, Factoring & Partial Fractions",
            question: String.raw`Decompose $\dfrac{5x - 1}{(x + 1)(x - 2)}$ into partial fractions.`,
            options: [
                String.raw`$\dfrac{3}{x + 1} + \dfrac{2}{x - 2}$`,
                String.raw`$\dfrac{2}{x + 1} - \dfrac{3}{x - 2}$`,
                String.raw`$\dfrac{2}{x + 1} + \dfrac{3}{x - 2}$`,
                String.raw`$\dfrac{5}{x + 1} - \dfrac{1}{x - 2}$`
            ],
            correctIndex: 2,
            explanation: String.raw`Write $\frac{5x - 1}{(x + 1)(x - 2)} = \frac{A}{x + 1} + \frac{B}{x - 2} \implies 5x - 1 = A(x - 2) + B(x + 1)$. Setting $x = 2$ gives $9 = 3B \implies B = 3$, and setting $x = -1$ gives $-6 = -3A \implies A = 2$.`
        },

        // --- LESSON 2: TRIGONOMETRY, IDENTITIES & POLAR CO-ORDINATES ---
        {
            id: "alg-q5",
            lessonTag: "Lesson 2: Trigonometry, Identities & Polar Co-ordinates",
            question: String.raw`Simplify $\dfrac{1 - \cos(2x)}{\sin(2x)}$ for $\sin(2x) \neq 0$.`,
            options: [
                String.raw`$\tan x$`,
                String.raw`$\cot x$`,
                String.raw`$2\tan x$`,
                String.raw`$\sin x$`
            ],
            correctIndex: 0,
            explanation: String.raw`Use $\cos(2x) = 1 - 2\sin^2 x$ in the numerator and $\sin(2x) = 2\sin x\cos x$ in the denominator:
                $$\frac{1 - (1 - 2\sin^2 x)}{2\sin x\cos x} = \frac{2\sin^2 x}{2\sin x\cos x} = \frac{\sin x}{\cos x} = \tan x$$`
        },
        {
            id: "alg-q6",
            lessonTag: "Lesson 2: Trigonometry, Identities & Polar Co-ordinates",
            question: String.raw`Find all solutions to $2\cos x + \sqrt{3} = 0$ on the interval $x \in [0, 2\pi)$.`,
            options: [
                String.raw`$x = \dfrac{\pi}{6}, \; \dfrac{11\pi}{6}$`,
                String.raw`$x = \dfrac{2\pi}{3}, \; \dfrac{4\pi}{3}$`,
                String.raw`$x = \dfrac{5\pi}{6}, \; \dfrac{7\pi}{6}$`,
                String.raw`$x = \dfrac{5\pi}{6}, \; \dfrac{11\pi}{6}$`
            ],
            correctIndex: 2,
            explanation: String.raw`Isolating $\cos x$ gives $\cos x = -\frac{\sqrt{3}}{2}$. The reference angle is $\frac{\pi}{6}$, and cosine is negative in Quadrants II and III: $x = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$ and $x = \pi + \frac{\pi}{6} = \frac{7\pi}{6}$.`
        },
        {
            id: "alg-q7",
            lessonTag: "Lesson 2: Trigonometry, Identities & Polar Co-ordinates",
            question: String.raw`Convert the Cartesian point $(-2, 2\sqrt{3})$ into polar co-ordinates $(r, \theta)$ with $r > 0$ and $\theta \in [0, 2\pi)$.`,
            options: [
                String.raw`$\left(4, \dfrac{5\pi}{3}\right)$`,
                String.raw`$\left(4, \dfrac{2\pi}{3}\right)$`,
                String.raw`$\left(4, \dfrac{5\pi}{6}\right)$`,
                String.raw`$\left(16, \dfrac{2\pi}{3}\right)$`
            ],
            correctIndex: 1,
            explanation: String.raw`First, $r = \sqrt{(-2)^2 + (2\sqrt{3})^2} = \sqrt{4 + 12} = 4$. Since $x = -2 < 0$ and $y = 2\sqrt{3} > 0$, the point lies in Quadrant II with reference angle $\arctan(\sqrt{3}) = \frac{\pi}{3}$, so $\theta = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.`
        },
        {
            id: "alg-q8",
            lessonTag: "Lesson 2: Trigonometry, Identities & Polar Co-ordinates",
            question: String.raw`Convert the polar equation $r = 6\sin\theta$ into Cartesian form.`,
            options: [
                String.raw`$x^2 + (y - 3)^2 = 9$`,
                String.raw`$(x - 3)^2 + y^2 = 9$`,
                String.raw`$x^2 + (y - 6)^2 = 36$`,
                String.raw`$x^2 + y^2 = 6$`
            ],
            correctIndex: 0,
            explanation: String.raw`Multiply both sides by $r$ to introduce $r^2 = x^2 + y^2$ and $r\sin\theta = y$: $r^2 = 6r\sin\theta \implies x^2 + y^2 = 6y$. Completing the square in $y$ gives $x^2 + (y - 3)^2 = 9$ (Option C forgets to square $3$ on the right-hand side).`
        },

        // --- LESSON 3: SEQUENCES, INDUCTION & THE BINOMIAL THEOREM ---
        {
            id: "alg-q9",
            lessonTag: "Lesson 3: Sequences, Induction & The Binomial Theorem",
            question: String.raw`Evaluate the infinite geometric series $\displaystyle\sum_{k=1}^{\infty} 9\left(-\frac{1}{2}\right)^{k-1}$.`,
            options: [
                String.raw`$18$`,
                String.raw`$\dfrac{9}{2}$`,
                String.raw`$6$`,
                String.raw`$12$`
            ],
            correctIndex: 2,
            explanation: String.raw`The first term is $a = 9$ and the common ratio is $r = -\frac{1}{2}$. Since $|r| = \frac{1}{2} < 1$, the series converges to:
                $$S_\infty = \frac{a}{1 - r} = \frac{9}{1 - \left(-\frac{1}{2}\right)} = \frac{9}{3/2} = 6$$`
        },
        {
            id: "alg-q10",
            lessonTag: "Lesson 3: Sequences, Induction & The Binomial Theorem",
            question: String.raw`In a proof by mathematical induction that $2 + 4 + 6 + \dots + 2n = n(n + 1)$ for all $n \ge 1$, after assuming $2 + 4 + \dots + 2k = k(k + 1)$, which expression is added to both sides to advance to $n = k + 1$?`,
            options: [
                String.raw`$2k + 2$`,
                String.raw`$2k + 1$`,
                String.raw`$k + 1$`,
                String.raw`$(k + 1)(k + 2)$`
            ],
            correctIndex: 0,
            explanation: String.raw`Replacing $n$ with $k + 1$ in the general $n$-th term $2n$ produces the next term $2(k + 1) = 2k + 2$. Adding $2k + 2$ to $k(k + 1)$ gives $k^2 + 3k + 2 = (k + 1)(k + 2)$.`
        },
        {
            id: "alg-q11",
            lessonTag: "Lesson 3: Sequences, Induction & The Binomial Theorem",
            question: String.raw`Find the term independent of $x$ (the constant term) in the binomial expansion of $\left(x^2 + \dfrac{2}{x}\right)^6$.`,
            options: [
                String.raw`$60$`,
                String.raw`$160$`,
                String.raw`$240$`,
                String.raw`$192$`
            ],
            correctIndex: 2,
            explanation: String.raw`The general term is $T_{r+1} = \binom{6}{r}(x^2)^{6-r}(2x^{-1})^r = \binom{6}{r}2^r x^{12 - 3r}$. Setting the exponent $12 - 3r = 0$ gives $r = 4$, so the constant term is $\binom{6}{4}2^4 = 15 \times 16 = 240$.`
        },
        {
            id: "alg-q12",
            lessonTag: "Lesson 3: Sequences, Induction & The Binomial Theorem",
            question: String.raw`Find the coefficient of $x^2$ in the binomial expansion of $(1 - 4x)^{-1/2}$ for $|x| < \dfrac{1}{4}$.`,
            options: [
                String.raw`$2$`,
                String.raw`$-6$`,
                String.raw`$6$`,
                String.raw`$12$`
            ],
            correctIndex: 2,
            explanation: String.raw`Using the generalized binomial series $(1 + u)^n = 1 + nu + \frac{n(n - 1)}{2!}u^2 + \dots$ with $n = -\frac{1}{2}$ and $u = -4x$, the $x^2$ term is $\frac{(-1/2)(-3/2)}{2}(-4x)^2 = \frac{3}{8}(16x^2) = 6x^2$, so the coefficient is $6$.`
        },

        // --- LESSON 4: CONIC SECTIONS, ROTATION OF AXES & VECTORS ---
        {
            id: "alg-q13",
            lessonTag: "Lesson 4: Conic Sections, Rotation of Axes & Vectors",
            question: String.raw`Identify the conic section and find the focal distance $c$ from its center for $\dfrac{(x + 2)^2}{16} - \dfrac{(y - 1)^2}{9} = 1$.`,
            options: [
                String.raw`Ellipse with $c = \sqrt{7}$`,
                String.raw`Hyperbola with $c = \sqrt{7}$`,
                String.raw`Ellipse with $c = 5$`,
                String.raw`Hyperbola with $c = 5$`
            ],
            correctIndex: 3,
            explanation: String.raw`The minus sign between the squared terms identifies a hyperbola. For a hyperbola, the foci satisfy $c^2 = a^2 + b^2 = 16 + 9 = 25 \implies c = 5$ (Option B mistakenly uses the ellipse formula $c^2 = a^2 - b^2$).`
        },
        {
            id: "alg-q14",
            lessonTag: "Lesson 4: Conic Sections, Rotation of Axes & Vectors",
            question: String.raw`What acute angle $\theta$ eliminates the mixed $xy$-term from $3x^2 + 2\sqrt{3}xy + y^2 - 4 = 0$?`,
            options: [
                String.raw`$\theta = \dfrac{\pi}{6}$`,
                String.raw`$\theta = \dfrac{\pi}{3}$`,
                String.raw`$\theta = \dfrac{\pi}{4}$`,
                String.raw`$\theta = \dfrac{\pi}{12}$`
            ],
            correctIndex: 0,
            explanation: String.raw`With $A = 3, B = 2\sqrt{3}, C = 1$, we compute $\cot(2\theta) = \frac{A - C}{B} = \frac{3 - 1}{2\sqrt{3}} = \frac{1}{\sqrt{3}}$. Thus $2\theta = \frac{\pi}{3}$, giving $\theta = \frac{\pi}{6}$.`
        },
        {
            id: "alg-q15",
            lessonTag: "Lesson 4: Conic Sections, Rotation of Axes & Vectors",
            question: String.raw`Find a normal vector $\mathbf{n}$ to the plane passing through $A(1, 0, 0)$, $B(0, 2, 0)$, and $C(0, 0, 3)$.`,
            options: [
                String.raw`$\langle 1, 2, 3 \rangle$`,
                String.raw`$\langle 6, -3, 2 \rangle$`,
                String.raw`$\langle 6, 3, 2 \rangle$`,
                String.raw`$\langle 3, 2, 6 \rangle$`
            ],
            correctIndex: 2,
            explanation: String.raw`Form two vectors in the plane: $\overrightarrow{AB} = \langle -1, 2, 0 \rangle$ and $\overrightarrow{AC} = \langle -1, 0, 3 \rangle$. Their cross product is $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \langle 6 - 0, \; -(-3 - 0), \; 0 - (-2) \rangle = \langle 6, 3, 2 \rangle$.`
        },
        {
            id: "alg-q16",
            lessonTag: "Lesson 4: Conic Sections, Rotation of Axes & Vectors",
            question: String.raw`Find the foci of the hyperbola $\dfrac{y^2}{16} - \dfrac{x^2}{9} = 1$.`,
            options: [
                String.raw`$(\pm 5, 0)$`,
                String.raw`$(0, \pm 5)$`,
                String.raw`$(0, \pm \sqrt{7})$`,
                String.raw`$(\pm 4, 0)$`
            ],
            correctIndex: 1,
            explanation: String.raw`Because $y^2$ carries the positive sign, the transverse axis is vertical along the $y$-axis with $a^2 = 16$ and $b^2 = 9$. Then $c = \sqrt{16 + 9} = 5$, placing the foci at $(0, \pm 5)$ (Option A places them on the $x$-axis).`
        },

        // --- LESSON 5: COMPLEX NUMBERS, DE MOIVRE'S THEOREM & MATRICES ---
        {
            id: "alg-q17",
            lessonTag: "Lesson 5: Complex Numbers, De Moivre's Theorem & Matrices",
            question: String.raw`Use De Moivre's Theorem to compute $(\sqrt{3} + i)^4$ in Cartesian form $a + bi$.`,
            options: [
                String.raw`$-8 + 8i\sqrt{3}$`,
                String.raw`$8 + 8i\sqrt{3}$`,
                String.raw`$-8 - 8i\sqrt{3}$`,
                String.raw`$16 - 16i\sqrt{3}$`
            ],
            correctIndex: 0,
            explanation: String.raw`In polar form, $\sqrt{3} + i = 2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)$. By De Moivre's Theorem, raising to the $4\text{th}$ power gives $2^4\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 16\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -8 + 8i\sqrt{3}$.`
        },
        {
            id: "alg-q18",
            lessonTag: "Lesson 5: Complex Numbers, De Moivre's Theorem & Matrices",
            question: String.raw`Which complex number is the principal fourth root ($k = 0$) of $w = -16$?`,
            options: [
                String.raw`$2i$`,
                String.raw`$\sqrt{2} + i\sqrt{2}$`,
                String.raw`$2 + 2i$`,
                String.raw`$-\sqrt{2} + i\sqrt{2}$`
            ],
            correctIndex: 1,
            explanation: String.raw`Write $-16 = 16\big[\cos(\pi + 2\pi k) + i\sin(\pi + 2\pi k)\big]$. Taking the $4\text{th}$ root with $k = 0$ yields $z_0 = 16^{1/4}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = 2\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = \sqrt{2} + i\sqrt{2}$.`
        },
        {
            id: "alg-q19",
            lessonTag: "Lesson 5: Complex Numbers, De Moivre's Theorem & Matrices",
            question: String.raw`Find the inverse matrix $A^{-1}$ of $A = \begin{pmatrix} 4 & 7 \\ 1 & 2 \end{pmatrix}$.`,
            options: [
                String.raw`$\begin{pmatrix} 2 & 7 \\ 1 & 4 \end{pmatrix}$`,
                String.raw`$\begin{pmatrix} 4 & -7 \\ -1 & 2 \end{pmatrix}$`,
                String.raw`$\begin{pmatrix} -2 & 7 \\ 1 & -4 \end{pmatrix}$`,
                String.raw`$\begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix}$`
            ],
            correctIndex: 3,
            explanation: String.raw`First compute $\det(A) = 4(2) - 7(1) = 1$. Swapping the main diagonal entries and negating the off-diagonal entries gives:
                $$A^{-1} = \frac{1}{1}\begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix} = \begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix}$$`
        },
        {
            id: "alg-q20",
            lessonTag: "Lesson 5: Complex Numbers, De Moivre's Theorem & Matrices",
            question: String.raw`Find the modulus $r$ and principal argument $\theta \in (-\pi, \pi]$ of $z = -2 - 2i$.`,
            options: [
                String.raw`$r = 2\sqrt{2}, \quad \theta = \dfrac{3\pi}{4}$`,
                String.raw`$r = 2\sqrt{2}, \quad \theta = -\dfrac{3\pi}{4}$`,
                String.raw`$r = 4, \quad \theta = \dfrac{\pi}{4}$`,
                String.raw`$r = 2\sqrt{2}, \quad \theta = \dfrac{5\pi}{4}$`
            ],
            correctIndex: 1,
            explanation: String.raw`The modulus is $r = \sqrt{(-2)^2 + (-2)^2} = \sqrt{8} = 2\sqrt{2}$. Since $z$ lies in Quadrant III ($x < 0, y < 0$), the principal argument in $(-\pi, \pi]$ is $\text{Arg}(z) = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$ (Option D gives an equivalent coterminal angle outside $(-\pi, \pi]$).`
        },

        // --- LESSON 6: 2D VECTORS, DOT PRODUCT & PROJECTIONS ---
        {
            id: "alg-q21",
            lessonTag: "Lesson 6: 2D Vectors, Dot Product & Projections",
            question: String.raw`Given $P(-1, 4)$ and $Q(5, -4)$, find the unit vector in the direction of $\overrightarrow{PQ}$.`,
            options: [
                String.raw`$\left\langle \dfrac{3}{5}, -\dfrac{4}{5} \right\rangle$`,
                String.raw`$\left\langle -\dfrac{3}{5}, \dfrac{4}{5} \right\rangle$`,
                String.raw`$\left\langle \dfrac{4}{5}, -\dfrac{3}{5} \right\rangle$`,
                String.raw`$\langle 6, -8 \rangle$`
            ],
            correctIndex: 0,
            explanation: String.raw`Compute the displacement vector $\overrightarrow{PQ} = \langle 5 - (-1), -4 - 4 \rangle = \langle 6, -8 \rangle$ and its norm $\|\overrightarrow{PQ}\| = \sqrt{6^2 + (-8)^2} = 10$. Dividing by $10$ gives $\hat{\mathbf{u}} = \left\langle \frac{3}{5}, -\frac{4}{5} \right\rangle$ (Option B points in the opposite direction $\overrightarrow{QP}$).`
        },
        {
            id: "alg-q22",
            lessonTag: "Lesson 6: 2D Vectors, Dot Product & Projections",
            question: String.raw`Find the angle $\theta$ between $\mathbf{u} = \langle 1, \sqrt{3} \rangle$ and $\mathbf{v} = \langle -1, \sqrt{3} \rangle$.`,
            options: [
                String.raw`$\dfrac{\pi}{6}$`,
                String.raw`$\dfrac{\pi}{3}$`,
                String.raw`$\dfrac{2\pi}{3}$`,
                String.raw`$\dfrac{\pi}{2}$`
            ],
            correctIndex: 1,
            explanation: String.raw`Using the dot-product angle formula:
                $$\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\|\mathbf{v}\|} = \frac{1(-1) + (\sqrt{3})^2}{\sqrt{1 + 3}\sqrt{1 + 3}} = \frac{2}{4} = \frac{1}{2} \implies \theta = \frac{\pi}{3}$$`
        },
        {
            id: "alg-q23",
            lessonTag: "Lesson 6: 2D Vectors, Dot Product & Projections",
            question: String.raw`Compute the orthogonal projection $\text{proj}_{\mathbf{v}}\mathbf{u}$ of $\mathbf{u} = \langle 5, 1 \rangle$ onto $\mathbf{v} = \langle 3, 1 \rangle$.`,
            options: [
                String.raw`$\left\langle \dfrac{24}{5}, \dfrac{8}{5} \right\rangle$`,
                String.raw`$\left\langle \dfrac{40}{13}, \dfrac{8}{13} \right\rangle$`,
                String.raw`$\left\langle \dfrac{16}{\sqrt{10}}, \dfrac{16}{\sqrt{10}} \right\rangle$`,
                String.raw`$\langle 3, 1 \rangle$`
            ],
            correctIndex: 0,
            explanation: String.raw`By the vector projection formula:
                $$\text{proj}_{\mathbf{v}}\mathbf{u} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{v}\|^2}\right)\mathbf{v} = \frac{5(3) + 1(1)}{3^2 + 1^2}\langle 3, 1 \rangle = \frac{16}{10}\langle 3, 1 \rangle = \left\langle \frac{24}{5}, \frac{8}{5} \right\rangle$$
                Option B projects $\mathbf{v}$ onto $\mathbf{u}$ instead.`
        },
        {
            id: "alg-q24",
            lessonTag: "Lesson 6: 2D Vectors, Dot Product & Projections",
            question: String.raw`Which Cartesian equation represents the 2D vector line $\mathbf{r} = \langle 1, -3 \rangle + t\langle 2, 5 \rangle$?`,
            options: [
                String.raw`$2x + 5y = -13$`,
                String.raw`$5x - 2y = 11$`,
                String.raw`$5x + 2y = -1$`,
                String.raw`$2x - 5y = 17$`
            ],
            correctIndex: 1,
            explanation: String.raw`Write the parametric equations $x = 1 + 2t$ and $y = -3 + 5t$, then eliminate $t$: $\frac{x - 1}{2} = \frac{y + 3}{5} \implies 5(x - 1) = 2(y + 3) \implies 5x - 2y = 11$. Option A treats the direction vector $\langle 2, 5 \rangle$ as a normal vector.`
        },

        // --- LESSON 7: LINEAR EQUATIONS, GAUSSIAN ELIMINATION & MATRICES ---
        {
            id: "alg-q25",
            lessonTag: "Lesson 7: Linear Equations, Gaussian Elimination & Matrices",
            question: String.raw`A $3 \times 3$ linear system reduces to Row Echelon Form $\left(\begin{array}{ccc|c} 1 & 2 & -1 & 4 \\ 0 & 1 & 3 & 2 \\ 0 & 0 & 0 & 0 \end{array}\right)$. Describe its solution set.`,
            options: [
                String.raw`No solution (inconsistent)`,
                String.raw`Unique solution`,
                String.raw`Infinitely many solutions with $1$ free parameter`,
                String.raw`Infinitely many solutions with $2$ free parameters`
            ],
            correctIndex: 2,
            explanation: String.raw`The bottom row reads $0 = 0$, so the system is consistent. With $2$ pivot columns among $3$ unknowns, there are $3 - 2 = 1$ free variable ($z = t \in \mathbb{R}$), yielding infinitely many solutions along a line.`
        },
        {
            id: "alg-q26",
            lessonTag: "Lesson 7: Linear Equations, Gaussian Elimination & Matrices",
            question: String.raw`For conformable matrices $A$ and $B$, which expression always equals $(AB)^T$?`,
            options: [
                String.raw`$A^T B^T$`,
                String.raw`$B^T A^T$`,
                String.raw`$(BA)^T$`,
                String.raw`$A^{-1} B^{-1}$`
            ],
            correctIndex: 1,
            explanation: String.raw`Transposing a matrix product reverses the order of multiplication (the "socks-and-shoes" rule): $(AB)^T = B^T A^T$.`
        },
        {
            id: "alg-q27",
            lessonTag: "Lesson 7: Linear Equations, Gaussian Elimination & Matrices",
            question: String.raw`Evaluate the $3 \times 3$ determinant $\begin{vmatrix} 1 & 2 & 3 \\ 0 & -2 & 4 \\ 0 & 0 & 5 \end{vmatrix}$.`,
            options: [
                String.raw`$10$`,
                String.raw`$-10$`,
                String.raw`$0$`,
                String.raw`$-30$`
            ],
            correctIndex: 1,
            explanation: String.raw`Because all entries below the main diagonal are zero, the matrix is upper-triangular, so its determinant is the product of its diagonal entries: $1 \cdot (-2) \cdot 5 = -10$.`
        },
        {
            id: "alg-q28",
            lessonTag: "Lesson 7: Linear Equations, Gaussian Elimination & Matrices",
            question: String.raw`If $M$ is a $4 \times 4$ matrix with $\det(M) = 3$, what is $\det(-2M)$?`,
            options: [
                String.raw`$-6$`,
                String.raw`$-24$`,
                String.raw`$48$`,
                String.raw`$-48$`
            ],
            correctIndex: 2,
            explanation: String.raw`Scaling an $n \times n$ matrix by $k$ scales each of its $n$ rows by $k$, so $\det(kM) = k^n \det(M)$. With $n = 4$ and $k = -2$:
                $$\det(-2M) = (-2)^4 \det(M) = 16 \times 3 = 48$$
                Option A forgets to raise $-2$ to the power $n = 4$.`
        },

        // --- LESSON 8: 3D VECTORS, CROSS PRODUCT, LINES & PLANES ---
        {
            id: "alg-q29",
            lessonTag: "Lesson 8: 3D Vectors, Cross Product, Lines & Planes",
            question: String.raw`Compute the cross product $\mathbf{u} \times \mathbf{v}$ for $\mathbf{u} = \langle 2, -1, 3 \rangle$ and $\mathbf{v} = \langle 1, 0, -2 \rangle$.`,
            options: [
                String.raw`$\langle 2, -7, 1 \rangle$`,
                String.raw`$\langle 2, 7, 1 \rangle$`,
                String.raw`$\langle -2, 7, -1 \rangle$`,
                String.raw`$\langle 2, 7, -1 \rangle$`
            ],
            correctIndex: 1,
            explanation: String.raw`Expanding the $3 \times 3$ determinant cofactor form gives:
                $$\mathbf{u} \times \mathbf{v} = \big((-1)(-2) - 3(0)\big)\mathbf{i} - \big(2(-2) - 3(1)\big)\mathbf{j} + \big(2(0) - (-1)(1)\big)\mathbf{k} = \langle 2, 7, 1 \rangle$$
                Option A forgets the minus sign on the $\mathbf{j}$-component cofactor.`
        },
        {
            id: "alg-q30",
            lessonTag: "Lesson 8: 3D Vectors, Cross Product, Lines & Planes",
            question: String.raw`Find the volume of the parallelepiped spanned by $\mathbf{a} = \langle 1, 2, 0 \rangle$, $\mathbf{b} = \langle 0, 3, 1 \rangle$, and $\mathbf{c} = \langle 2, 0, 1 \rangle$.`,
            options: [
                String.raw`$1$`,
                String.raw`$7$`,
                String.raw`$\dfrac{7}{2}$`,
                String.raw`$\dfrac{7}{6}$`
            ],
            correctIndex: 1,
            explanation: String.raw`The volume of the parallelepiped is the absolute value of the scalar triple product:
                $$V = \left|\det\begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 1 \\ 2 & 0 & 1 \end{pmatrix}\right| = \big|1(3 - 0) - 2(0 - 2) + 0\big| = |3 + 4| = 7$$`
        },
        {
            id: "alg-q31",
            lessonTag: "Lesson 8: 3D Vectors, Cross Product, Lines & Planes",
            question: String.raw`Find the perpendicular distance from $P(1, 2, -1)$ to the plane $2x - y + 2z + 7 = 0$.`,
            options: [
                String.raw`$\dfrac{5}{3}$`,
                String.raw`$\dfrac{7}{3}$`,
                String.raw`$5$`,
                String.raw`$\dfrac{1}{3}$`
            ],
            correctIndex: 0,
            explanation: String.raw`Applying the point-to-plane distance formula $D = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$:
                $$D = \frac{|2(1) - 1(2) + 2(-1) + 7|}{\sqrt{2^2 + (-1)^2 + 2^2}} = \frac{|2 - 2 - 2 + 7|}{\sqrt{9}} = \frac{5}{3}$$`
        },
        {
            id: "alg-q32",
            lessonTag: "Lesson 8: 3D Vectors, Cross Product, Lines & Planes",
            question: String.raw`Find a direction vector for the line of intersection of the planes $x + 2y - z = 4$ and $3x - y + 2z = 1$.`,
            options: [
                String.raw`$\langle 3, 5, -7 \rangle$`,
                String.raw`$\langle 3, -5, -7 \rangle$`,
                String.raw`$\langle 4, 1, 1 \rangle$`,
                String.raw`$\langle -3, 5, -7 \rangle$`
            ],
            correctIndex: 1,
            explanation: String.raw`Since the line of intersection lies in both planes, it is orthogonal to both normal vectors $\mathbf{n}_1 = \langle 1, 2, -1 \rangle$ and $\mathbf{n}_2 = \langle 3, -1, 2 \rangle$:
                $$\mathbf{v} = \mathbf{n}_1 \times \mathbf{n}_2 = \langle 4 - 1, \; -(2 + 3), \; -1 - 6 \rangle = \langle 3, -5, -7 \rangle$$`
        },

        // --- LESSON 9: COMPLEX NUMBERS, EULER'S FORMULA & TRIG IDENTITIES ---
        {
            id: "alg-q33",
            lessonTag: "Lesson 9: Complex Numbers, Euler's Formula & Trig Identities",
            question: String.raw`Express $\dfrac{5 + i}{2 - 3i}$ in Cartesian form $a + bi$.`,
            options: [
                String.raw`$\dfrac{7}{13} + \dfrac{17}{13}i$`,
                String.raw`$1 + \dfrac{17}{13}i$`,
                String.raw`$\dfrac{7}{5} + \dfrac{17}{5}i$`,
                String.raw`$-\dfrac{7}{13} + \dfrac{17}{13}i$`
            ],
            correctIndex: 0,
            explanation: String.raw`Multiply numerator and denominator by the complex conjugate $2 + 3i$:
                $$\frac{(5 + i)(2 + 3i)}{2^2 + 3^2} = \frac{10 + 15i + 2i + 3i^2}{13} = \frac{7 + 17i}{13} = \frac{7}{13} + \frac{17}{13}i$$
                Option B comes from forgetting that $i^2 = -1$.`
        },
        {
            id: "alg-q34",
            lessonTag: "Lesson 9: Complex Numbers, Euler's Formula & Trig Identities",
            question: String.raw`Evaluate $\left(2e^{i\pi/6}\right)^4$ in Cartesian form $a + bi$.`,
            options: [
                String.raw`$8 + 8\sqrt{3}\,i$`,
                String.raw`$-8 + 8\sqrt{3}\,i$`,
                String.raw`$-8 - 8\sqrt{3}\,i$`,
                String.raw`$16 + 16\sqrt{3}\,i$`
            ],
            correctIndex: 1,
            explanation: String.raw`Using Euler's exponential exponent rule $(re^{i\theta})^n = r^n e^{in\theta}$:
                $$\left(2e^{i\pi/6}\right)^4 = 2^4 e^{i4\pi/6} = 16e^{i2\pi/3} = 16\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 16\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -8 + 8\sqrt{3}\,i$$`
        },
        {
            id: "alg-q35",
            lessonTag: "Lesson 9: Complex Numbers, Euler's Formula & Trig Identities",
            question: String.raw`By equating imaginary parts of $(\cos\theta + i\sin\theta)^3 = \cos(3\theta) + i\sin(3\theta)$, which identity holds for $\sin(3\theta)$?`,
            options: [
                String.raw`$3\sin\theta - 4\sin^3\theta$`,
                String.raw`$4\sin^3\theta - 3\sin\theta$`,
                String.raw`$3\cos^2\theta - \sin^2\theta$`,
                String.raw`$3\sin\theta + 4\sin^3\theta$`
            ],
            correctIndex: 0,
            explanation: String.raw`Expanding $(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta$ and matching the imaginary parts gives:
                $$\sin(3\theta) = 3\cos^2\theta\sin\theta - \sin^3\theta = 3(1 - \sin^2\theta)\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta$$`
        },
        {
            id: "alg-q36",
            lessonTag: "Lesson 9: Complex Numbers, Euler's Formula & Trig Identities",
            question: String.raw`A degree-$4$ polynomial $P(z)$ with real coefficients has roots $z_1 = 3i$ and $z_2 = 1 - 2i$. Which expression is guaranteed to factor $P(z)$ over $\mathbb{R}$?`,
            options: [
                String.raw`$(z^2 - 9)(z^2 + 2z + 5)$`,
                String.raw`$(z^2 + 9)(z^2 - 2z + 5)$`,
                String.raw`$(z - 3i)(z - 1 + 2i)$`,
                String.raw`$(z^2 + 9)(z^2 - 2z - 3)$`
            ],
            correctIndex: 1,
            explanation: String.raw`By the Complex Conjugate Root Theorem, the conjugates $-3i$ and $1 + 2i$ must also be roots. Grouping conjugate pairs yields real quadratics: $(z - 3i)(z + 3i) = z^2 + 9$ and $\big[z - (1 - 2i)\big]\big[z - (1 + 2i)\big] = (z - 1)^2 + 4 = z^2 - 2z + 5$.`
        }
    ],

    "Calculus": [
        // --- LESSON 1: FUNCTIONS, TRIGONOMETRY & INVERSES ---
        {
            id: "calc-q1",
            lessonTag: "Lesson 1: Functions, Trigonometry & Inverses",
            question: String.raw`What is the natural domain of $h(x) = \dfrac{\sqrt{x^2 - 4}}{x - 4}$?`,
            options: [
                String.raw`$(-\infty, -2] \cup [2, 4) \cup (4, \infty)$`,
                String.raw`$(-\infty, -2) \cup (2, \infty)$`,
                String.raw`$[2, 4) \cup (4, \infty)$`,
                String.raw`$(-\infty, 4) \cup (4, \infty)$`
            ],
            correctIndex: 0,
            explanation: String.raw`For $\sqrt{x^2 - 4}$ to be real, we require $x^2 - 4 \ge 0 \implies x \le -2$ or $x \ge 2$. In addition, the denominator cannot vanish ($x \neq 4$), giving $(-\infty, -2] \cup [2, 4) \cup (4, \infty)$.`
        },
        {
            id: "calc-q2",
            lessonTag: "Lesson 1: Functions, Trigonometry & Inverses",
            question: String.raw`Solve $\log_2(x) = -\dfrac{3}{2}$ for $x$.`,
            options: [
                String.raw`$\dfrac{1}{2\sqrt{2}}$`,
                String.raw`$-\dfrac{3}{4}$`,
                String.raw`$2\sqrt{2}$`,
                String.raw`$-3$`
            ],
            correctIndex: 0,
            explanation: String.raw`Converting from logarithmic to exponential form gives:
                $$x = 2^{-3/2} = \frac{1}{2^{3/2}} = \frac{1}{2\sqrt{2}}$$`
        },
        {
            id: "calc-q3",
            lessonTag: "Lesson 1: Functions, Trigonometry & Inverses",
            question: String.raw`Evaluate $\arccos\left(-\dfrac{1}{2}\right)$ using the principal value range $[0, \pi]$.`,
            options: [
                String.raw`$\dfrac{2\pi}{3}$`,
                String.raw`$-\dfrac{\pi}{3}$`,
                String.raw`$\dfrac{5\pi}{6}$`,
                String.raw`$-\dfrac{\pi}{6}$`
            ],
            correctIndex: 0,
            explanation: String.raw`The range of $\arccos x$ is $[0, \pi]$. In this interval, $\cos\left(\frac{2\pi}{3}\right) = -\frac{1}{2}$, so $\arccos\left(-\frac{1}{2}\right) = \frac{2\pi}{3}$.`
        },
        {
            id: "calc-q4",
            lessonTag: "Lesson 1: Functions, Trigonometry & Inverses",
            question: String.raw`Evaluate $\arccos\left(\cos\dfrac{4\pi}{3}\right)$.`,
            options: [
                String.raw`$\dfrac{4\pi}{3}$`,
                String.raw`$\dfrac{2\pi}{3}$`,
                String.raw`$-\dfrac{2\pi}{3}$`,
                String.raw`$\dfrac{\pi}{3}$`
            ],
            correctIndex: 1,
            explanation: String.raw`Because $\frac{4\pi}{3} \notin [0, \pi]$, $\arccos$ and $\cos$ do not cancel directly. First evaluate $\cos\left(\frac{4\pi}{3}\right) = -\frac{1}{2}$; the unique angle in $[0, \pi]$ with cosine $-\frac{1}{2}$ is $\frac{2\pi}{3}$.`
        },

        // --- LESSON 2: LIMITS, CONTINUITY & BASIC DERIVATIVES ---
        {
            id: "calc-q5",
            lessonTag: "Lesson 2: Limits, Continuity & Basic Derivatives",
            question: String.raw`Evaluate $\displaystyle\lim_{\theta \to 0} \dfrac{\sec\theta - 1}{\theta^2}$.`,
            options: [
                String.raw`$\dfrac{1}{2}$`,
                String.raw`$1$`,
                String.raw`$0$`,
                String.raw`$2$`
            ],
            correctIndex: 0,
            explanation: String.raw`Rewrite $\sec\theta - 1 = \frac{1 - \cos\theta}{\cos\theta} = \frac{2\sin^2(\theta/2)}{\cos\theta}$:
                $$\lim_{\theta \to 0} \frac{2\sin^2(\theta/2)}{\theta^2 \cos\theta} = \lim_{\theta \to 0} \frac{2}{4\cos\theta}\left(\frac{\sin(\theta/2)}{\theta/2}\right)^2 = \frac{1}{2}(1)(1)^2 = \frac{1}{2}$$`
        },
        {
            id: "calc-q6",
            lessonTag: "Lesson 2: Limits, Continuity & Basic Derivatives",
            question: String.raw`Find the equation of the normal to the curve $y = 3x - x^2$ at the point $(3, 0)$.`,
            options: [
                String.raw`$y = \dfrac{1}{3}x - 1$`,
                String.raw`$y = -3x + 9$`,
                String.raw`$y = -\dfrac{1}{3}x + 1$`,
                String.raw`$y = 3x - 9$`
            ],
            correctIndex: 0,
            explanation: String.raw`The derivative is $\frac{dy}{dx} = 3 - 2x$. At $x = 3$, the tangent gradient is $m_t = 3 - 6 = -3$, so the normal gradient is $m_n = -\frac{1}{-3} = \frac{1}{3}$, giving $y - 0 = \frac{1}{3}(x - 3) \implies y = \frac{1}{3}x - 1$.`
        },
        {
            id: "calc-q7",
            lessonTag: "Lesson 2: Limits, Continuity & Basic Derivatives",
            question: String.raw`Using the cyclic pattern of higher derivatives, what is $\dfrac{d^{227}}{dx^{227}}(\sin x)$?`,
            options: [
                String.raw`$-\cos x$`,
                String.raw`$\cos x$`,
                String.raw`$-\sin x$`,
                String.raw`$\sin x$`
            ],
            correctIndex: 0,
            explanation: String.raw`The derivatives of $\sin x$ cycle every $4$ steps: $\cos x, -\sin x, -\cos x, \sin x$. Since $227 = 56 \times 4 + 3$, the $227\text{th}$ derivative matches the $3\text{rd}$ derivative: $-\cos x$.`
        },
        {
            id: "calc-q8",
            lessonTag: "Lesson 2: Limits, Continuity & Basic Derivatives",
            question: String.raw`Evaluate $\displaystyle\lim_{x \to 0} \dfrac{\tan(4x)}{\sin(2x)}$.`,
            options: [
                String.raw`$0$`,
                String.raw`$2$`,
                String.raw`$\dfrac{1}{2}$`,
                String.raw`$4$`
            ],
            correctIndex: 1,
            explanation: String.raw`Decompose $\tan(4x) = \frac{\sin(4x)}{\cos(4x)}$ and match standard $\frac{\sin u}{u} \to 1$ factors:
                $$\lim_{x \to 0} \left(\frac{\sin(4x)}{4x} \cdot \frac{2x}{\sin(2x)} \cdot \frac{2}{\cos(4x)}\right) = 1 \cdot 1 \cdot \frac{2}{1} = 2$$`
        },

        // --- LESSON 3: DIFFERENTIATION RULES & TRANSCENDENTALS ---
        {
            id: "calc-q9",
            lessonTag: "Lesson 3: Differentiation Rules & Transcendentals",
            question: String.raw`Differentiate $y = \dfrac{x^2 - 1}{x^2 + 1}$ with respect to $x$.`,
            options: [
                String.raw`$\dfrac{4x}{(x^2 + 1)^2}$`,
                String.raw`$\dfrac{-4x}{(x^2 + 1)^2}$`,
                String.raw`$\dfrac{4x^3}{(x^2 + 1)^2}$`,
                String.raw`$1$`
            ],
            correctIndex: 0,
            explanation: String.raw`By the Quotient Rule:
                $$\frac{dy}{dx} = \frac{(x^2 + 1)(2x) - (x^2 - 1)(2x)}{(x^2 + 1)^2} = \frac{4x}{(x^2 + 1)^2}$$`
        },
        {
            id: "calc-q10",
            lessonTag: "Lesson 3: Differentiation Rules & Transcendentals",
            question: String.raw`Use logarithmic differentiation to find $\dfrac{dy}{dx}$ for $y = x^{\sin x}$ ($x > 0$).`,
            options: [
                String.raw`$x^{\sin x}\left(\cos x \ln x + \dfrac{\sin x}{x}\right)$`,
                String.raw`$\sin x \cdot x^{\sin x - 1}$`,
                String.raw`$x^{\sin x}(\cos x \ln x)$`,
                String.raw`$x^{\cos x}\left(\sin x \ln x + \dfrac{\cos x}{x}\right)$`
            ],
            correctIndex: 0,
            explanation: String.raw`Taking natural logs gives $\ln y = \sin x \ln x$. Differentiating implicitly gives $\frac{1}{y}\frac{dy}{dx} = \cos x \ln x + \frac{\sin x}{x}$, so multiplying by $y = x^{\sin x}$ yields $x^{\sin x}\left(\cos x \ln x + \frac{\sin x}{x}\right)$.`
        },
        {
            id: "calc-q11",
            lessonTag: "Lesson 3: Differentiation Rules & Transcendentals",
            question: String.raw`Using a linear first approximation near $x = 1$, estimate $\ln(0.9)$.`,
            options: [
                String.raw`$-0.1$`,
                String.raw`$-0.09$`,
                String.raw`$0.1$`,
                String.raw`$-0.11$`
            ],
            correctIndex: 0,
            explanation: String.raw`Let $f(x) = \ln x$ at $x = 1$ with $\Delta x = -0.1$. Since $f'(1) = 1$, we obtain:
                $$\ln(0.9) \approx \ln(1) + (-0.1)(1) = -0.1$$`
        },
        {
            id: "calc-q12",
            lessonTag: "Lesson 3: Differentiation Rules & Transcendentals",
            question: String.raw`Find $\dfrac{dy}{dx}$ at the point $(1, 1)$ on the implicit curve $x^2 + xy + y^2 = 3$.`,
            options: [
                String.raw`$-1$`,
                String.raw`$1$`,
                String.raw`$-\dfrac{3}{2}$`,
                String.raw`$0$`
            ],
            correctIndex: 0,
            explanation: String.raw`Differentiating term-by-term with respect to $x$ (using the Product Rule on $xy$) gives $2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0$. Substituting $(x, y) = (1, 1)$ yields $3 + 3\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -1$.`
        },

        // --- LESSON 4: INTEGRATION, AREAS, VOLUMES & POLAR CURVES ---
        {
            id: "calc-q13",
            lessonTag: "Lesson 4: Integration, Areas, Volumes & Polar Curves",
            question: String.raw`Evaluate the indefinite integral $\displaystyle\int (4 - 9x)^{-1/2}\,dx$.`,
            options: [
                String.raw`$-\dfrac{2}{9}\sqrt{4 - 9x} + c$`,
                String.raw`$\dfrac{2}{9}\sqrt{4 - 9x} + c$`,
                String.raw`$-2\sqrt{4 - 9x} + c$`,
                String.raw`$-\dfrac{9}{2}(4 - 9x)^{-3/2} + c$`
            ],
            correctIndex: 0,
            explanation: String.raw`Using $\int (ax + b)^n\,dx = \frac{(ax + b)^{n+1}}{a(n + 1)} + c$ with $a = -9$ and $n = -\frac{1}{2}$:
                $$\frac{(4 - 9x)^{1/2}}{-9(1/2)} + c = -\frac{2}{9}\sqrt{4 - 9x} + c$$`
        },
        {
            id: "calc-q14",
            lessonTag: "Lesson 4: Integration, Areas, Volumes & Polar Curves",
            question: String.raw`If $f$ is continuous and $b$ is a constant, what is $\dfrac{d}{dx}\displaystyle\int_x^b f(t)\,dt$?`,
            options: [
                String.raw`$-f(x)$`,
                String.raw`$f(x)$`,
                String.raw`$f(b) - f(x)$`,
                String.raw`$0$`
            ],
            correctIndex: 0,
            explanation: String.raw`Reversing the limits of integration introduces a minus sign: $\int_x^b f(t)\,dt = -\int_b^x f(t)\,dt$. By Part 1 of the Fundamental Theorem of Calculus, differentiating with respect to $x$ gives $-f(x)$.`
        },
        {
            id: "calc-q15",
            lessonTag: "Lesson 4: Integration, Areas, Volumes & Polar Curves",
            question: String.raw`Find the volume generated when the region under $y = \sec x$ from $x = 0$ to $x = \dfrac{\pi}{3}$ is rotated $2\pi$ radians about the $x$-axis.`,
            options: [
                String.raw`$\pi\sqrt{3}$`,
                String.raw`$\dfrac{\pi}{\sqrt{3}}$`,
                String.raw`$3\pi$`,
                String.raw`$\pi\ln(2 + \sqrt{3})$`
            ],
            correctIndex: 0,
            explanation: String.raw`Using the disc formula $V = \pi\int_a^b [f(x)]^2\,dx$:
                $$V = \pi\int_0^{\pi/3} \sec^2 x\,dx = \pi\Big[\tan x\Big]_0^{\pi/3} = \pi\sqrt{3}$$`
        },
        {
            id: "calc-q16",
            lessonTag: "Lesson 4: Integration, Areas, Volumes & Polar Curves",
            question: String.raw`Evaluate $\displaystyle\int \dfrac{6x^2}{x^3 + 4}\,dx$.`,
            options: [
                String.raw`$2\ln|x^3 + 4| + c$`,
                String.raw`$6\ln|x^3 + 4| + c$`,
                String.raw`$\dfrac{2}{(x^3 + 4)^2} + c$`,
                String.raw`$\ln|x^3 + 4| + c$`
            ],
            correctIndex: 0,
            explanation: String.raw`Notice that $\frac{d}{dx}(x^3 + 4) = 3x^2$. Factoring $2$ outside the integral puts it into exact $\int \frac{g'(x)}{g(x)}\,dx = \ln|g(x)| + c$ form:
                $$2\int \frac{3x^2}{x^3 + 4}\,dx = 2\ln|x^3 + 4| + c$$`
        },

        // --- LESSON 5: OPTIMIZATION, CURVE SKETCHING & RELATED RATES ---
        {
            id: "calc-q17",
            lessonTag: "Lesson 5: Optimization, Curve Sketching & Related Rates",
            question: String.raw`What is the length of the longest ladder that can be carried horizontally around a right-angled corner from an $8\text{ m}$ wide passage into a $1\text{ m}$ wide passage?`,
            options: [
                String.raw`$5\sqrt{5}\text{ m}$`,
                String.raw`$9\text{ m}$`,
                String.raw`$3\sqrt{3}\text{ m}$`,
                String.raw`$\sqrt{65}\text{ m}$`
            ],
            correctIndex: 0,
            explanation: String.raw`The minimum corridor clearance length is $l_{\min} = (a^{2/3} + b^{2/3})^{3/2}$. Substituting $a = 8$ and $b = 1$ gives $(8^{2/3} + 1^{2/3})^{3/2} = (4 + 1)^{3/2} = 5^{3/2} = 5\sqrt{5}\text{ m}$.`
        },
        {
            id: "calc-q18",
            lessonTag: "Lesson 5: Optimization, Curve Sketching & Related Rates",
            question: String.raw`Find the oblique (slant) asymptote of the rational function $y = \dfrac{x^2 - x - 2}{x - 3}$.`,
            options: [
                String.raw`$y = x + 2$`,
                String.raw`$y = x - 1$`,
                String.raw`$y = x - 3$`,
                String.raw`$y = x + 4$`
            ],
            correctIndex: 0,
            explanation: String.raw`Polynomial division gives $y = (x + 2) + \frac{4}{x - 3}$. As $x \to \pm\infty$, $\frac{4}{x - 3} \to 0$, so the oblique asymptote is $y = x + 2$.`
        },
        {
            id: "calc-q19",
            lessonTag: "Lesson 5: Optimization, Curve Sketching & Related Rates",
            question: String.raw`A spherical balloon is inflated so its volume increases at $100\pi\text{ cm}^3/\text{min}$. How fast is its radius increasing when $r = 5\text{ cm}$?`,
            options: [
                String.raw`$1\text{ cm/min}$`,
                String.raw`$4\text{ cm/min}$`,
                String.raw`$5\text{ cm/min}$`,
                String.raw`$\dfrac{1}{4}\text{ cm/min}$`
            ],
            correctIndex: 0,
            explanation: String.raw`Differentiating $V = \frac{4}{3}\pi r^3$ with respect to $t$ gives $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. Substituting $\frac{dV}{dt} = 100\pi$ and $r = 5$ gives $100\pi = 100\pi\frac{dr}{dt} \implies \frac{dr}{dt} = 1\text{ cm/min}$.`
        },
        {
            id: "calc-q20",
            lessonTag: "Lesson 5: Optimization, Curve Sketching & Related Rates",
            question: String.raw`Find the global maximum value of $f(x) = -x\ln x$ on the interval $(0, \infty)$.`,
            options: [
                String.raw`$e$`,
                String.raw`$\dfrac{1}{e}$`,
                String.raw`$-\dfrac{1}{e}$`,
                String.raw`$1$`
            ],
            correctIndex: 1,
            explanation: String.raw`Differentiating via the Product Rule gives $f'(x) = -\ln x - 1$. Setting $f'(x) = 0$ yields $\ln x = -1 \implies x = e^{-1} = \frac{1}{e}$. Since $f''(1/e) = -e < 0$, this critical point is a maximum with value $f(1/e) = -\frac{1}{e}\ln(e^{-1}) = \frac{1}{e}$.`
        },

        // --- LESSON 6: TECHNIQUES OF INTEGRATION & IMPROPER INTEGRALS ---
        {
            id: "calc-q21",
            lessonTag: "Lesson 6: Techniques of Integration & Improper Integrals",
            question: String.raw`Evaluate $\displaystyle\int_0^{\pi/2} \cos^3 x\,dx$.`,
            options: [
                String.raw`$\dfrac{1}{3}$`,
                String.raw`$\dfrac{2}{3}$`,
                String.raw`$\dfrac{3}{4}$`,
                String.raw`$0$`
            ],
            correctIndex: 1,
            explanation: String.raw`Split off one $\cos x$ factor and convert $\cos^2 x = 1 - \sin^2 x$:
                $$\int_0^{\pi/2} (1 - \sin^2 x)\cos x\,dx = \left[\sin x - \frac{\sin^3 x}{3}\right]_0^{\pi/2} = 1 - \frac{1}{3} = \frac{2}{3}$$`
        },
        {
            id: "calc-q22",
            lessonTag: "Lesson 6: Techniques of Integration & Improper Integrals",
            question: String.raw`Evaluate $\displaystyle\int x e^{2x}\,dx$.`,
            options: [
                String.raw`$\dfrac{1}{2}x e^{2x} - \dfrac{1}{4}e^{2x} + c$`,
                String.raw`$2x e^{2x} - 4e^{2x} + c$`,
                String.raw`$\dfrac{1}{2}x e^{2x} + \dfrac{1}{4}e^{2x} + c$`,
                String.raw`$x e^{2x} - e^{2x} + c$`
            ],
            correctIndex: 0,
            explanation: String.raw`Apply Integration by Parts ($\int u\,dv = uv - \int v\,du$) with $u = x \implies du = dx$ and $dv = e^{2x}\,dx \implies v = \frac{1}{2}e^{2x}$:
                $$\int x e^{2x}\,dx = \frac{1}{2}x e^{2x} - \int \frac{1}{2}e^{2x}\,dx = \frac{1}{2}x e^{2x} - \frac{1}{4}e^{2x} + c$$`
        },
        {
            id: "calc-q23",
            lessonTag: "Lesson 6: Techniques of Integration & Improper Integrals",
            question: String.raw`Which trigonometric substitution eliminates the square root in $\displaystyle\int \dfrac{dx}{\sqrt{9 - 4x^2}}$?`,
            options: [
                String.raw`$x = 3\sin\theta$`,
                String.raw`$x = \dfrac{3}{2}\sin\theta$`,
                String.raw`$x = \dfrac{3}{2}\tan\theta$`,
                String.raw`$x = \dfrac{2}{3}\sec\theta$`
            ],
            correctIndex: 1,
            explanation: String.raw`Rewrite the radical as $\sqrt{9 - (2x)^2} = \sqrt{3^2 - (2x)^2}$. Setting $2x = 3\sin\theta \iff x = \frac{3}{2}\sin\theta$ simplifies the radical to $\sqrt{9 - 9\sin^2\theta} = 3\cos\theta$ (Option A leaves $9 - 36\sin^2\theta$).`
        },
        {
            id: "calc-q24",
            lessonTag: "Lesson 6: Techniques of Integration & Improper Integrals",
            question: String.raw`Evaluate the improper integral $\displaystyle\int_2^\infty \dfrac{1}{(x - 1)^2}\,dx$.`,
            options: [
                String.raw`$0$`,
                String.raw`$1$`,
                String.raw`$\dfrac{1}{2}$`,
                String.raw`$\text{Diverges}$`
            ],
            correctIndex: 1,
            explanation: String.raw`Replace the infinite upper bound with a limit as $t \to \infty$:
                $$\lim_{t \to \infty}\left[-\frac{1}{x - 1}\right]_2^t = \lim_{t \to \infty}\left(-\frac{1}{t - 1} + \frac{1}{2 - 1}\right) = 0 + 1 = 1$$`
        },

        // --- LESSON 7: AREAS, ARC LENGTHS, PARAMETRIC & POLAR CURVES ---
        {
            id: "calc-q25",
            lessonTag: "Lesson 7: Areas, Arc Lengths, Parametric & Polar Curves",
            question: String.raw`Which definite integral gives the area enclosed between $x = y^2$ and $x = 4 - y^2$ via horizontal slicing?`,
            options: [
                String.raw`$\displaystyle\int_{-\sqrt{2}}^{\sqrt{2}} (4 - 2y^2)\,dy$`,
                String.raw`$\displaystyle\int_{-2}^{2} (4 - 2y^2)\,dy$`,
                String.raw`$\displaystyle\int_{0}^{4} 2\sqrt{x}\,dx$`,
                String.raw`$\displaystyle\int_{-\sqrt{2}}^{\sqrt{2}} (2y^2 - 4)\,dy$`
            ],
            correctIndex: 0,
            explanation: String.raw`Set $y^2 = 4 - y^2 \implies 2y^2 = 4 \implies y = \pm\sqrt{2}$ for the intersection limits. On $[-\sqrt{2}, \sqrt{2}]$, $x_{\text{right}} - x_{\text{left}} = (4 - y^2) - y^2 = 4 - 2y^2$, giving $\int_{-\sqrt{2}}^{\sqrt{2}} (4 - 2y^2)\,dy$.`
        },
        {
            id: "calc-q26",
            lessonTag: "Lesson 7: Areas, Arc Lengths, Parametric & Polar Curves",
            question: String.raw`Find the exact arc length of the parametric curve $x = 3\cos(2t), \; y = 3\sin(2t)$ on $0 \le t \le \pi$.`,
            options: [
                String.raw`$3\pi$`,
                String.raw`$6\pi$`,
                String.raw`$12\pi$`,
                String.raw`$6$`
            ],
            correctIndex: 1,
            explanation: String.raw`Compute the speed $\sqrt{(dx/dt)^2 + (dy/dt)^2} = \sqrt{(-6\sin 2t)^2 + (6\cos 2t)^2} = \sqrt{36} = 6$. Integrating over $0 \le t \le \pi$ gives $L = \int_0^\pi 6\,dt = 6\pi$ (the circle of radius $3$ is traced once).`
        },
        {
            id: "calc-q27",
            lessonTag: "Lesson 7: Areas, Arc Lengths, Parametric & Polar Curves",
            question: String.raw`For the parametric curve $x = e^t, \; y = e^{2t}$, find $\dfrac{d^2y}{dx^2}$.`,
            options: [
                String.raw`$2e^t$`,
                String.raw`$4e^t$`,
                String.raw`$2$`,
                String.raw`$4$`
            ],
            correctIndex: 2,
            explanation: String.raw`First find $\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{2e^{2t}}{e^t} = 2e^t$. Then apply the parametric second-derivative rule $\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}(dy/dx)}{dx/dt} = \frac{2e^t}{e^t} = 2$ (Option A forgets to divide by $dx/dt$ a second time).`
        },
        {
            id: "calc-q28",
            lessonTag: "Lesson 7: Areas, Arc Lengths, Parametric & Polar Curves",
            question: String.raw`Find the exact arc length of the polar spiral $r = e^\theta$ from $\theta = 0$ to $\theta = \ln 2$.`,
            options: [
                String.raw`$\sqrt{2}$`,
                String.raw`$2\sqrt{2}$`,
                String.raw`$1$`,
                String.raw`$\ln 2$`
            ],
            correctIndex: 0,
            explanation: String.raw`Using the polar arc length formula $L = \int_\alpha^\beta \sqrt{r^2 + (dr/d\theta)^2}\,d\theta$ with $dr/d\theta = e^\theta$:
                $$L = \int_0^{\ln 2} \sqrt{e^{2\theta} + e^{2\theta}}\,d\theta = \sqrt{2}\Big[e^\theta\Big]_0^{\ln 2} = \sqrt{2}(2 - 1) = \sqrt{2}$$`
        },

        // --- LESSON 8: L'HOPITAL'S RULE, SERIES CONVERGENCE & TAYLOR SERIES ---
        {
            id: "calc-q29",
            lessonTag: "Lesson 8: L'Hôpital's Rule, Series Convergence & Taylor Series",
            question: String.raw`Evaluate $\displaystyle\lim_{x \to 0^+} x^2 \ln x$.`,
            options: [
                String.raw`$-\infty$`,
                String.raw`$0$`,
                String.raw`$-\dfrac{1}{2}$`,
                String.raw`$1$`
            ],
            correctIndex: 1,
            explanation: String.raw`Rewrite the $0 \cdot (-\infty)$ indeterminate product as a $\frac{-\infty}{\infty}$ quotient and apply l'Hôpital's Rule:
                $$\lim_{x \to 0^+} \frac{\ln x}{x^{-2}} = \lim_{x \to 0^+} \frac{1/x}{-2x^{-3}} = \lim_{x \to 0^+} \left(-\frac{x^2}{2}\right) = 0$$`
        },
        {
            id: "calc-q30",
            lessonTag: "Lesson 8: L'Hôpital's Rule, Series Convergence & Taylor Series",
            question: String.raw`Classify the convergence of the alternating series $\displaystyle\sum_{n=1}^{\infty} \dfrac{(-1)^{n+1}}{\sqrt{n}}$.`,
            options: [
                String.raw`Absolutely convergent`,
                String.raw`Conditionally convergent`,
                String.raw`Divergent`,
                String.raw`Inconclusive`
            ],
            correctIndex: 1,
            explanation: String.raw`Since $b_n = \frac{1}{\sqrt{n}}$ decreases monotonically to $0$, the alternating series converges by the Alternating Series Test. However, $\sum_{n=1}^{\infty} \frac{1}{n^{1/2}}$ diverges as a $p$-series with $p = \frac{1}{2} \le 1$, so the convergence is conditional.`
        },
        {
            id: "calc-q31",
            lessonTag: "Lesson 8: L'Hôpital's Rule, Series Convergence & Taylor Series",
            question: String.raw`Find the radius of convergence $R$ of the power series $\displaystyle\sum_{n=0}^{\infty} \dfrac{(2x - 1)^n}{5^n}$.`,
            options: [
                String.raw`$5$`,
                String.raw`$\dfrac{5}{2}$`,
                String.raw`$\dfrac{1}{5}$`,
                String.raw`$10$`
            ],
            correctIndex: 1,
            explanation: String.raw`Rewrite as a geometric series $\sum_{n=0}^{\infty} \left(\frac{2x - 1}{5}\right)^n$, which converges when $\left|\frac{2x - 1}{5}\right| < 1 \iff 2\left|x - \frac{1}{2}\right| < 5 \iff \left|x - \frac{1}{2}\right| < \frac{5}{2}$. Thus $R = \frac{5}{2}$ (Option A forgets to factor out $2$ from $2x - 1$).`
        },
        {
            id: "calc-q32",
            lessonTag: "Lesson 8: L'Hôpital's Rule, Series Convergence & Taylor Series",
            question: String.raw`What is the coefficient of $x^4$ in the Maclaurin series of $f(x) = \cos(2x)$?`,
            options: [
                String.raw`$\dfrac{1}{24}$`,
                String.raw`$\dfrac{2}{3}$`,
                String.raw`$-\dfrac{2}{3}$`,
                String.raw`$4$`
            ],
            correctIndex: 1,
            explanation: String.raw`Substitute $u = 2x$ into the Maclaurin expansion $\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \dots$:
                $$\cos(2x) = 1 - \frac{(2x)^2}{2} + \frac{(2x)^4}{24} - \dots = 1 - 2x^2 + \frac{16}{24}x^4 - \dots = 1 - 2x^2 + \frac{2}{3}x^4 - \dots$$
                So the coefficient of $x^4$ is $\frac{2}{3}$.`
        },

        // --- LESSON 9: PARTIAL DIFFERENTIATION, GRADIENTS & 3D OPTIMIZATION ---
        {
            id: "calc-q33",
            lessonTag: "Lesson 9: Partial Differentiation, Gradients & 3D Optimization",
            question: String.raw`Find the equation of the tangent plane to $z = 3x^2 - y^2 + 2$ at the point $(1, 2, 1)$.`,
            options: [
                String.raw`$z = 6x - 4y + 3$`,
                String.raw`$z = 6x - 4y - 1$`,
                String.raw`$z = 3x - 2y + 2$`,
                String.raw`$z = 6x + 4y - 13$`
            ],
            correctIndex: 0,
            explanation: String.raw`Compute the partial derivatives at $(1, 2)$: $f_x(1, 2) = 6(1) = 6$ and $f_y(1, 2) = -2(2) = -4$. Substituting into $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$ gives:
                $$z - 1 = 6(x - 1) - 4(y - 2) \implies z = 6x - 4y + 3$$`
        },
        {
            id: "calc-q34",
            lessonTag: "Lesson 9: Partial Differentiation, Gradients & 3D Optimization",
            question: String.raw`Find the directional derivative of $f(x, y) = x^2 y^3$ at $(1, 1)$ in the direction of $\mathbf{v} = \langle 4, -3 \rangle$.`,
            options: [
                String.raw`$-1$`,
                String.raw`$-\dfrac{1}{5}$`,
                String.raw`$\dfrac{17}{5}$`,
                String.raw`$\dfrac{1}{5}$`
            ],
            correctIndex: 1,
            explanation: String.raw`First compute $\nabla f(1, 1) = \langle 2xy^3, 3x^2 y^2 \rangle_{(1,1)} = \langle 2, 3 \rangle$ and normalize $\mathbf{v}$ to $\hat{\mathbf{u}} = \frac{\langle 4, -3 \rangle}{\sqrt{4^2 + (-3)^2}} = \left\langle \frac{4}{5}, -\frac{3}{5} \right\rangle$. Then:
                $$D_{\hat{\mathbf{u}}}f(1, 1) = \langle 2, 3 \rangle \cdot \left\langle \frac{4}{5}, -\frac{3}{5} \right\rangle = \frac{8}{5} - \frac{9}{5} = -\frac{1}{5}$$
                Option A omits normalizing $\mathbf{v}$ by $\|\mathbf{v}\| = 5$.`
        },
        {
            id: "calc-q35",
            lessonTag: "Lesson 9: Partial Differentiation, Gradients & 3D Optimization",
            question: String.raw`At a critical point $(2, -1)$, $f_{xx} = -4$, $f_{yy} = -9$, and $f_{xy} = 3$. Classify $(2, -1)$.`,
            options: [
                String.raw`Local minimum`,
                String.raw`Local maximum`,
                String.raw`Saddle point`,
                String.raw`Test is inconclusive`
            ],
            correctIndex: 1,
            explanation: String.raw`Compute the Hessian discriminant $D = f_{xx}f_{yy} - (f_{xy})^2 = (-4)(-9) - 3^2 = 36 - 9 = 27 > 0$. Since $D > 0$ and $f_{xx} = -4 < 0$, the surface is concave down in all directions at $(2, -1)$, confirming a local maximum.`
        },
        {
            id: "calc-q36",
            lessonTag: "Lesson 9: Partial Differentiation, Gradients & 3D Optimization",
            question: String.raw`If $z = u^2 + v^2$ where $u = x\cos y$ and $v = x\sin y$, find $\dfrac{\partial z}{\partial y}$ via the Multivariable Chain Rule.`,
            options: [
                String.raw`$0$`,
                String.raw`$2x$`,
                String.raw`$2x\sin y$`,
                String.raw`$-2x^2\sin y\cos y$`
            ],
            correctIndex: 0,
            explanation: String.raw`By the Multivariable Chain Rule:
                $$\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y} = (2u)(-x\sin y) + (2v)(x\cos y) = -2x^2\cos y\sin y + 2x^2\sin y\cos y = 0$$
                This matches the direct substitution $z = x^2(\cos^2 y + \sin^2 y) = x^2$, which is independent of $y$.`
        },

        // --- LESSON 10: FIRST- & SECOND-ORDER DIFFERENTIAL EQUATIONS ---
        {
            id: "calc-q37",
            lessonTag: "Lesson 10: First- & Second-Order Differential Equations",
            question: String.raw`Solve the separable initial value problem $\dfrac{dy}{dx} = 2xy^2$ given $y(0) = \dfrac{1}{3}$.`,
            options: [
                String.raw`$y = \dfrac{1}{3 - x^2}$`,
                String.raw`$y = \dfrac{1}{3 + x^2}$`,
                String.raw`$y = \dfrac{1}{3}e^{x^2}$`,
                String.raw`$y = 3 - x^2$`
            ],
            correctIndex: 0,
            explanation: String.raw`Separate variables and integrate both sides:
                $$\int y^{-2}\,dy = \int 2x\,dx \implies -\frac{1}{y} = x^2 + c$$
                Applying $y(0) = \frac{1}{3}$ gives $-3 = c$, so $-\frac{1}{y} = x^2 - 3 \implies y = \frac{1}{3 - x^2}$.`
        },
        {
            id: "calc-q38",
            lessonTag: "Lesson 10: First- & Second-Order Differential Equations",
            question: String.raw`Find the integrating factor $\mu(x)$ for $x^2 \dfrac{dy}{dx} + 3xy = e^x$ ($x > 0$).`,
            options: [
                String.raw`$e^{3x}$`,
                String.raw`$x^3$`,
                String.raw`$3\ln x$`,
                String.raw`$e^{x^3}$`
            ],
            correctIndex: 1,
            explanation: String.raw`Divide through by $x^2$ first to write the equation in standard linear form $\frac{dy}{dx} + P(x)y = Q(x)$:
                $$\frac{dy}{dx} + \frac{3}{x}y = \frac{e^x}{x^2} \implies \mu(x) = e^{\int \frac{3}{x}\,dx} = e^{3\ln x} = x^3$$
                Option A comes from forgetting to normalize the leading $x^2$ coefficient.`
        },
        {
            id: "calc-q39",
            lessonTag: "Lesson 10: First- & Second-Order Differential Equations",
            question: String.raw`Write the general solution of $y'' - 2y' + 5y = 0$.`,
            options: [
                String.raw`$y = c_1 e^x + c_2 e^{2x}$`,
                String.raw`$y = e^x(c_1\cos 2x + c_2\sin 2x)$`,
                String.raw`$y = e^{2x}(c_1\cos x + c_2\sin x)$`,
                String.raw`$y = (c_1 + c_2 x)e^x$`
            ],
            correctIndex: 1,
            explanation: String.raw`The auxiliary equation $r^2 - 2r + 5 = 0$ has complex conjugate roots $r = \frac{2 \pm \sqrt{4 - 20}}{2} = 1 \pm 2i$ ($\alpha = 1, \beta = 2$), giving the oscillatory solution $y = e^x(c_1\cos 2x + c_2\sin 2x)$.`
        },
        {
            id: "calc-q40",
            lessonTag: "Lesson 10: First- & Second-Order Differential Equations",
            question: String.raw`Which trial form $y_p(x)$ should be used for $y'' - 3y' + 2y = 5e^x$ in the Method of Undetermined Coefficients?`,
            options: [
                String.raw`$y_p = Ae^x$`,
                String.raw`$y_p = Axe^x$`,
                String.raw`$y_p = Ax^2 e^x$`,
                String.raw`$y_p = (Ax + B)e^x$`
            ],
            correctIndex: 1,
            explanation: String.raw`The auxiliary equation $r^2 - 3r + 2 = (r - 1)(r - 2) = 0$ has $r = 1$ as a simple root, so $e^x$ already appears in the complementary function $y_c = c_1 e^x + c_2 e^{2x}$. Multiplying the naive guess $Ae^x$ by $x$ removes duplication, giving $y_p = Axe^x$.`
        }
    ],

    "Calculus II": [],
    "Algebra II": [],
    "Statistics I": [],
    "Financial Mathematics": []

};