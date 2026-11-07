import { memo, useEffect, useRef, useState, useCallback } from 'react';
import { HiOutlineXMark, HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import ProjectImage from './ProjectImage';
import { ACCENT_CONFIG } from './projectConstants';

export const ProjectModal = memo(({ project, onClose, triggerRef }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const accentKey = project?.accent && ACCENT_CONFIG[project.accent] ? project.accent : 'lime';
  const accent = ACCENT_CONFIG[accentKey];

  // Animated close handler (200ms fade on close, instant if reduced motion)
  const handleClose = useCallback(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onClose();
      triggerRef?.current?.focus?.();
      return;
    }

    setIsClosing(true);
    setTimeout(() => {
      onClose();
      triggerRef?.current?.focus?.();
    }, 200);
  }, [onClose, triggerRef]);

  // Lock body scroll and set up entrance transition
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Trigger enter transition on next frame
    const timer = requestAnimationFrame(() => setMounted(true));

    return () => {
      document.body.style.overflow = originalOverflow;
      cancelAnimationFrame(timer);
    };
  }, []);

  // Focus trap and keyboard navigation
  useEffect(() => {
    // Initial focus into modal
    closeButtonRef.current?.focus?.();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  if (!project) return null;

  const coverSrc = project.cover || project.image;
  const liveUrl = project.links?.live || project.liveDemo;
  const githubUrl = project.links?.github || project.github;
  const hasLinks = Boolean(liveUrl || githubUrl);

  const hasFeatures = Array.isArray(project.features) && project.features.length > 0;
  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;
  const hasMetrics = Array.isArray(project.metrics) && project.metrics.length > 0;
  const hasProblemOrSolution = Boolean(project.problem || project.solution);
  const overviewText = project.abstract && project.abstract !== 'TBD' ? project.abstract : project.description;

  // Transition classes
  const backdropClasses = isClosing
    ? 'opacity-0 transition-opacity duration-200 ease-out'
    : mounted
    ? 'opacity-100 transition-opacity duration-300 ease-out'
    : 'opacity-0';

  const dialogClasses = isClosing
    ? 'opacity-0 transition-opacity duration-200 ease-out'
    : mounted
    ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out'
    : 'opacity-0 translate-y-3';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-ink/70 backdrop-blur-sm ${backdropClasses}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={handleClose}
    >
      {/* Modal Dialog Container: full screen sheet on mobile, rounded container on desktop */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full h-full md:h-auto md:max-h-[92vh] md:max-w-4xl bg-paper text-ink md:rounded-lg border-0 md:border md:border-ink-border shadow-2xl flex flex-col overflow-hidden ${dialogClasses}`}
      >
        {/* Accent Top Color Block (desktop & mobile) */}
        <div className={`w-full h-3 sm:h-3.5 ${accent.bg} shrink-0`} aria-hidden="true" />

        {/* Sticky Header with Title, Role/Category Tags, Subtitle and Close Button */}
        <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-md px-5 sm:px-8 py-4 sm:py-5 border-b border-ink-border flex items-start justify-between gap-4">
          <div className="space-y-1 min-w-0">
            {/* Category and Role tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${accent.tagBg} ${accent.tagText}`}>
                {project.category?.toUpperCase() || 'PROJECT'}
              </span>
              {project.role && project.role !== 'TBD' && (
                <span className="text-[11px] font-mono text-ink-muted">
                  &middot; {project.role}
                </span>
              )}
            </div>

            {/* Title in Unbounded font */}
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl md:text-4xl font-unbounded font-semibold text-ink tracking-tight truncate"
            >
              {project.title}
            </h2>

            {/* Subtitle */}
            {project.subtitle && (
              <p className="text-xs sm:text-sm font-mono text-ink-muted truncate">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Close Button: fixed at top with accessible name */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close project details"
            className={`p-2 -mr-2 -mt-1 rounded-full text-ink hover:text-black dark:hover:text-white hover:bg-paper-surface border border-transparent hover:border-ink-border transition-all focus-visible:outline-none focus-visible:ring-2 ${accent.ring} shrink-0`}
          >
            <HiOutlineXMark className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-7 flex-1 focus:outline-none">
          {/* Cover Image */}
          {coverSrc && (
            <div className="rounded-lg overflow-hidden border border-ink-border">
              <ProjectImage
                src={coverSrc}
                alt={`${project.title} cover`}
                aspectRatio="aspect-[16/9]"
              />
            </div>
          )}

          {/* Target Audience & Context Callout */}
          {project.projectFor && (
            <div className="p-4 sm:p-5 rounded-lg border border-ink-border bg-paper-card flex items-start gap-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-ink-muted px-2 py-0.5 rounded bg-paper border border-ink-border shrink-0 mt-0.5">
                Target Audience
              </span>
              <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed">
                <span className="font-semibold text-ink">Built for: </span>
                {project.projectFor}
              </p>
            </div>
          )}

          {/* Problem & Solution Engineering Grid */}
          {hasProblemOrSolution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {project.problem && (
                <div className="p-4 sm:p-5 rounded-lg border border-ink-border bg-paper-card space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-tomato font-semibold">
                    <span className="w-2 h-2 rounded-full bg-tomato" aria-hidden="true" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 sm:p-5 rounded-lg border border-ink-border bg-paper-card space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-mint font-semibold">
                    <span className="w-2 h-2 rounded-full bg-mint" aria-hidden="true" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Overview Paragraph */}
          {overviewText && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted border-b border-ink-border pb-2">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base font-sans text-ink leading-relaxed font-normal">
                {overviewText}
              </p>
            </div>
          )}

          {/* Engineering & Architecture Approach */}
          {project.approach && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted border-b border-ink-border pb-2">
                Engineering &amp; Architecture Approach
              </h3>
              <div className="p-4 sm:p-5 rounded-lg border border-ink-border bg-paper-card">
                <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>
          )}

          {/* Metrics Section */}
          {hasMetrics && (
            <div className="space-y-3 pt-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted border-b border-ink-border pb-2">
                Metrics &amp; Scale
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {project.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 sm:p-3.5 rounded-lg border border-ink-border bg-paper-card text-center space-y-1"
                  >
                    <span className="text-lg sm:text-2xl font-display font-semibold text-ink block truncate">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-ink-muted uppercase tracking-wider block truncate">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          {hasFeatures && (
            <div className="space-y-5 pt-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted border-b border-ink-border pb-2">
                Key Features &amp; Workflows
              </h3>

              <div className="space-y-5">
                {project.features.map((feature, idx) => {
                  const featureNumber = String(idx + 1).padStart(2, '0');
                  const hasFeatureImages = Array.isArray(feature.images) && feature.images.length > 0;

                  return (
                    <div
                      key={feature.title || idx}
                      className="p-4 sm:p-5 rounded-lg border border-ink-border bg-paper-card space-y-4"
                    >
                      {/* Feature Header */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-mono font-medium ${accent.bg} ${accent.badgeText}`}
                          >
                            {featureNumber}
                          </span>
                          <h4 className="text-base sm:text-lg font-display font-semibold text-ink">
                            {feature.title}
                          </h4>
                        </div>
                        {feature.description && (
                          <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed pt-1">
                            {feature.description}
                          </p>
                        )}
                      </div>

                      {/* Feature Images directly under text */}
                      {hasFeatureImages && (
                        <div className={`grid gap-3 pt-1 ${feature.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                          {feature.images.map((imgSrc, imgIdx) => (
                            <div key={imgIdx} className="rounded overflow-hidden border border-ink-border">
                              <ProjectImage
                                src={imgSrc}
                                alt={feature.title || `${project.title} feature image ${imgIdx + 1}`}
                                aspectRatio="aspect-[16/10]"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Outcome & Impact Section */}
          {project.outcome && (
            <div className="space-y-2.5 pt-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted border-b border-ink-border pb-2">
                Outcome &amp; Results
              </h3>
              <div className="p-4 sm:p-5 rounded-lg border border-ink-border bg-paper-card">
                <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          {/* Gallery Section */}
          {hasGallery && (
            <div className="space-y-4 pt-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted border-b border-ink-border pb-2">
                Project Gallery
              </h3>

              <div className={`grid gap-3 ${project.gallery.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                {project.gallery.map((imgSrc, gIdx) => (
                  <div key={gIdx} className="rounded-lg overflow-hidden border border-ink-border">
                    <ProjectImage
                      src={imgSrc}
                      alt={`${project.title} gallery preview ${gIdx + 1}`}
                      aspectRatio="aspect-[16/10]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links Section */}
          {hasLinks && (
            <div className="pt-4 border-t border-ink-border flex flex-wrap items-center gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${accent.bg} ${accent.text} font-mono text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 ${accent.ring}`}
                >
                  <HiOutlineArrowTopRightOnSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Live Product</span>
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-border bg-paper-card hover:bg-paper-surface text-ink font-mono text-xs sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 ${accent.ring}`}
                >
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectModal.displayName = 'ProjectModal';
export default ProjectModal;

