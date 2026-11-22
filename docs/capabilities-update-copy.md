# Capabilities — November 2026 editorial update copy

**Purpose:** Supplemental copy for the current `/capabilities/` page. Preserve its existing full inventory and accessible accordion/anchor structure. Integrate these paragraphs into the appropriate existing sections rather than replacing the whole page.

**Editorial convention:** “Established capability” means supported by the maintained spatial workflow as currently documented; “Development-tested” means observed in recent internal builds, not necessarily a public release; “Experimental” means implemented or proposed for research but not proven generally superior; “Planned” means intended interface or output not yet fully verified.

## Intro / route boundary

### Separate spatial modeling and experimentation

**Established spatial workflow / experimental Upper Route.** BAITSSS retains a spatial, Landsat-based hourly model workflow for field-scale water and energy balance simulation. A separate Upper Route is used for local-input modeling and controlled research experiments. The routes maintain distinct input preparation, execution, and Results; experimental outputs do not silently replace those from the established spatial route. New capabilities discussed on this page should be read with their stated development status rather than assumed to be included in the general-release desktop.

Use **Lower Route** only where describing the internal architecture; retain “established spatial workflow” as the public-facing term if a simpler reader-facing presentation is preferable.

## Field, projects and data — additions

**Development-tested improvements.** Recent desktop work improves the preservation of imported AOI shapefile feature names through import, save/reopen, and Results. Supported scientific exports identify the project and run so that map images, time series, and selected-pixel outputs can be traced to their source simulation. Preserve existing AOI/CRS/grid validation text; do not infer support for arbitrary data sources.

**Input boundary.** The maintained spatial workflow continues to use supported Landsat and NLDAS paths. The independent Upper Route reads user-supplied pixel-scale CSV observations and environmental inputs; this should not be described as an automatic Lower-to-Upper transfer or shared execution.

## Science and thermal — addition

### Independent thermal observations

The BAITSSS energy-balance solution computes soil and canopy temperature behavior internally. Where quality-controlled Landsat observations and precise acquisition timing are available, independent observed surface temperature can be compared with modeled temperatures at corresponding locations and times. The observational comparison provides evidence for model evaluation; **it does not establish direct thermal assimilation into the maintained spatial model trajectory**.

### Optional thermal-guided experiments

**Status: Experimental.** The independent Upper Route is being used to test parameter sensitivity and optional observation-guided optimization. Users supply time-stamped, pixel-scale thermal observations through CSV together with the needed meteorological and vegetation inputs. Candidate parameter sets are run independently and compared with the unmodified Original simulation. The evaluation examines training and holdout thermal agreement as well as changes in total ET, vegetation ET, soil evaporation, and modeled irrigation. Scientific conclusions depend on independent evidence, not on optimization labels.

## Water and irrigation — addition

### What optimization does not establish

A candidate that reduces modeled-versus-observed land-surface temperature error does not necessarily improve evapotranspiration, root-zone water, or irrigation predictions. The Original simulation remains the reference; optimized trajectories should be compared over the full modeled period, and physical plausibility and independent water-balance/ET observations should be considered before proposing adoption.

## Results and pixel analysis — addition

**Status: Development-tested.** Recent interface improvements strengthen run-specific Results persistence, selected-pixel identification, shapefile feature-name retention, and project/run attribution on scientific exports. Spatial results and representative thermal observations remain associated with the relevant project, run, pixel, and acquisition records.

## Export and reproducibility — addition

**Status: Development-tested.** Supported figure-export controls have been tested at 300, 600, and 900 DPI, alongside CSV data export and run-specific naming. DPI improves raster resolution but does not automatically increase label size at a fixed printed layout; figure readability still requires attention to lettering and physical display size. Document the available resolutions as supported by individual export panels, not as a promise that every chart/figure offers all modes.

## Experimental Upper Route — expansion

### Local inputs and controlled experiments

**Status: Active development.** Independent Upper Route experiments use explicitly supplied input records rather than silently accessing Lower Route datasets. Recent work includes station/CSV meteorological inputs, reference ET handling, and a selected-pixel, hourly simulation path. Thermal observations, where supplied, are used to examine differences in the modeled surface-temperature response.

### Optimization comparison output

**Status: Planned final interface; experimental simulations demonstrated.** The intended compact Results presentation consists of (1) a continuous ET time-series chart comparing Original with five optimization procedures and (2) a temperature chart comparing Landsat observations with Original and optimized modeled temperatures at actual acquisitions. A single consolidated CSV is intended for comparable method/model results. Do not describe the full five-procedure GUI as shipped until execution and export are verified in the actual release candidate.

### Illustrative internal diagnostic (not general validation)

An internal Kansas Corn 2013 selected-pixel study used eight pixels and 3,096 simulated hours per trial, with a reported Original thermal RMSE of 6.782 °C. One GP candidate had 6.776 °C training RMSE and 4.091 °C holdout RMSE; a random-search candidate had 6.287 °C training and 5.624 °C holdout RMSE. Training and holdout behavior diverged, and there is no basis here to claim that GP was uniformly better than the baseline or random search, or that ET estimates became more accurate. These values belong in an explicitly labeled development evidence note, not a flagship product claim; verify the exact trial artifact before public release.

## Performance — note

A Kansas 2013 grid test reportedly improved processing after removing hourly recompression. Such results may appear only with exact build, pixel extent, coverage, period, machine specifications, mode, and timing method. Until these are reconciled, leave existing performance figures as development observations and avoid absolute speedup claims.

## Packaging/release — note

An installer and executable have been built and checked in development. This is **not evidence of general public release**. Keep the site’s release-readiness and access language separate from working-build status.
