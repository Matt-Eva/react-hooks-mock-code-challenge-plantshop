import React from "react";

function Search({search, searchInput}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => searchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
