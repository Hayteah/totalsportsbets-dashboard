# Palette's UX & Accessibility Journal

## 2024-05-15 - Semantic Toggle Refactoring
**Learning:** Refactoring non-semantic `div` elements into semantic `button` elements for toggles requires resetting default browser styles like `padding: 0` to maintain visual consistency. Additionally, inline-styled React components require manual focus state management via `onFocus`/`onBlur` as CSS pseudo-classes cannot be applied directly via the `style` attribute.
**Action:** Always check for default button styles and implement manual focus indicators when refactoring interactive elements for accessibility.
