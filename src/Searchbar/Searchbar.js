import { useState } from 'react';

export default function Searchbar() {
  const [query, setQeury] = useState('');

  const handleSearchQuery = e => {
    const { value } = e.target;
    setQeury(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setQeury('');
  };
  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={query}
          onChange={handleSearchQuery}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
