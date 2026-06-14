## 2025-05-14 - [Toggle Component Accessibility]
**Learning:** Interactive components like switches implemented as `div` elements lack semantic meaning and keyboard focusability by default, making them inaccessible.
**Action:** Always use semantic `<button type="button">` with `role="switch"` and `aria-checked` for toggle components, and ensure global `:focus-visible` styles are present for keyboard navigation feedback.
