import { memo } from 'react';

export const SectionHeader = memo(({ badge, badgeIcon, title, titleAccent, subtitle, id }) => (
  <header className="section-header" id={id}>
    {badge && (
      <div className="section-header__badge">
        {badgeIcon && <span className="section-header__badge-icon" aria-hidden="true">{badgeIcon}</span>}
        <span>{badge}</span>
      </div>
    )}
    <h2 className="section-header__title">
      {title}
      {titleAccent && <span className="gradient-text"> {titleAccent}</span>}
    </h2>
    <div className="section-header__divider" aria-hidden="true" />
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </header>
));

SectionHeader.displayName = 'SectionHeader';
