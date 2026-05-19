## 2026-05-19 - Semantic Toggle Accessibility
**Learning:** Refactoring non-semantic 'div' toggles into 'button' elements with 'role="switch"' and 'aria-checked' significantly improves accessibility for screen readers and keyboard users. Managed focus states with 'onFocus'/'onBlur' are necessary for inline-styled React components.
**Action:** Always prefer semantic 'button' elements for interactive controls and ensure they have descriptive 'aria-label' props.
