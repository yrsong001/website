# Yiran Song – Personal Website

This repository is the source for **Yiran Song’s personal academic website**. It is a static site suitable for hosting on GitHub Pages or any static host.

## What’s in this repo

- **Homepage** (`index.html`): Two-column layout with profile photo, short bio, advisor links (Dr. Fei Zou, Dr. Li Qian), icon links (Google Scholar, GitHub, LinkedIn, etc.), and a news section.
- **Publications** (`publications/index.html`): Selected publications with links to Google Scholar and paper URLs.
- **News / More news** (`post/index.html`): Full news list (presentations, publications, honors).

## GitHub setup and hosting

1. **Create a repository on GitHub**
   - For a site at `https://<username>.github.io`: name the repo **`<username>.github.io`** (e.g. `yiransong.github.io`).
   - For a site at `https://<username>.github.io/<repo>/`: use any name (e.g. **`personal-website`**, **`yiran-website`**, or **`website`**).

2. **Connect and push** (from this directory):
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repo **Settings → Pages**
   - **Build and deployment**: “Deploy from a branch”
   - Branch: `main`, Folder: **`/ (root)`**
   - Save. The site will be at the URL shown (e.g. `https://<username>.github.io` or `https://<username>.github.io/<repo>/`).

## Suggested repository names

- **`yiransong.github.io`** – if you want the site at `https://yiransong.github.io`
- **`personal-website`** or **`website`** – generic and clear for a public repo
- **`yiran-song-website`** – descriptive and good for search

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
