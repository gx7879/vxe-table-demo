import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
function useTable(app) {
  app.use(VXETable);
}
createApp(App).use(useTable).mount("#app");
