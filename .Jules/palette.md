## 2026-10-05 - Accessible Switch Buttons in Inline-Styled React Components
**Learning:** Refactoring non-semantic `div` toggle switches to `<button type="button" role="switch">` with `aria-checked` and custom focus handling (`useState` + `boxShadow`) enables keyboard navigation and screen reader support without breaking inline-styled layouts.
**Action:** Always wrap interactive custom toggle switches in semantic `<button type="button" role="switch">` elements with explicit reset styles (`padding: 0`, `outline: 'none'`) and dynamic `aria-label` attributes.
