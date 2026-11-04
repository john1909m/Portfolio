import { memo } from 'react';
import { EDUCATION_ITEMS } from './portfolioData';

export const Education = memo(() => {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-ink-border bg-paper" id="education">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-6 sm:pb-8 border-b border-ink-border space-y-1.5 sm:space-y-2">
          <p className="text-xs font-mono text-ink-muted tracking-wider">
            Academic degrees &middot; Engineering
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-ink font-semibold tracking-tight">
            Academic education
          </h2>
          <p className="text-xs sm:text-sm font-sans text-ink-muted max-w-2xl font-normal">
            Formal university engineering foundation covering system architectures, algorithms, and software design.
          </p>
        </div>

        <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
          {EDUCATION_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 border border-ink-border rounded bg-paper-card grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-start transition-shadow hover:shadow-sm"
            >
              <div className="md:col-span-4 space-y-0.5 sm:space-y-1">
                <span className="text-[11px] sm:text-xs font-mono text-mint font-medium block">
                  {item.duration}
                </span>
                <h3 className="text-base sm:text-lg font-display text-ink font-semibold pt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-ink-muted">
                  {item.institution}
                </p>
              </div>

              <div className="md:col-span-8 flex items-center">
                <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Education.displayName = 'Education';
export default Education;
