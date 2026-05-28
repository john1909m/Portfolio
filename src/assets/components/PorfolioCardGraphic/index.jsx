import { memo } from 'react';
import { HiOutlineMagnifyingGlassPlus } from 'react-icons/hi2';

const PortfolioCardGraphic = memo(({ image, Name, index, onPreview }) => (
  <article className="portfolio-card-graphic" style={{ animationDelay: `${index * 0.05}s` }}>
    <div className="card-inner">
      <button
        type="button"
        className="card-image-container"
        onClick={() => onPreview?.(image, Name || 'Graphic design project')}
        aria-label={`Preview ${Name || 'design project'}`}
      >
        <img className="card-image" src={image} alt={Name || 'Graphic design project'} loading="lazy" width={400} height={300} />
        <span className="image-overlay visible">
          <HiOutlineMagnifyingGlassPlus aria-hidden="true" /> View
        </span>
      </button>
      <div className="card-footer">
        <span className="design-badge">Graphic Design</span>
      </div>
    </div>
  </article>
));

PortfolioCardGraphic.displayName = 'PortfolioCardGraphic';
export default PortfolioCardGraphic;
