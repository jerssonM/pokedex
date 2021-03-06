export const addToStore = (pokemon) => {
  let favorites = getStore();

  if (favorites.find((fav) => fav.name === pokemon.name)) {
    favorites = favorites.filter((fav) => fav.name !== pokemon.name);
  } else {
    favorites.push(pokemon);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getStore = () => {
  const favorites = localStorage.getItem("favorites");

  if (favorites) {
    return JSON.parse(favorites);
  } else {
    localStorage.setItem("favorites", JSON.stringify([]));
    return [];
  }
};
