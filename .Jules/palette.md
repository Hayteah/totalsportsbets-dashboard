# Palette's Journal - UX & Accessibility

## 2026-11-04 - Semantic Toggles, Icon Buttons & Status Indicators
**Learning:** Using `div` for interactive controls like toggles breaks screen reader accessibility and keyboard focus order. Converting custom toggles to semantic `<button type="button">` with `role="switch"` and `aria-checked` ensures proper accessibility tree representation, while maintaining micro-interactions with visible focus indicators. Similarly, icon-only buttons (`×`) need descriptive `aria-label`s to prevent screen readers from announcing ambiguous characters.
**Action:** Always implement switch controls using semantic `<button>` elements with `role="switch"` and descriptive `aria-label` attributes, and ensure non-text status indicators have appropriate `role="img"` and `aria-label` fallbacks.
