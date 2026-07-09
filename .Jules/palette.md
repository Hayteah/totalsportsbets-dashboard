## 2025-07-09 - Accessible Toggle Pattern with Inline Styles
**Learning:** In a project using only inline styles, standard CSS pseudo-classes like `:focus` or `:focus-visible` are unavailable. For custom interactive components like toggles, accessibility (keyboard navigation) must be manually managed using React `onFocus`/`onBlur` states and `boxShadow`.
**Action:** Always implement `isFocused` state for custom semantic elements when using inline styles to ensure keyboard users have a clear visual indicator.
