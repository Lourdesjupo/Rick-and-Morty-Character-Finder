
function Pagination({ handlePages, actualPage, pages }) {
  const handlePaginationButton = (ev) => {
    return handlePages(ev.target.value);
  };
  return (
    <form className="form__Pagination">
      <input
        className={
          actualPage <= 1 ? 'input__Previous disabled' : 'input__Previous'
        }
        type='button'
        value='prev'
        onClick={handlePaginationButton}
      />
      <span>
        Pagina {actualPage} de {pages}
      </span>
      <input
        className={
          actualPage >= pages ? 'input__Next disabled' : 'input__Next'
        }
        type='button'
        value='next'
        onClick={handlePaginationButton}
      />
    </form>
  );
}

export default Pagination