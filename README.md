# BATA-CARE: Circular Shoe Care Platform

Two React apps for a concept that extends the life of Bata shoes through repairs, trade-ins and recycling:

| App | Folder | What it is |
| --- | --- | --- |
| **Consumer app** | [`consumer-app/`](consumer-app) | Mobile app where customers keep a digital passport for each pair of shoes, run an AI repair scan, book repairs, trade shoes in for credits and track their membership tier and environmental impact. |
| **Admin dashboard** | [`admin-dashboard/`](admin-dashboard) | Analytics dashboard for Bata staff covering product quality, customers, regions, demand, sustainability and recommended actions. |

Both apps were rebuilt as source code from their Figma Make prototypes:
- Consumer app prototype: https://notion-cape-75506858.figma.site/
- Admin dashboard prototype: https://search-candle-70726057.figma.site/

All data is mock data. The consumer app saves your shoes, credits and transactions in the browser's `localStorage`, so the flows (repair booking, trade-in, credits) persist between visits.

## Running locally

Each app is a standalone Vite project. You need Node.js 20 or newer.

```bash
cd consumer-app        # or: cd admin-dashboard
npm install
npm run dev            # http://localhost:5173
```

`npm run build` writes a production build to `dist/`. Each app includes a `vercel.json`, so it can be deployed to Vercel as-is. Set the project's root directory to the app's folder.

## Tech stack

- React 18 + React Router 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Lucide icons
- Motion (consumer app animations)
- Recharts (admin dashboard charts)

## Consumer app screens

| Route | Screen |
| --- | --- |
| `/` | Log in |
| `/home` | My shoes, in progress and history |
| `/shoe/:shoeId` | Digital shoe passport with lifespan timeline |
| `/repair-scanner` → `/repair-results` | AI repair scan and diagnosis |
| `/shoe/:shoeId/care-services` | Book a repair drop-off |
| `/trade-in` | Trade-in value, nearest stores and drop-off slots |
| `/shoe/:shoeId/qr` | QR code for in-store staff scan |
| `/in-store-map` | Find the Smart Bin inside a store |
| `/membership` | Tiers, benefits and your impact |
| `/wallet` | Bata Credits balance and transactions |

## Admin dashboard pages

Dashboard · Quality Analysis · Customer Insights · Product Management · Regional Analytics · Products in Demand · Sustainability · Insights & Actions
