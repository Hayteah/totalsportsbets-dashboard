## 2025-05-14 - Accessible Toggles with Inline Styles
**Learning:** For components using strict inline styles (common in this dashboard), traditional CSS pseudo-classes like `:focus` or `:focus-visible` cannot be used. Accessibility must be managed via React state (`isFocused`) triggered by `onFocus` and `onBlur` to apply visible focus indicators.
**Action:** Always use state-driven inline styles for focus indicators in components that don't use external CSS or CSS-in-JS.
