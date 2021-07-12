import { useState } from 'react';
// import PropTypes from 'prop-types';
import Modal from '../Modal';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <li key={id} className={s.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
        className={s.imageGalleryItemImage}
      />
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )}
    </li>
  );
}

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };
