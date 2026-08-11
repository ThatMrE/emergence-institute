# Emergence Institute — The Red Horizon Fellowship

Static site for the **Red Horizon Fellowship**, a speculative-fiction + biosecurity
program of the **Emergence Institute**. Fellows write the biotech catastrophe that has not
happened yet, red-team it, and build the countermeasure at the bench — then publish the
fix and redact the hazard.

**No build step, no framework.** The host serves every file as-is. GitHub Pages and Netlify
both work.

## The premise

Fiction reaches a danger before the danger is buildable. The fellowship runs a four-phase
loop on every project:

1. **Horizon** — write the scenario (a failure mode, never a manual).
2. **Red Team** — tear it apart. Find the one weakness a defender can stand on.
3. **Countermeasure** — build the fix at a safety-reviewed bench (72-hour sprint).
4. **Dispatch** — publish the story + the fix, after biosafety review. Hazard stays redacted.

> Publish the cure. Redact the recipe.

## Pages

| File | Route | What it is |
|------|-------|-----------|
| `index.html` | `/` | Homepage — premise, the loop, deliverables, featured case file, cohort, the scene, timeline |
| `fellows.html` | `/fellows` | Illustrative fellow dossiers + demonstrated-activity dispatch log |
| `case-study.html` | `/case-study` | Sample **Case File 014 — "The Printer in the Garage"** (full loop, hazard redacted) |
| `charter.html` | `/charter` | Safety charter: redaction law, responsible disclosure, dual-use review, code of conduct |
| `apply.html` | `/apply` | Application form (tracks, scenario pitch, countermeasure, biosafety attestations) |
| `assets/styles.css` | — | Shared stylesheet |
| `assets/site.js` | — | Shared interactions (nav, scroll reveal, form) |

## Design system

- **Color:** near-black + bone dominate (>80% of any surface). **Venom red** is signal only.
- **Type:** Big Shoulders Stencil Display (display) · Space Grotesk (body) · JetBrains Mono
  (data/labels) · Special Elite (gonzo field notes). All via Google Fonts.
- **Register:** documentary + collage (no stock photos); hard edges; manifesto over
  marketing. Motifs: redacted-dossier panels, hazard tape, rubber stamps, an
  emergence/network logomark.

## Application form

The form on `apply.html` posts nowhere by default — it shows a confirmation state locally.
To collect real submissions, set the `FELLOWSHIP_ENDPOINT` constant near the top of
`assets/site.js` to a Formspree / Tally / Google Form POST URL.

## Deploy

Push the default branch. The host serves it. A `.nojekyll` file keeps `assets/` and the path
routes serving cleanly.

## Safety note

This is a speculative-fiction and biosecurity **education** program. Scenarios are fiction.
The site publishes **no** operational hazard information and describes no method to create,
obtain, or misuse any biological agent. The site names external venues and organizations
(DEF CON Biohacking Village, iGEM, community labs, and others) for context only. They do not
imply affiliation or endorsement. Fellow dossiers and the sample case file are
illustrative composites.
