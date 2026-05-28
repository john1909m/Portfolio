# Performance Checklist

## Done in this redesign

- [x] Removed infinite background/orb/rotation animations
- [x] Removed heavy `backdrop-filter` on body and profile cards
- [x] Single static gradient orb per section (CSS only, no blur animation)
- [x] System fonts only (no Google Fonts)
- [x] Lazy-loaded route sections (`React.lazy`)
- [x] `loading="lazy"` on portfolio images; `fetchPriority="high"` on hero photo
- [x] Intersection Observer for scroll spy (replaces viewport multiplier math)
- [x] Mobile: bottom nav only; desktop: top nav (no duplicate heavy effects)
- [x] Animations limited to `transform` and `opacity`
- [x] `prefers-reduced-motion` respected
- [x] Error boundary to avoid white-screen crashes

## Recommended next steps

- [ ] Convert remaining JPG assets to WebP with explicit `width`/`height`
- [ ] Run `npm run build` and check bundle size; code-split if > 200KB JS
- [ ] Add `vite-plugin-image-optimizer` or pre-build image pipeline
- [ ] Serve via CDN with Brotli compression
- [ ] Target Lighthouse 95+: run audit on production URL after deploy
- [ ] Remove unused `BackgroundParticles` import if file remains unused
- [ ] Audit `react-icons` imports (tree-shake per icon path — already per-file)

## Lighthouse targets

| Metric | Target |
|--------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 95+ |
| SEO | 100 |
