import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import getDataFromApi from '../services/api';
import CharacterList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import '../styles/app.scss';
import '../styles/core/reset.scss';
import '../styles/layout/header.scss';
import '../styles/components/filters.scss';
import '../styles/components/cards.scss'
import '../styles/components/characterDetail.scss'
import '../styles/layout/footer.scss'


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
  const characterId = routeData?.params.characterId;
  const characterDataId = characters.find(
    (character) => character.id === parseInt(characterId)
  );
  

  return (
    <>
      <header className='header'>
        <img
          className='header--logo'
          src='/images/team.png'
          alt='logo Rick and morty'
        />
      </header>
      <main class='main_app'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <aside>
                  <Filters
                    searchByCharacter={searchByCharacter}
                    handleFilter={handleFilter}
                    filterSpecies={species}
                    speciesList={speciesList}
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
            element={<CharacterDetail characterDataId={characterDataId} />}
          />
        </Routes>
      </main>
      <footer className='footer'>
        <div className='arrow__container'>
          <a className='arrowUp' href='#'>
            🔝
          </a>
        </div>
        <small>
          <p className='footer__text'>&copy;Adalab 2023 </p>
          <span className='footer__subtext'>Made with💖LourdesJupo</span>
        </small>
      </footer>
    </>
  );
}

export default App;
