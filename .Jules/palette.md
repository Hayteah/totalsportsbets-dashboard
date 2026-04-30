## 2026-04-30 - Accessible Switch and Status Regions
**Learning:** Standard `div`-based toggles lack keyboard accessibility and screen reader support. Using `<button role="switch">` with `aria-checked` and manual focus state management (for inline styles) provides a robust accessible alternative in environments without CSS-in-JS or global CSS access. Additionally, `role="status"` with `aria-live="polite"` is essential for notifying users of asynchronous pipeline updates.
**Action:** Always prefer semantic button elements for toggles and use `aria-live` regions for any background process feedback.

## 2026-04-30 - Contrast Ratio Constraints
**Learning:** The project's `--text-muted` color (#4a4a5e) against the primary background (#08080d) has a contrast ratio of ~2.26:1, which is below WCAG AA standards (4.5:1). This makes secondary information difficult to read for users with visual impairments.
**Action:** Flag low-contrast brand colors for potential adjustment or use more accessible alternatives for critical secondary text.
