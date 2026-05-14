## 2026-05-14 - [Accessible Toggle Refactor]
**Learning:** Refactoring custom interactive components from `div` to `button` significantly improves accessibility but requires resetting default button styles (like `padding`) and using `e.stopPropagation()` when the component is nested within other interactive regions to prevent event bubbling.
**Action:** Always use semantic elements for interactive controls and manage focus states explicitly when using inline styles.
