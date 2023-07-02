import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import '../styles/App.css';
import getDataFromApi from '../services/api';
import CharacterList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchByCharacter, setSearchByCharacter] = useState('');
  const [species, setSpecies]=useState('all')


  useEffect(() => {
    getDataFromApi().then((characters) => {
      setCharacters(characters);
      console.log(characters);
    });
  }, []);

  //eventos
  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByCharacter(varValue);
    } else if(varName==='species') {
      setSpecies(varValue)
    }
  };

  //filters

  const searchedCharacters = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(searchByCharacter.toLowerCase());
  }).filter((character)=>{
    if(species === 'all') {
      return true
    }else {
      return character.species === species
    }
  })

  //Todas las especies de la página
  const speciesList = characters.map(chara=>chara.species)

  //Routes
  const { pathname } = useLocation();
  const routeData = matchPath('/character/:characterId', pathname);
  console.log('routeData', routeData);
  const characterId = routeData?.params.characterId;
  const characterDataId = characters.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log('dataID', characterDataId, 'lo que es de data', characterId, 'characters', characters);

  return (
    <>
      <header>
        <img src='header--logo' alt='logo Rick and morty' />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <aside>
                  <Filters
                    searchByCharacter={searchByCharacter}
                    handleFilter={handleFilter}
                    filterSpecies ={species}
                    speciesList = {speciesList}
                  />
                </aside>
                <section>
                  <CharacterList
                    characters={searchedCharacters}
                    term={searchByCharacter}
                  />
                </section>
              </>
            }
          />
          <Route
            path='/character/:characterId'
            element={
              <CharacterDetail
                characterDataId={characterDataId}
              />
            }
          />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
