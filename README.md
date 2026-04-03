# Chrome Sidepanel Extension Template

A minimal Chrome extension with side panel. Built with WXT, Svelte 5, and Tailwind 4.

## Tech Stack

- **WXT** - Web extension framework
- **Svelte 5** - Reactive UI framework with runes
- **TypeScript** - Type safety
- **Tailwind 4** - Utility-first CSS

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm run zip
```

## Loading Extension

1. Run `npm run build`
2. Open `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select `.output/chrome-mv3/`

## Project Structure

```
src/
├── entrypoints/
│   ├── sidepanel/     # Side panel UI
│   └── background.ts  # Background service worker
├── lib/               # Shared components
└── public/            # Static files (icons)
```
