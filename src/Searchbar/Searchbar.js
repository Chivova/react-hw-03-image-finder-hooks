import { useState } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQeury] = useState('');

  const handleSearchQuery = e => {
    const { value } = e.target;
    setQeury(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.warn('🦄 Сheck if the input is correct!', {
        position: 'top-right',
        autoClose: 3000,
      });

      return;
    }
    onSubmit(query);
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
