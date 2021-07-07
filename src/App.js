import { Fragment, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import SearchInfo from './SearchInfo';

import './App.css';
import 'modern-normalize/modern-normalize.css';

function App() {
  const [imageQuery, setImageQuery] = useState('');

  const handleFormSubmit = query => {
    setImageQuery(query);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <SearchInfo imageQuery={imageQuery} />
    </Fragment>
  );
}

export default App;
