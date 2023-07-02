import { Link } from "react-router-dom";

function CharacterDetail({ characterDataId}) {
if(characterDataId) {
  return (
    <section>
      <img
        src={characterDataId.photo}
        alt={`foto de ${characterDataId.name}`}
      />
      <h3>Nombre: {characterDataId.name}</h3>
      <p>Especie: {characterDataId.species}</p>
      <p>Estado: {characterDataId.status}</p>
      <p>Nº de Episodios en los que aparece: {characterDataId.episodes}</p>
      <p>Planeta de origen: {characterDataId.origin}</p>
      <Link to='/'>Volver</Link>
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