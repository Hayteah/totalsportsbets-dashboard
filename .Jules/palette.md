## 2024-03-20 - Semantic Toggles and Accessible Status Indicators
**Learning:** In a dashboard using inline styles and no external component library, custom interactive elements (like Toggles or Status dots) are often implemented as `div`s. This breaks keyboard navigation and screen reader support. Using semantic `<button>` elements with `role="switch"` and `aria-checked` is essential for a11y.
**Action:** Always refactor interactive `div`s into semantic buttons and ensure they have a visible focus state (e.g., `boxShadow` for dashboards with dark backgrounds) and a descriptive `aria-label`.
