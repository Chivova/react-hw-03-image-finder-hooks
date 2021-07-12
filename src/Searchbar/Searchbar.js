import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

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
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          value={query}
          onChange={handleSearchQuery}
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
