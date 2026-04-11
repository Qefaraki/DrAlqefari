# DrAlqefari site — working notes for Claude

This is a static Astro site deployed on Vercel. Push to `main` → Vercel rebuilds in ~30s. There is no CMS.

## Publishing a blog post

1. Create a markdown file in `src/content/blog/<slug>.md`. The filename becomes the URL (`/blog/<slug>/`).
2. Frontmatter schema (enforced in `src/content.config.ts`):
   ```yaml
   ---
   title: "..."
   description: "..."
   date: YYYY-MM-DD          # required, will sort posts newest-first
   lang: ar                   # or "en" — Arabic posts show on /blog, English on /en/blog
   tags: ["...", "..."]       # optional
   image: /path/to.webp       # optional, used for OG/Twitter cards
   ---
   ```
3. Run `npx astro build` locally to verify it compiles.
4. Commit **only the blog file** (see "Don't push unrelated changes" below) and push.

## Arabic / RTL gotchas — DO NOT REGRESS

These took multiple rounds to debug. Don't undo them without understanding why they exist.

### 1. Smartypants is disabled in `astro.config.mjs`
```js
markdown: { smartypants: false }
```
**Why:** Astro's default smartypants converts straight `"` into U+201C / U+201D curly quotes, which are LTR-oriented and do **not** auto-mirror in RTL. In Arabic text the curves end up pointing *away* from the word ("out word in") instead of into it. Leaving quotes as straight ASCII `"` renders correctly in both LTR and RTL.

If you ever want curly quotes in Arabic specifically, use Arabic guillemets `«…»` or manually swap U+201D as opener and U+201C as closer — but the simpler fix is to keep smartypants off and use straight quotes.

### 2. Tailwind Typography auto-quotes are disabled on blockquotes
In `src/pages/blog/[id].astro` the prose container has:
```
[&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none
prose-blockquote:not-italic
```
**Why:** `prose` injects `"` via `::before`/`::after` on `<p>` inside `<blockquote>`. Combined with quotes already in the source, you get doubled `""…""`. Italic also looks wrong in Arabic.

### 3. Blog heading sizes are deliberately small
The prose container caps headings at `text-2xl` / `text-lg` / `text-base` for h2/h3/h4. The default prose sizes were too shouty for long Arabic articles with many subsections. Don't bump them back up without asking.

## Don't push unrelated changes

When the user says "push the blog post," only stage the blog file(s). The working tree often has in-progress edits to components (`Hero`, `About`, `Contact`, etc.) that the user is iterating on separately. Pushing those by accident ships half-finished work to production.

Use `git add <specific path>` — never `git add -A` or `git add .` on this repo.

## Don't redesign blindly
See `~/.claude/projects/-Users-alqefari-Desktop-DrAlqefari/memory/feedback_design.md`. The user has rejected many template-style redesigns. Before any visual rewrite, get a concrete reference (a real site URL or screenshot) instead of guessing at "vibes."

## Deployment reference
- Repo: `Qefaraki/DrAlqefari`, branch `main`
- Vercel project: `qef/dralqefari` (auto-deploys on push)
- See `DEPLOYMENT.md` for DNS / manual deploy notes
