# BAITSSS website source reconciliation — 22 November 2026

## Critical deployment/source discrepancy

The publicly accessible https://baitsss.com/ site contains navigation and pages not present on the connected `rdhungel/BAITSSS-website` default branch (`main`, last observed commit 11 September 2026).

Examples of public routes present on the live site but absent in this repository's default-branch tree:
- `/capabilities/`
- `/documentation/`
- `/faq/`
- `/known-issues/`
- `/release-notes/`

The live site's navigation is Home, Software, Capabilities, Science, Research & Education, Access & Participation, Business, Contact, and supplementary sections. The connected repository's `index.html` has the older Home, Science, Software, Access & Participation, Contact structure.

**Do not merge or deploy this older site tree over the live website without identifying and obtaining the canonical current source.** Doing so may replace or remove more recent pages and assets. This PR contains a content update package, not an assertion that the live deployment has been updated.

## Repository and code baselines

- Website repository: `rdhungel/BAITSSS-website`, default `main`; last observed default-branch commit `303b65562617db7fd026065a95eac3f082905112` (11 September 2026).
- Desktop repository: `rdhungel/BAITSSS-V7-Desktop`, private; last observed default-branch commit `9ee917556692ff2349b502c67f2043922542e9fb` (3 September 2026).
- Work discussed during October–November 2026 concerns newer **local experimental builds** not verified as having been pushed to the desktop repository.

No modification to the private desktop code is proposed by this PR.

## Source-of-truth and publication gate

Before updating production pages:
1. Locate the actual current deployment source: hosting provider/repository, publishing branch, CI workflow, or content management backend.
2. Compare current deployed page HTML/source with that source, preserving current navigation, design, search metadata, existing studies, and media.
3. Port the approved text from `capabilities-update-copy.md` and `page-by-page-update-plan.md` onto the **current** source, not the older September site snapshot.
4. Check all internal links and images, mobile layout, anchor navigation, canonical URLs, and sitemap.
5. Confirm whether current installed build exposes each feature before changing its label from experimental/development to released.
6. Test a preview deployment, then merge/deploy only after resolving this mismatch.

## Scientific claim rules

- Established BAITSSS spatial science and previously documented capabilities must be retained.
- Keep the maintained spatial workflow (Lower Route in development terminology) separate from the independent Upper Route experimental/CSV workflow.
- Landsat LST is independent observational evidence; do not claim that it is assimilated into the maintained model trajectory.
- Optimization is optional, comparison-driven, and experimental. A better thermal RMSE does not by itself prove improved ET or irrigation.
- Do not call the two-figure/five-procedure comparison interface complete until confirmed in the final build.
- Do not present build-time execution observations as platform-independent performance guarantees.
- Installer built/tested does not equal general public release.
- No private source code, unapproved datasets, or proprietary experimental artifacts should be copied into the public website repository.

## Review status

The text files in this PR are a complete proposed content and source-parity package for a single final review. The live site and `main` are intentionally unchanged.
