import { Fragment, useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner';
import imgApi from '../api/imgApi';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

export default function SearchInfo({ imageQuery }) {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (imageQuery === '') {
      return;
    }

    imgApi.fetchImgApi(imageQuery, page).then(gallery => {
      if (gallery.length === 0) {
        setError(`No images found on your request ${imageQuery}`);
      }
      // setLoading(true);
      setGallery(state => [...state, ...gallery]);
    });
    // .finally(setLoading(false));
  }, [imageQuery, error, page]);

  const updatePage = () => {
    setPage(page => page + 1);
  };

  return (
    <Fragment>
      {/* <Loader type="Puff" color="#00BFFF" height={50} width={50} /> */}
      <ImageGallery gallery={gallery} />
      <Button onClick={updatePage} />
    </Fragment>
  );
}
