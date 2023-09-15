import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/patient-section",
      name: "patient-section",
    },
    {},
  ],
});

export default router;
