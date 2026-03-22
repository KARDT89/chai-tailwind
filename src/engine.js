// engine.js
// Responsible for everything DOM-related.
// Finds chai-* classes, calls the parser, and applies styles.

import { parseClass } from "./rules.js";

const CHAI_PREFIX = "chai-";
const PROCESSED = "data-chai-processed";

// ─── Apply styles to a single element ────────────────────────────────────────

function applyToElement(el) {
    // Skip if already processed
    if (el.hasAttribute(PROCESSED)) return;

    // Get all classes that start with "chai-"
    const chaiClasses = [...el.classList].filter((c) =>
        c.startsWith(CHAI_PREFIX),
    );

    if (chaiClasses.length === 0) return;

    // Parse each class and apply the resulting styles
    for (const cls of chaiClasses) {
        const styleName = cls.slice(CHAI_PREFIX.length); // strip "chai-"
        const styles = parseClass(styleName);

        if (styles) {
            Object.assign(el.style, styles);
        }
    }

    // Mark as done so we don't process it again
    el.setAttribute(PROCESSED, "true");
}

// ─── Scan the entire DOM ──────────────────────────────────────────────────────

export function scanDOM() {
    const elements = document.querySelectorAll(`[class*="${CHAI_PREFIX}"]`);
    elements.forEach(applyToElement);
}

// ─── Watch for new elements added dynamically ─────────────────────────────────

export function watchDOM() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue; // only element nodes

                applyToElement(node);

                // Also check children of the added node
                node.querySelectorAll(`[class*="${CHAI_PREFIX}"]`).forEach(
                    applyToElement,
                );
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}
