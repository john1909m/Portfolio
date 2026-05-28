# Design System — John Emil Portfolio

## Color palette

| Token | Light | Dark | Usage |
|-------|-------|------|--------|
| `--bg-base` | `#f8fafc` | `#0f172a` | Page background |
| `--bg-muted` | `#f1f5f9` | `#1e293b` | Sections, inputs |
| `--bg-elevated` | `#ffffff` | `#1e293b` | Cards, nav |
| `--text-primary` | `#0f172a` | `#f8fafc` | Headings, body (4.5:1+) |
| `--text-secondary` | `#475569` | `#cbd5e1` | Supporting copy |
| `--color-accent` | `#0891b2` | `#0891b2` | Links, active states |
| `--color-indigo` | `#4f46e5` | `#4f46e5` | Gradient accent |

**Primary gradient:** Slate → Indigo → Teal (`--gradient-primary`, `--gradient-text`).

## Typography

- **Stack:** System UI (no web font downloads).
- **Headings:** `--font-heading`, weight 700–800, fluid sizes `--text-2xl` … `--text-4xl` via `clamp()`.
- **Body:** `--font-body`, 400–500, `--text-sm` / `--text-base`.

## Spacing

4px scale: `--space-1` (4px) through `--space-16` (64px).

- **Max content width:** `1280px` (`--max-width`)
- **Grid gap:** `16px` mobile, `24px` desktop
- **Card radius:** `1.5rem` (`--radius-lg`)

## Motion

- **Duration:** 200–250ms
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`
- **Allowed:** `transform`, `opacity` only
- **Respect:** `prefers-reduced-motion: reduce`

## Components

- **SiteNav:** Sticky top bar, solid glass-style background (no heavy blur).
- **Hero:** Profile, gradient name, contact list, CV CTA.
- **SectionHeader:** Badge, title, accent span, divider.
- **Cards:** `.card` — border, hover lift 4px.
- **Skills:** Linear progress bars (no circular charts).
- **Portfolio:** Filter tabs, grid, modal lightbox for graphics.

## Icons

Heroicons v2 via `react-icons/hi2`. No emojis in UI.
