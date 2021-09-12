// We load `importBuild.js` so that the worker code can be bundled into a single file
import '../dist/server/importBuild.js';

import { createPageRender } from 'vite-plugin-ssr';

const renderPage = createPageRender({ isProduction: true });

export default async (req, res) => {
  const { url } = req;
  const pageContext = { url };
  const result = await renderPage(pageContext);
  if (result.nothingRendered) {
    return res.status(200).send('');
  }
  return res
    .status(result.statusCode)
    .setHeader('content-type', 'text/html')
    .send(result.renderResult);
};
