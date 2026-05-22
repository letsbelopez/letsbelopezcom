# letsbelopez.com

Personal Astro site for `letsbelopez.com`.

## Local Development

```sh
npm install
npm run dev
```

The local dev server defaults to `http://localhost:4321`.

## Production Build

```sh
npm run build
npm run preview
```

Astro writes the production site to `dist/`.

## Deployment

This site is intended to deploy through Cloudflare Pages using the GitHub repository integration.

Cloudflare Pages settings:

| Setting | Value |
| --- | --- |
| Production branch | `master` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Custom domain | `letsbelopez.com` |

After the Cloudflare Pages project is connected to this GitHub repo, pushes to `master` will automatically build and deploy the production site. Pull requests and non-production branches can use Cloudflare preview deployments before merging.

The GitHub Actions workflow in `.github/workflows/build.yml` runs `npm ci` and `npm run build` on pull requests and pushes to `master`, so broken builds are caught in GitHub before or alongside Cloudflare deployments.
