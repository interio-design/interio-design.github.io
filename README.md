# Gooveline Interio

A modern, responsive web application built with React, TypeScript, and Tailwind CSS, showcasing interior design services.

## 🚀 Features

- ⚡ Built with Vite for fast development and optimized builds
- 🎨 Styled with Tailwind CSS for rapid UI development
- 🛠️ TypeScript for type safety and better developer experience
- 🎭 Radix UI components for accessible, unstyled UI primitives
- ✨ Framer Motion for smooth animations and transitions
- 🔄 GitHub Actions for automated deployment

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Code Formatting**: Prettier

## 📦 Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node.js) or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gooveline-interio.git
   cd gooveline-interio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🏗️ Project Structure

```
/src
  /components      # Reusable UI components
  /lib            # Utility functions and configurations
  /types          # TypeScript type definitions
  App.tsx         # Main application component
  main.tsx        # Application entry point
  index.css       # Global styles
```

## 🌐 Deployment

This project is set up with GitHub Actions for automated deployment to GitHub Pages. The workflow will automatically build and deploy the application when changes are pushed to the `main` branch.

### Deployment Prerequisites

1. Set up a personal access token with `repo` scope
2. Add the token as a secret named `GH_PAGES_TOKEN` in your GitHub repository settings
3. Update the `PUBLIC_REPO` and `PUBLIC_REPO_BRANCH` in `.github/workflows/deploy.yml`

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by [@ketanchoyal](https://github.com/ketanchoyal)
