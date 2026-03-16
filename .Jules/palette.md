# Palette's Journal - Totalsportbet Dashboard

## 2025-05-14 - Improve Toggle Component Accessibility
**Learning:** The dashboard uses custom `div`-based toggles which are not keyboard accessible and lack ARIA roles.
**Action:** Replace `div` with `button role="switch"`, add `aria-checked`, and ensure focus states are visible.
