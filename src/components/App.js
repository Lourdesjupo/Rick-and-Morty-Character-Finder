import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import getData from '../services/api';
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
import '../styles/components/pagination.scss'
import Pagination from './Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchByCharacter, setSearchByCharacter] = useState('');
  const [species, setSpecies]=useState('all')
  const [actualURL, setactualURL] = useState()
  const [actualPage, setactualPage] =useState(1)
  const [actualInfo, setActualInfo] = useState({})


  useEffect(() => {
    console.log(
      'actualURl',
      actualURL,
      'searchname',
      searchByCharacter,
      'species',
      species
    );
    getData(actualURL, searchByCharacter, species).then((charactersData) => {

      setCharacters(charactersData.results[0]);
      setActualInfo(charactersData.info);
    });
  }, [actualURL, searchByCharacter, species]);
  
  //eventos
  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByCharacter(varValue);
      setactualURL();
    } else if(varName==='species') {
      setSpecies(varValue)
      setactualURL();
    }
  };

  //pages
  const handlePages = (varValue) => {
    if (varValue === 'null') {
    return actualURL;
  } else if (varValue === 'next') {
     setactualURL(actualInfo.next);
     return setactualPage(actualPage + 1);
  } else if (varValue === 'prev') {
    setactualURL(actualInfo.prev);
     return setactualPage(actualPage - 1);
  }
  }

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
      <main className='main_app'>
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
                  <Pagination
                    handlePages={handlePages}
                    actualPage={actualPage}
                    pages={actualInfo.pages}
                  />
                </section>
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
