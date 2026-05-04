# Palette's Journal

## 2025-05-14 - [Accessible Toggle and Status Indicators]
**Learning:** Custom UI components like toggles and status dots often lack semantic meaning and keyboard support when implemented using only generic `div` elements. Converting interactive elements to `button` with `role="switch"` and providing `aria-label` for purely visual indicators ensures the interface is accessible to screen readers and keyboard users.
**Action:** Always prefer semantic HTML elements (like `button`) for interactive controls and use ARIA attributes (`role`, `aria-checked`, `aria-label`) to convey state and purpose to assistive technologies.
