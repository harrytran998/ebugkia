import "virtual:windi.css";
import { useClientRouter } from "vite-plugin-ssr/client/router";
import NProgress from "nprogress";
import { createApp } from "./app";
import { PageContext } from "./types";
import "./styles/main.css";

let app: ReturnType<typeof createApp>;

const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContext) {
    if (!app) {
      app = createApp(pageContext);
      app.mount("#app");
    } else {
      app.changePage(pageContext);
    }
  },
  onTransitionStart,
  onTransitionEnd,
});

hydrationPromise.then(() => {
  console.log("Hydration finished; page is now interactive.");
});

function onTransitionStart() {
  NProgress.start();
}
function onTransitionEnd() {
  NProgress.done();
}
