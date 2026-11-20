/**
 * graphs.js — Interactive Canvas Visualizers for Algebra & Calculus
 * Palette: Indigo (#6558D3), Emerald (#10B981), Rose (#E11D48), Slate (#20243A)
 */

// ============================================================================
// 1. HIDPI CANVAS & GRID HELPERS
// ============================================================================

function setupHiDPICanvas(canvas, cssHeight = 350) {
    const parent = canvas.parentElement;
    const width = Math.max(280, (parent && parent.clientWidth) || 640);
    const height = cssHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = "100%";
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Crisp light background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);

    return { ctx, width, height };
}

function drawCartesianGrid(ctx, width, height, xMin, xMax, yMin, yMax) {
    const toPxX = (x) => ((x - xMin) / (xMax - xMin)) * width;
    const toPxY = (y) => height - ((y - yMin) / (yMax - yMin)) * height;

    const xStep = xMax - xMin > 16 ? 2 : 1;
    const yStep = yMax - yMin > 16 ? 2 : 1;

    ctx.save();
    ctx.font = "11px system-ui, -apple-system, sans-serif";

    // Vertical grid lines
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x += xStep) {
        const px = toPxX(x);
        ctx.strokeStyle = x === 0 ? "#64748B" : "#E2E8F0";
        ctx.lineWidth = x === 0 ? 1.6 : 1;
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, height);
        ctx.stroke();

        if (x !== 0) {
            const labelY = Math.min(height - 6, Math.max(14, toPxY(0) + 14));
            ctx.fillStyle = "#64748B";
            ctx.fillText(String(x), px - 5, labelY);
        }
    }

    // Horizontal grid lines
    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y += yStep) {
        const py = toPxY(y);
        ctx.strokeStyle = y === 0 ? "#64748B" : "#E2E8F0";
        ctx.lineWidth = y === 0 ? 1.6 : 1;
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
        ctx.stroke();

        if (y !== 0) {
            const labelX = Math.min(width - 22, Math.max(6, toPxX(0) + 6));
            ctx.fillStyle = "#64748B";
            ctx.fillText(String(y), labelX, py + 4);
        }
    }

    // Axis labels
    ctx.fillStyle = "#20243A";
    ctx.font = "600 12px system-ui, -apple-system, sans-serif";
    ctx.fillText("x", width - 14, Math.min(height - 8, Math.max(16, toPxY(0) - 6)));
    ctx.fillText("y", Math.min(width - 14, Math.max(8, toPxX(0) + 8)), 14);
    ctx.restore();

    return { toPxX, toPxY };
}

function drawPolarGrid(ctx, cx, cy, maxRadiusPx, rMax) {
    ctx.save();
    // Concentric radius rings
    for (let r = 1; r <= rMax; r++) {
        const pxR = (r / rMax) * maxRadiusPx;
        ctx.strokeStyle = r === rMax ? "#CBD5E1" : "#E2E8F0";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, pxR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "#64748B";
        ctx.font = "11px system-ui, -apple-system, sans-serif";
        ctx.fillText(String(r), cx + pxR + 3, cy - 3);
    }

    // Radial spokes every pi/6 (30 deg)
    for (let k = 0; k < 12; k++) {
        const ang = (k * Math.PI) / 6;
        ctx.strokeStyle = k % 3 === 0 ? "#94A3B8" : "#E2E8F0";
        ctx.lineWidth = k % 3 === 0 ? 1.4 : 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxRadiusPx * Math.cos(ang), cy - maxRadiusPx * Math.sin(ang));
        ctx.stroke();
    }

    // Cardinal angle labels
    ctx.fillStyle = "#20243A";
    ctx.font = "600 12px system-ui, -apple-system, sans-serif";
    ctx.fillText("0", cx + maxRadiusPx + 8, cy + 4);
    ctx.fillText("π/2", cx - 10, cy - maxRadiusPx - 8);
    ctx.fillText("π", cx - maxRadiusPx - 18, cy + 4);
    ctx.fillText("3π/2", cx - 14, cy + maxRadiusPx + 16);
    ctx.restore();
}

function drawArgandGrid(ctx, width, height, range) {
    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) / (2 * range);
    const toPxX = (re) => cx + re * scale;
    const toPxY = (im) => cy - im * scale;

    ctx.save();
    for (let i = -range + 1; i < range; i++) {
        ctx.strokeStyle = i === 0 ? "#64748B" : "#E2E8F0";
        ctx.lineWidth = i === 0 ? 1.6 : 1;

        ctx.beginPath();
        ctx.moveTo(toPxX(i), 12);
        ctx.lineTo(toPxX(i), height - 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(12, toPxY(i));
        ctx.lineTo(width - 12, toPxY(i));
        ctx.stroke();

        if (i !== 0) {
            ctx.fillStyle = "#64748B";
            ctx.font = "11px system-ui, -apple-system, sans-serif";
            ctx.fillText(String(i), toPxX(i) - 4, cy + 14);
            ctx.fillText(`${i}i`, cx + 6, toPxY(i) + 4);
        }
    }

    ctx.fillStyle = "#20243A";
    ctx.font = "600 12px system-ui, -apple-system, sans-serif";
    ctx.fillText("Re(z)", width - 42, cy - 8);
    ctx.fillText("Im(z)", cx + 8, 22);
    ctx.restore();

    return { cx, cy, scale, toPxX, toPxY };
}

// ============================================================================
// 2. SAFE FORMULA COMPILER FOR CUSTOM EQUATIONS
// ============================================================================

