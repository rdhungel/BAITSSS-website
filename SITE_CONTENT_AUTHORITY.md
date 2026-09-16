# BAITSSS Website Content Authority

Prepared: 2026-09-08

## Core rule

The live BAITSSS website must have one active authority for each public subject. Old page versions are preserved by Git history, not kept as independent live copies that can drift or reappear.

A legacy URL may remain only as a redirect to the current authority. It must not contain a second editable copy of the page.

## Site-wide positioning rule

Every public page, downloadable writeup, project description, outreach page, technical summary, and future public document should tell the same underlying story, while still serving its own purpose.

BAITSSS is a field-scale water analysis and scientific decision-support system. It is not presented as a stand-alone evapotranspiration product looking for a use. Evapotranspiration is one part of a broader field-process system that includes soil-water state, irrigation behavior, vegetation, spatial variability, seasonal dynamics, scenario analysis, comparison with independent evidence, and reproducible technical interpretation.

The public story should begin from water-management, research, or technical questions and then explain how BAITSSS contributes. The software is the working environment that makes the science repeatable, traceable, recoverable, and usable; the software itself is not the full public identity.

The site should make clear that BAITSSS can work alongside existing measurements and systems, including weather networks, irrigation and delivery records, field measurements, satellite products, GIS, agency data, groundwater models, planning models, reporting systems, and other established technical tools. Those systems may be inputs, references, comparison sources, or neighboring components. BAITSSS generally does not replace the physical measurement itself.

The documented development and application record across California, Kansas, Arizona, and Texas should be described as experience with different but closely related water problems. California provides a broad water-management context involving agricultural demand, conservation, groundwater pressure, salinity, spatial variability, remote sensing, accounting, regulation, and multi-layer planning. Kansas provides experience with restricted groundwater supply, irrigation allocation, seasonal water use, and comparison of modeled and reported irrigation. Yuma provides a hot desert agricultural setting with high evaporative demand for testing continuous hourly field behavior. Bushland provides strong independent field observations in a semiarid, advective environment for evaluating model behavior. These settings should be connected by the common questions they share rather than presented as unrelated case studies.

Public language may state implemented capabilities directly. Neutral language does not require weakening factual statements with unnecessary qualifiers. Use careful qualifiers for project fit, future outcomes, uncertain interpretation, or capabilities that are still under development.

Examples of direct capability language that are appropriate when technically accurate:

- BAITSSS simulates field-scale evapotranspiration, surface and root-zone soil-water states, vegetation behavior, and irrigation through continuous hourly calculations.
- BAITSSS supports spatial analysis, scenario comparison, selected-pixel time series, project reruns, scientific export, and reproducible run records.
- BAITSSS can support conservation analysis, irrigation-management questions, agricultural-demand studies, method comparison, verification, drought and management scenarios, research, and technical planning where the field-process layer is relevant.

Avoid language that makes BAITSSS sound isolated, tentative about its established capabilities, or dependent on replacing another system. Avoid presenting "ET" as the sole product identity. Avoid unsupported superiority claims such as "better" or "more accurate" unless a specific published or verified comparison supports the statement under defined conditions.

For external audiences, use human water-resources language first: conservation, allocation, irrigation management, demand, verification, field response, drought, groundwater-demand inputs, recycled-water questions, research, planning, and technical interpretation. Technical model terminology belongs underneath that problem framing.

Internal organization intelligence, prospect rankings, relationship history, contact strategy, and identified weaknesses of named organizations remain internal. Public pages may use the general lessons learned from that work, but should not expose the internal dossiers or targeting logic.

## Cross-page duplication rule

Each subject has one page that owns the complete explanation. Other pages, especially Home, may show a short preview, one representative example, or a small fragment that helps a visitor understand what is available elsewhere.

A preview must not become a second full overview. Do not repeat the same complete workflow, multi-card inventory, release explanation, screenshot tour, scientific argument, research overview, access explanation, development record, or other substantial section on multiple pages.

The test is visual as well as textual. Two sections can still be duplicative even when the wording differs if they present the same full structure, the same sequence of ideas, or the same set of images in nearly the same way.

Home is a gateway, not a second copy of every authority page. It may sample the site, but the detailed material belongs on the page that owns the subject.

When duplication is found:

1. Keep the complete material on its canonical authority page.
2. Reduce the non-authority occurrence to a brief preview or remove it.
3. Link directly to the authority page for the complete explanation.
4. Preserve only repetitions that serve a normal site-wide function, such as concise navigation labels, status wording, or footer links.

