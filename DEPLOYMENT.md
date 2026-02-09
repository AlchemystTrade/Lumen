# Deployment Guide

Lumen is a static site that can be deployed to any static hosting service. Here are some recommended options:

## Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

## Vercel

1. Import your GitHub repository to Vercel
2. Vercel will auto-detect Astro and configure settings
3. Deploy!

## GitHub Pages

1. Add GitHub Actions workflow (see `.github/workflows/deploy.yml` example below)
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions

### Example GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Cloudflare Pages

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Deploy!

## Custom Server

Simply upload the contents of the `dist/` folder to any web server. No server-side processing required!
