import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home";
import PokemonList from "../views/PokemonList";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon-list",
    name: "PokemonList",
    component: PokemonList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
