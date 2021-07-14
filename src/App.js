import { Fragment, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar';
import SearchInfo from './SearchInfo';

import './App.css';
import 'modern-normalize/modern-normalize.css';

function App() {
  const [imageQuery, setImageQuery] = useState('');
  const [startPage, setStartPage] = useState(1);

  const handleFormSubmit = (query, startPage) => {
    setImageQuery(query);
    setStartPage(startPage);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <SearchInfo imageQuery={imageQuery} startPage={startPage} />
    </Fragment>
  );
}

export default App;
