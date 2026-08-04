# Palette's Journal

Palette's journal for recording critical UX/accessibility learnings.

## 2025-02-15 - Accessible State-Driven Toggle Switches
**Learning:** Standard interactive widgets (like toggles) are often implemented using divs or custom layouts without proper screen reader or keyboard support. Refactoring them to use a semantic `<button type="button">` with `role="switch"`, `aria-checked`, and managing focus states with component-level React state (e.g. `isFocused`) ensures the toggle fits within standard keyboard navigation flow (via Tab and Space/Enter keys) while maintaining exact styling with custom focus visual indicator (e.g. custom `boxShadow`).
**Action:** Always wrap interactive custom toggle switches in `<button type="button">` with `role="switch"`, explicit `aria-checked` and custom `aria-label`, and use React-controlled focus events to render clear visual focus styles.
