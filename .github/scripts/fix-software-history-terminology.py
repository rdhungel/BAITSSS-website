from pathlib import Path

p = Path('meet-the-team/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="BAITSSS software development history, desktop modernization, testing, packaging, release preparation, and current software status."': 'content="BAITSSS Desktop development history, modernization, testing, packaging, release preparation, and current software status, with the earlier BAITSSS model research implementation identified separately."',
    'how BAITSSS moved from research code into a project-based Windows desktop system': 'how the earlier BAITSSS model research implementation was transformed into BAITSSS Desktop, a project-based Windows desktop system',
    'Earlier BAITSSS implementations were research-oriented code used to investigate and evaluate the scientific model.': 'Earlier BAITSSS model implementations were research-oriented code used to investigate and evaluate the scientific model.',
    'The software was reorganized into a project-based desktop environment': 'BAITSSS Desktop was reorganized into a project-based desktop environment',
    'while the desktop becomes the maintained software route.': 'while BAITSSS Desktop becomes the maintained software route.',
    'Long run behavior, restart and recovery, failure reporting, interface reliability, and software lifecycle behavior continue to be tested as the desktop is prepared for release.': 'Long run behavior, restart and recovery, failure reporting, interface reliability, and software lifecycle behavior continue to be tested as BAITSSS Desktop is prepared for release.',
    'Scientific changes remain governed by the established BAITSSS model lineage during desktop development.': 'Scientific changes remain governed by the established BAITSSS model lineage during BAITSSS Desktop development.',
    '<span>© 2026 BAITSSS</span>': '<span>© 2026 BAITSSS Desktop</span>'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')
