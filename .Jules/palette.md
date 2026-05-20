## 2026-05-20 - [Accessible Toggles]
**Learning:** Refactoring non-semantic `div` elements into semantic `button` elements with `role="switch"` significantly improves accessibility by providing native keyboard support and screen reader context. Inline-styled React components require manual focus state management via `onFocus` and `onBlur` events since CSS pseudo-classes cannot be applied via the `style` attribute.
**Action:** Always prefer semantic elements (buttons, inputs) for interactive controls and ensure descriptive ARIA labels are provided for context.
