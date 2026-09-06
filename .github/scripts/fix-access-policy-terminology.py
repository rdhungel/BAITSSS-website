from pathlib import Path

p = Path('access-policy/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    '<meta name="description" content="BAITSSS software access, evaluation, validation, research, and source-code access principles."': '<meta name="description" content="BAITSSS Desktop access, BAITSSS model evaluation and validation, research use, and source-code access principles."',
    '<h1>BAITSSS software access is controlled by purpose and agreement.</h1>': '<h1>BAITSSS Desktop access is controlled by purpose and agreement.</h1>',
    'Anyone may review the public BAITSSS website, publications, scientific evidence, demonstrations, screenshots, videos, and other public materials.': 'Anyone may review the public BAITSSS website, BAITSSS model publications and scientific evidence, BAITSSS Desktop demonstrations, screenshots, videos, and other public materials.',
    'General evaluation is not an unrestricted pathway for obtaining BAITSSS.': 'General evaluation is not an unrestricted pathway for obtaining BAITSSS Desktop.',
    'The packaged BAITSSS Desktop application and BAITSSS source code are separate forms of access.': 'The packaged BAITSSS Desktop application and its source code are separate forms of access.',
    'BAITSSS access is not conditioned on producing favorable results.': 'Access to BAITSSS Desktop or use of the BAITSSS model is not conditioned on producing favorable results.',
    'This page states BAITSSS access principles; it is not itself a software license or research contract.': 'This page states BAITSSS Desktop access principles; it is not itself a software license or research contract.'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')
