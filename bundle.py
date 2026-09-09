#!/usr/bin/env python3
"""Inline the whole site into one standalone HTML file.

    python3 bundle.py            -> lsesu-trading-standalone.html

The folder version is the real site: index.html plus committee.js, photos/
and logos/. This produces a single file you can email, open from a USB stick,
or upload anywhere, with every photo, logo and script embedded. Nothing here
edits the source; it only reads.
"""
import base64, mimetypes, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT  = os.path.join(HERE, 'lsesu-trading-standalone.html')

mimetypes.add_type('image/webp', '.webp')


def data_uri(path):
    mime = mimetypes.guess_type(path)[0] or 'application/octet-stream'
    with open(path, 'rb') as f:
        return f'data:{mime};base64,' + base64.b64encode(f.read()).decode()


def main():
    html = open(os.path.join(HERE, 'index.html'), encoding='utf-8').read()

    # 1. inline committee.js
    js = open(os.path.join(HERE, 'committee.js'), encoding='utf-8').read()
    tag = '<script src="committee.js"></script>'
    assert html.count(tag) == 1, 'committee.js include not found'
    html = html.replace(tag, '<script>\n' + js + '\n</script>')

    # 2. inline every photo referenced from committee.js
    photos = {}
    for name in sorted(os.listdir(os.path.join(HERE, 'photos'))):
        p = os.path.join(HERE, 'photos', name)
        if os.path.isfile(p) and not name.startswith('.'):
            photos['photos/' + name] = data_uri(p)
    for ref, uri in photos.items():
        html = html.replace("'" + ref + "'", "'" + uri + "'")

    # 3. logos are fetched at runtime by slug, so hand the loader a lookup
    #    table instead of trying to rewrite paths that do not exist in source.
    logos = {}
    for name in sorted(os.listdir(os.path.join(HERE, 'logos'))):
        p = os.path.join(HERE, 'logos', name)
        if os.path.isfile(p) and not name.startswith('.'):
            logos[os.path.splitext(name)[0]] = data_uri(p)

    table = 'const BUNDLED_LOGOS = {' + ','.join(
        f'"{k}":"{v}"' for k, v in sorted(logos.items())) + '};\n'
    anchor = '  function tryLoadLogo(slug, onOk) {\n'
    assert html.count(anchor) == 1, 'tryLoadLogo not found'
    html = html.replace(anchor, table + anchor +
                        '    if (typeof BUNDLED_LOGOS !== "undefined" && BUNDLED_LOGOS[slug]) {\n'
                        '      const im = new Image();\n'
                        '      im.onload = () => onOk(im);\n'
                        '      im.src = BUNDLED_LOGOS[slug];\n'
                        '      return;\n'
                        '    }\n')

    # 4. banners are fetched at runtime by slug, same as logos
    banners = {}
    bdir = os.path.join(HERE, 'banners')
    if os.path.isdir(bdir):
        for name in sorted(os.listdir(bdir)):
            f = os.path.join(bdir, name)
            if os.path.isfile(f) and not name.startswith('.'):
                banners[os.path.splitext(name)[0]] = data_uri(f)
    btable = 'const BUNDLED_BANNERS = {' + ','.join(
        f'"{k}":"{v}"' for k, v in sorted(banners.items())) + '};\n'
    banchor = "  document.querySelectorAll('.archive-card[data-banner]').forEach(card => {\n"
    assert html.count(banchor) == 1, 'banner loader not found'
    html = html.replace(banchor, btable + banchor +
        '    if (typeof BUNDLED_BANNERS !== "undefined" && BUNDLED_BANNERS[card.dataset.banner]) {\n'
        '      const bi = new Image();\n'
        '      bi.onload = () => {\n'
        '        card.classList.add("has-banner");\n'
        '        card.style.backgroundImage = `url("${bi.src}")`;\n'
        '        const sl = card.querySelector(".banner-slot"); if (sl) sl.remove();\n'
        '      };\n'
        '      bi.src = BUNDLED_BANNERS[card.dataset.banner];\n'
        '      return;\n'
        '    }\n')

    open(OUT, 'w', encoding='utf-8').write(html)
    print(f'wrote {os.path.basename(OUT)}  ({len(html)/1024/1024:.1f} MB)')
    print(f'  {len(photos)} photos, {len(logos)} logos, {len(banners)} banners, committee.js inlined')
    leftover = re.findall(r'(?:src|href)="(?!data:|https?:|#)([^"]+)"', html)
    print('  remaining external file references:', sorted(set(leftover)) or 'none')


if __name__ == '__main__':
    sys.exit(main())
