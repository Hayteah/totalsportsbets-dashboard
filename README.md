# Totalsportbet AI Dashboard

Control panel for managing AI sports predictions and auto-publishing.

## Quick Start (Local)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option A: Deploy from GitHub (Recommended)

1. Push this repo to GitHub:
```bash
git init
git add .
git commit -m "Initial dashboard"
git remote add origin https://github.com/YOUR_USERNAME/totalsportbet-dashboard.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Click "Deploy" — Vercel auto-detects Next.js
5. Once deployed, go to Project Settings → Domains → Add your domain

### Option B: Deploy from CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts, then:
```bash
vercel --prod
```

## Connect Your Domain

After deployment:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `totalsportbet.com` (or your domain)
3. If using Namecheap, set nameservers to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

## Features

- 🎯 Review & edit predictions before posting
- 📱 Publish to Instagram, Facebook, TikTok, Telegram
- 📊 Track prediction accuracy & ROI
- ⚡ One-click pipeline (fetch → predict → generate → publish)
- 🔒 API status monitoring & token management
