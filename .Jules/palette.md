## 2025-05-14 - [Toggle Accessibility]
**Learning:** Using a `button` with `role="switch"` and `aria-checked` is far superior to a `div` with `onClick` for keyboard and screen reader accessibility. It also provides a native focus target.
**Action:** Always use semantic elements or appropriate ARIA roles for custom controls. Ensure focus indicators are visible via `:focus-visible`.
