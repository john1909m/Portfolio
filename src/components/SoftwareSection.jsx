import { memo, useState, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SOFTWARE_PROJECTS } from './portfolioData';
import ProjectImage from './shared/ProjectImage';
import { ACCENT_CONFIG } from './shared/projectConstants';

const SUB_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

const INITIAL_CARD_COUNT = 6;

export const SoftwareSection = memo(({ onSelectProject }) => {
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
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-xs font-mono transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${isSelected
                  ? 'bg-lime text-black border-lime font-medium'
                  : 'bg-paper-card text-ink border-ink-border hover:bg-paper-surface'
                  }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/20 text-black' : 'bg-paper-surface text-ink-muted'
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
          const accent = ACCENT_CONFIG[project.accent || 'lime'] || ACCENT_CONFIG.lime;
          const displayNumber = project.number || String(index + 1).padStart(2, '0');

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
                {/* Top Accent Color Block */}
                <div className={`h-1.5 w-full ${accent.bg}`} aria-hidden="true" />

                {/* Header */}
                <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-ink-border flex items-center justify-between text-xs font-mono">
                  <span className={`font-medium text-ink px-2 py-0.5 rounded text-[11px] ${accent.tagBg}`}>
                    {displayNumber} &middot; {project.role?.toUpperCase()}
                  </span>
                  <span className="text-ink-muted text-[11px] font-mono flex items-center gap-1 group-hover:text-ink transition-colors">
                    <span>CASE STUDY</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>

                {/* Preview Image with Fallback */}
                <ProjectImage
                  src={project.cover || project.image}
                  alt={project.title}
                  aspectRatio="aspect-[16/10]"
                />

                {/* Content */}
                <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-3.5">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-display text-ink font-semibold tracking-tight group-hover:text-ink">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-ink-muted font-normal">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed font-normal line-clamp-3">
                    {project.description || project.summary || project.abstract}
                  </p>

                  {/* Metrics snapshot */}
                  {Array.isArray(project.metrics) && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-1.5 sm:p-2 rounded border border-ink-border bg-paper text-xs font-mono"
                        >
                          <span className="text-ink-muted block text-[10px] uppercase tracking-wider truncate">{m.label}</span>
                          <span className="text-ink font-semibold text-[11px] sm:text-xs truncate block pt-0.5">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Links & Modal Cue */}
              <div className="p-3.5 sm:p-5 pt-0 flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-t border-ink-border/40 mt-3 pt-3">
                <div className="flex flex-wrap items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {(project.liveDemo || project.links?.live) && (
                    <a
                      href={project.liveDemo || project.links?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded ${accent.bg} ${accent.text} font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 ${accent.ring} text-[11px] sm:text-xs`}
                    >
                      <FaExternalLinkAlt className="w-2.5 h-2.5" aria-hidden="true" />
                      <span>Live demo</span>
                    </a>
                  )}
                  {(project.github || project.links?.github) && (
                    <a
                      href={project.github || project.links?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-ink-border bg-paper text-ink hover:bg-paper-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime text-[11px] sm:text-xs"
                    >
                      <FaGithub className="w-3 h-3" aria-hidden="true" />
                      <span>Source</span>
                    </a>
                  )}
                </div>

                <span className="text-[11px] font-mono text-ink-muted group-hover:text-ink transition-colors flex items-center gap-1">
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
