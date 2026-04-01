# Palette's Journal

Critical UX and accessibility learnings for the Totalsportbet AI Dashboard.

## 2025-03-25 - Custom Focus Indicators with Inline Styles
**Learning:** In projects heavily reliant on inline styles where global CSS pseudo-classes (like `:focus-visible`) are not easily applicable, interactive elements often lack visible focus states, breaking keyboard accessibility.
**Action:** Use React `onFocus` and `onBlur` events to manage a local `isFocused` state, then conditionally apply an `outline` or `boxShadow` in the `style` object to ensure keyboard users can navigate effectively.
