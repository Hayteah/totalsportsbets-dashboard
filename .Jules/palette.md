## 2025-05-21 - [Semantic Toggles & Focus States]
**Learning:** In dashboards with heavy interactivity, using semantic `<button role="switch">` instead of `div`s with `onClick` is critical for keyboard accessibility and screen readers. Additionally, a global `:focus-visible` style provides immediate clarity for keyboard users without affecting mouse users.
**Action:** Always refactor custom-built interactive elements to their closest semantic equivalent and ensure `aria-checked` and `aria-label` are consistently applied.
