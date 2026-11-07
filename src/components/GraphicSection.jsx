import { memo, useState, useMemo } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { GRAPHIC_PROJECTS } from './portfolioData';
import ProjectImage from './shared/ProjectImage';
import { ACCENT_CONFIG } from './shared/projectConstants';

const SUB_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'printing', label: 'Printing' },
  { id: 'social media', label: 'Social Media' },
  { id: 'manipulation', label: 'Manipulation' },
];

const INITIAL_CARD_COUNT = 6;

export const GraphicSection = memo(({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_CARD_COUNT);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setVisibleCount(INITIAL_CARD_COUNT);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return GRAPHIC_PROJECTS;
    return GRAPHIC_PROJECTS.filter((p) => {
      const cat = p.category?.toLowerCase() || '';
      return cat === activeFilter.toLowerCase();
    });
  }, [activeFilter]);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = filteredProjects.length > visibleCount;

  const handleLoadMore = () => {
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
              : GRAPHIC_PROJECTS.filter((p) => (p.category?.toLowerCase() || '') === f.id.toLowerCase()).length;

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
        {visibleProjects.map((project, index) => {
          const accent = ACCENT_CONFIG[project.accent || 'tomato'] || ACCENT_CONFIG.tomato;
          const displayNumber = project.number || String(index + 1).padStart(2, '0');

          if (project.isPlaceholder) {
            return (
              <article
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
                onClick={(e) => onSelectProject?.(project, e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject?.(project, e.currentTarget);
                  }
                }}
                className="cursor-pointer border-2 border-dashed border-ink-border rounded bg-paper-surface p-5 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6 transition-all hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato"
                style={{ minWidth: 0 }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-medium ${accent.tagText} text-[11px]`}>
                      {displayNumber} &middot; {(project.categoryLabel || project.category)?.toUpperCase()}
                    </span>
                    <span className="text-ink-muted text-[11px]">Empty slot</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${accent.bg}`} aria-hidden="true" />
                    <h3 className="text-lg sm:text-xl font-display text-ink font-semibold flex items-center gap-2">
                      <HiOutlinePlusCircle className="w-4 h-4 text-ink-muted" aria-hidden="true" />
                      <span>{project.title}</span>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-ink-muted font-normal leading-relaxed">
                    {project.summary || project.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-ink-muted text-[11px] flex items-center justify-between">
                  <span>Slot reserved</span>
                  <span className="flex items-center gap-1">Details &rarr;</span>
                </div>
              </article>
            );
          }

          return (
            <article
              key={project.id}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              onClick={(e) => onSelectProject?.(project, e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject?.(project, e.currentTarget);
                }
              }}
              className={`group text-left cursor-pointer border border-ink-border rounded bg-paper-card overflow-hidden flex flex-col justify-between transition-all hover:shadow-lg hover:border-ink focus-visible:outline-none focus-visible:ring-2 ${accent.ring}`}
              style={{ minWidth: 0 }}
            >
              <div>
                {/* 1-2 Color Blocks at top */}
                <div className="flex h-1.5 w-full" aria-hidden="true">
                  <div className={`h-full flex-1 ${accent.bg}`} />
                  {project.palette?.secondary && (
                    <div className="h-full w-1/4 bg-marigold" />
                  )}
                </div>

                {/* Header with color badge */}
                <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-ink-border flex items-center justify-between text-xs font-mono">
                  <span className="font-medium text-ink flex items-center gap-1.5 text-[11px]">
                    <span className={`w-2 h-2 rounded-full ${accent.bg} shrink-0`} aria-hidden="true" />
                    <span>{displayNumber} &middot; {(project.categoryLabel || project.category)?.toUpperCase()}</span>
                  </span>
                  <span className="text-ink-muted text-[11px] truncate max-w-[140px]">
                    Print &amp; digital
                  </span>
                </div>

                {/* Preview Image with Fallback */}
                <ProjectImage
                  src={project.cover || project.image}
                  alt={project.title}
                  aspectRatio="aspect-[16/10]"
                />

                <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-display text-ink font-semibold tracking-tight group-hover:text-ink">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed font-normal line-clamp-3">
                    {project.summary || project.description}
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-5 pt-0 flex items-center justify-between text-xs font-mono text-ink-muted text-[11px] border-t border-ink-border/40 mt-3 pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-marigold shrink-0" aria-hidden="true" />
                  <span className="truncate">Production standard</span>
                </div>
                <span className="group-hover:text-ink transition-colors flex items-center gap-1">
                  <span>Details</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
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
