import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/ExLanding.vue";
import CourseCatalogue from "../views/ExCourseCatalogue.vue"; 
import CoursePage from "../views/CoursePage.vue";
import Login from "../views/ExLogin.vue";
import test from "../views/test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { showFooter: true, showHeader: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { showFooter: false, showHeader: true },
    },
    {
      path: "/course",
      name: "course-page",
      component: CoursePage,
      meta: { showFooter: true, showHeader: true },
    },
    {
      path: "/courses",
      name: "course-catalogue",
      component: CourseCatalogue,
      meta: { showFooter: true, showHeader: true },
    },
    {
      path: "/test",
      name: "test",
      component: test,
      meta: { showFooter: false, showHeader: true },
    },
  ],
});

export default router;
