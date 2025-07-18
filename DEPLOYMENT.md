# Deployment Guide for Optimal AI Security Guide

## 🚀 Production Deployment Options

### Option 1: GitHub Pages with Custom Domain (Recommended)

#### 1. GitHub Repository Setup
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push

#### 2. Custom Domain Configuration
1. **DNS Configuration** (at your domain registrar):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

2. **GitHub Pages Settings**:
   - In repository settings → Pages
   - Add custom domain: `optimal-ai.info`
   - Check "Enforce HTTPS"

#### 3. Environment Variables
For custom domain deployment, set these environment variables in GitHub:
- `NODE_ENV=production`
- `GITHUB_PAGES=true`
- `CUSTOM_DOMAIN=true`

### Option 2: Vercel Deployment (Alternative)

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **Custom Domain**:
   - Add domain in Vercel dashboard
   - Configure DNS as instructed by Vercel

### Option 3: Netlify Deployment

1. **Deploy to Netlify**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

2. **Custom Domain**:
   - Add domain in Netlify dashboard
   - Configure DNS as instructed

## 🛠️ Local Testing

### Development Server
```bash
npm run dev
# Access at http://localhost:3000
```

### Production Build Testing
```bash
./deploy.sh local
# Access at http://localhost:3000
```

### Manual Build
```bash
npm run build
npx serve out --single --listen 3000
```

## 📁 Build Output

The static files are generated in the `out/` directory:
- `index.html` - Homepage
- `components/` - Component pages
- `threats/` - Threat pages
- `controls/` - Control pages
- `optimal-logo.png` - Logo file
- All other assets and pages

## 🔧 Configuration Files

### next.config.ts
- Static export configuration
- Custom domain handling
- Asset prefix management

### .github/workflows/deploy.yml
- GitHub Actions deployment workflow
- Automatic builds on push
- GitHub Pages deployment

### public/CNAME
- Custom domain configuration
- Points to `optimal-ai.info`

## 🌐 Domain Setup Checklist

- [ ] DNS records configured at registrar
- [ ] GitHub Pages enabled
- [ ] Custom domain added in GitHub settings
- [ ] HTTPS enforced
- [ ] CNAME file in repository
- [ ] Environment variables set
- [ ] GitHub Actions workflow working

## 🐛 Troubleshooting

### Logo Not Loading
- Check if `optimal-logo.png` exists in `public/` and `out/`
- Verify file permissions
- Check browser console for errors

### Navigation Links Broken
- Ensure all links use Next.js `<Link>` components
- Verify static export is working
- Check for proper `generateStaticParams` functions

### Custom Domain Issues
- Verify DNS propagation (can take 24-48 hours)
- Check GitHub Pages settings
- Ensure CNAME file is correct
- Verify HTTPS certificate

## 📞 Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify DNS configuration
3. Test locally with `./deploy.sh local`
4. Check browser console for errors 