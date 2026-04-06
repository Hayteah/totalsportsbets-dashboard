## 2025-05-13 - Toggle Accessibility Pattern
**Learning:** Custom toggle components implemented as `div` elements lack screen reader support (roles, states) and keyboard focus indicators. Converting them to semantic `button` elements with `role="switch"` and using `useState` for explicit focus management (via `onFocus`/`onBlur`) provides a robust and accessible UX consistent with the theme's neon aesthetic.
**Action:** Always prefer semantic `<button type="button">` with `role="switch"` and visible focus outlines for toggle-like interactive elements.
