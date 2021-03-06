import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView";
import PokemonListView from "../views/PokemonListView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/pokemon-list",
    name: "PokemonList",
    component: PokemonListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
