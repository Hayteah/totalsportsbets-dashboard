## 2026-06-30 - [Custom Toggle Accessibility]
**Learning:** Custom toggle components implemented with `div` elements lack keyboard focus states and screen reader roles, making them inaccessible. Using a semantic `<button>` with `role="switch"` and `aria-checked` provides the correct interaction model for assistive technologies.
**Action:** Always implement custom toggles as `<button type="button">` with appropriate ARIA roles and ensure focus states are visually indicated.
