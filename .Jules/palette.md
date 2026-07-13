## 2026-07-13 - Semantic Switches and Focus Indicators
**Learning:** Custom UI components like toggles implemented with `div` tags are invisible to screen readers and keyboard users. Using a `button` with `role="switch"` and `aria-checked` provides the correct semantic meaning and enables native keyboard interaction.
**Action:** Always prefer semantic elements or ARIA roles for custom controls, and ensure a visible focus indicator (like `boxShadow`) is present when using `outline: none`.
