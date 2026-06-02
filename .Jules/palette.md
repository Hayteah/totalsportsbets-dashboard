## 2026-06-02 - Branding Asset Generation & Integration

**Learning:** Generating branding assets as SVGs with consistent gradients and background treatments (like circular PFP safety zones) ensures a professional and unified UI across the dashboard and social platforms. Using `<img>` tags for SVGs rather than inlining them avoids ID collisions for gradients when the same asset is used multiple times.

**Action:** Always prefer external SVG files for repeated brand elements to maintain clean DOM and avoid CSS/SVG interference. Ensure PFP versions of logos have appropriate padding/backgrounds to handle circular cropping by third-party platforms.
