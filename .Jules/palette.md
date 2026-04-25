## 2026-04-25 - Accessibility Polish for Toggles and Buttons
**Learning:** Standard divs used as toggles are invisible to screen readers and keyboard users. Converting them to buttons with role='switch' and managing focus state via React state (since inline styles don't support pseudo-classes) significantly improves accessibility while maintaining the custom neon aesthetic.
**Action:** Always use semantic buttons for interactive elements and provide descriptive aria-labels for icon-only controls.
