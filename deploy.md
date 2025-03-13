
# Deployment Instructions

To deploy this project to GitHub Pages, follow these steps:

1. Add the following to your package.json:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

3. Set up GitHub repository settings:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

4. Push your code to the main branch, and GitHub Actions will automatically deploy it.

Alternatively, you can manually deploy by running:

```bash
npm run deploy
```
