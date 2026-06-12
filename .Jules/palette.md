## 2025-05-15 - [Accessible Toggle Patterns]
**Learning:** Using a `div` with `onClick` for toggles is a common anti-pattern that breaks keyboard navigation and screen reader support.
**Action:** Always refactor custom toggles into semantic `<button type="button">` elements with `role="switch"` and `aria-checked`.

## 2025-05-15 - [Global Focus Indicators]
**Learning:** In dark-themed dashboards, default focus rings are often invisible or inconsistent.
**Action:** Define a global `button:focus-visible` style using the brand's primary accent color and `outline-offset` to ensure clear keyboard navigation feedback.
