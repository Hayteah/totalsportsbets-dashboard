## 2026-06-09 - Accessibility and Keyboard Navigation Polish

**Learning:** Converting interactive `div` elements to semantic `button` elements with `role="switch"` and `aria-checked` significantly improves accessibility for screen readers and keyboard users. Global `:focus-visible` styles are essential for providing a consistent and clear visual cue for keyboard navigation, especially in dark-themed dashboards where default focus outlines might be hard to see.

**Action:** Always use semantic elements like `<button>` for interactive controls instead of `<div>` with `onClick`. Ensure all icon-only buttons have descriptive `aria-label` attributes. Implement global focus indicator styles to ensure accessibility is not "invisible" to keyboard users.
