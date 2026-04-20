## 2026-04-20 - [Accessibility: Toggles and Icon Buttons]
**Learning:** Interactive elements implemented with generic divs lack semantic meaning and keyboard accessibility. Icon-only buttons are invisible to screen readers without ARIA labels.
**Action:** Always use semantic elements like `button` for toggles, implement `role="switch"` with `aria-checked`, and ensure icon-only buttons have descriptive `aria-label` and `title` attributes. Use local state for custom focus indicators when working with inline styles.
