import { memo } from 'react';

const TECH_ITEMS = [
  'Java',
  'Spring Boot',
  'React.js',
  'Oracle Database',
  'REST APIs',
  'JWT Authentication',
  'Spring Security',
  'Tailwind CSS',
  'Docker',
];

export const TechMarquee = memo(({ isHeaderLoaded = true }) => {
  return (
    <section
      aria-label="Core technologies strip"
      className="relative w-full border-b border-ink-border bg-paper overflow-hidden py-3 sm:py-3.5 select-none marquee-container"
    >
      <div
        tabIndex={0}
        aria-label="Technology items marquee, pauses on focus and hover"
        className="w-full flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded"
      >
        {/* Track 1 */}
        <div
          className={`marquee-track shrink-0 flex items-center ${
            isHeaderLoaded ? 'animate-marquee' : ''
          }`}
        >
          {TECH_ITEMS.map((item, idx) => (
            <span key={`tech-1-${idx}`} className="inline-flex items-center shrink-0">
              <span className="font-mono text-xs sm:text-sm font-medium text-ink tracking-tight whitespace-nowrap">
                {item}
              </span>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-lime mx-4 sm:mx-6 shrink-0"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop, aria-hidden) */}
        <div
          aria-hidden="true"
          className={`marquee-track marquee-track-duplicate shrink-0 flex items-center ${
            isHeaderLoaded ? 'animate-marquee' : ''
          }`}
        >
          {TECH_ITEMS.map((item, idx) => (
            <span key={`tech-2-${idx}`} className="inline-flex items-center shrink-0">
              <span className="font-mono text-xs sm:text-sm font-medium text-ink tracking-tight whitespace-nowrap">
                {item}
              </span>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-lime mx-4 sm:mx-6 shrink-0"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});

TechMarquee.displayName = 'TechMarquee';
export default TechMarquee;

