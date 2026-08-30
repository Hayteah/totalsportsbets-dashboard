## 2025-05-18 - Switch Button Refactoring for Custom Toggles
**Learning:** Replacing unnavigable `<div>` toggles with semantic `<button type="button">` using `role="switch"` and `aria-checked` ensures proper screen reader announcement and keyboard navigation while retaining custom visual styling.
**Action:** When refactoring a `div` to a `button` for custom UI toggles, resetting `padding`, `border`, and `outline` while explicitly managing `focus` states with `useState` and `boxShadow` ensures accessibility without breaking visual design layout.
