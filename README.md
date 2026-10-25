# Personal CV Portfolio

A responsive, single-page portfolio website for an Information Technology student. The design highlights a concise profile, education, skills, projects, experience, achievements, and contact information.

> **Draft:** Replace the remaining sample copy and empty profile fields in `src/data/portfolio.js` before sharing this portfolio publicly. The supplied dark-mode and light-mode portraits and project previews are optimized WebP assets under `public/`.

## Technologies

- React and JavaScript (JSX)
- Vite
- Tailwind CSS v4 with custom CSS design tokens
- Motion for React
- Lucide React

## Features

- Responsive single-page layout with sticky navigation and a mobile menu
- Profile, education, skills, project, achievement, experience, and contact sections
- Centralized editable portfolio content
- Scroll reveal and interaction motion with reduced-motion support
- Project and social links render only when supplied
- Contact uses a `mailto:` link when an email address is provided
- Featured work includes Drowning Detection, DermaLink, and EcoSort, with project image galleries
- Skills and the Cisco Networking Academy completion certificate are managed in the portfolio data file

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Vercel settings for a standard Vite deployment: build command `npm run build`, output directory `dist`.

## Portfolio content

Update `src/data/portfolio.js` with facts and working URLs you have verified. Add image assets under `public/` and reference them from the same data file. Keep private contact details out of the public profile unless you choose to share them.

## Links

- GitHub repository: **Not connected yet**
- Live Vercel website: **Not deployed yet**
- Student name: Jeward Mencede
- Screenshots: **To be added with the project details**

## Before publishing

- Replace the draft introduction, career objective, education, skills, and contact fields with accurate public information.
- Add only completed or clearly labeled ongoing projects, with checked repository and demo URLs.
- Add a profile photo and project screenshots you have permission to publish.
- Connect the GitHub and Vercel accounts, create the `personal-cv` repository, and deploy the `main` branch.
- Replace the two link placeholders above with the verified repository and public deployment URLs.

## Development history

Create commits for real completed stages as development progresses; do not fabricate earlier work or timestamps.
