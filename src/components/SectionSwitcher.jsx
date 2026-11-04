import { memo } from 'react';

export const SectionSwitcher = memo(({ activeSection = 'software', onSwitch }) => {
  return (
    <div
      role="tablist"
      aria-label="Portfolio specialization switch"
      className="relative inline-grid grid-cols-2 p-1.5 rounded-full border border-ink-border bg-paper-surface w-full sm:w-[320px] text-xs font-mono shrink-0"
    >
      {/* Animated indicator pill */}
      <div
        className={`header-color-block absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-600 ease-out ${
          activeSection === 'software'
            ? 'left-1.5 bg-lime'
            : 'left-[calc(50%+3px)] bg-tomato'
        }`}
        aria-hidden="true"
      />

      {/* Segment 01: Software */}
      <button
        type="button"
        role="tab"
        id="tab-software"
        aria-selected={activeSection === 'software'}
        aria-controls="software"
        onClick={() => onSwitch?.('software')}
        className={`relative z-10 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
          activeSection === 'software'
            ? 'text-black'
            : 'text-ink-muted hover:text-ink'
        }`}
      >
        <span className="text-[10px] tabular-nums opacity-75">01</span>
        <span className="text-sm font-sans font-medium">Software</span>
      </button>

      {/* Segment 02: Graphic */}
      <button
        type="button"
        role="tab"
        id="tab-graphic"
        aria-selected={activeSection === 'graphic'}
        aria-controls="graphic"
        onClick={() => onSwitch?.('graphic')}
        className={`relative z-10 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato ${
          activeSection === 'graphic'
            ? 'text-white'
            : 'text-ink-muted hover:text-ink'
        }`}
      >
        <span className="text-[10px] tabular-nums opacity-75">02</span>
        <span className="text-sm font-sans font-medium">Graphic</span>
      </button>
    </div>
  );
});

SectionSwitcher.displayName = 'SectionSwitcher';
export default SectionSwitcher;

