import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Link to={'/character/' + character.id}>
      <img
        className='card__img'
        src={character.photo}
        alt={`foto de ${character.name}`}
      />
      <div className='card__description'>
        <div>
          <h3 className='card__name'>{character.name}</h3>
          <p className='card__species'>{character.species}</p>
        </div>
        <div className='card__status--container' >
          <p className='card__status'>{character.status === 'Dead'? '☠️': character.status }</p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
