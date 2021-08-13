import "virtual:windi.css";
import { getPage } from "vite-plugin-ssr/client";
import { createApp } from "./app";
import { PageContext } from "./types";
import "./styles/main.css";

hydrate();

async function hydrate() {
  const pageContext = (await getPage()) as PageContext;
  const app = createApp(pageContext);
  app.mount("#app");
}
