function FilterSpecies({ species, handleFilter, speciesList }) {
  const handleSpecies = (ev) => {
    return handleFilter('species', ev.target.value);
  };
  let noRepeatSpeciesOptions = [];

  speciesList.forEach((element) => {
    if (!noRepeatSpeciesOptions.includes(element))
      noRepeatSpeciesOptions.push(element);
  })

  const renderSpeciesOptions = noRepeatSpeciesOptions.map(
    (eachSpecies, idx) => {
      return (
        <option key={idx} value={eachSpecies}>
          {eachSpecies}
        </option>
      );
    }
  );




 console.log('noRepes', noRepeatSpeciesOptions)
  return (
    <label htmlFor=''>
      <select
        name='filterSpecies'
        id='filterSpecies'
        value={species}
        onChange={handleSpecies}
      >
        <option value='all'>Todos</option>
        {renderSpeciesOptions}
      </select>
    </label>
  );
}

export default FilterSpecies;
