
function SearchCharacter({ searchByCharacter, handleFilter }) {
  const handleSearchByCharacter = (ev)=>{
    ev.preventDefault()
    handleFilter('name', ev.target.value)
  }

  return (
    <label htmlFor='searchByName'>
      <input
        className=''
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
