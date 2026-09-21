# Going live on lsesutrading.com

Hosting is GitHub Pages: free, free SSL, and the repository is the site, so
handover is just adding the next committee to the organisation. The domain is
registered separately and pointed at it.

Everything in the repository is already prepared. What is left needs an account
and a card, which is why it is written out rather than done.

## 1. Buy the domain

Cloudflare Registrar sells at cost with no renewal markup, around £9 a year.
Namecheap is the usual alternative. Register it to **tradingsoc@lsesu.org**, not
a personal address, so the society keeps it.

## 2. Create the organisation and repository

Sign in to GitHub as the society account, then create an organisation
(`lsesu-trading` or similar) and inside it an empty **public** repository named
`lsesu-trading`. Do not let GitHub add a README, the history is already here.

Add whoever else on committee should have access as owners, so the site does
not depend on one person.

## 3. Push

    git remote add origin https://github.com/<org>/lsesu-trading.git
    git push -u origin main

## 4. Turn on Pages

Repository → Settings → Pages → Source: **Deploy from a branch**, branch `main`,
folder `/ (root)`. The `CNAME` file in the repository already says
`lsesutrading.com`, so Pages picks the domain up on its own.

Tick **Enforce HTTPS** once the certificate has been issued, which takes a few
minutes.

## 5. Point the domain at it

At the registrar, on the apex record:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<org>.github.io` |

Confirm those addresses against GitHub's own Pages documentation on the day.
They are stable but they are GitHub's to change, and a stale address is a dead
site with no error to explain it.

DNS takes anywhere from minutes to a few hours.

## 6. Check the card

Post the link into a WhatsApp chat with yourself, or use LinkedIn's Post
Inspector. You should get the green card with the wordmark, not a bare URL. If
you get a bare URL, the four absolute `https://lsesutrading.com` URLs in the
head of `index.html` are wrong or `og-card.jpg` is not being served.

## Changing the site afterwards

Edit, commit, push. Pages redeploys in under a minute.

`lsesu-trading-standalone.html` is not part of the deployment and is not
committed. It is the single file version for emailing or a USB stick. Rebuild it
with `python3 bundle.py` when you need one.
