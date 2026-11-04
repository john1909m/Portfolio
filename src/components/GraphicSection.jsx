import { memo, useState, useMemo } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { GRAPHIC_PROJECTS } from './portfolioData';

const SUB_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'printing', label: 'Printing' },
  { id: 'social', label: 'Social Media' },
  { id: 'manipulation', label: 'Manipulation' },
];

const INITIAL_CARD_COUNT = 6;

export const GraphicSection = memo(() => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_CARD_COUNT);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setVisibleCount(INITIAL_CARD_COUNT);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return GRAPHIC_PROJECTS;
    return GRAPHIC_PROJECTS.filter((p) => p.category === activeFilter);
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
      id="graphic"
      role="tabpanel"
      aria-labelledby="tab-graphic"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6 sm:space-y-8"
    >
      {/* Header and sub-filters */}
      <div className="pb-5 sm:pb-6 border-b border-ink-border space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2">
          <div>
            <p className="text-xs font-mono text-ink-muted">
              Graphic Catalog &middot; Print Production &amp; Visual Direction
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-ink font-semibold tracking-tight mt-0.5 sm:mt-1">
              Visual &amp; print projects
            </h2>
          </div>
          <p className="text-xs font-mono text-ink-muted">
            Showing {visibleProjects.length} of {filteredProjects.length} indexed
          </p>
        </div>

        {/* Sub-filters */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2" role="group" aria-label="Filter graphic projects">
          {SUB_FILTERS.map((f) => {
            const isSelected = activeFilter === f.id;
            const count = f.id === 'all'
              ? GRAPHIC_PROJECTS.length
              : GRAPHIC_PROJECTS.filter((p) => p.category === f.id).length;

            return (
              <button
                key={f.id}
                type="button"
                onClick={() => handleFilterChange(f.id)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-xs font-mono transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato ${
                  isSelected
                    ? 'bg-tomato text-white border-tomato font-medium'
                    : 'bg-paper-card text-ink border-ink-border hover:bg-paper-surface'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-paper-surface text-ink-muted'
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
        {visibleProjects.map((project) => {
          if (project.isPlaceholder) {
            return (
              <article
                key={project.id}
                className="border-2 border-dashed border-ink-border rounded bg-paper-surface p-5 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6"
                style={{ minWidth: 0 }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-medium ${project.palette.badgeText} text-[11px]`}>
                      {project.number} &middot; {project.categoryLabel.toUpperCase()}
                    </span>
                    <span className="text-ink-muted text-[11px]">Empty slot</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${project.palette.colorBlock}`} aria-hidden="true" />
                    <h3 className="text-lg sm:text-xl font-display text-ink font-semibold flex items-center gap-2">
                      <HiOutlinePlusCircle className="w-4 h-4 text-ink-muted" aria-hidden="true" />
                      <span>{project.title}</span>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-ink-muted font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-ink-muted text-[11px]">
                  Slot reserved &middot; Ready for client deliverables
                </div>
              </article>
            );
          }

          return (
            <article
              key={project.id}
              className="border border-ink-border rounded bg-paper-card overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-md"
              style={{ minWidth: 0 }}
            >
              <div>
                {/* Header with color badge */}
                <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-ink-border flex items-center justify-between text-xs font-mono">
                  <span className="font-medium text-tomato flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-tomato shrink-0" aria-hidden="true" />
                    <span>{project.number} &middot; {project.categoryLabel.toUpperCase()}</span>
                  </span>
                  <span className="text-ink-muted text-[11px] truncate max-w-[140px]">Print &amp; digital</span>
                </div>

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

                <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-display text-ink font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed font-normal line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-5 pt-0 flex items-center gap-2 text-xs font-mono text-ink-muted text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-marigold shrink-0" aria-hidden="true" />
                <span className="truncate">Offset print &amp; digital publication standard</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-4 sm:pt-6 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full border border-ink-border bg-paper-card hover:bg-paper-surface text-ink font-mono text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato"
          >
            <span>Load remaining projects ({filteredProjects.length - visibleCount})</span>
            <span className="text-xs" aria-hidden="true">&darr;</span>
          </button>
        </div>
      )}
    </section>
  );
});

GraphicSection.displayName = 'GraphicSection';
export default GraphicSection;
