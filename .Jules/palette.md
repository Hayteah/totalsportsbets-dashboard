## 2025-05-31 - [Accessibility and Focus States]
**Learning:** Custom components like toggles often lack proper semantic structure and keyboard support when implemented using only `div` elements. Global focus-visible indicators are crucial for keyboard navigation but are often missing or suppressed in default styles.
**Action:** Always use semantic elements (like `button` for toggles) and ensure ARIA roles/labels are present. Use global `:focus-visible` styles to provide consistent, high-contrast focus feedback without affecting mouse users.
