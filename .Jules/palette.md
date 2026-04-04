# Palette's Journal

## 2025-05-15 - Accessible and Interactive Components
**Learning:** Icon-only buttons like 'Remove pick' must use `aria-label` and `title` for accessibility. Custom focus and hover styling in React should be managed via state (`onMouseEnter`, `onFocus`, etc.) rather than direct DOM manipulation (`e.currentTarget.style`) to ensure consistency and maintainability.
**Action:** Use a dedicated component for icon buttons with local state to manage conditional styles.

## 2025-05-15 - Semantic Toggles
**Learning:** Custom toggle switches should be implemented as `<button type="button" role="switch">` with an `aria-checked` state instead of `div` elements to ensure they are keyboard-navigable and accessible to screen readers.
**Action:** Always provide a unique and descriptive `aria-label` for each toggle instance.
