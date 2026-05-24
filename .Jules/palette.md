## 2026-05-24 - Semantic Toggle Accessibility
**Learning:** Replacing `div` with `button` and adding `role="switch"` significantly improves screen reader and keyboard accessibility, but requires manual focus state management if standard CSS `:focus` is insufficient for the desired design.
**Action:** Always prefer semantic elements like `<button>` for interactive controls and ensure they have descriptive `aria-label` or `aria-labelledby` attributes.
