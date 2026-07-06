## 2025-05-14 - [Interactive Elements as Divs]
**Learning:** Interactive components like the `Toggle` were implemented using `div` elements with `onClick` handlers. This misses out on native button features like keyboard navigation (Enter/Space to trigger), focus management, and proper ARIA role communication to screen readers.
**Action:** Always use semantic `<button>` elements for interactive components, and ensure they include appropriate ARIA roles (like `role="switch"` for toggles) and descriptive labels.
