import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

export default function ImageGallery({ gallery }) {
  return (
    <ul className={s.imageGallery}>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ).isRequired,
};
