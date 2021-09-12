import express from 'express';
import { createPageRender } from 'vite-plugin-ssr';

const isProduction = process.env.NODE_ENV === 'production';
// eslint-disable-next-line unicorn/prefer-module
const root = `${__dirname}/../..`;

startServer();

/**
 *
 */
async function startServer() {
  const app = express();

  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }));
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, unicorn/prefer-module
    const vite = require('vite');
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    });
    app.use(viteDevServer.middlewares);
  }

  const renderPage = createPageRender({ viteDevServer, isProduction, root });
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    const result = await renderPage({ url });
    if (result.nothingRendered) return next();
    return res.status(result.statusCode).send(result.renderResult);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
