## 2025-06-22 - [Refactoring Interactive Divs to Buttons]
**Learning:** In this dashboard, many interactive elements like toggles were implemented as `div`s with `onClick`. This breaks keyboard navigation and screen reader support. Refactoring them to semantic `<button>` elements with `role="switch"` and `aria-checked` is a high-impact, low-effort accessibility win.
**Action:** Always check for `div`s with `onClick` handlers and convert them to semantic buttons with appropriate ARIA attributes.

## 2025-06-22 - [Ensuring Persistent Focus States with Inline Styles]
**Learning:** Mutating `e.currentTarget.style` in `onFocus` for components that re-render frequently (like Toggles) can cause the focus ring to disappear upon state updates.
**Action:** Use a CSS class or a more robust state-driven approach for focus indicators in frequently re-rendering components.
