## 2025-05-15 - Improving Reusable Toggle Accessibility & Logic
**Learning:** Custom interactive components (like Toggles) implemented as `div`s lack keyboard support and screen reader context. Additionally, nested click handlers can cause event bubbling issues (e.g., toggling a selection also triggers row-level actions).
**Action:** Always use semantic `button` elements for interactive controls, apply `role="switch"` and `aria-checked` for toggles, and use `e.stopPropagation()` to prevent unintended event bubbling in list items.
