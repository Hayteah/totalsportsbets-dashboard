## 2025-05-14 - Accessible Toggles with Inline Styles
**Learning:** When using inline styles in React components, focus-visible states must be managed via `onFocus` and `onBlur` events using local state, as CSS pseudo-classes like `:focus-visible` cannot be applied directly through the `style` attribute.
**Action:** Use a `focused` state and React event handlers to conditionally apply focus outlines to custom components when global CSS is not the primary styling method.
