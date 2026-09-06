from pathlib import Path

p = Path('faq/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    '<h1>What can I actually do with BAITSSS?</h1>': '<h1>What can I do with BAITSSS Desktop and the BAITSSS model?</h1>',
    'Direct answers about using BAITSSS on a field, how recent the required data can be, what the model produces, how fast it runs, how irrigation settings can be changed, and what the current desktop software does and does not support.': 'Direct answers about using BAITSSS Desktop on a field, what the BAITSSS model produces, how recent the required data can be, how fast simulations run, how irrigation settings can be changed, and what the current desktop software does and does not support.',
    '<h2>How can I benefit from BAITSSS?</h2><p>BAITSSS brings': '<h2>How can I benefit from BAITSSS Desktop?</h2><p>BAITSSS Desktop brings',
    '<p class="fact">BAITSSS helps you understand': '<p class="fact">BAITSSS Desktop helps you understand',
    '<h2>Can BAITSSS look at my field?</h2>': '<h2>Can BAITSSS Desktop look at my field?</h2>',
    'in the BAITSSS viewer.': 'in the BAITSSS Desktop viewer.',
    '<h2>Can I run BAITSSS on my laptop?</h2><p>Yes. BAITSSS is a <strong>Windows desktop application</strong>': '<h2>Can I run BAITSSS Desktop on my laptop?</h2><p>Yes. BAITSSS Desktop is a <strong>Windows desktop application</strong>',
    'A cloud computing environment is not required to run the model.': 'A cloud computing environment is not required to run the BAITSSS model.',
    'BAITSSS already works with the land-cover, elevation and soil base layers used by the model.': 'BAITSSS Desktop already works with the land-cover, elevation and soil base layers used by the BAITSSS model.',
    'Inside BAITSSS, use <strong>File → Import → Landsat</strong>': 'Inside BAITSSS Desktop, use <strong>File → Import → Landsat</strong>',
    '<h2>Can I use BAITSSS with recent data during the growing season?</h2>': '<h2>Can I use BAITSSS Desktop with recent data during the growing season?</h2>',
    '<p class="fact">BAITSSS does not currently forecast future ET': '<p class="fact">The BAITSSS model does not currently forecast future ET',
    '<h2>At what spatial resolution are BAITSSS results produced?</h2><p>BAITSSS produces its Landsat-based field results': '<h2>At what spatial resolution are BAITSSS model results produced?</h2><p>The BAITSSS model produces its Landsat-based field results',
    'The current BAITSSS workflow is built around its supported Landsat and NLDAS data path.': 'The current BAITSSS Desktop workflow is built around its supported Landsat and NLDAS data path.',
    'The present BAITSSS desktop workflow': 'The present BAITSSS Desktop workflow',
    '<h2>Can higher-resolution data improve BAITSSS results?</h2>': '<h2>Can higher-resolution data improve BAITSSS model results?</h2>',
    '<h2>Can I use BAITSSS for all crops or land uses other than irrigated agriculture?</h2><p>BAITSSS is not limited': '<h2>Can I use the BAITSSS model for all crops or land uses other than irrigated agriculture?</h2><p>The BAITSSS model is not limited',
    '<h2>Can BAITSSS track crop growth and rooting growth?</h2><p>BAITSSS can follow': '<h2>Can the BAITSSS model track crop growth and rooting growth?</h2><p>The BAITSSS model can follow',
    '<p>BAITSSS does <strong>not currently simulate biological root growth through time</strong>.': '<p>The BAITSSS model does <strong>not currently simulate biological root growth through time</strong>.',
    '<h2>Does BAITSSS use thermal information?</h2><p><strong>BAITSSS does not currently use satellite thermal data as a direct model input.</strong>': '<h2>Does the BAITSSS model use thermal information?</h2><p><strong>The BAITSSS model does not currently use satellite thermal data as a direct model input.</strong>',
    'the current BAITSSS simulation.': 'the current BAITSSS model simulation.',
    '<h2>Does BAITSSS use reference evapotranspiration (ET)?</h2><p>No. BAITSSS does not require reference ET': '<h2>Does the BAITSSS model use reference evapotranspiration (ET)?</h2><p>No. The BAITSSS model does not require reference ET',
    'planned for a future BAITSSS release.': 'planned for a future BAITSSS Desktop release.',
    'Yes. BAITSSS allows the user to adjust the <strong>initial soil-moisture condition': 'Yes. BAITSSS Desktop allows the user to adjust the <strong>initial soil-moisture condition',
    'BAITSSS does not impose a fixed total simulation-count limit.': 'BAITSSS Desktop does not impose a fixed total simulation-count limit.',
    '<p><strong>Not currently.</strong> BAITSSS runs <strong>one simulation at a time</strong>.': '<p><strong>Not currently.</strong> BAITSSS Desktop runs <strong>one simulation at a time</strong>.',
    'and BAITSSS is still being optimized.': 'and BAITSSS Desktop is still being optimized.',
    '<h2>What do I get after a BAITSSS run?</h2><p>BAITSSS runs a continuous field-scale water and energy balance': '<h2>What do I get after a BAITSSS Desktop run?</h2><p>BAITSSS Desktop runs the BAITSSS model as a continuous field-scale water and energy balance',
    '<h2>Can I export my results?</h2><p>Yes. BAITSSS provides exports': '<h2>Can I export my results?</h2><p>Yes. BAITSSS Desktop provides exports',
    '<p>BAITSSS also preserves detailed <strong>model diagnostics': '<p>BAITSSS Desktop also preserves detailed <strong>model diagnostics',
    '<h2>How accurate are BAITSSS results?</h2><p>BAITSSS is a scientific model,': '<h2>How accurate are BAITSSS model results?</h2><p>The BAITSSS model is a scientific model,',
    '<h2>Why might BAITSSS results differ from my field observations even when the inputs are correct?</h2><p>BAITSSS represents field processes': '<h2>Why might BAITSSS model results differ from my field observations even when the inputs are correct?</h2><p>The BAITSSS model represents field processes',
    '<h2>How is BAITSSS different from free ET products?</h2>': '<h2>How is the BAITSSS model different from free ET products?</h2>',
    'BAITSSS is not designed only to provide an ET map.': 'The BAITSSS model is not designed only to provide an ET map.',
    '<h2>Can I get software similar to BAITSSS?</h2>': '<h2>Can I get software similar to BAITSSS Desktop?</h2>',
    'BAITSSS integrates <strong>30 m remote sensing with hourly weather': 'BAITSSS Desktop integrates the BAITSSS model with <strong>30 m remote sensing, hourly weather',
    'while BAITSSS remains under active development': 'while BAITSSS Desktop remains under active development',
    '<h2>How do I get started after installing BAITSSS?</h2><p>Open BAITSSS,': '<h2>How do I get started after installing BAITSSS Desktop?</h2><p>Open BAITSSS Desktop,',
    'multiple BAITSSS projects': 'multiple BAITSSS Desktop projects',
    '<h2>Is BAITSSS simply the original research code with a desktop interface?</h2><p>No. BAITSSS was fundamentally rebuilt': '<h2>Is BAITSSS Desktop simply the original research code with a desktop interface?</h2><p>No. BAITSSS Desktop was fundamentally rebuilt',
    'Understanding or extending modern BAITSSS therefore requires': 'Understanding or extending BAITSSS Desktop therefore requires',
    '<h2>Can I still run the old BAITSSS research code?</h2>': '<h2>Can I still run the old BAITSSS model research code?</h2>',
    'current BAITSSS development is centered on the <strong>desktop software</strong>.': 'current BAITSSS Desktop development is centered on the <strong>desktop software</strong>.',
    '<h2>Can I edit the BAITSSS code and work with it on my local machine?</h2><p>BAITSSS runs locally': '<h2>Can I edit the BAITSSS Desktop code and work with it on my local machine?</h2><p>BAITSSS Desktop runs locally',
    '<h2>Who developed BAITSSS?</h2><p>BAITSSS originated at the <strong>University of Idaho</strong>': '<h2>Who developed BAITSSS?</h2><p>The BAITSSS model originated at the <strong>University of Idaho</strong>',
    'advancing and refining BAITSSS and helped establish': 'advancing and refining the BAITSSS model and helped establish',
    'Earlier versions of BAITSSS were primarily research models': 'Earlier versions of the BAITSSS model were primarily research implementations',
    'BAITSSS is being transformed into an integrated desktop scientific software system': 'the research implementation has been transformed into BAITSSS Desktop, an integrated scientific software system',
    '<h2>How can students and faculty use BAITSSS?</h2><p>Students can use BAITSSS for education': '<h2>How can students and faculty use BAITSSS Desktop and the BAITSSS model?</h2><p>Students can use BAITSSS Desktop for education',
    'Faculty can use it for teaching, research, student supervision, model evaluation': 'Faculty can use BAITSSS Desktop for teaching, research, student supervision, BAITSSS model evaluation',
    'include the BAITSSS build or version': 'include the BAITSSS Desktop build or version',
    '<h2>Is BAITSSS free?</h2>': '<h2>Is BAITSSS Desktop free?</h2>',
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')
