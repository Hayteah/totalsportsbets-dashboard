## 2025-05-15 - Accessibility Foundation
**Learning:** Shared interactive components like toggles often default to `div`s with `onClick` when rapidly prototyped, which completely blocks keyboard users and screen readers. Implementing them as semantic `button`s with `role="switch"` and `aria-checked` is the correct pattern for this design system.
**Action:** Always start with semantic HTML elements for interactive controls. Use `:focus-visible` to ensure focus rings only appear for keyboard users, maintaining visual polish for mouse users.
