# BIOPUNK // LABS — The Red Horizon Fellowship

Static site for the **Red Horizon Fellowship**, a speculative-fiction + biosecurity
program under **BIOPUNK // LABS**. Fellows write the biotech catastrophe that hasn't
happened yet, red-team it, and build the countermeasure at the bench — then publish the
fix and redact the hazard.

**No build step, no framework.** Every file is served as-is (GitHub Pages friendly).

## The premise

Fiction reaches a danger before the danger is buildable. The fellowship runs a four-phase
loop on every project:

1. **Horizon** — write the scenario (a failure mode, never a manual).
2. **Red Team** — tear it apart; find the one weakness a defender can stand on.
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
| `assets/styles.css` | — | Shared stylesheet (Biopunk Brand Guide v1.1) |
| `assets/site.js` | — | Shared interactions (nav, scroll reveal, form) |

## Brand system (Brand Guide v1.1)

- **Color:** Biopunk Black + Bone dominate (>80% of any surface). **Venom Red** is signal only.
- **Type:** Big Shoulders Stencil Display (display) · Space Grotesk (body) · JetBrains Mono
  (data/labels) · Special Elite (gonzo field notes). All via Google Fonts.
- **Rules:** no italics for emphasis (use bold / caps / venom red); documentary + collage
  register (no stock photos); hard edges; manifesto over marketing; banned-vocabulary list
  enforced.

## Application form

The form on `apply.html` posts nowhere by default — it shows a confirmation state locally.
To collect real submissions, set the `FELLOWSHIP_ENDPOINT` constant near the top of
`assets/site.js` to a Formspree / Tally / Google Form POST URL.

## Deploy

Push to the default branch; GitHub Pages serves it. `.nojekyll` is present so `assets/`
and path routes serve cleanly.

## Safety note

This is a speculative-fiction and biosecurity **education** program. Scenarios are fiction.
The site publishes **no** operational hazard information and describes no method to create,
obtain, or misuse any biological agent. Named external venues and organizations
(DEF CON Biohacking Village, iGEM, community labs, and others) are referenced for context
and do not imply affiliation or endorsement. Fellow dossiers and the sample case file are
illustrative composites.
