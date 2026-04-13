## 2026-04-13 - Accessible Custom Toggle Pattern
**Learning:** Custom toggle switches implemented as divs lack keyboard accessibility and screen reader context. Using a semantic button with `role="switch"` and state-driven inline styles for focus (`outline: 2px solid #00FF88`) provides a theme-consistent, accessible experience.
**Action:** Always use semantic buttons for custom interactive elements and manage focus states via React state when using inline styles to ensure keyboard visibility.
