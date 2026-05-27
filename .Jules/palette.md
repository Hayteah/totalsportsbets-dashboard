## 2025-05-14 - Accessible Toggles and Icon-Buttons
**Learning:** Using semantic `<button>` elements with `role="switch"` and `aria-checked` is crucial for accessibility, especially in dark-themed dashboards where default focus states might be invisible. Managing focus state via React `useState` allowed for a consistent "neon-green" focus ring that integrates perfectly with the project's visual language.
**Action:** Always prefer semantic `<button>` over `div` for interactive elements and provide descriptive `aria-label` or `aria-labelledby` attributes for icon-only controls.
