# GigGuard Deployment Guide

## Two Options for Deploying to GitHub Pages

Your GigGuard app is ready to be deployed! Here are two methods:

---

## OPTION A: Automatic Deployment with GitHub Actions (RECOMMENDED)

**Status:** ✅ Already configured!

### How it Works
Every time you push code to the `main` branch, GitHub Actions automatically:
1. Checks out your code
2. Installs dependencies
3. Builds your app (`npm run build`)
4. Deploys to GitHub Pages

### Files Already Created
- `.github/workflows/deploy.yml` - Workflow configuration
- `vite.config.ts` - Updated with `base: '/shoaib/'`

### What You Do
Simply push your code updates to `main` branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions handles the rest!

### Timeline
- Automatic detection: Immediate
- Build time: 1-2 minutes
- Deployment: 1-3 minutes
- Total: 2-5 minutes

### Advantages
- Fully automated
- No manual steps needed
- Builds only when you push
- See build status in Actions tab

---

## OPTION B: Build Locally & Push Built Files

### Step-by-Step Instructions

#### 1. Clone Repository (first time only)
```bash
git clone https://github.com/shoaibhussainclass9b-crypto/shoaib.git
cd shoaib
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Build Locally
```bash
npm run build
```

This creates a `dist/` folder with your compiled app.

#### 4. Push Built Files
```bash
git add dist/
git commit -m "build: Production build for GitHub Pages"
git push origin main
```

#### 5. Update GitHub Pages (if needed)
- Go to repo Settings → Pages
- Change Source folder to `/dist` if on root
- Click Save

#### 6. Wait 1-3 Minutes
GitHub Pages deploys your site

### Timeline
- Local build: 30-60 seconds
- Git push: 5-10 seconds
- GitHub Pages: 1-3 minutes
- Total: 2-4 minutes

### Advantages
- Full control over builds
- Can test locally before pushing
- No GitHub Actions quota usage
- Immediate feedback

### Requirements
- Node.js installed (https://nodejs.org/)
- Terminal/Command Prompt access
- Git installed

---

## Your Live Site URL

```
https://shoaibhussainclass9b-crypto.github.io/shoaib/
```

**Current Status:**
- Repository: PUBLIC ✅
- GitHub Pages: ENABLED ✅
- Vite Config: UPDATED ✅
- GitHub Actions: CONFIGURED ✅

---

## Troubleshooting

### Site Shows 404
- Wait 1-3 minutes
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check deployments in repo Actions tab

### npm Command Not Found
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

### Build Failed
```bash
# Clean reinstall
rm -rf node_modules
rm package-lock.json  # or yarn.lock
npm install
npm run build
```

### Files Not Pushing
```bash
# Check git status
git status

# If dist/ not tracked, it may be in .gitignore
# Edit .gitignore and remove or comment out 'dist/'
```

---

## Next Steps

Choose your deployment method:

1. **GitHub Actions (Automatic)** → Push code, GitHub handles the rest
2. **Local Build (Manual)** → Build locally, push dist folder

Both methods will deploy your GigGuard app to:
`https://shoaibhussainclass9b-crypto.github.io/shoaib/`

---

**Need help?**
- Check Actions tab for workflow logs
- Verify dist/ folder exists locally
- Ensure base path in vite.config.ts is '/shoaib/'
