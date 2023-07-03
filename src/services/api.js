const getData = (pagination, name, status) => {
  if (pagination) {
    return getDataFromApi(pagination)
  } else if (name && status === 'all') {
    return getDataFromApi(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
  } else if (name) {
    return getDataFromApi(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
  } else if (status && status !== 'all') {
    return getDataFromApi(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );
  } else {
    return getDataFromApi('https://rickandmortyapi.com/api/character/')
  }
};


const getDataFromApi = (url) => {
  console.log('url de entrada', url)
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        info: {
          next: data.info.next,
          prev: data.info.prev,
          pages: data.info.pages,
        },
        results: [
          data.results.map((character) => {
            return {
              id: character.id,
              photo: character.image,
              name: character.name,
              species: character.species,
              status: character.status,
              episodes: character.episode.length,
              origin: character.origin.name,
            };
          }),
        ],
      };
    });
};

export default getData;
