## 2025-05-14 - Semantic Toggles & Data Fallbacks

**Learning:** Replacing non-semantic `div` elements with semantic `<button type="button">` and `role="switch"` significantly improves keyboard and screen reader accessibility without requiring complex custom ARIA logic. Additionally, providing automatic fallbacks to demo data when APIs return empty sets ensures the dashboard remains visually functional and useful immediately upon first load.

**Action:** Always prioritize semantic HTML elements over `div`s for interactive components and implement "graceful data degradation" (demo data fallbacks) to prevent empty-state friction during initial onboarding or backend desync.
