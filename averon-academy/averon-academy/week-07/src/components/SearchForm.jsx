function SearchForm({ username, setUsername, onSearch, loading }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(username);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        aria-label="GitHub username"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchForm;