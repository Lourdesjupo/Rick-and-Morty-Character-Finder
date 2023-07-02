import { Link } from "react-router-dom";

function CharacterDetail({ characterDataId}) {
if(characterDataId) {
  return (
    <section className='characterDetail'>
      <img
        className='characterDetail__img'
        src={characterDataId.photo}
        alt={`foto de ${characterDataId.name}`}
      />
      <div className='characterDetail__description'>
        <h3 className='characterDetail__name'>
          Nombre: {characterDataId.name}
        </h3>
        <p className='characterDetail__species'>
          Especie: {characterDataId.species}
        </p>
        <p className='characterDetail__status'>
          Estado: {characterDataId.status}
        </p>
        <p className='characterDetail__episodes'>
          Nº de Episodios en los que aparece: {characterDataId.episodes}
        </p>
        <p className='characterDetail__origin'>Planeta de origen: {characterDataId.origin}</p>
      </div>
      <Link className='back' to='/'>Volver</Link>
    </section>
  );
}else{
  return (
    <div>
      <p className='text--error'>Que raro, ese personaje no existe...</p>
      <Link to='/'>Volver</Link>
    </div>
    
  );
}


}

export default CharacterDetail