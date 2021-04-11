import { defineClientAppEnhance } from "@vuepress/client";
import Test from "./Test.vue";

export default defineClientAppEnhance(({ app }) => {
  app.component("Test", Test);
});
