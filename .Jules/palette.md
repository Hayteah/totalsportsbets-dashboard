## 2025-05-23 - [Accessible Toggles and Status Indicators]
**Learning:** Standard custom toggles using `div` elements lack screen reader support and keyboard focus indicators.
**Action:** Always refactor custom toggles to use `<button>` with `role="switch"` and `aria-checked`. Use local state to manage a visible focus outline (`2px solid #00FF88`). For purely visual status indicators (like `StatusDot`), add `role="img"` and a descriptive `aria-label`.
