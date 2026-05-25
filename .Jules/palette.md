# Palette's Philosophy

## 2025-05-25 - Branding Integration and SVG Optimization
**Learning:** Integrating SVG branding assets with linear gradients requires careful management of `gradientUnits` and coordinate mapping within the `viewBox` to ensure the visual output matches the intended design across different UI containers. Using `objectFit: 'contain'` on parent containers helps maintain aspect ratios for logos and icons within fixed-size slots.
**Action:** When implementing SVGs with internal gradients, always verify that the gradient coordinates are relative to the paths they fill, and use parent container styling to prevent distortion in varied dashboard layouts.
