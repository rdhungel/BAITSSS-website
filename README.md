# BAITSSS

BAITSSS is an integrated scientific desktop platform for **Landsat Earth observation, geospatial analytics, continuous evapotranspiration, soil-water balance, irrigation and surface energy balance**. Its observation tools can be used independently of simulation; both pathways serve a common purpose of understanding land-surface processes and agricultural water management.

**BAITSSS Desktop V1** is the first release version of the Windows desktop product. It brings together **Landsat observations, hourly NLDAS weather, soil and land-surface information, project setup, simulation, results, diagnostics, and export** within one persistent project workflow.

## Public website

The current public BAITSSS website is:

**https://baitsss.com**

The site includes the software workflow, scientific background, evidence, development status, research and education information, publications, access and participation information, and contact routes.

## What BAITSSS is designed to examine

BAITSSS supports field-scale investigation of:

- Evapotranspiration (ET)
- Soil-water conditions through time
- Modeled irrigation behavior
- Surface energy balance
- Seasonal vegetation and canopy development from Landsat-derived information
- Spatial variability across agricultural fields
- Changes in model response when supported management settings are adjusted

Current Landsat-based field results are produced at **30 m spatial resolution**. The current desktop workflow uses supported **Landsat and NLDAS** data paths.

## Independent observation and evaluation tools

- **Landsat product exploration:** Explore supported prepared Landsat products and spatial patterns across acquisition dates, from individual pixels to regional scenes.
- **Regional NDVI and LST analysis:** Compare full-scene maps, target-area and regional temperature distributions, and vegetation–temperature density plots.
- **Interactive vegetation–thermal analysis:** Inspect paired-pixel scatterplots, correlation, regression and linked spatial locations.
- **Scene comparison and pixel history:** Investigate how vegetation and surface temperature change between actual satellite acquisitions.
- **Seasonal relative thermal mapping:** Compare pixels with same-date NDVI-matched reference populations and examine persistent relative temperature patterns.
- **Thermal–vegetation evidence:** Explore seasonal evidence classes and valid comparison counts; export GeoTIFFs for further analysis.
- **NDVI irrigation guidance:** Investigate seasonal vegetation statistics and trial agricultural screening thresholds without changing saved simulation settings.
- **Raster and geospatial exploration:** Inspect supported raster datasets, model grids and field boundaries; examine spatial context across data layers.
- **Meteorology and reference ET:** Explore prepared weather inputs and reference evapotranspiration alongside satellite and project information.

Thermal model diagnostics and experimental parameter optimization provide additional pathways to investigate model behavior. Albedo visualization remains unfinished. Observational patterns do not directly establish irrigation or water stress.

## Scientific background

BAITSSS developed from research on evapotranspiration between satellite overpasses, two-source surface energy balance, soil-water accounting, irrigation, remote sensing, and field-scale agricultural water management.

Peer-reviewed BAITSSS research has included applications in semiarid agriculture, advective environments, restricted water allocation, lettuce, citrus, western Kansas water-policy analysis, and spatial soil-property studies. The publication record and scientific history are available on the public website.

## Desktop software

Earlier BAITSSS versions were primarily research code. Current development is centered on BAITSSS Desktop V1, which organizes:

- Project creation and management
- Area of Interest (AOI) definition
- Base-data preparation
- Landsat and NLDAS data management
- Simulation setup and execution
- Restart and run records
- Results inspection
- CSV and PNG export
- Model diagnostics and reproducibility information

The desktop software makes satellite analysis and physical modeling more accessible, traceable and repeatable within a common scientific environment.

## Current boundaries

BAITSSS Desktop V1 does **not** provide forecasting of future ET or irrigation demand. It does not currently accept alternative satellite or weather sources in place of the supported Landsat and NLDAS workflow, and it does not dynamically simulate biological root growth through time.

BAITSSS runs one simulation at a time. Multiple projects, AOIs, datasets, periods, and simulations can be prepared and run sequentially.

## About this repository

This repository contains the **public BAITSSS website source and approved public assets**.

The BAITSSS desktop scientific source code is **not** part of this repository. Internal development records, unpublished scientific material, commercialization records, and other non-public project material are not stored here unless specifically approved for public release.

## Explore BAITSSS

Visit **https://baitsss.com** for BAITSSS Desktop V1, science, evidence, research and education, publications, development status, access and participation information, and contact.

Keywords: evapotranspiration, irrigation, soil water, hydrology, remote sensing, Landsat, NLDAS, agricultural water management, surface energy balance, scientific software, field-scale modeling.
