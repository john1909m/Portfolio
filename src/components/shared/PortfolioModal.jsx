import { memo, useEffect, useCallback } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

export const PortfolioModal = memo(({ image, title, onClose }) => {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className="portfolio-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button type="button" className="portfolio-modal__backdrop" onClick={onClose} aria-label="Close preview" />
      <div className="portfolio-modal__content">
        <button type="button" className="portfolio-modal__close" onClick={onClose} aria-label="Close">
          <HiOutlineXMark aria-hidden="true" />
        </button>
        <img src={image} alt={title || 'Project preview'} className="portfolio-modal__image" />
        {title && (
          <p id="modal-title" className="portfolio-modal__title">
            {title}
          </p>
        )}
      </div>
    </div>
  );
});

PortfolioModal.displayName = 'PortfolioModal';
