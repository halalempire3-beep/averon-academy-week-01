function Filters({ search, setSearch, filter, setFilter }) {
  return (
    <section className="filters">
      <input
        type="search"
        placeholder="Search tasks..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending Tasks</option>
        <option value="completed">Completed Tasks</option>
      </select>
    </section>
  );
}

export default Filters;