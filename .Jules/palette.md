# Palette's Journal - UX & Accessibility

## 2025-05-15 - Initial Audit of Dashboard UX/Accessibility

**Observations:**
- The `Toggle` component is implemented as a `div` with an `onClick` handler, which is not keyboard accessible and lacks ARIA roles (`switch`) and state (`aria-checked`). It also lacks a visible focus indicator.
- Multiple `Toggle` instances are used without unique labels, making it difficult for screen reader users to understand what they are toggling.
- The "Remove pick" button in the predictions list is an icon-only button (`×`) without an `aria-label` or `title`.
- `StatusDot` in the Settings tab is purely visual and lacks a semantic role or label to communicate status to assistive technologies.
- The sidebar navigation and "Run Full Pipeline" buttons use standard `button` elements but could benefit from more consistent focus indicators that match the dashboard's neon aesthetic.

**Action:**
- Refactor `Toggle` to use a semantic `<button>` with `role="switch"`.
- Implement `onFocus` and `onBlur` for `Toggle` to show a custom neon focus outline.
- Ensure all icon-only buttons have descriptive `aria-label` attributes.
- Add `role="img"` and `aria-label` to status indicators.
- Verify that all interactive elements are reachable and usable via keyboard.
