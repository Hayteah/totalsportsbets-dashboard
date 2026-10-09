## 2026-10-09 - Accessible Custom Toggle Button Pattern
**Learning:** In inline-styled React dashboards, custom toggles built using `div` elements lack keyboard focus and screen reader semantics (`role="switch"`, `aria-checked`, `aria-label`). Refactoring to a `<button type="button" role="switch">` with `padding: 0`, `outline: 'none'`, and `useState` for focus ring indicators restores full accessibility without altering layout dimensions.
**Action:** Always wrap custom UI controls in standard semantic button elements with explicit `role`, ARIA states, and custom focus box-shadows.
