## 2025-03-11 - [Accessibility and Interaction Polish]
**Learning:** In a dashboard with many interactive toggles and icon-only buttons, providing semantic HTML (`<button>` instead of `<div>`) and ARIA roles/labels is crucial for screen reader users and keyboard navigation. Using `onFocus` and `onBlur` for custom focus rings ensures that users relying on keyboards can clearly see which element is active.
**Action:** Always prefer semantic `<button>` for interactive elements and ensure all icon-only buttons have descriptive `aria-label` attributes.
