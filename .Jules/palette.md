## 2026-05-30 - [Accessibility Enhancement for Custom UI Components]
**Learning:** Converting non-semantic interactive elements (like `div` toggles) to semantic HTML elements (like `button`) significantly improves the baseline accessibility (ARIA roles, keyboard support) with minimal CSS overhead. Descriptive `aria-label`s are essential for icon-only interactive elements to ensure screen reader compatibility.
**Action:** Always use semantic interactive elements for components that require user interaction, and ensure focus states are clearly visible via `:focus-visible` styles.
