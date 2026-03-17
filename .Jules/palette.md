# Palette's UX Journal - Totalsportbet Dashboard

## 2026-03-17 - Accessible Custom Toggles
**Learning:** Custom UI components like toggles often lack semantic value when built only with `div` elements. Converting them to `<button role="switch">` with `aria-checked` provides the correct accessibility model for screen readers.

**Action:** Always refactor non-semantic interactive components into accessible HTML elements.

## 2026-03-17 - Unique Accessible Labels in Lists
**Learning:** Generic labels like "Select match" in a repeated list provide poor context for screen reader users. Including dynamic data like team names in `aria-label` makes navigation more intuitive.

**Action:** Ensure labels for repeated actions include unique identifiers from the data.

## 2026-03-17 - Asynchronous Status Feedback
**Learning:** Asynchronous status banners should use `role="status"` and `aria-live="polite"` to be properly announced by assistive technologies when they appear or change.

**Action:** Implement ARIA live regions for all dynamic status indicators.
