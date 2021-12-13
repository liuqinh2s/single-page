import { createRouter, createWebHashHistory } from "vue-router";
import Order from "@/views/order.vue";
import Main from "@/views/main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Order",
    name: "Order",
    component: Order,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
