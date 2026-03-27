# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Dashboard Accessibility Gaps
**Learning:** Found several components in the dashboard that were not screen-reader friendly or keyboard-accessible. The `Toggle` component was a `div` without a role or label, and icon-only buttons lacked `aria-label`. Visual-only status indicators also needed `role="img"` and `aria-label`.
**Action:** Convert `Toggle` to a `button` with `role="switch"`, add `aria-label` to all icon-only interactions, and ensure focus visibility matches the neon brand identity.
