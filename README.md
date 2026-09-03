# Mona Travel — Full Next.js Web App

Full migration of the approved Mona Travel B2B & MICE ZIP to Next.js App Router.

Preserved: full leisure site, B2B/DMC, MICE, B2B/MICE entry chooser, incentives, team building, bleisure, EN/FR/AR translations, preloader/animations, booking logic, corporate RFP, and the existing browser-based admin panel at `/admin`.

## Hostinger
- Node.js 20+
- Install: `npm install`
- Build: `npm run build`
- Start: `npm start`
- Root: repository root
- Environment variables: none required currently

## Admin note
The existing admin still uses browser localStorage, matching the approved ZIP. It is not yet a database-backed CMS.

## Images
The approved image set is referenced from `https://monatravel-lb.com/images/...` to keep the repository lightweight while preserving the exact visual assets.
