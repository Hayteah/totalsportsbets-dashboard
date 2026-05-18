## 2026-05-18 - Accessibility for interactive elements
**Learning:** Custom UI components like Toggles implemented as `div` elements are inaccessible to keyboard and screen reader users. Refactoring them to `button` with `role="switch"` and proper `aria-checked`/`aria-label` attributes significantly improves usability. Focus states must be manually managed when using inline styles.
**Action:** Always use semantic HTML elements (like `button`) for interactive components and ensure they have descriptive ARIA labels and visible focus indicators.
