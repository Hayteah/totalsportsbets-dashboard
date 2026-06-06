## 2025-05-14 - Semantic Interactive Components
**Learning:** Using generic elements like `div` for interactive controls (toggles, buttons) breaks keyboard navigation and screen reader support by default. Users relying on assistive technology cannot discover or activate these elements.
**Action:** Always use semantic elements like `<button>` for interactive controls. For custom controls like switches, supplement with `role="switch"`, `aria-checked`, and descriptive `aria-label` to ensure full accessibility.
