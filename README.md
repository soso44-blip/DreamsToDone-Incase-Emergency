# In Case — The Family Emergency Binder (mobile / PWA)

A calm, private place to write down everything your family would need to know
if you weren't there to tell them — accounts, policies, medical details,
contacts, wishes, and where the important things are kept.

**Everything you type stays in your browser, on your own device. Nothing is
ever uploaded anywhere.** That is exactly why it's safe to write this down.

This is the installable **mobile version**: add it to your phone's home screen
and it opens like an app and works with no internet connection at all.

A single-page tool by [DreamsToDone](https://dreamstodone.etsy.com).
No account, no subscription, no tracking.

---

## Install on your phone

**iPhone / iPad (Safari)**
1. Open the site in Safari.
2. Tap the **Share** button, then **Add to Home Screen**.
3. Open it from the new icon — it now runs full-screen and offline.

**Android (Chrome)**
1. Open the site in Chrome.
2. Tap the **⋮** menu, then **Install app** (or **Add to Home screen**).
3. Open it from the new icon.

Once installed, the binder works offline. Your information is saved on that
device only.

## What's inside

- **Eleven sections** — Start here, About you, People to call, Home &
  household, Pets, Money & policies, Medical, Legal & documents, Digital life,
  My wishes, and Where things are.
- **A short version and a full version** — start with the essentials on one
  page, or go through everything.
- **Search** across the whole binder.
- **Print a clean PDF binder**, with a contents page.
- **Backup and restore** to a file you keep yourself.
- **Four colour themes**, each with a light and a dark mode.
- **English and French**, opening in your device's language automatically.

## How your information is handled

- Stored **only in your own browser**, on your own device (`localStorage`).
- No server, no account, no tracking, no network calls.
- Clearing your browser data (or, on iPhone, not opening the app for a long
  time) can erase it — so the tool encourages you to **download a backup**
  and to **print a copy**.
- By design it **never asks for passwords, PINs, or full account numbers** —
  only *where* those are kept and *who* can reach them.

## Deploy (GitHub Pages)

This is a static site — no build step.

1. Push these files to a GitHub repository (for example `In-Case`).
2. In the repo, go to **Settings → Pages**.
3. Set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`,
   and save.
4. After a minute it's live at `https://<your-username>.github.io/In-Case/`,
   installable on any phone.

> The service worker and manifest only work over **https** (which GitHub Pages
> provides) or `localhost` — not by opening the file directly from disk. The
> page still works opened from disk; it simply isn't installable that way.

## Files

| File | What it is |
|------|-----------|
| `index.html` | The app. |
| `manifest.webmanifest` | Makes it installable (name, icons, colours). |
| `sw.js` | Service worker — makes it work offline. |
| `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` | App icons. |
| `apple-touch-icon.png` | Home-screen icon for iPhone/iPad. |
| `favicon-32.png` | Browser-tab icon. |
| `LICENSE` | Terms of use. |

## Updating

When you change `index.html` or any icon, **open `sw.js` and bump the version**
(`var CACHE = "in-case-v1.5"` → `"...v1.6"`). That tells installed phones to
fetch the new version instead of serving the old one from their cache.

## Built with

Plain HTML, CSS and vanilla JavaScript. No frameworks, no dependencies, no
network calls. The only extra files are the standard PWA pieces above.

## License

© 2026 DreamsToDone. All rights reserved. See [LICENSE](LICENSE).
This is a commercial product. You're welcome to view the source, but it may
not be copied, resold, or redistributed.
