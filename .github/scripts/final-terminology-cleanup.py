from pathlib import Path

changes = {
    'index.html': [
        ('<a href="./published-science/">Published Science</a><a href="./research-geography/">Research Geography &amp; Timeline</a><a href="./faq/">Frequently Asked Questions</a><a href="./evidence/">Evidence</a>', '<a href="./faq/">Frequently Asked Questions</a>'),
    ],
    'hero-runtime-prototype.html': [
        ('<title>BAITSSS — How the Model Works</title>', '<title>BAITSSS Desktop — How the Model Works</title>'),
        ('aria-label="Animated BAITSSS runtime architecture"', 'aria-label="Animated BAITSSS Desktop runtime architecture"'),
        ('HOW BAITSSS TRACKS YOUR FIELD\'S WATER USE', 'HOW BAITSSS DESKTOP RUNS THE BAITSSS MODEL FOR YOUR FIELD'),
        ('How BAITSSS turns hourly weather and satellite data into a water-use report for your field', 'How BAITSSS Desktop runs the BAITSSS model with hourly weather and satellite data for your field'),
    ],
    'animation-evaluation.html': [
        ('<title>BAITSSS — Sequenced Animation Preview v1</title>', '<title>BAITSSS Desktop — Sequenced Animation Preview v1</title>'),
        ('aria-label="Animated BAITSSS runtime architecture"', 'aria-label="Animated BAITSSS Desktop runtime architecture"'),
        ('HOW BAITSSS TRACKS YOUR FIELD\'S WATER USE', 'HOW BAITSSS DESKTOP RUNS THE BAITSSS MODEL FOR YOUR FIELD'),
        ('How BAITSSS turns hourly weather and satellite data into a water-use report for your field', 'How BAITSSS Desktop runs the BAITSSS model with hourly weather and satellite data for your field'),
    ],
    'faq/index.html': [
        ('content="Direct answers about BAITSSS development, access, laptop use, field analysis, data availability, 30 m results, irrigation settings, performance, exports, academic access, local projects, simulation limits, and model interpretation."', 'content="Direct answers about BAITSSS Desktop development and access, field analysis, data availability, 30 m results, irrigation settings, performance, exports, academic use, local projects, simulation limits, and BAITSSS model interpretation."'),
    ],
    'meet-the-team/index.html': [
        ('<span>© 2026 BAITSSS Desktop</span>', '<span>© 2026 BAITSSS</span>'),
    ],
    'system-requirements/index.html': [
        ('<span>© 2026 BAITSSS Desktop</span>', '<span>© 2026 BAITSSS</span>'),
    ],
    'research-map/index.html': [
        ('content="0; url=../research-geography/"', 'content="0; url=../origins-publications/#research-geography"'),
    ],
}

for filename, repls in changes.items():
    p = Path(filename)
    s = p.read_text(encoding='utf-8')
    for old, new in repls:
        if old not in s:
            raise SystemExit(f'Missing expected text in {filename}: {old}')
        s = s.replace(old, new)
    p.write_text(s, encoding='utf-8')
    print(f'updated {filename}')
