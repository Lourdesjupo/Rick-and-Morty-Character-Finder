import SearchCharacter from './SearchCharacter';
import FilterSpecies from './FilterSpecies'

function Filters({ searchByCharacter, handleFilter, filterSpecies,  speciesList }) {
  const handleSubmit = (ev) => ev.preventDefault();
  return (
    <form onSubmit={handleSubmit}>
      <SearchCharacter
        searchByCharacter={searchByCharacter}
        handleFilter={handleFilter}
      />
      <FilterSpecies 
      filterSpecies={filterSpecies} 
      speciesList={speciesList}
      handleFilter={handleFilter} 
      />
    </form>
  );
}
export default Filters;
