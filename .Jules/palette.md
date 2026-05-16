## 2025-05-16 - [Accessible Toggles and Semantic Buttons]
**Learning:** Refactoring non-semantic `div` elements into semantic `button` elements (e.g., for toggles) requires resetting default browser styles like `padding: 0` and `background: none` to maintain visual consistency. Additionally, using `e.stopPropagation()` on nested interactive elements prevents unintended event bubbling to parent containers, which is critical in list-based dashboards.
**Action:** Always check for event bubbling and reset default button styles when converting non-semantic wrappers to buttons.
