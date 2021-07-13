import { Fragment, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar';
import SearchInfo from './SearchInfo';

import './App.css';
import 'modern-normalize/modern-normalize.css';

function App() {
  const [imageQuery, setImageQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleFormSubmit = (query, page) => {
    setImageQuery(query);
    setPage(page);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <SearchInfo imageQuery={imageQuery} page={page} />
    </Fragment>
  );
}

export default App;
