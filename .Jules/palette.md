## 2026-09-21 - Accessible Toggle Switch Pattern
**Learning:** Custom toggle components built with plain `div` elements lack keyboard tab focus, standard screen reader roles, and `aria-checked` states.
**Action:** Always build custom toggles using `<button type="button" role="switch">` with `aria-checked`, explicit `aria-label`, and custom focus indicators (`boxShadow`).
