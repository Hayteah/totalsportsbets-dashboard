## 2026-04-11 - Custom Focus Management for Inline Styles

**Learning:** In projects where interactive elements use inline styles instead of CSS classes (like this dashboard), standard focus indicators are often absent. Managing focus state via `onFocus` and `onBlur` using local `useState` allows for the implementation of custom, brand-aligned focus outlines (e.g., neon green) that would otherwise be difficult to achieve with the `style` attribute alone.

**Action:** When refactoring non-semantic components to semantic ones in an inline-style environment, always implement manual focus tracking to ensure keyboard navigability without sacrificing visual design.
