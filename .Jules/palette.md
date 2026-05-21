## 2024-05-21 - [Semantic Toggles & Focus States]
**Learning:** Using non-semantic elements like `div` for interactive controls like toggles breaks keyboard navigation and screen reader support. Inline-styled React components require manual focus management via `onFocus`/`onBlur` since CSS pseudo-classes can't be used in the `style` attribute.
**Action:** Always use semantic `<button type="button">` for toggles with `role="switch"` and `aria-checked`, and implement manual focus indicators when using inline styles.
