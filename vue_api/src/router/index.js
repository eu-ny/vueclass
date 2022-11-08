import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ReferView from "../views/ReferView.vue";
import MovieView from "../views/MovieView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import UnsplashView from "../views/UnsplashView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/reference",
    name: "reference",
    component: ReferView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
  {
    path: "/unsplash",
    name: "unsplash",
    component: UnsplashView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
