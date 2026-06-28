## 2024-03-20 - Branding Integration & Accessibility Improvements

- **SVG Integration**: Learned that when integrating custom SVG assets into a Next.js dashboard, using a consistent viewBox (1000x1000) and centering the primary path ensures visual harmony across different components (sidebar, platform list, card previews).
- **Conditional Rendering for Icons**: Implemented a robust pattern for rendering either SVG images or emojis in a list by checking for a leading `/` in the icon string. This allows for flexible branding options.
- **Accessibility (a11y)**: Reinforced the importance of `role="img"` and `aria-label` for SVG-based logos and ensuring that all interactive elements have descriptive labels.
- **Next.js Linting**: Encountered and resolved common Next.js 14 linting issues, such as unescaped entities (`react/no-unescaped-entities`) and the preference for the `<Image />` component over `<img>`, though `<img>` was used here for simplicity and to avoid additional configuration.
- **Clean Submissions**: Recognized the importance of removing temporary build artifacts (like `pnpm-lock.yaml` and `server.log`) and verification scripts before final submission to maintain repository hygiene.
