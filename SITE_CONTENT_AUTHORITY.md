# BAITSSS Website Content Authority

Prepared: 2026-09-08

## Core rule

The live BAITSSS website must have one active authority for each public subject. Old page versions are preserved by Git history, not kept as independent live copies that can drift or reappear.

A legacy URL may remain only as a redirect to the current authority. It must not contain a second editable copy of the page.

## Canonical public authorities

- `/` — Home
- `/software/` — BAITSSS Desktop product and workflow
- `/capabilities/` — product capabilities
- `/science/` — scientific model description
- `/research-education/` — research and education
- `/access-participation/` — access and collaboration
- `/software-development/` — Software Development & Verification
- `/people/` — People & Scientific Stewardship
- `/origins-publications/` — Scientific History & Publications
- `/faq/` — Frequently Asked Questions
- `/documentation/` — documentation index
- `/contact/` — contact

## Stewardship authority

`/people/` is the only editable live People & Scientific Stewardship page.

The current public identity on this page is **BAITSSS Development Team**. The page describes team-level scientific stewardship, desktop software development, verification, documentation, release preparation, and continuity with the established BAITSSS scientific model.

Do not replace the team-level identity with an individual biography unless that change is explicitly approved as a new public-content decision.

Legacy routes:

- `/meet-the-team/` → redirect only to `/people/`
- `/scientific-stewardship/` → redirect only to `/people/`

These legacy routes must never again contain independent stewardship content.

## Software development authority

`/software-development/` is the only public authority for the engineering transformation, verification, architecture, testing, recovery, packaging, release preparation, and current maturity of BAITSSS Desktop V1.

External-code maturity comparisons used for internal engineering learning do not belong on the public website unless there is a separate scholarly reason to cite them.

## History and recovery

Historical content is recovered from Git, not from duplicate live pages.

Useful stewardship recovery point:

- Team-level stewardship page before the route-unification regression: commit `9a25f390886f4bca7b7a51ccda8913e8b7b2c912`, file `meet-the-team/index.html`, blob `d89a70f6efba19b15163ce4c9243ab117d7d3c61`.

The personal-name stewardship variant is retained only in repository history and is not a live authority.

When older wording, layout, or content is needed, inspect Git history and selectively recover the required material into the canonical page. Do not reactivate an old page as a competing authority.

## Navigation rule

All normal public navigation should point directly to canonical routes. Legacy URLs exist only for old external links and must not become independent content authorities.

## Change rule

For every website change:

1. Identify the canonical page first.
2. Edit only that authority page.
3. Do not create a second live copy for testing or transition.
4. Preserve earlier states through commits.
5. If a legacy URL must remain, make it a redirect only.
6. Verify navigation points to the canonical route.

This is the release-stage website rule going forward.
