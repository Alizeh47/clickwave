---
description: Apply these rules when creating the project
globs:
alwaysApply: true
---
## Project Overview

*   **Type:** cursor_project_rules
*   **Description:** The Untitled UI Journal is a landing page for a new marketing tool and productivity app. It is designed to introduce its core value proposition, highlight key benefits, and guide visitors toward trying or purchasing the product. The page combines modern digital elegance with a classic editorial style, featuring interactive elements like newsletter sign-ups, dynamic testimonials, direct payment processing via Stripe, real-time data handling with Supabase, and multi-language support.
*   **Primary Goal:** Build a visually appealing and highly functional landing page that drives user engagement, captures leads via interactive elements, streamlines secure payment processing, and facilitates easy content updates via CMS integration.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   **next.js_14:** Enforce the use of the App Router with an `app/` directory using nested route folders and the `app/[route]/page.tsx` conventions
    *   Example 1: "Next.js 14 (App Router)" → `app/[route]/page.tsx` conventions
    *   Example 2: "Next.js (Pages Router)" → `pages/[route].tsx` pattern (not applicable for App Router projects)
    *   Example 3: "React Router 6" → `src/routes/` using `createBrowserRouter`

### Core Directories

*   **Versioned Structure:**

    *   **app/api:** Next.js 14 API routes with Route Handlers for backend interactions (e.g., Supabase form submissions and dynamic data handling)
    *   **src/views:** Can be used for CMS integrated components if needed, though primary focus remains within the `app/` directory for cohesive structure

### Key Files

*   **Stack-Versioned Patterns:**

    *   **app/dashboard/layout.tsx:** Implements Next.js 14 root layouts for consistent styling and component hierarchy
    *   **pages/_app.js:** (For Pages Router projects only; not applicable when using the App Router)

## Tech Stack Rules

*   **Version Enforcement:**

    *   **next@14:** App Router is required; avoid using legacy patterns such as `getInitialProps`
    *   **typescript@latest:** Enforce strict type checking to improve code reliability and maintainability
    *   **tailwind_css@latest:** Ensure utility-first styling practices with purging of unused styles for performance
    *   **shadcn_ui & radix_ui:** Leverage pre-built, accessible components; adhere to design systems for consistency
    *   **lucide_icons@latest:** Use lightweight, scalable vector icons for UI consistency
    *   **supabase@latest:** Utilize for secure, real-time data storage and dynamic form handling
    *   **stripe@latest:** Implement secure direct payment processing following PCI compliance standards
    *   **google_analytics:** Embed for tracking visitor behavior and performance analysis
    *   **mailchimp:** Integrate for email campaign management and subscriber list handling
    *   **sanity_io:** Use for CMS driven content updates to easily manage testimonials and highlights
    *   **gpt_4o & claude.3.5_sonnet:** Integrate AI-driven copy generation for dynamic marketing content; monitor usage and rate limits
    *   **i18n_framework:** Implement Next.js i18n routing for multi-language support ensuring seamless localization

## PRD Compliance

*   **Non-Negotiable:**

    *   "Secure direct payment processing integration using Stripe" must be implemented to enable seamless transactions.
    *   "Dynamic content handling via CMS (e.g., Sanity.io or Strapi)" is required to facilitate easy updates for testimonials, key highlights, and other content.
    *   "Real-time data capture using Supabase" must be adhered to for interactive elements like newsletter sign-ups and form submissions.

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: "Next.js 14 Interactive Flow → `app/hero/page.tsx` for the hero section, followed by `app/membership/page.tsx` for payment and membership details using real-time backend interactions."

## Best Practices

*   **next.js_14**

    *   Utilize the App Router with nested directories to enforce a modular structure
    *   Leverage server components for SEO and performance optimizations
    *   Ensure pages are optimized with proper metadata and semantic HTML

*   **typescript**

    *   Enforce strict typing across components
    *   Use interfaces and types for prop validation
    *   Regularly update type definitions to integrate with third-party libraries

*   **tailwind_css**

    *   Use utility classes for rapid UI development while avoiding inline styles
    *   Purge unused styles to optimize CSS bundle size
    *   Maintain a consistent design system via configuration files

*   **shadcn_ui & radix_ui**

    *   Utilize pre-built components to ensure accessibility and design consistency
    *   Customize components in accordance with project branding
    *   Keep component libraries updated to leverage latest features and fixes

*   **lucide_icons**

    *   Use lightweight, SVG-based icons for scalable UI elements
    *   Optimize icon imports to reduce bundle size
    *   Maintain consistency in icon usage across the project

*   **supabase**

    *   Secure API keys and ensure environment variables are used for configuration
    *   Monitor real-time data streams efficiently
    *   Optimize database queries for performance

*   **stripe**

    *   Follow PCI compliance best practices for handling sensitive payment information
    *   Implement secure webhooks for payment status updates
    *   Regularly test payment flows to avoid disruptions in transaction processing

*   **google_analytics & mailchimp**

    *   Integrate tracking scripts efficiently to avoid performance bottlenecks
    *   Respect user privacy and adhere to data tracking regulations
    *   Automate email campaign triggers based on user interactions

*   **sanity_io**

    *   Define clear schemas for content types to maintain consistency
    *   Use preview tools to test content before publishing
    *   Ensure that updates push seamlessly to the live site

*   **gpt_4o & claude.3.5_sonnet**

    *   Implement rate limiting and fallback strategies for AI-generated content
    *   Monitor AI outputs to ensure alignment with brand messaging
    *   Secure API integrations to protect against unauthorized usage

*   **i18n_framework**

    *   Use Next.js built-in i18n for route-based language detection
    *   Maintain separate locale files for content translations
    *   Test language switches across different components for consistency

## Rules

*   Derive folder/file patterns directly from tech stack version standards provided in techStackDoc.
*   If Next.js 14 App Router is used: enforce the `app/` directory with nested route folders and avoid using `pages/` directory structures.
*   If a Pages Router is chosen (not applicable here), use a flat file structure within `pages/*.tsx`.
*   Mirror this logic for other frameworks such as React Router, SvelteKit, etc., ensuring no mix of version patterns (e.g., avoid mixing `pages/` in App Router projects).
