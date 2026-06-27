## 2024-03-22 - [Branding Asset Integration & Accessibility Refactor]

- Integrated custom SVG branding assets (logo, platform icons, template watermark) into the dashboard UI, replacing generic emojis for a professional look.
- Refactored the `Toggle` component from a `div` to a semantic `<button type="button" role="switch">` with `aria-checked` and `aria-label` for screen reader compatibility.
- Implemented keyboard accessibility for toggles using `onFocus`/`onBlur` to manage a visual focus ring.
- Fixed ESLint build errors by escaping special characters (`'`) in JSX text.
- Ensured visual consistency by using `objectFit: 'contain'` and dark background wrappers for platform-specific profile pictures.