## Canonical public authorities

- `/` — Home
- `/software/` — BAITSSS Desktop product and workflow
- `/capabilities/` — product capabilities
- `/science/` — Scientific Stewardship and BAITSSS model science
- `/research-education/` — research and education
- `/access-participation/` — access and collaboration
- `/business/` — public business value, organizational use cases, licensing, integration, partnership, sponsored development, and acquisition pathways
- `/software-development/` — Software Development & Verification
- `/people/` — Team & Current Stewardship
- `/origins-publications/` — Scientific History & Publications
- `/faq/` — Frequently Asked Questions
- `/documentation/` — documentation index
- `/contact/` — contact

## Business authority and public-strategy boundary

`/business/` is the only editable live authority for public business communication. It may explain what BAITSSS provides, who can use it, organizational use cases, licensing, integration, partnership, sponsored development, and acquisition pathways.

Internal commercial research does not become public website content merely because its sources are public. Prospect lists, named outreach targets, "likely role / door" tables, priority rankings, acquisition-target lists, contact strategy, negotiation posture, market-penetration plans, and other business-development working material must remain internal unless an explicit public-content decision approves a specific item for publication.

Public pages should explain BAITSSS value and legitimate ways organizations can engage with BAITSSS. They should not reveal who BAITSSS plans to approach, how targets are ranked, or what internal path is expected to reach them.

Legacy route:

- `/business-ecosystem/` → redirect only to `/business/`

## Scientific stewardship authority

`/science/` is the only editable live authority for **Scientific Stewardship**. It owns the evidence chain, interpretation, uncertainty, validation, provenance, reporting responsibility, continuing scientific accountability, and BAITSSS model science.

Do not duplicate those scientific-stewardship explanations on the team page or on a legacy route.

Legacy route:

- `/scientific-stewardship/` → redirect only to `/science/#scientific-stewardship`

## Team and current stewardship authority

`/people/` is the only editable live **Team & Current Stewardship** page.

The current public identity on this page is **BAITSSS Development Team**. This page answers who is responsible for maintaining BAITSSS now and what the current maintenance role covers: desktop software development, scientific continuity, verification, documentation, release preparation, and research collaboration pathways.

It does not duplicate the scientific-stewardship teaching owned by `/science/`, the engineering record owned by `/software-development/`, or the historical record owned by `/origins-publications/`.

Do not replace the team-level identity with an individual biography unless that change is explicitly approved as a new public-content decision.

Legacy route:

- `/meet-the-team/` → redirect only to `/people/`

## Software development authority

`/software-development/` is the only public authority for the engineering transformation, verification, architecture, testing, recovery, packaging, release preparation, and current maturity of BAITSSS Desktop V1.

External-code maturity comparisons used for internal engineering learning do not belong on the public website unless there is a separate scholarly reason to cite them.

## Scientific history authority

`/origins-publications/` is the public authority for scientific history, institutional settings, earlier contributors, publications, research geography, and the documented scientific lineage of BAITSSS.

Current responsibility should not be inferred from historical contribution, and historical credit should not be rewritten through the current team page.

## History and recovery

Historical content is recovered from Git, not from duplicate live pages.

Useful stewardship recovery point:

- Team-level page before the route-unification regression: commit `9a25f390886f4bca7b7a51ccda8913e8b7b2c912`, file `meet-the-team/index.html`, blob `d89a70f6efba19b15163ce4c9243ab117d7d3c61`.

The personal-name stewardship variant is retained only in repository history and is not a live authority.

When older wording, layout, or content is needed, inspect Git history and selectively recover the required material into the canonical page. Do not reactivate an old page as a competing authority.

## Navigation rule

All normal public navigation should point directly to canonical routes. Legacy URLs exist only for old external links and must not become independent content authorities.

The normal More menu should use **Team & Current Stewardship** for `/people/`. The phrase **Scientific Stewardship** should direct visitors to the Science page, not to the team page.

## Change rule

For every website change:

1. Identify the canonical page first.
2. Edit only that authority page.
3. Check the change against the site-wide positioning rule before publishing.
4. Do not create a second live copy for testing or transition.
5. Preserve earlier states through commits.
6. If a legacy URL must remain, make it a redirect only.
7. Verify navigation points to the canonical route.
8. Before publishing business-development material, ask whether the content explains BAITSSS to an external visitor or exposes BAITSSS internal targeting strategy. Only the first category belongs on the public site by default.

This is the release-stage website rule going forward.
