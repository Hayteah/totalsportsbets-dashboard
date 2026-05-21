## 2024-05-21 - Branding Asset Integration and Visibility

**Learning:** When integrating SVG assets that contain their own linear gradients into a themed UI, parent containers that also use gradients can cause the asset to become effectively invisible or visually muddy if the gradients overlap or conflict.

**Action:** Ensure SVG assets are rendered in containers with flat, high-contrast backgrounds (or no background if the theme allows) to maintain the visual integrity and visibility of the asset's internal styling. Verified this by removing a redundant `background: linear-gradient(...)` from the sidebar logo container in `src/app/page.tsx`.
