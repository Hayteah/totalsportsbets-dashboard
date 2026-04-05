## 2024-03-20 - Accessible Toggles and Icon Buttons
**Learning:** In projects using inline styles, standard `:focus` and `:focus-visible` pseudo-classes cannot be used. Accessible focus states must be managed via React state (`onFocus`/`onBlur`) to provide visual feedback for keyboard users.
**Action:** Use `useState` to track focus and apply an `outline` or distinct border in the `style` prop for interactive elements like buttons and switches.

**Learning:** Interactive elements implemented as `div`s lack keyboard support and appropriate roles for screen readers.
**Action:** Always use semantic elements like `<button type="button">` with `role="switch"` and `aria-checked` for toggle functionality to ensure they are focusable and properly announced.
