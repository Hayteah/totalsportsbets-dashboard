## 2024-05-20 - [Accessible Toggles with Inline Styles]
**Learning:** When a project uses inline styles for all components, common CSS pseudo-classes like `:focus-visible` cannot be used. Focus states must be managed using `onFocus` and `onBlur` events paired with local React state to apply custom focus indicators (e.g., `outline: 2px solid #00FF88`).
**Action:** Always check for focus state management when refactoring custom interactive elements (divs, spans) into semantic buttons if the project relies on inline styles.
