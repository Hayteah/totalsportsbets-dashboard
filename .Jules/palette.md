## 2025-05-15 - [Accessibility & Event Handling]
**Learning:** Converting a `div` to a `button` for a toggle component requires explicit `padding: 0` to maintain dimensions and `e.stopPropagation()` to prevent unwanted bubbling if placed in interactive parents.
**Action:** Always use `button` with `role="switch"` for toggles and ensure global `:focus-visible` styles are present for keyboard accessibility.
