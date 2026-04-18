## 2026-04-18 - [Accessibility Overhaul]
**Learning:** Custom components using `div` for interaction (like the `Toggle`) are invisible to keyboard and screen reader users. Implementing them as semantic `button` elements with `role="switch"` and state-driven focus indicators provides a much better UX without needing external CSS.
**Action:** Always prefer semantic HTML elements for interactive components and use `aria-live="polite"` for asynchronous status updates to keep screen reader users informed.
