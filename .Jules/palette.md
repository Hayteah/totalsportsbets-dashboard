## 2026-06-26 - [Interactive Accessibility & Keyboard Navigation]
**Learning:** In an environment using only inline styles, interactive elements like the 'Remove' button simulate hover states using `onMouseOver` and `onMouseOut` event handlers to modify color or opacity properties.
**Action:** When refactoring components for accessibility, ensure keyboard focus states are also handled (e.g., via `onFocus`/`onBlur` and `boxShadow`) since standard CSS `:hover` and `:focus` selectors cannot be used directly in inline `style` objects.
