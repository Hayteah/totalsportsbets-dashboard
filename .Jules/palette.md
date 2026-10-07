## 2026-10-07 - Accessible Toggle Switches
**Learning:** Custom UI toggles implemented as `<div>` elements block keyboard navigation and screen readers. Converting custom toggles into native `<button type="button">` elements with `role="switch"`, `aria-checked`, dynamic `aria-label`s, and explicit focus indicators restores complete accessibility without disrupting existing CSS layouts.
**Action:** Always implement switch controls using `<button type="button" role="switch" aria-checked={...}>` with `padding: 0` and custom focus indicators.
