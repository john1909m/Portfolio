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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="fixed inset-0 w-full h-full cursor-default"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative z-10 max-w-4xl w-full bg-paper border border-ink-border rounded p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-ink-border">
          <p id="modal-title" className="text-sm font-mono text-ink font-medium">
            {title || 'Project preview'}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-ink hover:bg-paper-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Close"
          >
            <HiOutlineXMark className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-paper-surface rounded p-2">
          <img
            src={image}
            alt={title || 'Project preview'}
            className="max-h-[70vh] w-auto object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
});

PortfolioModal.displayName = 'PortfolioModal';
export default PortfolioModal;
