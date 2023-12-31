import CharacterCard from './CharacterCard';

function CharacterList({ characters, term }) {
  if (characters.length === 0) {
    return (
      <div className='not_Found'>
        <h2 className='not_Found__title'>{`No hay ningún personaje que coincida con la palabra ${term}`}</h2>
        <img
          className='not_Found__img'
          src='/images/notFound.gif'
          alt='No encontrado'
        />
      </div>
    );
  }

  const htmlList = characters
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((character) => (
      <li key={character.id} className='card'>
        <CharacterCard character={character} />
      </li>
    ));

  return (
  <>
    <ul className='cards'>{htmlList}</ul>

  </>);
}
export default CharacterList;
