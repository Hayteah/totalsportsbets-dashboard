# Palette's Journal

Critical UX and accessibility learnings for the Totalsportbet AI Dashboard.

## 2024-03-24 - [Accessibility: Toggle component]
**Learning:** Using a `div` for a toggle switch prevents keyboard navigation and screen reader recognition. Replacing it with a `button role="switch"` with `aria-checked` and `aria-label` is essential for basic accessibility.
**Action:** Always use semantic HTML or appropriate ARIA roles and labels for interactive elements.
