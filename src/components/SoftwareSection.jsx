import { memo, useState, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SOFTWARE_PROJECTS } from './portfolioData';

const SUB_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

const INITIAL_CARD_COUNT = 6;

export const SoftwareSection = memo(() => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_CARD_COUNT);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setVisibleCount(INITIAL_CARD_COUNT);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return SOFTWARE_PROJECTS;
    return SOFTWARE_PROJECTS.filter((p) => p.roleTag === activeFilter);
  }, [activeFilter]);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = filteredProjects.length > visibleCount;

  const handleLoadMore = () => {
    // Load the rest of the cards
    setVisibleCount(filteredProjects.length);
  };

  return (
    <section
      id="software"
      role="tabpanel"
      aria-labelledby="tab-software"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6 sm:space-y-8"
    >
      {/* Header and sub-filters */}
      <div className="pb-5 sm:pb-6 border-b border-ink-border space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2">
          <div>
            <p className="text-xs font-mono text-ink-muted">
              Software Catalog &middot; Multi-tenant SaaS &amp; Systems
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-ink font-semibold tracking-tight mt-0.5 sm:mt-1">
              Engineering projects
            </h2>
          </div>
          <p className="text-xs font-mono text-ink-muted">
            Showing {visibleProjects.length} of {filteredProjects.length} indexed
          </p>
        </div>

        {/* Sub-filters */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2" role="group" aria-label="Filter software projects">
          {SUB_FILTERS.map((f) => {
            const isSelected = activeFilter === f.id;
            const count = f.id === 'all'
              ? SOFTWARE_PROJECTS.length
              : SOFTWARE_PROJECTS.filter((p) => p.roleTag === f.id).length;

            return (
              <button
                key={f.id}
                type="button"
                onClick={() => handleFilterChange(f.id)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-xs font-mono transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  isSelected
                    ? 'bg-lime text-black border-lime font-medium'
                    : 'bg-paper-card text-ink border-ink-border hover:bg-paper-surface'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-paper-surface text-ink-muted'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="border border-ink-border rounded bg-paper-card overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-md"
            style={{ minWidth: 0 }}
          >
            <div>
              {/* Header */}
              <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-ink-border flex items-center justify-between text-xs font-mono">
                <span className="font-medium text-ink px-2 py-0.5 rounded bg-lime/25 text-[11px]">
                  {project.number} &middot; {project.role.toUpperCase()}
                </span>
                <span className="text-ink-muted text-[11px] truncate max-w-[150px] sm:max-w-[180px]">
                  {project.subtitle}
                </span>
              </div>

              {/* Preview Image */}
              <div className="aspect-[16/10] bg-paper-surface overflow-hidden border-b border-ink-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={480}
                  height={300}
                />
              </div>

              {/* Description */}
              <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-3.5">
                <h3 className="text-lg sm:text-xl font-display text-ink font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed font-normal line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics snapshot */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-1.5 sm:p-2 rounded border border-ink-border bg-paper text-xs font-mono"
                    >
                      <span className="text-ink-muted block text-[10px] truncate">{m.label}</span>
                      <span className="text-ink font-medium text-[11px] sm:text-xs truncate block">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="p-3.5 sm:p-5 pt-0 flex flex-wrap items-center gap-2 text-xs font-mono">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-lime text-black font-medium hover:bg-lime/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime text-[11px] sm:text-xs"
                >
                  <FaExternalLinkAlt className="w-2.5 h-2.5" aria-hidden="true" />
                  <span>Live demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-ink-border bg-paper text-ink hover:bg-paper-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime text-[11px] sm:text-xs"
                >
                  <FaGithub className="w-3 h-3" aria-hidden="true" />
                  <span>Source</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-4 sm:pt-6 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full border border-ink-border bg-paper-card hover:bg-paper-surface text-ink font-mono text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            <span>Load remaining projects ({filteredProjects.length - visibleCount})</span>
            <span className="text-xs" aria-hidden="true">&darr;</span>
          </button>
        </div>
      )}
    </section>
  );
});

SoftwareSection.displayName = 'SoftwareSection';
export default SoftwareSection;
