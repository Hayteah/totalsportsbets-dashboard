# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Initial Setup
**Learning:** Initializing the journal for the Totalsportbet AI Dashboard.
**Action:** Follow the required format for all future entries.

## 2025-05-15 - Accessibility and Focus States
**Learning:** Icon-only buttons (like 'Remove pick') and custom toggles implemented with `div`s are invisible to screen readers and difficult for keyboard users.
**Action:** Always use semantic `<button>` elements for interactive components. For custom styled components where global CSS isn't available, use React's `useState` to track `onFocus` and `onBlur` to apply visible focus indicators (e.g., `outline: 2px solid #00FF88`). Always provide descriptive `aria-label`s for icon-only interactive elements.
