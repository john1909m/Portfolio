import { useState, memo, useCallback } from 'react';
import { HiOutlineComputerDesktop, HiOutlinePaintBrush, HiOutlineSparkles, HiOutlineArrowRight } from 'react-icons/hi2';
import { FaGithub, FaBehance, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionHeader } from '../../../components/shared/SectionHeader';
import { PortfolioModal } from '../../../components/shared/PortfolioModal';
import { Graphic, Web } from '../PorfolioDataWeb';
import { PortfolioCardWeb } from '../PortfolioCardWeb';
import PortfolioCardGraphic from '../PorfolioCardGraphic';
import './Portfolio.scss';

const CategoryButton = memo(({ isActive, onClick, icon: Icon, label, count }) => (
  <button
    type="button"
    onClick={onClick}
    className={`portfolio__filter ${isActive ? 'portfolio__filter--active' : ''}`}
    aria-pressed={isActive}
  >
    <Icon aria-hidden="true" />
    <span className="portfolio__filter-label">{label}</span>
    <span className="portfolio__filter-count">{count} projects</span>
  </button>
));

CategoryButton.displayName = 'CategoryButton';

export const Portfolio = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState('web');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [modal, setModal] = useState(null);

  const handleCategoryChange = useCallback((category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setVisibleProjects(6);
    }
  }, [selectedCategory]);

  const currentProjects = selectedCategory === 'web' ? Web : Graphic;
  const renderedProjects = currentProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < currentProjects.length;

  const openModal = useCallback((image, title) => {
    setModal({ image, title });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  return (
    <section className="portfolio section-wrap" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="section-orb" aria-hidden="true" />
      <div className="section-container">
        <SectionHeader
          id="portfolio-heading"
          badge="Featured work"
          badgeIcon={<HiOutlineSparkles />}
          title="My Creative"
          titleAccent="Portfolio"
          subtitle="Selected web development and graphic design projects."
        />

        <div className="portfolio__filters" role="group" aria-label="Filter portfolio by category">
          <CategoryButton
            isActive={selectedCategory === 'web'}
            onClick={() => handleCategoryChange('web')}
            icon={HiOutlineComputerDesktop}
            label="Web Development"
            count={Web.length}
          />
          <CategoryButton
            isActive={selectedCategory === 'graphic'}
            onClick={() => handleCategoryChange('graphic')}
            icon={HiOutlinePaintBrush}
            label="Graphic Design"
            count={Graphic.length}
          />
        </div>

        <div className="portfolio__grid">
          {selectedCategory === 'web'
            ? renderedProjects.map((card, index) => (
                <PortfolioCardWeb key={`web-${card.Name}-${index}`} {...card} index={index} />
              ))
            : renderedProjects.map((card, index) => (
                <PortfolioCardGraphic
                  key={`graphic-${index}`}
                  {...card}
                  index={index}
                  onPreview={openModal}
                />
              ))}
        </div>

        {hasMore && (
          <div className="portfolio__more">
            <button
              type="button"
              className="btn-primary portfolio__load-more"
              onClick={() => setVisibleProjects((n) => Math.min(n + 3, currentProjects.length))}
            >
              View more projects
              <HiOutlineArrowRight aria-hidden="true" />
            </button>
            <p className="portfolio__count">
              Showing {visibleProjects} of {currentProjects.length}
            </p>
          </div>
        )}

        <a
          href={selectedCategory === 'web' ? 'https://github.com/john1909m' : 'https://www.behance.net/JohnEmil21'}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__external card"
        >
          <span className="portfolio__external-icon" aria-hidden="true">
            {selectedCategory === 'web' ? <FaGithub /> : <FaBehance />}
          </span>
          <span>
            <strong>{selectedCategory === 'web' ? 'Explore all on GitHub' : 'View full Behance portfolio'}</strong>
            <small>Open external profile</small>
          </span>
          <FaExternalLinkAlt aria-hidden="true" />
        </a>
      </div>

      {modal && <PortfolioModal image={modal.image} title={modal.title} onClose={closeModal} />}
    </section>
  );
});

Portfolio.displayName = 'Portfolio';
