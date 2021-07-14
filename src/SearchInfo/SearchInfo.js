import { Fragment, useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import imgApi from '../api/imgApi';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function SearchInfo({ imageQuery, startPage }) {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (imageQuery === '' || startPage !== 1) {
      return;
    }
    setPage(1);
    setLoading(true);
    imgApi
      .fetchImgApi(imageQuery, startPage)
      .then(response => {
        if (response.length === 0) {
          setError(`No images found on your request ${imageQuery}`);

          toast.error(error, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
        setGallery([...response]);
      })
      .finally(() => {
        setLoading(false);
        // scroll();
      });
  }, [imageQuery, error, startPage]);

  useEffect(() => {
    if (imageQuery === '' || page === 1) {
      return;
    }
    setLoading(true);

    imgApi
      .fetchImgApi(imageQuery, page)
      .then(response => {
        setGallery(state => [...state, ...response]);
      })
      .finally(() => {
        setLoading(false);
        scroll();
      });
  }, [imageQuery, page]);

  const updatePage = () => {
    setPage(page => page + 1);
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 1500,
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      {loading && (
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      )}
      <ImageGallery gallery={gallery} />
      {gallery.length > 1 && <Button onClick={updatePage} />}
    </Fragment>
  );
}
