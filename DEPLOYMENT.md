# Vercel Deployment

The site is deployed and waiting for DNS migration from Squarespace.

## Live URLs
- Production: https://dralqefari.vercel.app
- Inspect: https://vercel.com/qef/dralqefari

## Custom domains added (DNS not yet pointing)
- `dralqefari.com`
- `www.dralqefari.com`

## DNS migration steps

In Squarespace (or wherever DNS is managed — currently shows `ns1.wordpress.com` nameservers), make ONE of the following changes:

### Option A — A records (recommended, simplest)
| Type  | Name | Value         |
|-------|------|---------------|
| A     | @    | 76.76.21.21   |
| CNAME | www  | cname.vercel-dns.com |

### Option B — Nameservers (full delegation)
Change nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

After saving, Vercel will auto-issue an SSL certificate within minutes once DNS propagates. Verify with:
```
vercel domains inspect dralqefari.com --token <token> --scope qef
```

## Redeploying
Auto-deploys are connected to GitHub `Qefaraki/DrAlqefari`. Push to main and Vercel rebuilds automatically.

Manual deploy:
```
vercel deploy --prod --yes --token <token> --scope qef
```
