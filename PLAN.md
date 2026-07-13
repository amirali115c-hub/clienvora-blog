# Clienvora Support Site — Master Plan

**Goal:** Turn this Astro site into a modern, separate content hub at `blog.clienvora.com`
that reinforces the authority, relevance, and traffic of the main site `www.clienvora.com`.

**Hosting:** GitHub Pages (free) + Cloudflare DNS + custom subdomain (free SSL).
**Theme:** Bigspring Light (Astro 7, Tailwind 4) rebranded to Clienvora (#bf3425 red, Roboto/Oswald).
**Status legend:** [ ] todo · [~] in progress · [x] done

---

## Strategic Summary

- Main site: `www.clienvora.com` (Blogger/Blogspot, live).
- Support site: this Astro project, deploying to a custom subdomain `blog.clienvora.com`.
- The support site is **technically separate** but lives in the **same domain family**,
  so authority and brand signals flow to `www.clienvora.com`.
- Every piece of content links contextually back to relevant main-site pages.

---

## Phase 1 — Foundation: domain, config, sitemap, indexing

- [x] 1.1 Target domain = `blog.clienvora.com` (DECIDED)
- [x] 1.2 Cloudflare DNS: CNAME `blog` → `amirali115c-hub.github.io`
- [x] 1.3 `public/CNAME` = `blog.clienvora.com`
- [x] 1.4 GitHub Pages custom domain set, SSL issued (valid Jul–Oct 2026)
- [x] 1.5 `astro.config.mjs` site = `https://blog.clienvora.com`, no base
- [x] 1.6 `robots.txt` → `Sitemap: https://blog.clienvora.com/sitemap-index.xml` (+ AI bot allow)
- [x] 1.7 Branding via `src/config/config.json` + `theme.json` (title, #bf3425, logo, fonts)
- [x] 1.8 Build verified: sitemap URLs all `blog.clienvora.com/...`
- [ ] 1.9 Add site as URL-prefix property in Google Search Console
- [ ] 1.10 Submit `sitemap-index.xml`, confirm fetch error resolved

## Phase 2 — Content (migrated to Bigspring theme)

- [x] 2.1 Real blog posts written (5): Free SEO, GEO, B2B copywriting, E-E-A-T, Topical clusters
- [x] 2.2 Homepage rebranded (banner, features, services → SEO/copywriting, CTA)
- [x] 2.3 FAQ rewritten (Clienvora-specific Q&A)
- [x] 2.4 Privacy + Terms rewritten (Clienvora, removed Themefisher credit)
- [x] 2.5 Demo Lorem posts removed; pricing page repurposed to "How We Work"
- [x] 2.6 Contextual internal links to `www.clienvora.com` service pages from every post

## Phase 3 — Design & features (handled by Bigspring theme)

- [x] 3.1 Header: sticky nav, Clienvora logo, links, mobile menu
- [x] 3.2 Footer: multi-column menu + socials + CTA, Clienvora copyright
- [~] 3.3 Contact form wired to Formspree placeholder (`config.params.contact_form_action`)
- [x] 3.3b Newsletter system: Subscribe component (footer + post CTA + /subscribe page + /subscribe/thanks), Buttondown-ready config, GDPR consent + honeypot
- [x] 3.4 Homepage hero + featured posts + CTA band
- [x] 3.5 Blog index cards, post template with related/author/CTA
- [x] 3.6 SEO: meta, OG/Twitter, JSON-LD (Organization + articles) via Astro; sitemap + robots for AI bots
- [x] 3.6b RSS feed (`/rss.xml`) with auto-discovery for subscribers and AI readers
- [x] 3.6c Related posts section on single post (internal linking / authority)
- [x] 3.6d Author default = "Clienvora" (entity signal)
- [x] 3.7 Performance: Astro image optimization, Tailwind 4
- [x] 3.8 Headings use Oswald (brand), body Roboto; red accent applied
- [~] 3.9 Cloudflare Web Analytics integration (config token placeholder, no cookie consent)

## Phase 4 — Verify & launch

- [x] 4.1 Local build clean (14 pages); CNAME, sitemap, robots confirmed
- [~] 4.2 GitHub Actions updated to `npm install --legacy-peer-deps` (Astro 7 peer deps)
- [ ] 4.3 Commit + push to main; confirm Pages deploy succeeds
- [ ] 4.4 Resubmit sitemap in Search Console; request indexing
- [ ] 4.5 Ongoing publishing + internal-linking routine

---

## Notes / known issues
- Astro 7 peer deps: `astro-auto-import` and (removed) GTM not updated for Astro 7 → install with `--legacy-peer-deps`.
- `src/content/pages/elements.mdx` is the theme's component demo (Lorem); not in nav, safe to leave or delete later.
- Formspree `your-form-id` placeholder must be replaced before the contact form works.
