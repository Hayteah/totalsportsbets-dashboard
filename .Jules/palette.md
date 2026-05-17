## 2025-05-17 - [Accessible Toggles and Icon Buttons]
**Learning:** Refactoring non-semantic `div` elements into semantic `button` elements with `role="switch"` and `aria-checked` is essential for screen reader and keyboard accessibility. Additionally, icon-only buttons (like a '×' for removal) must have explicit `aria-label` and `title` attributes to be perceivable.
**Action:** Audit all interactive elements to ensure they use semantic tags and provide clear ARIA labels for any non-textual indicators.
