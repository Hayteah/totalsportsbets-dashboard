## 2025-05-15 - [Semantic Toggles & Icon Buttons]
**Learning:** Using `div` for interactive elements like toggles breaks keyboard navigation and screen reader support. Semantic `<button>` elements with `role="switch"` and `aria-checked` provide a much better experience. Similarly, icon-only buttons MUST have `aria-label` or `title` to be accessible.
**Action:** Always prefer semantic HTML (e.g., `<button>`) for interactive components. Ensure every icon-only button has a descriptive label for assistive technologies.
