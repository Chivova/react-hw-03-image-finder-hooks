import { Fragment, useState, useEffect } from 'react';
import imgApi from '../api/imgApi';
import ImageGallery from '../ImageGallery';

export default function SearchInfo({ imageQuery }) {
  const [gallery, setGallery] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (imageQuery === '') {
      return;
    }

    imgApi.fetchImgApi(imageQuery).then(gallery => {
      setGallery(gallery);
    });
  }, [imageQuery]);

  return (
    <Fragment>
      <ImageGallery gallery={gallery} />
    </Fragment>
  );
}
