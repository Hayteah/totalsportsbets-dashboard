## 2026-04-10 - Accessible Toggle Pattern
**Learning:** In a UI built with inline styles where CSS pseudo-classes like `:focus-visible` are not easily accessible, interactive elements (like toggles) must use semantic HTML (`button role="switch"`) and local React state (`onFocus`/`onBlur`) to provide a visible focus indicator. This ensures the dashboard remains navigable for keyboard-only users.
**Action:** Always prefer semantic `<button>` elements over `<div>` for interactive components and implement state-driven focus rings when using inline styles.
