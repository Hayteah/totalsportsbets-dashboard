# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Semantic Interactive Elements
**Learning:** In a codebase using heavily customized `div` elements for interaction, refactoring to semantic `<button>` elements immediately provides keyboard accessibility (Enter/Space to click) and better screen reader support. However, it's crucial to reset default button styles (padding, border, background, outline) and handle focus states explicitly when using inline styles.
**Action:** Always prefer `<button>` or `<a>` for interactive elements and include a visible focus indicator (`boxShadow` or `outline`) especially when global focus styles might be suppressed.
