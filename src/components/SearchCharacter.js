
function SearchCharacter({ searchByCharacter, handleFilter }) {
  const handleSearchByCharacter = (ev)=>{
    ev.preventDefault()
    handleFilter('name', ev.target.value)
  }

  return (
    <label className='form_filters__byName label' htmlFor='searchByName'>
      Busca por nombre
      <input
        className='form_filters__byName'
        type='text'
        name='searchCharacter'
        id='searchCharacter'
        placeholder='🔍 nombre del personaje'
        value={searchByCharacter}
        onChange={handleSearchByCharacter}
      />
    </label>
  );
}

export default SearchCharacter;
