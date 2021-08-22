import 'virtual:windi.css';
import { useClientRouter } from 'vite-plugin-ssr/client/router';
import NProgress from 'nprogress';
import { createApp } from './app';
import { MotionPlugin } from '@vueuse/motion';
import { PageContext } from './types';
import '@/styles/index.scss';

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
  .catch(err => console.log(err));

function onTransitionStart() {
  NProgress.start();
}
function onTransitionEnd() {
  NProgress.done();
}
