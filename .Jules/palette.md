## 2025-05-18 - [Accessible Toggle Component]
**Learning:** Converting `div` with `onClick` to a semantic `button` with `role="switch"` significantly improves accessibility for keyboard and screen reader users. Managing focus state via React `useState` allows for custom focus indicators when using inline styles, as CSS pseudo-classes cannot be directly applied through the `style` attribute.
**Action:** Always prefer semantic buttons for interactive elements and ensure appropriate ARIA attributes (`role`, `aria-checked`, `aria-label`) are used for custom components like toggles.
