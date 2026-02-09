# Lumen

A quiet, curated video library for families.

## Features

- 🌅 **Calm & Curated**: Carefully selected videos organized by time of day (Morning, Day, Evening)
- 📝 **Markdown-first**: All video content managed through simple markdown files
- 🚫 **No distractions**: No algorithms, recommendations, autoplay, comments, or tracking
- 🎨 **Minimal design**: Clean, library-like interface focused on content
- ⚡ **Fast & Static**: Built with Astro for lightning-fast performance

## Structure

```
src/
├── content/
│   └── videos/
│       ├── morning/    # Morning videos
│       ├── day/        # Daytime videos
│       └── evening/    # Evening videos
├── layouts/
│   └── Layout.astro    # Main layout
└── pages/
    ├── index.astro     # Home page
    ├── morning/        # Morning section
    ├── day/            # Day section
    ├── evening/        # Evening section
    └── videos/         # Video detail pages
```

## Development

### Prerequisites

- Node.js 18 or higher
- npm

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:4321 in your browser

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Adding Videos

To add a new video, create a markdown file in the appropriate section:

1. Create a file in `src/content/videos/[section]/your-video.md`
2. Add frontmatter with video details:

```markdown
---
title: "Your Video Title"
description: "A brief description"
embedUrl: "https://www.youtube-nocookie.com/embed/VIDEO_ID"
duration: "10:00"
---

Detailed description of the video goes here.

Any additional context or notes.
```

## License

This is a non-commercial project for family use.