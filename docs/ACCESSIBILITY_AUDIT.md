# Accessibility Audit (WCAG 2.1 AA)

## Implemented

| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.1.1 Non-text content | Pass | Images have `alt`; decorative icons `aria-hidden` |
| 1.3.1 Info and relationships | Pass | Semantic `header`, `main`, `section`, `nav`, `article` |
| 1.4.3 Contrast (minimum) | Pass | Slate/teal on `#f8fafc` / `#0f172a` meets 4.5:1 for body text |
| 2.1.1 Keyboard | Pass | Nav, tabs, forms, modal close via keyboard |
| 2.4.1 Bypass blocks | Pass | Skip link in `SiteNav` |
| 2.4.2 Page titled | Pass | Descriptive `<title>` in `index.html` |
| 2.4.4 Link purpose | Pass | `aria-label` on icon-only social links |
| 2.4.6 Headings and labels | Pass | Single `h1` in hero; section `h2` via `SectionHeader` |
| 2.4.7 Focus visible | Pass | `--focus-ring` on `:focus-visible` |
| 3.3.1 Error identification | Pass | Form errors with `role="alert"` and `aria-invalid` |
| 3.3.2 Labels or instructions | Pass | Explicit `<label htmlFor>` on inputs |
| 4.1.2 Name, role, value | Pass | Tabs use `role="tablist"` / `aria-selected`; modal `role="dialog"` |

## Recommendations

1. Wire contact form to Formspree or backend and announce success to screen readers (`aria-live="polite"` on success region — partially done via `role="status"`).
2. Run automated checks: Lighthouse Accessibility, axe DevTools.
3. Manual test: Tab through mobile bottom nav and desktop top nav.
4. Verify OG image URL resolves in production.

## Reduced motion

Animations disabled or shortened when `prefers-reduced-motion: reduce` is set (skill bars, card hover, loader spin).
