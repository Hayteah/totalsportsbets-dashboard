## 2026-03-12 - Accessible Switch Buttons in Inline-Styled UIs
**Learning:** Custom UI switches created with `<div>` elements prevent screen readers from announcing state and block keyboard users from operating controls. Refactoring them to `<button type="button" role="switch" aria-checked={...}>` with an explicit focus ring preserves visual layouts while making them fully accessible.
**Action:** Always prefer native `<button>` elements with `role="switch"` and `aria-checked` over `<div>` click handlers, providing `aria-label` context for each item.
