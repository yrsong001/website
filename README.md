# Personal Website

A derek.ma-style personal site with two-column homepage, profile photo, icon links (Google Scholar, GitHub, LinkedIn, etc.), and a news section with a "More news" button.

## GitHub setup and hosting

1. **Create a repository on GitHub**
   - For site at `https://<username>.github.io`: name the repo `<username>.github.io`
   - For site at `https://<username>.github.io/yiran_website`: name the repo `yiran_website` (or any name)

2. **Connect and push** (from this directory):
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repo **Settings → Pages**
   - **Build and deployment**: "Deploy from a branch"
   - Branch: `main`, Folder: `/ (root)`
   - Save. Your site will be at the URL shown (e.g. `https://<username>.github.io` or `https://<username>.github.io/yiran_website/`)

## Local development

Open `index.html` in a browser, or run a local server:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Customize

- Replace `assets/photo.jpg` with your profile photo (square works best).
- Edit `index.html` and `post/index.html` for your name, bio, links, and news.
- Update the hrefs for the social icons (Google Scholar, GitHub, LinkedIn, etc.) in `index.html`.
