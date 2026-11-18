# Luma — Front-End Challenge

## Overview

This project is a responsive landing page for Luma, developed as part of the Buzzvel Front-End Engineer technical assessment — November 2026 Coding Challenge.

The implementation is based on the design provided in Figma and built with Next.js, React, TypeScript, and Tailwind CSS.

The page presents an online learning platform, highlighting its courses, learning process, community, testimonials, and contact section.

## Tech Stack

- **Next.js 16** — React framework with App Router.
- **React 19** — User interface development.
- **TypeScript** — Static typing.
- **Tailwind CSS v4** — Styling and responsive layouts.
- **Base UI** — UI primitives.
- **Lucide React** — Icon library.
- **React Hook Form** — Form state management.
- **Zod** — Data validation.
- **Storybook 10** — Component documentation and isolated development.
- **Vitest** — Automated test runner.
- **Playwright** — Browser provider used by Vitest to run Storybook story tests in Chromium.
- **Biome** — Linting and code formatting.
- **Bun** — Package manager and script runner.

## Features

- Responsive layouts for desktop, tablet, and mobile devices.
- Reusable components with typed props.
- Mobile-friendly navigation.
- Course categories and featured course sections.
- Learning process and methodology sections.
- Testimonials and community presentation.
- Contact form with client-side validation.
- Responsive calls to action.
- Storybook documentation for reusable components.
- Hero image optimization using WebP.
- Dynamic loading of the contact form.

## Project Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   │   ├── luma-button.tsx
│   │   ├── luma-card.tsx
│   │   ├── luma-input.tsx
│   │   ├── luma-logo-svg.tsx
│   │   └── luma-textarea.tsx
│   ├── layout/
│   │   ├── container.tsx
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── sections/
│   │   ├── categories.tsx
│   │   ├── contact-form.tsx
│   │   ├── contact.tsx
│   │   ├── featured-course.tsx
│   │   ├── final-cta.tsx
│   │   ├── hero.tsx
│   │   ├── how-it-works.tsx
│   │   ├── people.tsx
│   │   └── testimonial.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
├── lib/
│   ├── schemas/
│   │   └── contact-schema.ts
│   └── utils.ts
├── stories/
│   ├── LumaButton.stories.tsx
│   ├── LumaCard.stories.tsx
│   ├── LumaInput.stories.tsx
│   ├── LumaTextarea.stories.tsx
│   └── ...
└── types/
    └── styles.d.ts
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/LeonardoMainardes/buzzvel-fe-test-2026.git
```

Navigate to the project directory:

```bash
cd buzzvel-fe-test-2026
```

Install the dependencies:

```bash
bun install
```

### Development

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

```bash
bun run build
```

To run the production build locally:

```bash
bun run start
```

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Starts the development server. |
| `bun run build` | Creates the production build. |
| `bun run start` | Starts the production server. |
| `bun run check` | Runs Biome checks. |
| `bun run check:fix` | Runs checks and applies automatic fixes. |
| `bun run lint` | Checks for linting issues. |
| `bun run lint:fix` | Automatically fixes linting issues. |
| `bun run format` | Checks code formatting. |
| `bun run format:write` | Formats files automatically. |
| `bun run test` | Runs tests with Vitest. |
| `bun run test:watch` | Runs Vitest in watch mode. |
| `bun run storybook` | Starts Storybook on port 6006. |
| `bun run build-storybook` | Builds the Storybook application. |
| `bun run lighthouse` | Builds the production application and runs Lighthouse CI. |

## Component Documentation

Storybook is used to document and develop reusable components in isolation.

Stories were created for:

- `LumaButton`
- `LumaCard`
- `LumaInput`
- `LumaTextarea`

The Vitest integration allows Storybook stories to be tested in a Chromium browser, using Playwright as the browser provider.

To start Storybook:

```bash
bun run storybook
```

Open `http://localhost:6006`.

## Technical Decisions

### Component Architecture

The project structure is organized into three main groups:

- **Common:** reusable components tailored to Luma's visual identity.
- **Layout:** components responsible for the overall page structure.
- **Sections:** components representing the different landing page sections.

This separation improves maintainability, reusability, and future development.

### Styling and Design

Tailwind CSS was used to implement layouts, spacing, colors, and responsive behavior while maintaining visual consistency with the Figma design.

### Contact Form

React Hook Form and Zod were combined to manage and validate form data on the client side.

The form is also dynamically loaded to reduce the initial JavaScript bundle.

### Mobile Navigation

The mobile navigation uses native `details` and `summary` elements, avoiding additional React state to control the menu's open and closed states.

### Image Optimization

The Hero section's main image was converted to WebP, reducing its file size by approximately 52% compared to the original JPEG.

### Code Quality and Testing

Biome was adopted to standardize formatting and perform static code checks.

Vitest, Storybook, and Playwright were configured to support component documentation and browser-based testing of Storybook stories.

## Performance and Validation

The project was validated through code checks, production builds, Storybook builds, and a Lighthouse audit.

Recorded results:

- Lighthouse Performance: **92/100**.
- `bun run check`: passed.
- `bun run build`: passed.
- `bun run build-storybook`: passed.

## Known Limitations

- The application does not include a backend or CMS integration. Content is defined directly in the project.
- The contact form performs client-side validation only and is not connected to an external service for message processing or persistent storage.
- The quotation mark icon used in the testimonial section differs from the original Figma design due to the limitations and available options of the icon library used in the project.

## AI Tools

ChatGPT and Cursor were used as supporting tools throughout development, mainly for technical research, troubleshooting, code review, and workflow assistance.

Suggestions were reviewed and validated during implementation through code inspection and project commands.

## Development Time

**Total time:** **40 hours**

## Author

**Leonardo Mainardes**

[GitHub](https://github.com/LeonardoMainardes)
