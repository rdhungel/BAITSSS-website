from pathlib import Path

p = Path('science/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="The scientific structure of BAITSSS: coupled energy balance, soil water, vegetation, weather, and irrigation logic."': 'content="The scientific structure of the BAITSSS model: coupled energy balance, soil water, vegetation, weather, and irrigation logic."',
    'BAITSSS is supported by peer-reviewed research.': 'The BAITSSS model is supported by peer-reviewed research.',
    '<strong>BAITSSS</strong> means Backward-Averaged Iterative Two-Source Surface temperature and energy balance Solution. It is a two-source resistance-based biophysical surface-energy and soil-water balance model.': '<strong>BAITSSS</strong> means Backward-Averaged Iterative Two-Source Surface temperature and energy balance Solution. The BAITSSS model is a two-source resistance-based biophysical surface-energy and soil-water balance model.',
    '<div class="mini">BAITSSS at a glance</div>': '<div class="mini">BAITSSS model at a glance</div>',
    '<p>BAITSSS links a 30 m Landsat based field grid with vegetation state, hourly meteorological forcing, a two-source energy balance, a two-layer soil-water balance, modeled irrigation, and hour to hour state progression to produce spatial and time-series Results.</p>': '<p>The BAITSSS model links a 30 m Landsat based field grid with vegetation state, hourly meteorological forcing, a two-source energy balance, a two-layer soil-water balance, modeled irrigation, and hour to hour state progression to produce spatial and time-series Results.</p>',
    'BAITSSS solves the surface energy balance using separate soil and canopy source terms and resistance-based exchange.': 'The BAITSSS model solves the surface energy balance using separate soil and canopy source terms and resistance-based exchange.',
    'BAITSSS uses aerodynamic equations for sensible and latent heat exchange, a Jarvis-type canopy-resistance formulation for transpiration, and soil-surface resistance for evaporation.': 'The BAITSSS model uses aerodynamic equations for sensible and latent heat exchange, a Jarvis-type canopy-resistance formulation for transpiration, and soil-surface resistance for evaporation.',
    'BAITSSS calculates soil and canopy temperature states internally as part of the two-source energy-balance solution.': 'The BAITSSS model calculates soil and canopy temperature states internally as part of the two-source energy-balance solution.',
    'BAITSSS couples hourly soil-water accounting with vegetation development.': 'The BAITSSS model couples hourly soil-water accounting with vegetation development.',
    'Without observed irrigation-event data, BAITSSS calculates modeled irrigation requirement.': 'Without observed irrigation-event data, the BAITSSS model calculates modeled irrigation requirement.',
    'BAITSSS was developed with a backward-averaged iterative two-source solution specifically to reduce these short-term instabilities.': 'The BAITSSS model was developed with a backward-averaged iterative two-source solution specifically to reduce these short-term instabilities.',
    '<strong>BAITSSS</strong><br>A scientific model and desktop software.<br>BAITSSS Desktop is under active development.': '<strong>BAITSSS</strong><br>The BAITSSS model is the scientific model. BAITSSS Desktop is the current software application.<br>BAITSSS Desktop is under active development.',
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')
