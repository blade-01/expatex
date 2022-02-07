import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/color-guide",
    name: "color-guide",
    component: () =>
      import(/* webpackChunkName: "color-guide" */ "../views/ColorGuide.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/ContactUs.vue"),
  },
  {
    path: "/paint-collection",
    name: "paint-collection",
    component: () =>
      import(
        /* webpackChunkName: "paint-collection" */ "../views/PaintCollection.vue"
      ),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/GalleryView.vue"),
  },
  {
    path: "/successful",
    name: "successful",
    component: () =>
      import(/* webpackChunkName: "successful" */ "../views/OrderSuccess.vue"),
  },
  {
    path: "/successful",
    name: "successful-mail",
    component: () =>
      import(/* webpackChunkName: "successful" */ "../views/OrderSuccess.vue"),
  },
  {
    path: "/:CatchAll(.*)",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
  {
    path: "/paint/:id",
    name: "paint",
    component: () =>
      import(/* webpackChunkName: "paint" */ "../views/SinglePaint.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
