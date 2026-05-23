## 2025-05-14 - Accessible Toggle Pattern
**Learning:** In this dashboard, common interactive elements like toggles and status indicators were implemented using non-semantic `div` tags, which are invisible to screen readers and inaccessible via keyboard. Converting these to semantic buttons with `role="switch"` and `aria-checked` significantly improves accessibility without changing the visual design.
**Action:** Always prefer semantic HTML (e.g., `<button>`) for interactive components. When using inline styles, manage focus states using `onFocus` and `onBlur` with local state to ensure keyboard users have visual feedback.

## 2025-05-14 - Icon-only Button Labels
**Learning:** Several buttons used only symbols (like '×' for removal) without text, providing no context for assistive technologies.
**Action:** Every icon-only button must have an explicit `aria-label` that describes its action (e.g., `aria-label="Remove pick"`).
