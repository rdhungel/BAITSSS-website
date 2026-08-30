# BAITSSS Website Line-by-Line Audit

Prepared: 30 August 2026
Branch: website-migration-v1
Purpose: working review ledger before website migration and public-domain deployment

## Review rule

Nothing is accepted simply because it looks plausible. Wording, scientific status, software status, figures, numbers, links, and page structure are checked against the approved BAITSSS material before migration.

## Current review status

Reviewed from the live site today:

- Home
- Science
- Software
- Evidence
- Access & Participation
- Development Status
- Origins & Publications

Not yet fully retrieved in the current review pass:

- Research & Education
- Scientific Stewardship
- Contact

These three pages remain OPEN until they can be read directly. No assumptions will be made about their current content.

## Immediate language corrections

The site still contains wording that should be revised to more natural scientific language.

### Remove or rewrite repeated use of “claim”

Examples currently present:

- Science: “not a claim about a universally strongest crop domain”
- Science: “It does not claim to know the exact timing or amount actually applied”
- Science: “The public-claim rule” and “Claims expand only after validation”
- Software: “This is not a claim of the amount a farmer actually applied”
- Evidence page title: “not a universal accuracy claim”
- Development Status: “Only claims with retained evidence belong here”
- Development Status: “Statistical evaluation and claim review”
- Development Status: “not claims of demonstrated capability”
- Access FAQ: “universal accuracy claims”

Preferred vocabulary depends on context: reported result, supported scope, interpretation, documented capability, study-specific evidence, current status, or simply direct factual wording.

## Home

### Strong / retain

- “A desktop scientific platform for evapotranspiration, soil-water balance, and irrigation analysis.”
- “From earth observation to traceable ET and water balance.”
- Clear separation of peer-reviewed evidence, active development, and planned research.

### Open review items

- Keep Home compact; no repeated desktop screenshot once Software becomes the single interface-demonstration page.
- Verify every numerical evidence statement against the authoritative paper before migration.
- “Retained screen evidence” should not become a substitute for versioned software acceptance evidence.
- Review final spacing after the site-wide density revision.

## Science

### Strong / retain

- Two-source energy balance
- Flux partitioning
- Two-layer soil-water state
- Resistance framework
- State and feedback
- Distinction among vegetation observations, internal temperature state, and thermal observations
- Required irrigation versus applied irrigation distinction

### Required revisions

- Remove “claim” wording throughout.
- Tighten the page into fewer visual sections; current content is scientifically useful but too fragmented.
- “Physics-informedSurface”, “ContinuousHourly”, “TransparentInputs”, and similar concatenated rendering should be checked visually and corrected if actually displayed without spacing.
- “No single statistic is treated as proof of accuracy.Planned assistance” should be visually separated.
- Re-check “Phase I” terminology for consistency across every page.
- Preserve the direct statement that thermal observations are not part of the current verified assimilation pathway.

## Software

### Major pending revision

The current live page still contains the old 11-step workflow, conceptual film, and interactive design concept.

Final structure already agreed:

1. 4–5 minute real BAITSSS Desktop video as the first major visual
2. Five-stage Project-to-Results workflow
3. BAITSSS execution architecture — one static scientific architecture figure, labeled Figure 1
4. One current Results example if still useful
5. Output categories
6. Computational scale
7. Scientific interpretation
8. Current software status
9. Technical documentation

### Required removals/revisions

- Remove conceptual film after the real desktop video is available.
- Remove fictional interactive design concept from the public Software page.
- Do not repeat UI screenshots throughout the page or other site pages.
- Remove “This is not a claim...” wording for irrigation; use direct distinction between modeled irrigation requirement and known/recorded applied irrigation.
- Replace the current first AOI screenshot with the real 4–5 minute video.
- Insert the approved architecture PDF/diagram after the workflow section.

## Evidence

### Strong / retain

- Study-by-study structure
- Separation of peer-reviewed research from current desktop software verification
- Publisher-source references
- Explicit limitations per study

### Required review

- Remove “claim” from title and supporting language.
- Every numerical value needs final full-paper/source verification before migration, not only publisher-abstract checking where the final site intends to present detailed metrics.
- Keep software verification separate from environmental validation.
- Do not give new “verified” status to software behavior without the retained versioned acceptance record.

## Access & Participation

### Strong / retain

- Separate student, laboratory, institution, validation, agency, commercial, and collaboration routes.
- No unrestricted public download.
- Modeled irrigation versus applied irrigation FAQ is useful.

### Required revisions

- The page repeats “How would you like to engage with BAITSSS?” twice; second heading should become “Prepare your request” or equivalent.
- Convert the seven pathways into a more compact consistent desktop grid during spacing revision.
- Current request form only prepares an email and does not submit/store data; keep this explicit until a real intake mechanism exists.
- Remove “universal accuracy claims” wording.

## Development Status

### Strong / retain

- Software completion and scientific validation are treated separately.
- Current, active, and planned work are distinct.

### Required revisions

- Remove “claim” terminology.
- “Verified” section is currently extremely conservative because versioned acceptance evidence is not linked. Update only from authoritative retained test records; do not infer.
- Remove retained interface screenshots from this page if the site-wide rule places UI visuals only on Software.
- Keep large-area performance and recovery status synchronized with the current accepted development evidence.

## Origins & Publications

### Strong / retain

- Current modernization is clearly separated from historical institutions.
- Original authorship and later contributors are distinguished from the current software team.
- Institutions are identified as historical workplaces, not current owners/sponsors/endorsers.

### Required review

- Verify full publication list, titles, author order, journal names, years, and links against authoritative publication records.
- Keep this page scholarly and compact; no software screenshots.
- Review wording around “developers” versus named current development responsibility so it matches the actual governance language used elsewhere.

## Site-wide visual review still open

After the current website-editor credit window resumes, inspect every page at the same viewport and correct:

- hero height
- section top/bottom padding
- text width
- card padding
- card-to-card gaps
- repeated empty vertical areas
- heading-to-content spacing
- footer spacing
- header wrapping
- figure/table scaling

Target: spacious but not empty; technical but not crowded; consistent across pages.

## Migration gate

Do not migrate the live site into the GitHub production branch until:

- final page-by-page wording review is complete
- all authoritative numerical statements are checked
- Software page contains the real 4–5 minute video slot and approved architecture structure
- Research & Education, Scientific Stewardship, and Contact are directly reviewed
- site-wide spacing pass is complete
- internal documents remain outside the public website repository unless separately approved

The live ChatGPT-hosted site remains the working reference during this review.
