# Palette's Journal

## 2026-04-14 - Inline Style Focus Management
**Learning:** In projects heavily utilizing inline styles for component styling, CSS pseudo-classes like `:focus-visible` cannot be directly applied. To maintain accessibility, focus states must be managed via React state (`onFocus`/`onBlur`) and reflected in the `style` object.
**Action:** Use a `const [isFocused, setIsFocused] = useState(false)` pattern for interactive components with inline styles to ensure keyboard users have a visible focus indicator.

## 2026-04-14 - Dashboard View Verification
**Learning:** When a dashboard has multiple views (tabs), automated verification must navigate to specific tabs to find elements that are conditionally rendered. For example, platform toggles might only exist in a 'Publish' or 'Settings' tab.
**Action:** Always include navigation steps (`page.get_by_role("button", name="...").click()`) in Playwright scripts before asserting on tab-specific elements.
