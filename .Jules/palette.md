## 2026-08-24 - Semantic Switch Toggles with Inline Styles
**Learning:** In inline-styled React applications, custom `div`-based switch controls completely bypass keyboard accessibility and screen readers. Refactoring them to `<button type="button" role="switch">` with `aria-checked`, `aria-label`, and `padding: 0`/`outline: 'none'` preserves visual layout while enabling full keyboard focus rings (`boxShadow`) and screen reader support.
**Action:** Always wrap custom UI toggles in semantic `<button type="button">` with `role="switch"` and `aria-checked` attributes.
