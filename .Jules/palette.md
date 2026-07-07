## 2026-07-07 - Accessible Toggle Switches
**Learning:** Using a `div` with `onClick` for toggles is a common pattern that fails keyboard and screen reader accessibility. Refactoring to a semantic `<button type="button" role="switch">` with `aria-checked` and custom focus indicators provides a much better experience.
**Action:** Always prefer semantic buttons for interactive controls and ensure focus states are visually distinct using `boxShadow` or similar methods that don't rely solely on default outlines.
