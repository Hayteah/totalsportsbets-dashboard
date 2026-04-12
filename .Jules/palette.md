## 2025-05-14 - [Semantic Toggles & Keyboard Accessibility]
**Learning:** Using a `div` as a toggle component without `role="switch"` and `tabIndex` makes it inaccessible to keyboard users and screen readers. Even if it looks like a toggle, it lacks the necessary interactivity and announcement.
**Action:** Always use a semantic `<button type="button">` with `role="switch"` and `aria-checked` for toggle components. Manage focus states using local state and inline styles to maintain consistent branding when `outline: none` is used.
