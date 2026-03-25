# Palette's Journal

## 2025-05-14 - [Toggle and Status Component Accessibility]
**Learning:** In a dashboard with multiple toggles and status indicators, standard semantic elements and descriptive ARIA labels are crucial for accessibility. A `div`-based toggle is not keyboard-accessible by default and lacks necessary screen reader context.
**Action:** Always use `<button type="button">` with `role="switch"` and `aria-checked` for toggles. Provide unique, descriptive `aria-label` attributes to each instance. For visual-only status dots, use `role="img"` with an `aria-label` and `title`.
