## 2026-09-06 - Inline Switch Controls and ARIA Semantics
**Learning:** Custom UI toggles built with `div` elements and inline styles are inaccessible to screen readers and keyboard users because they lack focusability and switch semantics.
**Action:** Always implement custom toggles as `<button type="button" role="switch">` with `aria-checked`, explicit `aria-label`, and custom focus indicator ring.
