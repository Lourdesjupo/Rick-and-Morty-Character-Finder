const getDataFromApi = () => {
  return fetch(`https://rickandmortyapi.com/api/character`)
  .then((response) => response.json())
  .then((data) => {
    return data.results.map((character) => {
      return {
        id: character.id,
        photo: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
        episodes: character.episode.length,
        origin: character.origin.name,
      };
    });
  });
};

export default getDataFromApi;
