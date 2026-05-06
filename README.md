# Random Users UI — Quote Gallery

A paginated quote gallery SPA that fetches and displays quotes from the [FreeAPI](https://api.freeapi.app) public quotes endpoint.

## Features

- Fetches 10 quotes per page from the FreeAPI public quotes API
- Displays each quote in a card with quote text, author, and tag pills
- Paginated navigation with Previous / Next buttons (disabled at boundaries)
- Loading state during fetch and inline error message on failure

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | 6 |
| Tailwind CSS | 4 |
| Vite | 8 |

## Project Structure

```
src/
├── App.tsx             # Root component — fetch logic and pagination state
├── components/
│   └── Quote.tsx       # QuoteCard presentational component
├── types.d.ts          # Shared TypeScript types for the API response
├── App.css
├── index.css
└── main.tsx
```

## Getting Started

**Install dependencies**

```bash
pnpm install
```

**Run the dev server**

```bash
pnpm dev
```

**Build for production**

```bash
pnpm build
```

**Preview the production build**

```bash
pnpm preview
```

## API

Quotes are fetched from:

```
GET https://api.freeapi.app/api/v1/public/quotes?page=<n>&limit=10
```

The response shape is typed in `src/types.d.ts` (`ApiResponse`, `QuotePageData`, `Quote`).
