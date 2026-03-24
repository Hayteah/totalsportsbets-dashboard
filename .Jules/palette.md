## 2024-03-24 - [State-based Focus Tracking]
**Learning:** When global CSS and external libraries are restricted, use React state (`onFocus`/`onBlur`) to apply custom focus indicators to interactive elements like switches and buttons. This ensures keyboard accessibility while maintaining brand-specific styling.
**Action:** Implement `const [isFocused, setIsFocused] = useState(false)` with `onFocus` and `onBlur` handlers to manage conditional inline styles for focus rings.
