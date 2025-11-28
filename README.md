# Software_Portfolio_Website

Portfolio website for Tyler Crawford built with Vite, React, Tailwind CSS, and Framer Motion.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   # If the sandbox/network blocks npmjs.org, run this locally instead where you have registry access.
   ```

2. Create a `.env` file in the project root with your model credentials:

   ```bash
   VITE_MODEL_API_KEY=your_api_key_here
   # Optional overrides
   VITE_MODEL_API_URL=https://generativelanguage.googleapis.com/v1beta/models
   VITE_MODEL_NAME=gemini-2.5-flash-preview-09-2025
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open the app at the printed localhost URL.

## Troubleshooting installs in restricted sandboxes

If you encounter `403 Forbidden` errors when running `npm install` inside the sandbox (common when public registries are blocked), the quickest workaround is to clone this repo to a local machine that has standard npm registry access and run the same steps above. No private packages are required; the project depends only on public packages (`react`, `vite`, `tailwindcss`, `framer-motion`, `lucide-react`, and tooling like `eslint`).

## Notes

- The layout uses a dark, glass-inspired aesthetic with animated background stars.
- A HUD-style loading overlay appears on first load and unlocks scrolling once complete.
- AI features call the model endpoint defined by the environment variables, keeping the key flexible for different providers.