function compileMathExpr(rawInput, varName = "x") {
    let expr = (rawInput || "").trim().toLowerCase();
    if (!expr) return null;

    expr = expr.replace(/θ/g, "theta").replace(/π/g, "pi");

    // Implicit multiplication: 2x -> 2*x, 3sin(x) -> 3*sin(x), (x+1)(x-1) -> (x+1)*(x-1)
    expr = expr
        .replace(/(\d)([a-z(])/g, "$1*$2")
        .replace(/(\))(\()/g, "$1*$2")
        .replace(/(\))([a-z0-9])/g, "$1*$2");

    if (varName === "x") {
        expr = expr.replace(/\bx(?=\(|sin|cos|tan|csc|sec|cot|arc|sqrt|abs|ln|log|pi)/g, "x*");
    } else if (varName === "theta") {
        expr = expr.replace(/\btheta(?=\(|sin|cos|tan|csc|sec|cot|arc|sqrt|abs|ln|log|pi)/g, "theta*");
    }

    // Convert ^ to Math.pow(base, exp) so expressions like -x^2 work cleanly in JS
    let safety = 0;
    while (expr.includes("^") && safety < 12) {
        const next = expr.replace(
            /([a-z0-9_.]+|\([^()]+\))\s*\^\s*([+-]?\s*(?:[a-z0-9_.]+|\([^()]+\)))/i,
            "Math.pow($1,$2)"
        );
        if (next === expr) break;
        expr = next;
        safety++;
    }

    // Security whitelist check
    const stripped = expr.replace(
        /\b(Math\.pow|sin|cos|tan|csc|sec|cot|arcsin|arccos|arctan|sqrt|abs|ln|log|exp|pi|e|x|theta)\b/g,
        ""
    );
    if (/[^0-9+\-*/().,\s]/.test(stripped)) {
        return null;
    }

    const helperScope = `
        const sin = Math.sin, cos = Math.cos, tan = Math.tan;
        const csc = (v) => 1 / Math.sin(v);
        const sec = (v) => 1 / Math.cos(v);
        const cot = (v) => 1 / Math.tan(v);
        const arcsin = Math.asin, arccos = Math.acos, arctan = Math.atan;
        const sqrt = Math.sqrt, abs = Math.abs, exp = Math.exp;
        const ln = Math.log, log = Math.log10;
        const pi = Math.PI, e = Math.E;
    `;

    try {
        const fn = new Function(varName, `${helperScope} return (${expr});`);
        fn(1);
        return fn;
    } catch {
        return null;
    }
}

// ============================================================================
// 3. GRAPH A: UNIVERSAL MULTI-AXIS GRAPHING LAB (data-graph="universal-lab")
// ============================================================================

function mountUniversalGraphLab(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE GRAPHING LAB • MULTI-AXIS EXPLORER</span>
            <h4>Explore Functions Across Cartesian, Trigonometric, Polar & Complex Axes</h4>
        </div>

        <div class="axis-switcher" role="tablist">
            <button type="button" class="axis-btn active" data-axis="cartesian">1. Cartesian Axes y = f(x)</button>
            <button type="button" class="axis-btn" data-axis="trig">2. Trig & Unit Circle</button>
            <button type="button" class="axis-btn" data-axis="polar">3. Polar Axes r = f(θ)</button>
            <button type="button" class="axis-btn" data-axis="complex">4. Complex Argand Plane</button>
        </div>

        <!-- PANEL 1: CARTESIAN -->
        <div class="axis-panel active" id="panel-cartesian">
            <div class="formula-bar">
                <span class="formula-prefix">f(x) =</span>
                <input type="text" id="cart-expr" value="0.5*x^3 - 2*x" placeholder="e.g. x^2 - 4, sin(2x), e^(-x^2), 1/(x-1)">
                <button type="button" class="plot-btn" id="cart-plot-btn">Plot</button>
            </div>
            <div class="preset-row">
                <span class="preset-label">Presets:</span>
                <button type="button" class="preset-chip" data-target="cart" data-val="0.5*x^3 - 2*x">Cubic</button>
                <button type="button" class="preset-chip" data-target="cart" data-val="sin(x) + 0.5*cos(2*x)">Trig Wave</button>
                <button type="button" class="preset-chip" data-target="cart" data-val="(x^2 - 1)/(x - 2)">Asymptote</button>
                <button type="button" class="preset-chip" data-target="cart" data-val="3*e^(-0.5*x^2)">Gaussian</button>
                <button type="button" class="preset-chip" data-target="cart" data-val="ln(x + 3)">Logarithm</button>
            </div>
            <div class="graph-controls">
                <label>
                    <span>Axis Zoom (±Range): <strong id="cart-zoom-val">5</strong></span>
                    <input type="range" id="cart-zoom" min="3" max="12" step="1" value="5">
                </label>
                <label class="toggle-check">
                    <span><input type="checkbox" id="cart-show-tan" checked> Tangent at x₀ = <strong id="cart-x0-val">1.2</strong></span>
                    <input type="range" id="cart-x0" min="-4" max="4" step="0.1" value="1.2">
                </label>
                <label class="toggle-check">
                    <span><input type="checkbox" id="cart-show-int"> Integral [<strong id="cart-a-val">-1.0</strong>, <strong id="cart-b-val">2.0</strong>]</span>
                    <div class="dual-range">
                        <input type="range" id="cart-a" min="-4" max="4" step="0.25" value="-1">
                        <input type="range" id="cart-b" min="-4" max="4" step="0.25" value="2">
                    </div>
                </label>
            </div>
        </div>

        <!-- PANEL 2: TRIG & UNIT CIRCLE -->
        <div class="axis-panel" id="panel-trig">
            <div class="preset-row">
                <span class="preset-label">Function:</span>
                <button type="button" class="preset-chip active-chip" data-trigfn="sin">sin(x)</button>
                <button type="button" class="preset-chip" data-trigfn="cos">cos(x)</button>
                <button type="button" class="preset-chip" data-trigfn="tan">tan(x)</button>
                <button type="button" class="preset-chip" data-trigfn="csc">csc(x)</button>
                <button type="button" class="preset-chip" data-trigfn="sec">sec(x)</button>
                <button type="button" class="preset-chip" data-trigfn="cot">cot(x)</button>
            </div>
            <div class="graph-controls">
                <label>
                    <span>Amplitude A: <strong id="ul-trig-a-val">1.5</strong></span>
                    <input type="range" id="ul-trig-a" min="0.5" max="2.5" step="0.25" value="1.5">
                </label>
                <label>
                    <span>Frequency B: <strong id="ul-trig-b-val">1</strong></span>
                    <input type="range" id="ul-trig-b" min="1" max="3" step="1" value="1">
                </label>
                <label>
                    <span>Phase Shift C: <strong id="ul-trig-c-val">0.00π</strong></span>
                    <input type="range" id="ul-trig-c" min="-1" max="1" step="0.25" value="0">
                </label>
                <label>
                    <span>Angle Cursor x: <strong id="ul-trig-x-val">0.35π</strong></span>
                    <input type="range" id="ul-trig-x" min="0" max="2" step="0.05" value="0.35">
                </label>
            </div>
        </div>

        <!-- PANEL 3: POLAR -->
        <div class="axis-panel" id="panel-polar">
            <div class="formula-bar">
                <span class="formula-prefix">r(θ) =</span>
                <input type="text" id="pol-expr" value="3.5*cos(3*theta)" placeholder="e.g. 3*cos(3*theta), 2 + 2*cos(theta), theta/2">
                <button type="button" class="plot-btn" id="pol-plot-btn">Plot</button>
            </div>
            <div class="preset-row">
                <span class="preset-label">Presets:</span>
                <button type="button" class="preset-chip" data-target="pol" data-val="3.5*cos(3*theta)">3-Petal Rose</button>
                <button type="button" class="preset-chip" data-target="pol" data-val="3.5*sin(2*theta)">4-Petal Rose</button>
                <button type="button" class="preset-chip" data-target="pol" data-val="2 + 2*cos(theta)">Cardioid</button>
                <button type="button" class="preset-chip" data-target="pol" data-val="1.5 + 2.5*cos(theta)">Inner-Loop Limaçon</button>
                <button type="button" class="preset-chip" data-target="pol" data-val="0.65*theta">Archimedean Spiral</button>
            </div>
            <div class="graph-controls">
                <label>
                    <span>Radar Sweep Angle θ: <strong id="ul-pol-th-val">1.50π</strong></span>
                    <input type="range" id="ul-pol-th" min="0" max="2" step="0.02" value="1.5">
                </label>
                <label>
                    <span>Max Radius Range: <strong id="ul-pol-rmax-val">5</strong></span>
                    <input type="range" id="ul-pol-rmax" min="3" max="8" step="1" value="5">
                </label>
            </div>
        </div>

        <!-- PANEL 4: COMPLEX ARGAND -->
        <div class="axis-panel" id="panel-complex">
            <div class="preset-row">
                <span class="preset-label">Argand Operation:</span>
                <button type="button" class="preset-chip active-chip" data-cmpmode="single">Polar Form r·cis(θ)</button>
                <button type="button" class="preset-chip" data-cmpmode="power">De Moivre Power zⁿ</button>
                <button type="button" class="preset-chip" data-cmpmode="roots">n-th Roots z^(1/n)</button>
            </div>
            <div class="graph-controls">
                <label>
                    <span>Real Part Re(z) = a: <strong id="ul-cmp-a-val">1.50</strong></span>
                    <input type="range" id="ul-cmp-a" min="-3" max="3" step="0.25" value="1.5">
                </label>
                <label>
                    <span>Imaginary Part Im(z) = b: <strong id="ul-cmp-b-val">1.50</strong></span>
                    <input type="range" id="ul-cmp-b" min="-3" max="3" step="0.25" value="1.5">
                </label>
                <label>
                    <span>Order n (Power / Roots): <strong id="ul-cmp-n-val">3</strong></span>
                    <input type="range" id="ul-cmp-n" min="2" max="6" step="1" value="3">
                </label>
            </div>
        </div>

        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <p class="graph-readout" id="ul-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const readout = container.querySelector("#ul-readout");

    let activeAxis = "cartesian";
    let trigFnName = "sin";
    let cmpMode = "single";

    container.querySelectorAll(".axis-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            container.querySelectorAll(".axis-btn").forEach((b) => b.classList.remove("active"));
            container.querySelectorAll(".axis-panel").forEach((p) => p.classList.remove("active"));
            btn.classList.add("active");
            activeAxis = btn.dataset.axis;
            container.querySelector(`#panel-${activeAxis}`).classList.add("active");
            render();
        });
    });

    container.querySelectorAll(".preset-chip[data-target]").forEach((chip) => {
        chip.addEventListener("click", () => {
            const inputId = chip.dataset.target === "cart" ? "#cart-expr" : "#pol-expr";
            container.querySelector(inputId).value = chip.dataset.val;
            render();
        });
    });

    container.querySelectorAll("[data-trigfn]").forEach((chip) => {
        chip.addEventListener("click", () => {
            container.querySelectorAll("[data-trigfn]").forEach((c) => c.classList.remove("active-chip"));
            chip.classList.add("active-chip");
            trigFnName = chip.dataset.trigfn;
            render();
        });
    });

    container.querySelectorAll("[data-cmpmode]").forEach((chip) => {
        chip.addEventListener("click", () => {
            container.querySelectorAll("[data-cmpmode]").forEach((c) => c.classList.remove("active-chip"));
            chip.classList.add("active-chip");
            cmpMode = chip.dataset.cmpmode;
            render();
        });
    });

    // Click directly on Complex Argand canvas to set z = a + bi
    canvas.addEventListener("click", (e) => {
        if (activeAxis !== "complex") return;
        const rect = canvas.getBoundingClientRect();
        const range = cmpMode === "power" ? 7 : 4;
        const scale = Math.min(rect.width, rect.height) / (2 * range);
        const aRaw = (e.clientX - rect.left - rect.width / 2) / scale;
        const bRaw = (rect.height / 2 - (e.clientY - rect.top)) / scale;
        const snap = (v) => Math.max(-3, Math.min(3, Math.round(v * 4) / 4));
        container.querySelector("#ul-cmp-a").value = String(snap(aRaw));
        container.querySelector("#ul-cmp-b").value = String(snap(bRaw));
        render();
    });

    function renderCartesian(ctx, width, height) {
        const raw = container.querySelector("#cart-expr").value;
        const fn = compileMathExpr(raw, "x");
        const zoom = parseInt(container.querySelector("#cart-zoom").value, 10);
        const showTan = container.querySelector("#cart-show-tan").checked;
        const showInt = container.querySelector("#cart-show-int").checked;
        const x0 = parseFloat(container.querySelector("#cart-x0").value);
        let a = parseFloat(container.querySelector("#cart-a").value);
        let b = parseFloat(container.querySelector("#cart-b").value);
        if (a > b) {
            b = a;
            container.querySelector("#cart-b").value = String(b);
        }

        container.querySelector("#cart-zoom-val").textContent = String(zoom);
        container.querySelector("#cart-x0-val").textContent = x0.toFixed(1);
        container.querySelector("#cart-a-val").textContent = a.toFixed(2);
        container.querySelector("#cart-b-val").textContent = b.toFixed(2);

        const { toPxX, toPxY } = drawCartesianGrid(ctx, width, height, -zoom, zoom, -zoom, zoom);

        if (!fn) {
            readout.textContent = "Invalid formula — try expressions like x^2 - 4, sin(2x), or 1/(x - 1).";
            return;
        }

        let netArea = 0;
        let absArea = 0;
        if (showInt && b > a) {
            const slices = 160;
            const dx = (b - a) / slices;
            for (let i = 0; i < slices; i++) {
                const xm = a + (i + 0.5) * dx;
                const ym = fn(xm);
                if (!Number.isFinite(ym) || Math.abs(ym) > zoom * 4) continue;
                netArea += ym * dx;
                absArea += Math.abs(ym) * dx;
                ctx.fillStyle = ym >= 0 ? "rgba(101, 88, 211, 0.20)" : "rgba(225, 29, 72, 0.18)";
                const px1 = toPxX(a + i * dx);
                const px2 = toPxX(a + (i + 1) * dx);
                const py0 = toPxY(0);
                const pyV = toPxY(Math.max(-zoom, Math.min(zoom, ym)));
                ctx.fillRect(px1, Math.min(py0, pyV), Math.max(1, px2 - px1), Math.abs(pyV - py0));
            }
        }

        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        let penDown = false;
        let prevY = null;
        for (let px = 0; px <= width; px += 1.5) {
            const x = -zoom + (px / width) * (2 * zoom);
            const y = fn(x);
            if (!Number.isFinite(y) || Math.abs(y) > zoom * 2.5 || (prevY !== null && Math.abs(y - prevY) > zoom * 1.5)) {
                penDown = false;
                prevY = Number.isFinite(y) ? y : null;
                continue;
            }
            const py = toPxY(y);
            if (!penDown) {
                ctx.moveTo(px, py);
                penDown = true;
            } else {
                ctx.lineTo(px, py);
            }
            prevY = y;
        }
        ctx.stroke();

        const statusParts = [`f(x) = ${raw}`];

        if (showTan) {
            const y0 = fn(x0);
            const h = 1e-5;
            const slope = (fn(x0 + h) - fn(x0 - h)) / (2 * h);
            if (Number.isFinite(y0) && Number.isFinite(slope)) {
                ctx.strokeStyle = "#E11D48";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(toPxX(-zoom), toPxY(y0 + slope * (-zoom - x0)));
                ctx.lineTo(toPxX(zoom), toPxY(y0 + slope * (zoom - x0)));
                ctx.stroke();

                ctx.fillStyle = "#20243A";
                ctx.beginPath();
                ctx.arc(toPxX(x0), toPxY(y0), 5.5, 0, Math.PI * 2);
                ctx.fill();

                statusParts.push(`P(${x0.toFixed(1)}, ${y0.toFixed(2)})`, `f'(${x0.toFixed(1)}) = ${slope.toFixed(2)}`);
            }
        }

        if (showInt) {
            statusParts.push(`∫ f dx = ${netArea.toFixed(2)}`, `Area = ${absArea.toFixed(2)}`);
        }

        readout.textContent = statusParts.join("  •  ");
    }

    function renderTrig(ctx, width, height) {
        const A = parseFloat(container.querySelector("#ul-trig-a").value);
        const B = parseInt(container.querySelector("#ul-trig-b").value, 10);
        const cPi = parseFloat(container.querySelector("#ul-trig-c").value);
        const xPi = parseFloat(container.querySelector("#ul-trig-x").value);
        const C = cPi * Math.PI;
        const xCur = xPi * Math.PI;

        container.querySelector("#ul-trig-a-val").textContent = A.toFixed(2);
        container.querySelector("#ul-trig-b-val").textContent = String(B);
        container.querySelector("#ul-trig-c-val").textContent = `${cPi.toFixed(2)}π`;
        container.querySelector("#ul-trig-x-val").textContent = `${xPi.toFixed(2)}π`;

        const evalFn = (x) => {
            const u = B * x - C;
            if (trigFnName === "sin") return A * Math.sin(u);
            if (trigFnName === "cos") return A * Math.cos(u);
            if (trigFnName === "tan") return A * Math.tan(u);
            if (trigFnName === "csc") return A / Math.sin(u);
            if (trigFnName === "sec") return A / Math.cos(u);
            return A / Math.tan(u);
        };

        const yMax = 3.5;
        const pyZero = height / 2;
        const yScale = (height - 44) / (2 * yMax);
        const toPxY = (y) => pyZero - y * yScale;

        const circleCx = Math.min(115, width * 0.18);
        const circleR = A * yScale;

        ctx.strokeStyle = "#CBD5E1";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(circleCx - circleR - 14, pyZero);
        ctx.lineTo(circleCx + circleR + 14, pyZero);
        ctx.moveTo(circleCx, 20);
        ctx.lineTo(circleCx, height - 20);
        ctx.stroke();

        ctx.strokeStyle = "#94A3B8";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(circleCx, pyZero, circleR, 0, Math.PI * 2);
        ctx.stroke();

        const theta = B * xCur - C;
        const dotCX = circleCx + circleR * Math.cos(theta);
        const dotCY = pyZero - circleR * Math.sin(theta);

        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(circleCx, pyZero);
        ctx.lineTo(dotCX, dotCY);
        ctx.stroke();

        const waveStart = circleCx + circleR + 36;
        const waveEnd = width - 22;
        const waveW = Math.max(150, waveEnd - waveStart);
        const toWaveX = (x) => waveStart + (x / (2 * Math.PI)) * waveW;

        ctx.strokeStyle = "#94A3B8";
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(waveStart, pyZero);
        ctx.lineTo(waveEnd, pyZero);
        ctx.moveTo(waveStart, 20);
        ctx.lineTo(waveStart, height - 20);
        ctx.stroke();

        ctx.fillStyle = "#64748B";
        ctx.font = "11px system-ui, sans-serif";
        [0.5, 1, 1.5, 2].forEach((m) => {
            const px = toWaveX(m * Math.PI);
            ctx.strokeStyle = "#E2E8F0";
            ctx.beginPath();
            ctx.moveTo(px, 22);
            ctx.lineTo(px, height - 22);
            ctx.stroke();
            ctx.fillText(m === 1 ? "π" : `${m}π`, px - 8, pyZero + 14);
        });

        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        let penDown = false;
        let prevY = null;
        for (let px = waveStart; px <= waveEnd; px += 1.5) {
            const x = ((px - waveStart) / waveW) * (2 * Math.PI);
            const y = evalFn(x);
            if (!Number.isFinite(y) || Math.abs(y) > yMax + 0.8 || (prevY !== null && Math.abs(y - prevY) > yMax)) {
                penDown = false;
                prevY = Number.isFinite(y) ? y : null;
                continue;
            }
            const py = toPxY(y);
            if (!penDown) {
                ctx.moveTo(px, py);
                penDown = true;
            } else {
                ctx.lineTo(px, py);
            }
            prevY = y;
        }
        ctx.stroke();

        const yCur = evalFn(xCur);
        const pxCur = toWaveX(xCur);
        if (Number.isFinite(yCur) && Math.abs(yCur) <= yMax + 0.5) {
            const pyCur = toPxY(yCur);
            if (trigFnName === "sin") {
                ctx.save();
                ctx.setLineDash([4, 4]);
                ctx.strokeStyle = "#E11D48";
                ctx.beginPath();
                ctx.moveTo(dotCX, dotCY);
                ctx.lineTo(pxCur, pyCur);
                ctx.stroke();
                ctx.restore();
            }
            ctx.fillStyle = "#E11D48";
            ctx.beginPath();
            ctx.arc(pxCur, pyCur, 5.5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        ctx.arc(dotCX, dotCY, 5, 0, Math.PI * 2);
        ctx.fill();

        const basePeriod = ["tan", "cot"].includes(trigFnName) ? 1 : 2;
        const yText = !Number.isFinite(yCur) || Math.abs(yCur) > 60 ? "undefined (asymptote)" : yCur.toFixed(3);
        readout.textContent =
            `y = ${A}·${trigFnName}(${B}x − ${cPi.toFixed(2)}π)  •  Period = ${(basePeriod / B).toFixed(2)}π  •  At x = ${xPi.toFixed(2)}π: y = ${yText}`;
    }

    function renderPolar(ctx, width, height) {
        const raw = container.querySelector("#pol-expr").value;
        const rFn = compileMathExpr(raw, "theta");
        const thPi = parseFloat(container.querySelector("#ul-pol-th").value);
        const rMax = parseInt(container.querySelector("#ul-pol-rmax").value, 10);
        const thMax = thPi * Math.PI;

        container.querySelector("#ul-pol-th-val").textContent = `${thPi.toFixed(2)}π`;
        container.querySelector("#ul-pol-rmax-val").textContent = String(rMax);

        const cx = width / 2;
        const cy = height / 2;
        const maxRadiusPx = Math.min(width, height) / 2 - 28;
        const scale = maxRadiusPx / rMax;

        drawPolarGrid(ctx, cx, cy, maxRadiusPx, rMax);

        if (!rFn) {
            readout.textContent = "Invalid polar equation — try 3*cos(3*theta) or 2 + 2*cos(theta).";
            return;
        }

        ctx.strokeStyle = "rgba(101, 88, 211, 0.22)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let t = 0; t <= Math.PI * 2 + 0.01; t += 0.015) {
            const r = rFn(t);
            if (!Number.isFinite(r)) continue;
            const px = cx + r * Math.cos(t) * scale;
            const py = cy - r * Math.sin(t) * scale;
            if (t === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let t = 0; t <= thMax; t += 0.015) {
            const r = rFn(t);
            if (!Number.isFinite(r)) continue;
            const px = cx + r * Math.cos(t) * scale;
            const py = cy - r * Math.sin(t) * scale;
            if (t === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxRadiusPx * Math.cos(thMax), cy - maxRadiusPx * Math.sin(thMax));
        ctx.stroke();
        ctx.restore();

        const rCur = rFn(thMax);
        const xCur = rCur * Math.cos(thMax);
        const yCur = rCur * Math.sin(thMax);
        ctx.fillStyle = rCur < 0 ? "#E11D48" : "#10B981";
        ctx.beginPath();
        ctx.arc(cx + xCur * scale, cy - yCur * scale, 6, 0, Math.PI * 2);
        ctx.fill();

        const negTag = rCur < 0 ? " [r < 0 reflects opposite ray]" : "";
        readout.textContent =
            `Polar (r, θ) = (${rCur.toFixed(2)}, ${thPi.toFixed(2)}π)${negTag}  •  Cartesian (x, y) = (${xCur.toFixed(2)}, ${yCur.toFixed(2)})`;
    }

    function renderComplex(ctx, width, height) {
        const a = parseFloat(container.querySelector("#ul-cmp-a").value);
        const b = parseFloat(container.querySelector("#ul-cmp-b").value);
        const n = parseInt(container.querySelector("#ul-cmp-n").value, 10);

        container.querySelector("#ul-cmp-a-val").textContent = a.toFixed(2);
        container.querySelector("#ul-cmp-b-val").textContent = b.toFixed(2);
        container.querySelector("#ul-cmp-n-val").textContent = String(n);

        const range = cmpMode === "power" ? 7 : 4;
        const { cx, cy, scale, toPxX, toPxY } = drawArgandGrid(ctx, width, height, range);

        const drawVec = (px, py, color, label) => {
            ctx.strokeStyle = color;
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(px, py);
            ctx.stroke();

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(px, py, 5.5, 0, Math.PI * 2);
            ctx.fill();

            if (label) {
                ctx.font = "600 12px system-ui, sans-serif";
                ctx.fillText(label, px + 8, py - 6);
            }
        };

        const r = Math.hypot(a, b);
        const theta = Math.atan2(b, a);
        const thetaPi = theta / Math.PI;
        const pxZ = toPxX(a);
        const pyZ = toPxY(b);

        if (cmpMode === "single") {
            ctx.save();
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = "#94A3B8";
            ctx.beginPath();
            ctx.moveTo(pxZ, pyZ);
            ctx.lineTo(pxZ, cy);
            ctx.moveTo(pxZ, pyZ);
            ctx.lineTo(cx, pyZ);
            ctx.stroke();
            ctx.restore();

            if (r > 0.1) {
                ctx.strokeStyle = "#10B981";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx, cy, Math.min(34, r * scale * 0.5), 0, -theta, theta > 0);
                ctx.stroke();
            }

            drawVec(pxZ, pyZ, "#6558D3", `z = ${a} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}i`);
            readout.textContent =
                `|z| = r = ${r.toFixed(2)}  •  Principal Arg(z) = ${thetaPi.toFixed(2)}π (${Math.round((theta * 180) / Math.PI)}°)  •  Tip: Click anywhere on the grid to place z`;
        } else if (cmpMode === "power") {
            const rn = Math.pow(r, n);
            const thN = n * theta;
            const an = rn * Math.cos(thN);
            const bn = rn * Math.sin(thN);

            drawVec(pxZ, pyZ, "#94A3B8", "z");
            drawVec(toPxX(an), toPxY(bn), "#E11D48", `z^${n}`);
            readout.textContent =
                `De Moivre: |z^${n}| = ${rn.toFixed(2)},  Angle = ${(n * thetaPi).toFixed(2)}π  •  z^${n} ≈ ${an.toFixed(2)} ${bn >= 0 ? "+" : "-"} ${Math.abs(bn).toFixed(2)}i`;
        } else {
            const rRoot = Math.pow(r, 1 / n);
            if (rRoot > 0.05) {
                ctx.save();
                ctx.setLineDash([4, 4]);
                ctx.strokeStyle = "#CBD5E1";
                ctx.beginPath();
                ctx.arc(cx, cy, rRoot * scale, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }

            drawVec(pxZ, pyZ, "#94A3B8", "w");
            const pts = [];
            for (let k = 0; k < n; k++) {
                const angK = (theta + 2 * Math.PI * k) / n;
                const rkX = toPxX(rRoot * Math.cos(angK));
                const rkY = toPxY(rRoot * Math.sin(angK));
                pts.push({ x: rkX, y: rkY });
                drawVec(rkX, rkY, k === 0 ? "#10B981" : "#6558D3", `z_${k}`);
            }

            if (pts.length >= 2 && rRoot > 0.05) {
                ctx.strokeStyle = "rgba(101, 88, 211, 0.35)";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                pts.forEach((pt, idx) => (idx === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
                ctx.closePath();
                ctx.stroke();
            }

            readout.textContent =
                `${n} Symmetric Roots on Circle Radius r^(1/${n}) = ${rRoot.toFixed(2)}  •  Spacing = 2π/${n} (${Math.round(360 / n)}°)`;
        }
    }

    function render() {
        const { ctx, width, height } = setupHiDPICanvas(canvas, 380);
        if (activeAxis === "cartesian") renderCartesian(ctx, width, height);
        else if (activeAxis === "trig") renderTrig(ctx, width, height);
        else if (activeAxis === "polar") renderPolar(ctx, width, height);
        else renderComplex(ctx, width, height);
    }

    container.querySelectorAll("input[type='range'], input[type='checkbox']").forEach((el) => {
        el.addEventListener("input", render);
    });
    container.querySelector("#cart-plot-btn").addEventListener("click", render);
    container.querySelector("#pol-plot-btn").addEventListener("click", render);
    container.querySelector("#cart-expr").addEventListener("keydown", (e) => {
        if (e.key === "Enter") render();
    });
    container.querySelector("#pol-expr").addEventListener("keydown", (e) => {
        if (e.key === "Enter") render();
    });
    window.addEventListener("resize", () => {
        if (container.offsetParent !== null) {
            render();
        }
    });

    render();
    return render;
}

// ============================================================================
// 4. GRAPH B: QUADRATIC VERTEX EXPLORER (data-graph="quadratic-vertex")
// ============================================================================

function mountQuadraticGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • QUADRATIC VERTEX FORM</span>
            <h4>Parabola Transformation: f(x) = a(x − h)² + k</h4>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Stretch a: <strong id="quad-a-val">1.0</strong></span>
                <input type="range" id="quad-a" min="-2" max="2" step="0.25" value="1">
            </label>
            <label>
                <span>Horizontal Shift h: <strong id="quad-h-val">1.0</strong></span>
                <input type="range" id="quad-h" min="-4" max="4" step="0.5" value="1">
            </label>
            <label>
                <span>Vertical Shift k: <strong id="quad-k-val">-2.0</strong></span>
                <input type="range" id="quad-k" min="-4" max="4" step="0.5" value="-2">
            </label>
        </div>
        <p class="graph-readout" id="quad-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderA = container.querySelector("#quad-a");
    const sliderH = container.querySelector("#quad-h");
    const sliderK = container.querySelector("#quad-k");
    const readout = container.querySelector("#quad-readout");

    function render() {
        const a = parseFloat(sliderA.value);
        const h = parseFloat(sliderH.value);
        const k = parseFloat(sliderK.value);

        container.querySelector("#quad-a-val").textContent = a.toFixed(2);
        container.querySelector("#quad-h-val").textContent = h.toFixed(1);
        container.querySelector("#quad-k-val").textContent = k.toFixed(1);

        const { ctx, width, height } = setupHiDPICanvas(canvas, 320);
        const { toPxX, toPxY } = drawCartesianGrid(ctx, width, height, -6, 6, -6, 6);

        // Axis of symmetry x = h
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(toPxX(h), 0);
        ctx.lineTo(toPxX(h), height);
        ctx.stroke();
        ctx.restore();

        // Parabola curve
        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 1.5) {
            const x = -6 + (px / width) * 12;
            const y = a * Math.pow(x - h, 2) + k;
            const py = toPxY(y);
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Vertex dot (h, k)
        ctx.fillStyle = "#E11D48";
        ctx.beginPath();
        ctx.arc(toPxX(h), toPxY(k), 6, 0, Math.PI * 2);
        ctx.fill();

        const bStd = -2 * a * h;
        const cStd = a * h * h + k;
        readout.textContent =
            `Vertex (${h}, ${k})  •  Axis x = ${h}  •  Standard Form: ${a}x² ${bStd >= 0 ? "+" : "-"} ${Math.abs(bStd).toFixed(2)}x ${cStd >= 0 ? "+" : "-"} ${Math.abs(cStd).toFixed(2)}`;
    }

    [sliderA, sliderH, sliderK].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 5. GRAPH C: TRIGONOMETRY & UNIT CIRCLE SYNC (data-graph="trig-explorer")
// ============================================================================

function mountTrigExplorer(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • TRIGONOMETRY & UNIT CIRCLE</span>
            <h4>Unit Circle Projection onto y = A·f(Bx − C)</h4>
        </div>
        <div class="graph-tabs">
            <button type="button" class="graph-tab-btn active" data-fn="sin">sin(x)</button>
            <button type="button" class="graph-tab-btn" data-fn="cos">cos(x)</button>
            <button type="button" class="graph-tab-btn" data-fn="tan">tan(x)</button>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Amplitude A: <strong id="trig-a-val">1.5</strong></span>
                <input type="range" id="trig-a" min="0.5" max="2.5" step="0.25" value="1.5">
            </label>
            <label>
                <span>Frequency B: <strong id="trig-b-val">1</strong></span>
                <input type="range" id="trig-b" min="1" max="3" step="1" value="1">
            </label>
            <label>
                <span>Phase Shift C: <strong id="trig-c-val">0.00π</strong></span>
                <input type="range" id="trig-c" min="-1" max="1" step="0.25" value="0">
            </label>
            <label>
                <span>Angle Cursor x: <strong id="trig-x-val">0.50π</strong></span>
                <input type="range" id="trig-x" min="0" max="2" step="0.05" value="0.5">
            </label>
        </div>
        <p class="graph-readout" id="trig-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderA = container.querySelector("#trig-a");
    const sliderB = container.querySelector("#trig-b");
    const sliderC = container.querySelector("#trig-c");
    const sliderX = container.querySelector("#trig-x");
    const readout = container.querySelector("#trig-readout");
    let fnType = "sin";

    container.querySelectorAll(".graph-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            container.querySelectorAll(".graph-tab-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            fnType = btn.dataset.fn;
            render();
        });
    });

    function evalTrig(A, B, C, x) {
        const arg = B * x - C;
        if (fnType === "sin") return A * Math.sin(arg);
        if (fnType === "cos") return A * Math.cos(arg);
        return A * Math.tan(arg);
    }

    function render() {
        const A = parseFloat(sliderA.value);
        const B = parseInt(sliderB.value, 10);
        const cPi = parseFloat(sliderC.value);
        const xPi = parseFloat(sliderX.value);
        const C = cPi * Math.PI;
        const xCur = xPi * Math.PI;

        container.querySelector("#trig-a-val").textContent = A.toFixed(2);
        container.querySelector("#trig-b-val").textContent = String(B);
        container.querySelector("#trig-c-val").textContent = `${cPi.toFixed(2)}π`;
        container.querySelector("#trig-x-val").textContent = `${xPi.toFixed(2)}π`;

        const { ctx, width, height } = setupHiDPICanvas(canvas, 330);
        const yMax = 3.2;
        const pyZero = height / 2;
        const yScale = (height - 44) / (2 * yMax);
        const toPxY = (y) => pyZero - y * yScale;

        const circleCx = Math.min(115, width * 0.18);
        const circleR = A * yScale;

        ctx.strokeStyle = "#CBD5E1";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(circleCx - circleR - 14, pyZero);
        ctx.lineTo(circleCx + circleR + 14, pyZero);
        ctx.moveTo(circleCx, 20);
        ctx.lineTo(circleCx, height - 20);
        ctx.stroke();

        ctx.strokeStyle = "#94A3B8";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(circleCx, pyZero, circleR, 0, Math.PI * 2);
        ctx.stroke();

        const theta = B * xCur - C;
        const dotCircleX = circleCx + circleR * Math.cos(theta);
        const dotCircleY = pyZero - circleR * Math.sin(theta);

        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(circleCx, pyZero);
        ctx.lineTo(dotCircleX, dotCircleY);
        ctx.stroke();

        const waveStart = circleCx + circleR + 36;
        const waveEnd = width - 22;
        const waveW = Math.max(140, waveEnd - waveStart);
        const toWaveX = (x) => waveStart + (x / (2 * Math.PI)) * waveW;

        ctx.strokeStyle = "#94A3B8";
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(waveStart, pyZero);
        ctx.lineTo(waveEnd, pyZero);
        ctx.moveTo(waveStart, 20);
        ctx.lineTo(waveStart, height - 20);
        ctx.stroke();

        ctx.fillStyle = "#64748B";
        ctx.font = "11px system-ui, sans-serif";
        [0.5, 1, 1.5, 2].forEach((m) => {
            const px = toWaveX(m * Math.PI);
            ctx.strokeStyle = "#E2E8F0";
            ctx.beginPath();
            ctx.moveTo(px, 22);
            ctx.lineTo(px, height - 22);
            ctx.stroke();
            ctx.fillText(m === 1 ? "π" : `${m}π`, px - 8, pyZero + 14);
        });

        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        let penDown = false;
        for (let px = waveStart; px <= waveEnd; px += 1.5) {
            const x = ((px - waveStart) / waveW) * (2 * Math.PI);
            const y = evalTrig(A, B, C, x);
            if (!Number.isFinite(y) || Math.abs(y) > yMax + 0.6) {
                penDown = false;
                continue;
            }
            const py = toPxY(y);
            if (!penDown) {
                ctx.moveTo(px, py);
                penDown = true;
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();

        const yCur = evalTrig(A, B, C, xCur);
        const pxCur = toWaveX(xCur);
        if (Math.abs(yCur) <= yMax + 0.5) {
            const pyCur = toPxY(yCur);
            if (fnType === "sin") {
                ctx.save();
                ctx.setLineDash([4, 4]);
                ctx.strokeStyle = "#E11D48";
                ctx.beginPath();
                ctx.moveTo(dotCircleX, dotCircleY);
                ctx.lineTo(pxCur, pyCur);
                ctx.stroke();
                ctx.restore();
            }
            ctx.fillStyle = "#E11D48";
            ctx.beginPath();
            ctx.arc(pxCur, pyCur, 5.5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        ctx.arc(dotCircleX, dotCircleY, 5, 0, Math.PI * 2);
        ctx.fill();

        const period = (2 / B).toFixed(2);
        const yDisplay = Math.abs(yCur) > 50 ? "undefined (asymptote)" : yCur.toFixed(3);
        readout.textContent =
            `Period = ${period}π  •  At x = ${xPi.toFixed(2)}π (${Math.round(xPi * 180)}°):  y = ${yDisplay}`;
    }

    [sliderA, sliderB, sliderC, sliderX].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 6. GRAPH D: POLAR CURVES PLOTTER (data-graph="polar-curves")
// ============================================================================

function mountPolarGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • POLAR CO-ORDINATES r = f(θ)</span>
            <h4>Polar Radar Sweep & Rose / Cardioid Plotter</h4>
        </div>
        <div class="graph-tabs">
            <button type="button" class="graph-tab-btn active" data-preset="rose">Rose: r = a·cos(nθ)</button>
            <button type="button" class="graph-tab-btn" data-preset="limacon">Cardioid / Limaçon: r = 2 + a·cos(θ)</button>
            <button type="button" class="graph-tab-btn" data-preset="circle">Circle: r = a·cos(θ)</button>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Parameter a: <strong id="pol-a-val">3.0</strong></span>
                <input type="range" id="pol-a" min="1" max="3.5" step="0.5" value="3">
            </label>
            <label>
                <span>Petals n (Rose): <strong id="pol-n-val">3</strong></span>
                <input type="range" id="pol-n" min="2" max="5" step="1" value="3">
            </label>
            <label>
                <span>Sweep Angle θ: <strong id="pol-th-val">1.25π</strong></span>
                <input type="range" id="pol-th" min="0" max="2" step="0.02" value="1.25">
            </label>
        </div>
        <p class="graph-readout" id="pol-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderA = container.querySelector("#pol-a");
    const sliderN = container.querySelector("#pol-n");
    const sliderTh = container.querySelector("#pol-th");
    const readout = container.querySelector("#pol-readout");
    let preset = "rose";

    container.querySelectorAll(".graph-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            container.querySelectorAll(".graph-tab-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            preset = btn.dataset.preset;
            render();
        });
    });

    function evalR(a, n, theta) {
        if (preset === "rose") return a * Math.cos(n * theta);
        if (preset === "limacon") return 2 + a * Math.cos(theta);
        return a * Math.cos(theta);
    }

    function render() {
        const a = parseFloat(sliderA.value);
        const n = parseInt(sliderN.value, 10);
        const thPi = parseFloat(sliderTh.value);
        const thMax = thPi * Math.PI;

        container.querySelector("#pol-a-val").textContent = a.toFixed(1);
        container.querySelector("#pol-n-val").textContent = String(n);
        container.querySelector("#pol-th-val").textContent = `${thPi.toFixed(2)}π`;

        const { ctx, width, height } = setupHiDPICanvas(canvas, 350);
        const cx = width / 2;
        const cy = height / 2;
        const rMax = 5;
        const maxRadiusPx = Math.min(width, height) / 2 - 28;
        const scale = maxRadiusPx / rMax;

        drawPolarGrid(ctx, cx, cy, maxRadiusPx, rMax);

        ctx.strokeStyle = "rgba(101, 88, 211, 0.22)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let t = 0; t <= Math.PI * 2 + 0.01; t += 0.015) {
            const r = evalR(a, n, t);
            const px = cx + r * Math.cos(t) * scale;
            const py = cy - r * Math.sin(t) * scale;
            if (t === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let t = 0; t <= thMax; t += 0.015) {
            const r = evalR(a, n, t);
            const px = cx + r * Math.cos(t) * scale;
            const py = cy - r * Math.sin(t) * scale;
            if (t === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxRadiusPx * Math.cos(thMax), cy - maxRadiusPx * Math.sin(thMax));
        ctx.stroke();
        ctx.restore();

        const rCur = evalR(a, n, thMax);
        const xCur = rCur * Math.cos(thMax);
        const yCur = rCur * Math.sin(thMax);

        ctx.fillStyle = rCur < 0 ? "#E11D48" : "#10B981";
        ctx.beginPath();
        ctx.arc(cx + xCur * scale, cy - yCur * scale, 6, 0, Math.PI * 2);
        ctx.fill();

        const negNote = rCur < 0 ? " (r < 0 reflects opposite ray!)" : "";
        readout.textContent =
            `Polar (r, θ) = (${rCur.toFixed(2)}, ${thPi.toFixed(2)}π)${negNote}  •  Cartesian (x, y) = (${xCur.toFixed(2)}, ${yCur.toFixed(2)})`;
    }

    [sliderA, sliderN, sliderTh].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 7. GRAPH E: BINOMIAL EXPANSION APPROXIMATION (data-graph="binomial-approx")
// ============================================================================

function mountBinomialGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • BINOMIAL SERIES APPROXIMATION</span>
            <h4>Exact (1 + x)ⁿ vs. k-Term Binomial Polynomial</h4>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Exponent n: <strong id="bin-n-val">5</strong></span>
                <input type="range" id="bin-n" min="2" max="8" step="1" value="5">
            </label>
            <label>
                <span>Polynomial Degree k: <strong id="bin-k-val">2</strong></span>
                <input type="range" id="bin-k" min="1" max="5" step="1" value="2">
            </label>
            <label>
                <span>Evaluation Point x₀: <strong id="bin-x-val">0.30</strong></span>
                <input type="range" id="bin-x" min="-0.8" max="0.8" step="0.05" value="0.3">
            </label>
        </div>
        <p class="graph-readout" id="bin-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderN = container.querySelector("#bin-n");
    const sliderK = container.querySelector("#bin-k");
    const sliderX = container.querySelector("#bin-x");
    const readout = container.querySelector("#bin-readout");

    function nCr(n, r) {
        let res = 1;
        for (let i = 1; i <= r; i++) res = (res * (n - i + 1)) / i;
        return res;
    }

    function evalApprox(n, k, x) {
        let sum = 0;
        const limit = Math.min(n, k);
        for (let r = 0; r <= limit; r++) {
            sum += nCr(n, r) * Math.pow(x, r);
        }
        return sum;
    }

    function render() {
        const n = parseInt(sliderN.value, 10);
        const k = parseInt(sliderK.value, 10);
        const x0 = parseFloat(sliderX.value);

        container.querySelector("#bin-n-val").textContent = String(n);
        container.querySelector("#bin-k-val").textContent = String(k);
        container.querySelector("#bin-x-val").textContent = x0.toFixed(2);

        const { ctx, width, height } = setupHiDPICanvas(canvas, 320);
        const { toPxX, toPxY } = drawCartesianGrid(ctx, width, height, -1.2, 1.2, -1, 6);

        // Exact curve (1 + x)^n
        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 1.5) {
            const x = -1.2 + (px / width) * 2.4;
            const y = Math.pow(1 + x, n);
            const py = toPxY(y);
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Binomial approximation curve
        ctx.save();
        ctx.setLineDash([6, 4]);
        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 1.5) {
            const x = -1.2 + (px / width) * 2.4;
            const y = evalApprox(n, k, x);
            const py = toPxY(y);
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.restore();

        const exactVal = Math.pow(1 + x0, n);
        const approxVal = evalApprox(n, k, x0);
        const errPct = Math.abs((exactVal - approxVal) / exactVal) * 100;

        ctx.fillStyle = "#E11D48";
        ctx.beginPath();
        ctx.arc(toPxX(x0), toPxY(approxVal), 5.5, 0, Math.PI * 2);
        ctx.fill();

        readout.textContent =
            `At x = ${x0.toFixed(2)}:  Exact (1+x)^${n} = ${exactVal.toFixed(4)}  •  Degree-${k} Approx = ${approxVal.toFixed(4)}  •  Error = ${errPct.toFixed(2)}%`;
    }

    [sliderN, sliderK, sliderX].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 8. GRAPH F: CONIC ROTATION OF AXES (data-graph="conic-rotation")
// ============================================================================

function mountRotationGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • ROTATION OF AXES</span>
            <h4>Eliminating the xy-Term: Ax² + Bxy + Cy² = 36</h4>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Coeff A: <strong id="rot-a-val">3</strong></span>
                <input type="range" id="rot-a" min="1" max="5" step="1" value="3">
            </label>
            <label>
                <span>Mixed B: <strong id="rot-b-val">3</strong></span>
                <input type="range" id="rot-b" min="-4" max="4" step="1" value="3">
            </label>
            <label>
                <span>Coeff C: <strong id="rot-c-val">2</strong></span>
                <input type="range" id="rot-c" min="1" max="5" step="1" value="2">
            </label>
            <label>
                <span>Axes Angle θ: <strong id="rot-th-val">35°</strong></span>
                <input type="range" id="rot-th" min="0" max="90" step="1" value="35">
            </label>
        </div>
        <p class="graph-readout" id="rot-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderA = container.querySelector("#rot-a");
    const sliderB = container.querySelector("#rot-b");
    const sliderC = container.querySelector("#rot-c");
    const sliderTh = container.querySelector("#rot-th");
    const readout = container.querySelector("#rot-readout");

    function render() {
        const A = parseFloat(sliderA.value);
        const B = parseFloat(sliderB.value);
        const C = parseFloat(sliderC.value);
        const thDeg = parseFloat(sliderTh.value);
        const th = (thDeg * Math.PI) / 180;

        container.querySelector("#rot-a-val").textContent = String(A);
        container.querySelector("#rot-b-val").textContent = String(B);
        container.querySelector("#rot-c-val").textContent = String(C);
        container.querySelector("#rot-th-val").textContent = `${thDeg}°`;

        const { ctx, width, height } = setupHiDPICanvas(canvas, 340);
        const zoom = 7;
        const { toPxX, toPxY } = drawCartesianGrid(ctx, width, height, -zoom, zoom, -zoom, zoom);
        const cx = toPxX(0);
        const cy = toPxY(0);

        // Draw rotated (x', y') axes in emerald
        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 1.8;
        const len = Math.max(width, height);
        ctx.beginPath();
        ctx.moveTo(cx - len * Math.cos(th), cy + len * Math.sin(th));
        ctx.lineTo(cx + len * Math.cos(th), cy - len * Math.sin(th));
        ctx.moveTo(cx + len * Math.sin(th), cy + len * Math.cos(th));
        ctx.lineTo(cx - len * Math.sin(th), cy - len * Math.cos(th));
        ctx.stroke();
        ctx.restore();

        // Plot Ax^2 + Bxy + Cy^2 = 36 via polar radius r(phi)
        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        let penDown = false;
        for (let deg = 0; deg <= 360; deg += 1) {
            const phi = (deg * Math.PI) / 180;
            const denom = A * Math.cos(phi) ** 2 + B * Math.cos(phi) * Math.sin(phi) + C * Math.sin(phi) ** 2;
            if (denom <= 0.05) {
                penDown = false;
                continue;
            }
            const r = Math.sqrt(36 / denom);
            if (r > zoom * 1.5) {
                penDown = false;
                continue;
            }
            const px = toPxX(r * Math.cos(phi));
            const py = toPxY(r * Math.sin(phi));
            if (!penDown) {
                ctx.moveTo(px, py);
                penDown = true;
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();

        const disc = B * B - 4 * A * C;
        const kind = disc < 0 ? "Ellipse" : disc > 0 ? "Hyperbola" : "Parabola";
        const idealRad = B === 0 ? 0 : 0.5 * Math.atan2(B, A - C);
        const idealDeg = ((idealRad * 180) / Math.PI + 90) % 90;

        readout.textContent =
            `Discriminant B² − 4AC = ${disc} (${kind})  •  Optimal Alignment Angle θ = ${idealDeg.toFixed(1)}°`;
    }

    [sliderA, sliderB, sliderC, sliderTh].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 9. GRAPH G: COMPLEX ARGAND PLANE (data-graph="complex-argand")
// ============================================================================

function mountComplexArgandGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • COMPLEX ARGAND PLANE</span>
            <h4>Complex Vectors, De Moivre Powers zⁿ & Symmetric n-th Roots</h4>
        </div>
        <div class="graph-tabs">
            <button type="button" class="graph-tab-btn active" data-mode="single">1. Polar Form r·cis(θ)</button>
            <button type="button" class="graph-tab-btn" data-mode="power">2. De Moivre Power zⁿ</button>
            <button type="button" class="graph-tab-btn" data-mode="roots">3. n-th Roots z^(1/n)</button>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Real Part Re(z) = a: <strong id="cmp-a-val">1.0</strong></span>
                <input type="range" id="cmp-a" min="-2.5" max="2.5" step="0.25" value="1">
            </label>
            <label>
                <span>Imaginary Part Im(z) = b: <strong id="cmp-b-val">1.0</strong></span>
                <input type="range" id="cmp-b" min="-2.5" max="2.5" step="0.25" value="1">
            </label>
            <label>
                <span>Order n (Power / Roots): <strong id="cmp-n-val">3</strong></span>
                <input type="range" id="cmp-n" min="2" max="6" step="1" value="3">
            </label>
        </div>
        <p class="graph-readout" id="cmp-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderA = container.querySelector("#cmp-a");
    const sliderB = container.querySelector("#cmp-b");
    const sliderN = container.querySelector("#cmp-n");
    const readout = container.querySelector("#cmp-readout");
    let mode = "single";

    container.querySelectorAll(".graph-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            container.querySelectorAll(".graph-tab-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            mode = btn.dataset.mode;
            render();
        });
    });

    function drawVector(ctx, cx, cy, px, py, color, label) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, 5.5, 0, Math.PI * 2);
        ctx.fill();

        if (label) {
            ctx.font = "600 12px system-ui, sans-serif";
            ctx.fillText(label, px + 8, py - 6);
        }
    }

    function render() {
        const a = parseFloat(sliderA.value);
        const b = parseFloat(sliderB.value);
        const n = parseInt(sliderN.value, 10);

        container.querySelector("#cmp-a-val").textContent = a.toFixed(2);
        container.querySelector("#cmp-b-val").textContent = b.toFixed(2);
        container.querySelector("#cmp-n-val").textContent = String(n);

        const { ctx, width, height } = setupHiDPICanvas(canvas, 350);
        const range = mode === "power" ? 6 : 4;
        const { cx, cy, scale, toPxX, toPxY } = drawArgandGrid(ctx, width, height, range);

        const r = Math.hypot(a, b);
        const theta = Math.atan2(b, a);
        const thetaPi = theta / Math.PI;
        const pxZ = toPxX(a);
        const pyZ = toPxY(b);

        if (mode === "single") {
            ctx.save();
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = "#94A3B8";
            ctx.beginPath();
            ctx.moveTo(pxZ, pyZ);
            ctx.lineTo(pxZ, cy);
            ctx.moveTo(pxZ, pyZ);
            ctx.lineTo(cx, pyZ);
            ctx.stroke();
            ctx.restore();

            if (r > 0.1) {
                ctx.strokeStyle = "#10B981";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx, cy, Math.min(34, r * scale * 0.5), 0, -theta, theta > 0);
                ctx.stroke();
            }

            drawVector(ctx, cx, cy, pxZ, pyZ, "#6558D3", `z = ${a} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}i`);
            readout.textContent =
                `Modulus |z| = r = ${r.toFixed(2)}  •  Principal Arg(z) = ${thetaPi.toFixed(2)}π rad (${Math.round((theta * 180) / Math.PI)}°)`;
        } else if (mode === "power") {
            const rn = Math.pow(r, n);
            const thN = n * theta;
            const an = rn * Math.cos(thN);
            const bn = rn * Math.sin(thN);

            drawVector(ctx, cx, cy, pxZ, pyZ, "#94A3B8", "z");
            drawVector(ctx, cx, cy, toPxX(an), toPxY(bn), "#E11D48", `z^${n}`);
            readout.textContent =
                `De Moivre: |z^${n}| = r^${n} = ${rn.toFixed(2)},  Angle = ${n}θ = ${(n * thetaPi).toFixed(2)}π  •  z^${n} ≈ ${an.toFixed(2)} ${bn >= 0 ? "+" : "-"} ${Math.abs(bn).toFixed(2)}i`;
        } else {
            const rRoot = Math.pow(r, 1 / n);
            if (rRoot > 0.05) {
                ctx.save();
                ctx.setLineDash([4, 4]);
                ctx.strokeStyle = "#CBD5E1";
                ctx.beginPath();
                ctx.arc(cx, cy, rRoot * scale, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }

            drawVector(ctx, cx, cy, pxZ, pyZ, "#94A3B8", "w");
            const rootPts = [];
            for (let k = 0; k < n; k++) {
                const angK = (theta + 2 * Math.PI * k) / n;
                const rkX = toPxX(rRoot * Math.cos(angK));
                const rkY = toPxY(rRoot * Math.sin(angK));
                rootPts.push({ x: rkX, y: rkY });
                drawVector(ctx, cx, cy, rkX, rkY, k === 0 ? "#10B981" : "#6558D3", `z_${k}`);
            }

            if (rootPts.length >= 2 && rRoot > 0.05) {
                ctx.strokeStyle = "rgba(101, 88, 211, 0.35)";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                rootPts.forEach((pt, idx) => (idx === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
                ctx.closePath();
                ctx.stroke();
            }

            readout.textContent =
                `${n} Symmetric Roots on Circle Radius r^(1/${n}) = ${rRoot.toFixed(2)}  •  Angular Spacing = 2π/${n} (${Math.round(360 / n)}°)`;
        }
    }

    [sliderA, sliderB, sliderN].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 10. GRAPH H: SECANT TO TANGENT DERIVATIVE (data-graph="tangent-derivative")
// ============================================================================

function mountTangentGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • DERIVATIVE AS LIMIT OF SECANT</span>
            <h4>Secant Slope → Instantaneous Tangent Slope as h → 0</h4>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Point x₀: <strong id="tan-x0-val">1.0</strong></span>
                <input type="range" id="tan-x0" min="-2.5" max="2.5" step="0.25" value="1">
            </label>
            <label>
                <span>Step Δx = h: <strong id="tan-h-val">1.50</strong></span>
                <input type="range" id="tan-h" min="0.05" max="2.5" step="0.05" value="1.5">
            </label>
        </div>
        <p class="graph-readout" id="tan-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderX0 = container.querySelector("#tan-x0");
    const sliderH = container.querySelector("#tan-h");
    const readout = container.querySelector("#tan-readout");

    const f = (x) => 0.4 * x * x * x - 1.5 * x + 1;
    const df = (x) => 1.2 * x * x - 1.5;

    function render() {
        const x0 = parseFloat(sliderX0.value);
        const h = parseFloat(sliderH.value);
        const x1 = x0 + h;

        container.querySelector("#tan-x0-val").textContent = x0.toFixed(2);
        container.querySelector("#tan-h-val").textContent = h.toFixed(2);

        const { ctx, width, height } = setupHiDPICanvas(canvas, 320);
        const { toPxX, toPxY } = drawCartesianGrid(ctx, width, height, -4, 5, -4, 6);

        // Curve f(x)
        ctx.strokeStyle = "#6558D3";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 1.5) {
            const x = -4 + (px / width) * 9;
            const py = toPxY(f(x));
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        const y0 = f(x0);
        const y1 = f(x1);
        const mTan = df(x0);
        const mSec = (y1 - y0) / h;

        // True tangent line (Rose)
        ctx.strokeStyle = "#E11D48";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(toPxX(-4), toPxY(y0 + mTan * (-4 - x0)));
        ctx.lineTo(toPxX(5), toPxY(y0 + mTan * (5 - x0)));
        ctx.stroke();

        // Secant line (Emerald dashed)
        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = "#10B981";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(toPxX(-4), toPxY(y0 + mSec * (-4 - x0)));
        ctx.lineTo(toPxX(5), toPxY(y0 + mSec * (5 - x0)));
        ctx.stroke();
        ctx.restore();

        // Points P and Q
        ctx.fillStyle = "#20243A";
        ctx.beginPath();
        ctx.arc(toPxX(x0), toPxY(y0), 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        ctx.arc(toPxX(x1), toPxY(y1), 5.5, 0, Math.PI * 2);
        ctx.fill();

        readout.textContent =
            `Secant Slope (green) = ${mSec.toFixed(3)}  •  Exact Tangent f'(${x0.toFixed(2)}) (red) = ${mTan.toFixed(3)}`;
    }

    [sliderX0, sliderH].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 11. GRAPH I: RIEMANN SUMS & DEFINITE INTEGRAL (data-graph="area-integral")
// ============================================================================

function mountIntegralGraph(container) {
    container.innerHTML = `
        <div class="graph-header">
            <span class="graph-badge">INTERACTIVE VISUALIZER • DEFINITE INTEGRAL & RIEMANN SUMS</span>
            <h4>Area Under f(x) = −0.4x² + 4 via Midpoint Riemann Rectangles</h4>
        </div>
        <div class="graph-canvas-wrap">
            <canvas></canvas>
        </div>
        <div class="graph-controls">
            <label>
                <span>Lower Limit a: <strong id="int-a-val">-2.0</strong></span>
                <input type="range" id="int-a" min="-3" max="1" step="0.5" value="-2">
            </label>
            <label>
                <span>Upper Limit b: <strong id="int-b-val">2.5</strong></span>
                <input type="range" id="int-b" min="0" max="3.5" step="0.5" value="2.5">
            </label>
            <label>
                <span>Rectangles n: <strong id="int-n-val">8</strong></span>
                <input type="range" id="int-n" min="2" max="40" step="1" value="8">
            </label>
        </div>
        <p class="graph-readout" id="int-readout"></p>
    `;

    const canvas = container.querySelector("canvas");
    const sliderA = container.querySelector("#int-a");
    const sliderB = container.querySelector("#int-b");
    const sliderN = container.querySelector("#int-n");
    const readout = container.querySelector("#int-readout");

    const f = (x) => -0.4 * x * x + 4;
    const F = (x) => (-0.4 / 3) * x * x * x + 4 * x;

    function render() {
        const a = parseFloat(sliderA.value);
        const b = Math.max(a + 0.5, parseFloat(sliderB.value));
        const n = parseInt(sliderN.value, 10);

        container.querySelector("#int-a-val").textContent = a.toFixed(1);
        container.querySelector("#int-b-val").textContent = b.toFixed(1);
        container.querySelector("#int-n-val").textContent = String(n);

        const { ctx, width, height } = setupHiDPICanvas(canvas, 320);
        const { toPxX, toPxY } = drawCartesianGrid(ctx, width, height, -4, 4.5, -1, 5);

        const dx = (b - a) / n;
        let riemannSum = 0;

        for (let i = 0; i < n; i++) {
            const xm = a + (i + 0.5) * dx;
            const ym = f(xm);
            riemannSum += ym * dx;

            const px1 = toPxX(a + i * dx);
            const px2 = toPxX(a + (i + 1) * dx);
            const py0 = toPxY(0);
            const pyH = toPxY(ym);

            ctx.fillStyle = ym >= 0 ? "rgba(101, 88, 211, 0.22)" : "rgba(225, 29, 72, 0.22)";
            ctx.strokeStyle = "#6558D3";
            ctx.lineWidth = 1;
            ctx.fillRect(px1, Math.min(py0, pyH), px2 - px1, Math.abs(pyH - py0));
            ctx.strokeRect(px1, Math.min(py0, pyH), px2 - px1, Math.abs(pyH - py0));
        }

        // Curve f(x)
        ctx.strokeStyle = "#20243A";
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 1.5) {
            const x = -4 + (px / width) * 8.5;
            const py = toPxY(f(x));
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        const exact = F(b) - F(a);
        readout.textContent =
            `Midpoint Riemann Sum (n = ${n}) = ${riemannSum.toFixed(4)}  •  Exact Definite Integral = ${exact.toFixed(4)}`;
    }

    [sliderA, sliderB, sliderN].forEach((el) => el.addEventListener("input", render));
    render();
    return render;
}

// ============================================================================
// 12. REGISTRY & AUTOMATIC MOUNTING (WITH RESIZE OBSERVER)
// ============================================================================

const GRAPH_REGISTRY = {
    "universal-lab": mountUniversalGraphLab,
    "quadratic-vertex": mountQuadraticGraph,
    "trig-explorer": mountTrigExplorer,
    "polar-curves": mountPolarGraph,
    "binomial-approx": mountBinomialGraph,
    "conic-rotation": mountRotationGraph,
    "complex-argand": mountComplexArgandGraph,
    "tangent-derivative": mountTangentGraph,
    "area-integral": mountIntegralGraph
};

function initLessonGraphs(root = document) {
    const scope = root instanceof Element || root instanceof Document ? root : document;
    const widgets = scope.querySelectorAll(".graph-widget[data-graph]");

    widgets.forEach((widget) => {
        if (widget.dataset.mounted === "true") return;

        const key = widget.dataset.graph;
        const mountFn = GRAPH_REGISTRY[key];
        if (!mountFn) return;

        const renderFn = mountFn(widget);
        widget.dataset.mounted = "true";

        // Automatically re-render when container resizes or switches from hidden tab to visible
        if (typeof ResizeObserver !== "undefined" && typeof renderFn === "function") {
            let lastWidth = widget.clientWidth;
            const ro = new ResizeObserver(() => {
                if (widget.clientWidth > 0 && widget.clientWidth !== lastWidth) {
                    lastWidth = widget.clientWidth;
                    renderFn();
                }
            });
            ro.observe(widget);
        }
    });
}

// Auto-mount any static graphs present on initial page load
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initLessonGraphs(document));
} else {
    initLessonGraphs(document);
}

window.initLessonGraphs = initLessonGraphs;