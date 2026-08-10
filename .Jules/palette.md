# Palette's Journal

## 2025-03-05 - Semantic Interactive Elements
**Learning:** In purely client-side custom dashboards built using custom styles rather than external CSS/component libraries, interactive custom elements like toggles often default to static layout tags like `div` or `span`. This renders them completely invisible to keyboard-only navigation (lacking tabIndex, focus states, and keyup event handlers) and screen readers (lacking switch/checkbox roles and checked states).
**Action:** Always refactor custom interactive container components to semantic `<button>` elements with reset styles (`padding: 0`, `outline: 'none'`, specific focus states via React `useState`, and ARIA attributes like `role="switch"` and `aria-checked`) to guarantee keyboard focusability and screen reader support without breaking custom designs.
