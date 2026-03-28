## 2025-03-28 - [Accessibility: Toggles & Icon Buttons]
**Learning:** Custom components like toggles often lack semantic meaning and keyboard support when built with `div`. Simple icon-only buttons (like '×') are completely inaccessible to screen readers without ARIA labels.
**Action:** Always use `<button type="button">` for interactive elements. Ensure toggles have `role="switch"` and `aria-checked`. Provide `aria-label` and `title` to all icon-only buttons. Use state-based focus tracking for custom focus indicators when global CSS is not an option.
