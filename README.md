# Mona Travel — Next.js B2B & MICE Web App

Mona Travel has been converted from a static HTML website into a Next.js App Router web application using TypeScript and React.

## Stack

- Next.js 15
- React 19
- TypeScript
- App Router
- Lucide React icons
- Responsive custom CSS

## Main experience

The homepage opens with two clear user journeys:

1. **B2B Travel & DMC** — corporate travel, incoming delegations, hotel sourcing, executive transport and ground handling.
2. **MICE** — Meetings, Incentives, Conferences and Exhibitions.

Both experiences live on the same page and scroll to their dedicated sections.

Additional sections include Incentive Travel, Team Building, Bleisure, Why Choose Mona Travel, hotel partnerships and a Corporate/MICE RFP form.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm install
npm run build
npm start
```

## Hostinger Web App deployment

Use the GitHub repository as the deployment source.

Recommended settings:

- Framework: **Next.js / Node.js**
- Node.js: **20 or newer**
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm start`
- Port: use the `PORT` value supplied by Hostinger; the start script automatically respects it.
- Root directory: repository root

No environment variables are required for the current version.

## RFP form

The current RFP form prepares a structured email to `contact@monatravel-lb.com`. A server-side database/email API can be connected later without changing the public page structure.

## Legacy files

The old static HTML/CSS/JS files are still present in the repository for reference, but the active application is the Next.js app inside `/app`.
