<div align="center">
  <img src="public/ae-logo-2.svg" alt="Anglo-Eastern Logo" width="300" />
</div>

# Anglo-Eastern Website Redesign

This project is a modern, fully responsive web application for **Anglo-Eastern**, a global leader in ship management. It has been built to industry standards using **Next.js**, **React**, and **CSS Modules**.

## 🚀 Features

- **Modern Web Design**: Vibrant colors, sleek dark modes, and fully responsive grid/flexbox layouts.
- **Mobile-First Approach**: Features a custom mobile drawer navigation, responsive typography scaling, and dynamic padding across breakpoints.
- **Component-Driven Architecture**: Modular page components for maintainability and reusability.
- **SEO Optimized**: Fully leverages Next.js App Router for optimal SEO rendering.
- **Performant UI**: Smooth transitions and clean micro-animations for an elevated user experience.

## 📁 File Structure

The project follows a standard Next.js App Router structure:

```
├── public/                # Static assets (images, icons, svgs)
├── src/
│   ├── app/               # Next.js App Router (pages and layouts)
│   │   ├── globals.css    # Global styles, variables, typography, responsive media queries
│   │   ├── layout.tsx     # Root layout wrapping the app
│   │   ├── page.tsx       # Homepage
│   │   ├── about-us/      # About Us page
│   │   ├── careers/       # Careers page
│   │   ├── contact-us/    # Contact Us page
│   │   ├── maritime-training/ # Training page
│   │   └── ...            # Other route pages
│   │
│   └── components/        # Reusable React components
│       ├── Header/        # Site Header and Mobile Navigation
│       ├── Footer/        # Site Footer
│       ├── Hero/          # Hero Banners
│       └── ...            # Page-specific sections (e.g. StatsSection, ExpertsSection)
├── .gitignore             # Git ignored files and directories
├── package.json           # Project dependencies and scripts
└── next.config.ts         # Next.js configuration
```

## 🛠️ Setup Guide

To run the project locally, follow these steps:

### Prerequisites
- Ensure you have **Node.js** (v18 or higher) installed.
- Ensure you have **npm** or **yarn** installed.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd anglo-eastern
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View the site**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 💻 Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Vanilla CSS (CSS Modules)
