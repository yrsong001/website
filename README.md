# Yiran Song – Personal Website

This repository is the source for **Yiran Song’s personal academic website**. It is a static site suitable for hosting on GitHub Pages or any static host.

## What’s in this repo

- **Homepage** (`index.html`): Two-column layout with profile photo, short bio, advisor links (Dr. Fei Zou, Dr. Li Qian), icon links (Google Scholar, GitHub, LinkedIn, etc.), and a news section.
- **Publications** (`publications/index.html`): Selected publications with links to Google Scholar and paper URLs.
- **News / More news** (`post/index.html`): Full news list (presentations, publications, honors).

## GitHub setup and hosting

### Getting a clean URL (no repo name in the path)

To have your site at **`https://<username>.github.io/`** (e.g. `https://yrsong001.github.io/`) with **no** repo name in the URL:

1. **Rename the repository** to **`<username>.github.io`** (e.g. `yrsong001.github.io`).
   - On GitHub: repo **Settings → General → Repository name** → change `yiran_website` to `yrsong001.github.io` → **Rename**.
2. **Enable GitHub Pages** (if not already): **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, Folder: **`/ (root)`** → Save.
3. The site will be live at **`https://yrsong001.github.io/`** (no `/yiran_website/`).

If you use any other repo name (e.g. `yiran_website`), GitHub will serve the site at `https://<username>.github.io/<repo>/`.

### Initial setup (new repo)

1. **Create a repository on GitHub**
   - For `https://<username>.github.io/` only: name the repo **`<username>.github.io`**.
   - For `https://<username>.github.io/<repo>/`: use any name (e.g. `yiran_website`).

2. **Connect and push** (from this directory):
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**: **Settings → Pages** → Deploy from branch `main`, folder **`/ (root)`**.

## Local development

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Customize

- Replace `assets/photo.jpg` with your profile photo (square works best).
- Edit `index.html`, `publications/index.html`, and `post/index.html` for name, bio, links, news, and publications.
- Update the hrefs for social icons (Google Scholar, GitHub, LinkedIn, etc.) in `index.html`.

## License

Content and design © Yiran Song. This repo is public so others can view the site source; reuse of layout or code is at your discretion.
