## 2025-06-02 - [Accessibility: Refactored Toggle Component]
**Learning:** In projects where accessibility might have been overlooked, simple components like Toggles are often implemented as divs, which breaks keyboard navigation and screen reader support. Using semantic buttons with role="switch" and aria-checked provides an immediate and robust fix for these issues.
**Action:** Always check custom UI components (toggles, accordions, tabs) for semantic correctness and ARIA roles. Prioritize using native HTML elements over divs for interactive controls.
