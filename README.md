# Farhan Khalid - Backend Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, TailwindCSS, and Framer Motion. This portfolio showcases backend development skills, projects, and experience.

## Features

- 🌗 Dark/Light mode toggle
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design for all screen sizes
- ⚡ Fast loading with Vite
- 📝 Contact form with EmailJS integration
- 🎨 Modern UI with TailwindCSS
- 🔥 Interactive components

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template with variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
   - Get your public key from Account > API Keys
   - Copy `.env.example` to `.env` and fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. Generate favicons:
   - Run the included helper script:
     ```bash
     ./scripts/convert-favicons.sh
     ```
   - Follow the instructions to convert the SVG files to proper favicon formats
   - Alternatively, use online tools like [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon Generator](https://www.favicon-generator.org/)
   - Convert the SVG files in `/public` folder (with `.svg` extension) to their respective formats
   - Place the generated files in the `/public` folder

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Customization

- Edit content in component files under `src/components/sections/`
- Modify color scheme in `tailwind.config.js`
- Update background patterns in `src/utils/patterns.css`
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
