import 'virtual:windi.css';
import '@/styles/index.scss';

import { MotionPlugin } from '@vueuse/motion';
import NProgress from 'nprogress';
import { useClientRouter } from 'vite-plugin-ssr/client/router';

import { createApp } from './app';
import { PageContext } from './types';

let app: ReturnType<typeof createApp>;

const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContext) {
    if (!app) {
      app = createApp(pageContext);
      app.use(MotionPlugin);
      app.mount('#app');
    } else {
      app.changePage(pageContext);
    }
  },
  onTransitionStart,
  onTransitionEnd,
});

hydrationPromise
  .then(() => {
    console.log('Hydration finished; page is now interactive.');
  })
  .catch(error => console.log(error));

/**
 *
 */
function onTransitionStart() {
  NProgress.start();
}
/**
 *
 */
function onTransitionEnd() {
  NProgress.done();
}
