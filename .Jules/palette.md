## 2025-06-25 - [Accessibility Refactor of Custom Toggles]
**Learning:** In a dashboard with many custom-styled interactive elements (like `div` toggles), refactoring to semantic `<button>` elements with `role="switch"` and `aria-checked` significantly improves keyboard navigability and screen reader support without breaking the visual design.
**Action:** Always prioritize semantic elements for interactive components; use `boxShadow` for focus rings in dark-themed UIs where default `outline` might be less visible or visually jarring.
