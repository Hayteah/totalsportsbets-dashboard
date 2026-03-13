## 2025-05-15 - [Semantic Toggles for Accessibility]
**Learning:** Custom interactive components like toggles often use `div` elements, which are not keyboard-focusable or identifiable by screen readers. Using a semantic `button` with `role="switch"` and `aria-checked` provides instant accessibility wins.
**Action:** Always prefer semantic HTML elements (button, input) for interactive components, or ensure proper ARIA roles and tab indices are applied if custom elements are necessary.
