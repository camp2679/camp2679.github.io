# Personal site

A two-page Astro site: a landing page with your photo and bio, and a Research
page listing selected publications. No blog yet — that can be added later
without redoing any of this.

Everything you'll normally edit lives in **one file**: `src/data/site.js`.

---

## Getting it onto GitHub Pages

You can do all of this in a web browser. Nothing needs to be installed.

### 1. Create the repository

On GitHub, click **New repository**.

- **Name it `YOUR-USERNAME.github.io`** (using your actual username). This
  makes your site live at `https://YOUR-USERNAME.github.io` with no subfolder.
- Set it to **Public**. GitHub Pages is only free for public repos.
- Don't add a README, .gitignore, or license — this project has them.

### 2. Upload the files

On the empty repo page, click **uploading an existing file**, then drag in
everything from this folder *except* the `.github` folder (browsers and Finder
hide folders starting with a dot, so that one gets its own step below).

You should be uploading:

```
astro.config.mjs
package.json
README.md
public/            (favicon.svg, profile.jpg)
src/               (data/, layouts/, pages/, styles/)
```

Click **Commit changes**.

### 3. Add the deploy workflow

This is the file that tells GitHub to build the site. Because of the dot in the
folder name, create it by hand rather than uploading:

1. Click **Add file → Create new file**.
2. In the filename box, type exactly:
   `.github/workflows/deploy.yml`
   (Typing the slashes creates the folders automatically.)
3. Paste in the contents of `.github/workflows/deploy.yml` from this project.
4. Click **Commit changes**.

Do the same for `.gitignore` if you want it — it isn't required for the site to
work, but it keeps things tidy if you ever clone the repo to a computer.

### 4. Turn on Pages

Go to **Settings → Pages**. Under **Build and deployment → Source**, choose
**GitHub Actions**. (Not "Deploy from a branch" — that's the older method and
won't build Astro.)

### 5. Fix the site URL

Open `astro.config.mjs` and replace `YOUR-USERNAME` with your username. Commit.

That commit triggers the build. Watch it under the **Actions** tab — it takes
about a minute. When it's green, your site is live.

---

## Editing your site

Everything is in `src/data/site.js`. On GitHub, click into that file and hit the
pencil icon to edit in the browser. Commit, and the site rebuilds itself in
about a minute.

That file controls:

| What | Where |
|---|---|
| Your name, tagline | `site.name`, `site.tagline` |
| Your bio | `site.bio` — one string per paragraph |
| Links under your bio | `site.links` |
| Publications | `publications` — newest first |

### Adding your photo

Replace `public/profile.jpg` with your own image, keeping the same filename.
Upload it via **Add file → Upload files** while inside the `public` folder.

A square image works best — it's displayed as a circle. Around 600×600 px is
plenty; anything much larger just slows the page down.

### Adding a publication

Copy one of the blocks in the `publications` list and edit it. Only `title` and
`year` are required — delete any line that doesn't apply. Wrap your own name in
`**double asterisks**` in the `authors` line to bold it.

### Changing the look

Colors and fonts are defined at the top of `src/styles/global.css`, under
`:root`. Changing `--accent` changes every link and highlight on the site. Dark
mode colors are in the `@media (prefers-color-scheme: dark)` block just below.

---

## Optional: a custom domain

Buy a domain (Cloudflare and Namecheap both sell them for roughly $10–15/year),
then go to **Settings → Pages → Custom domain** and follow GitHub's
instructions for the DNS records. Tick **Enforce HTTPS** once it validates.
You'll also want to update `site` in `astro.config.mjs` to the new address.

---

## Optional: working on a computer instead of in the browser

If you'd rather preview changes live as you type, install
[Node.js](https://nodejs.org), then in this folder run:

```bash
npm install
npm run dev
```

That serves the site at `http://localhost:4321` and reloads as you save.

You can also skip installing anything by opening the repo in a
[Codespace](https://github.com/features/codespaces) — press `.` on the repo page
for a browser editor, or use the green **Code → Codespaces** button for a full
environment with live preview.

---

## Adding a blog later

Astro handles this well and it won't disturb what's here: add a
`src/content/blog/` folder of Markdown files, plus a page that lists them. Worth
doing once you actually have a first post in mind.
