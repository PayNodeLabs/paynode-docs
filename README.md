# PayNode Documentation Portal

This repository contains the source code for the official documentation of the **PayNode Protocol**, accessible at [docs.paynode.dev](https://docs.paynode.dev).

Built with **Next.js 15** and **Nextra 3** to provide a fast, secure, and modern MDX reading experience.

## 🚀 Local Development

To run the documentation site locally:

### 1. Install Dependencies
```bash
yarn install
```

### 2. Start the Development Server
```bash
yarn dev
```
The site will be available at `http://localhost:3000`.

## 📂 Repository Structure

* `pages/`: Contains all the `.mdx` content files and Nextra routing logic.
* `pages/_meta.js`: Controls the navigation sidebar structure and ordering.
* `theme.config.jsx`: Configures the Nextra UI theme (logo, footer, repository links).

## 🌍 Deployment

This repository is automatically deployed to **Vercel** via CI/CD. Any commits pushed to the `main` branch will trigger a production build.

---
*Maintained by the PayNodeLabs core team.*