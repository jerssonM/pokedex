import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/pokemon-list",
    name: "PokemonList",
    component: () =>
      import(
        /* webpackChunkName: "pokemonList" */ "../views/PokemonListView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
