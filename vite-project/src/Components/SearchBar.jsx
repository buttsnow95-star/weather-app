function SearchBar({
  city,
  setCity,
  onSearch
}) {

  const handleSubmit = (event) => {

    event.preventDefault();

    onSearch();

  };


  return (

    <form
      className="search-box"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(event) =>
          setCity(event.target.value)
        }
      />

      <button type="submit">
        🔍 Search
      </button>

    </form>

  );

}

export default SearchBar;