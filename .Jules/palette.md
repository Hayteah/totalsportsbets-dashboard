# Palette's Journal

## 2025-03-24 - Interactive Component Accessibility
**Learning:** The `Toggle` component was implemented as a `div`, making it inaccessible to keyboard users and screen readers. Following the established pattern of using `button` with `role="switch"` ensures better compliance and usability.
**Action:** Always use semantic HTML (like `<button>`) for interactive elements and include necessary ARIA attributes.
