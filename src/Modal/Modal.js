import { useEffect } from 'react';

import s from './Modal.module.css';

export default function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={s.overlay} onClick={handleBackDropClick}>
      <div className={s.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
