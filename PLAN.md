# Clienvora Support Site — Master Plan

**Goal:** Turn this Astro site into a modern, separate content hub at `blog.clienvora.com`
that reinforces the authority, relevance, and traffic of the main site `www.clienvora.com`.

**Hosting:** GitHub Pages (free) + Cloudflare DNS + custom subdomain (free SSL).
**Status legend:** [ ] todo · [~] in progress · [x] done

---

## Strategic Summary

- Main site: `www.clienvora.com` (Blogger/Blogspot, live).
- Support site: this Astro project, deploying to a custom subdomain `blog.clienvora.com`.
- The support site is **technically separate** (own platform, own crawl, own indexing,
  own Search Console property) but lives in the **same domain family**, so authority and
  brand signals flow to `www.clienvora.com`.
- Every piece of content links contextually back to relevant main-site pages.

### Why subdomain over github.io
| Setup | Cost | Authority to main site | Separation |
|---|---|---|---|
| github.io/clienvora-blog | Free | Weak (external, shared host) | Full |
| **blog.clienvora.com** | Free | **Strong (same domain family)** | Full |
| www.clienvora.com/blog (subfolder) | Free | Strongest | None (ties to Blogger) |

### Crawl / indexing notes
- Subdomain is crawled & indexed as its own host → its own crawl budget, own sitemap,
  own robots.txt, own Search Console reports.
- Does NOT consume www.clienvora.com crawl budget.
- Crawl budget is a non-issue at this site's scale.

---

## Phase 1 — Foundation: domain, config, sitemap, indexing

- [ ] 1.1 Decide target domain = `blog.clienvora.com` (DECIDED)
- [x] 1.2 Cloudflare DNS: add CNAME record `blog` → `amirali115c-hub.github.io`
- [x] 1.3 Add `public/CNAME` file containing `blog.clienvora.com`
- [ ] 1.4 GitHub repo → Settings → Pages → set custom domain `blog.clienvora.com`, enforce HTTPS
- [x] 1.5 Update `astro.config.mjs`: `site: 'https://blog.clienvora.com'`, remove `base`
- [x] 1.6 Fix `public/robots.txt`: `Sitemap: https://blog.clienvora.com/sitemap-index.xml`
- [x] 1.7 Update `src/consts.ts`: real title, description, author (remove "Astro Blog" placeholders)
- [x] 1.8 Rebuild & verify generated sitemap URLs are all `blog.clienvora.com/...`
- [ ] 1.9 Add site as URL-prefix property in Google Search Console (verify via meta tag / file)
- [ ] 1.10 Submit `sitemap-index.xml`, confirm "Couldn't fetch" is resolved

## Phase 2 — Authority reinforcement for www.clienvora.com

- [ ] 2.1 Contextual internal links from every post to relevant main-site pages (descriptive anchors)
- [ ] 2.2 Canonical strategy: original content canonical to this site; never duplicate main-site posts
- [ ] 2.3 Publish complementary content only (deep guides, glossaries, tools, case studies)
- [ ] 2.4 Topical clustering around core themes: SEO, copywriting, GEO for B2B
- [ ] 2.5 Consistent author/brand entity signals (bio, same social profiles, org info)
- [ ] 2.6 Clean RSS + sitemap for Google and AI crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)

## Phase 3 — Modern design & features

- [ ] 3.1 Header: sticky responsive nav, logo, links (Home, Blog, About, main-site CTA), mobile menu, dark/light toggle
- [ ] 3.2 Footer: multi-column (brand blurb, quick links, resources, socials) + strong CTA to www.clienvora.com
- [ ] 3.3 Subscribe: email capture wired to a static-friendly backend (Buttondown / MailerLite / ConvertKit / Cloudflare)
- [ ] 3.4 Homepage: hero value prop, featured posts grid, CTA band to main site
- [ ] 3.5 Blog index: modern cards, tags, reading time
- [ ] 3.6 Post template: related posts, author box, share buttons, in-content CTA to main site
- [ ] 3.7 SEO polish: meta tags, Open Graph / Twitter cards, JSON-LD (Article, Organization, Breadcrumb)
- [ ] 3.8 Performance: image optimization (sharp), high Lighthouse scores

## Phase 4 — Verify & launch

- [ ] 4.1 Local build + preview; confirm sitemap URLs correct
- [ ] 4.2 Deploy via existing GitHub Actions workflow
- [ ] 4.3 Resubmit sitemap in Search Console; request indexing
- [ ] 4.4 Establish ongoing publishing + internal-linking routine

---

## Honest caveat
A single self-linking support site gives a modest, one-time boost, not a magic authority
engine, and Google devalues obvious self-serving link networks. The compounding win comes
from treating this as a **genuinely useful content hub** that earns its own traffic and
links, then passes that value to the main site.

---

## Current known issues (as of audit)
- `astro.config.mjs` points to `amirali115c-hub.github.io` + base `/clienvora-blog/` (wrong for subdomain).
- `robots.txt` sitemap line points to github.io URL (cross-domain → likely GSC fetch error).
- `consts.ts` still has default "Astro Blog" / "Welcome to my website!" placeholders.
- Header/Footer are default Astro starter components (need full redesign).
- No subscribe feature yet.
