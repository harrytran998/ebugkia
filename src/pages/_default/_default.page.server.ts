import { renderToString } from '@vue/server-renderer';
import { html } from 'vite-plugin-ssr';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import appleTouchIcon from '@/public/apple-touch-icon.png';
import favicon16 from '@/public/favicon-16x16.png';
import favicon32 from '@/public/favicon-32x32.png';
import safariPinnedTab from '@/public/safari-pinned-tab.svg';
import webmanifest from '@/public/site.webmanifest';
import { getCategories } from '@/services/wordpress';

import { createApp } from './app';
import { PageContext } from './types';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'documentProps', 'routeParams'];

export const render = async (pageContext: PageContext) => {
  const app = createApp(pageContext);
  const appHtml = await renderToString(app);

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Ebugkia - Bugs luôn quanh ta';
  const desc =
    (documentProps && documentProps.description) ||
    'Nơi chia sẻ về những trải nghiệm cuộc sống và kiến thức về ngành IT FREE';

  // <meta property="og:image" content="https://ebugkia/thumbnail.png" />

  return html`<!DOCTYPE html>
    <html lang="vi" translate="no" class="notranslate">
      <head>
        <meta charset="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" sizes="180x180" href="${appleTouchIcon}" />
        <link rel="icon" type="image/png" sizes="32x32" href="${favicon32}" />
        <link rel="icon" type="image/png" sizes="16x16" href="${favicon16}" />
        <link rel="manifest" href="${webmanifest}" />
        <link rel="mask-icon" href="${safariPinnedTab}" color="#5bbad5" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          media="print"
          onload="this.media='all'"
        />

        <title>${title}</title>
      </head>
      <body>
        <noscript> You need to enable JavaScript to run this app. </noscript>
        <div id="app">${html.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
};
