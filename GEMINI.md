# Project Overview

This project is a personal portfolio website built with Next.js (React and TypeScript). It leverages Tailwind CSS for styling, Framer Motion for animations, and integrates with MongoDB and Firebase for data storage and management. The application features a single-page architecture with scroll-based navigation and dynamic content loading.

## Technologies Used

*   **Framework:** Next.js (React)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Data Management:** MongoDB, Firebase
*   **State Management/Data Fetching:** SWR
*   **Theme Management:** Next-themes

## Building and Running

To get the project up and running locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```
2.  **Development Server:**
    ```bash
    pnpm run dev
    # or npm run dev
    ```
    This will start the development server at `http://localhost:3000`.

3.  **Build for Production:**
    ```bash
    pnpm run build
    # or npm run build
    ```

4.  **Start Production Server:**
    ```bash
    pnpm run start
    # or npm run start
    ```

5.  **Export Static Site (if configured):**
    ```bash
    pnpm run export
    # or npm run export
    ```

6.  **Linting:**
    ```bash
    pnpm run lint
    # or npm run lint
    ```

## Development Conventions

*   **TypeScript:** The project is written entirely in TypeScript, enforcing type safety.
*   **ESLint & Prettier:** Code quality and formatting are maintained using ESLint and Prettier, configured via `.eslintrc.json` and `.prettierrc`.
*   **Component-Based Architecture:** The UI is organized into reusable React components located in the `components/` directory.
*   **Theme Management:** The application supports light/dark themes managed by `next-themes`.

# Crawler Accessibility for Website Review

The current setup lacks some crucial elements for optimal crawler accessibility and website review. To improve this, consider the following:

## Recommendations

1.  **`robots.txt`:** Create a `public/robots.txt` file to guide web crawlers on which parts of your site they should and should not access.
    *   **Action:** Create `public/robots.txt`.

2.  **`sitemap.xml`:** Generate and maintain a `public/sitemap.xml` file. This helps search engines understand your website's structure and crawl it more efficiently. For a Next.js application, you might generate this dynamically or as part of your build process.
    *   **Action:** Create `public/sitemap.xml`.

3.  **Server-Side Rendering (SSR) / Static Site Generation (SSG):** While Next.js inherently supports SSR/SSG, the current `pages/index.tsx` seems to rely heavily on client-side JavaScript for content loading and navigation based on scroll position and hash changes. For better crawlability, ensure that critical content is rendered on the server or pre-built as static HTML. This allows crawlers to access content even if they don't execute JavaScript.
    *   **Action:** Review content loading and navigation to ensure critical content is accessible without client-side JavaScript execution. Consider using `getServerSideProps` or `getStaticProps` for initial data fetching where appropriate.

4.  **Semantic HTML:** Ensure all components use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.) to provide clear structure and meaning to crawlers.

5.  **Meta Tags & SEO:**
    *   Implement appropriate meta tags (`<title>`, `<meta name="description" />`, Open Graph tags, etc.) in `_document.tsx` or using `next/head` in individual pages/components to provide search engines with rich information about your content.
    *   Consider adding schema markup (JSON-LD) for specific content types (e.g., portfolio items, contact information).

By addressing these points, the website's content will be more easily discoverable and understood by web crawlers, leading to a more comprehensive website review.
