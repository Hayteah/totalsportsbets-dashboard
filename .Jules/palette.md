## 2026-08-20 - Accessible Custom Toggles with Inline Styles
**Learning:** In inline-style React apps, converting `div` clickables to `<button type="button" role="switch">` requires explicitly setting `padding: 0` and `outline: "none"` while managing focus state via `onFocus`/`onBlur` with `boxShadow` to prevent layout jumps and ensure keyboard focus visibility.
**Action:** Always provide explicit `role="switch"`, `aria-checked`, `aria-label`, and `boxShadow` focus styling when refactoring custom switch components.
