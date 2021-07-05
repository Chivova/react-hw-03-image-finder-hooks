import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21510937-25dddef59cfdf7f1b5603f7e9';

const fetchImgApi = (query, page = 1) => {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.data.hits;
    }
    return Promise.reject(new Error(`No images found on request ${query}`));
  });
};

fetchImgApi.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
