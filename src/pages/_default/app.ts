import { App, createSSRApp, defineComponent, h, markRaw } from 'vue';
import PageLayout from './PageLayout.vue';
import { PageContext, Component } from './types';

type ChangePage = (newPageContext: PageContext) => void;
type MyApp = App & { changePage: ChangePage };

export function createApp(pageContext: PageContext): MyApp {
  let rootComponent: Component;
  const PageWithLayout = defineComponent({
    data: () => ({
      Page: markRaw(pageContext.Page),
      pageProps: markRaw(pageContext.pageProps || {}),
    }),
    created() {
      rootComponent = this;
    },
    methods: {
      renderNewPage(Page: any, pageProps: any) {
        this.Page = Page;
        this.pageProps = pageProps;
      },
    },
    render() {
      return h(
        PageLayout,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps);
          },
        },
      );
    },
  });

  const changePage = (newPageContext: PageContext) => {
    rootComponent.renderNewPage(
      markRaw(newPageContext.Page),
      markRaw(newPageContext.pageProps || {}),
    );
  };
  const app = createSSRApp(PageWithLayout);

  (app as MyApp).changePage = changePage;
  app.config.globalProperties.$routeParams = pageContext.routeParams;

  return app as MyApp;
}
