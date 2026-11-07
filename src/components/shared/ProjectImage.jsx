import { memo, useState } from 'react';

// Eagerly resolve any project assets in src/assets/projects/
const projectAssetMap = import.meta.glob('/src/assets/projects/**/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
  import: 'default',
});

export const ProjectImage = memo(({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [hasError, setHasError] = useState(false);

  // Normalize path to look up in Vite's asset map
  let resolvedSrc = src;
  if (src) {
    const normalized = src.startsWith('/') ? src : `/${src}`;
    if (projectAssetMap[normalized]) {
      resolvedSrc = projectAssetMap[normalized];
    }
  }

  // Extract display filename for the missing placeholder
  const fileName = src ? src.split('/').pop() : 'image.jpg';

  if (!src || hasError) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-paper-surface border border-ink-border rounded flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
        aria-label={alt || 'Image not found'}
      >
        <span className="font-mono text-xs text-ink-muted truncate max-w-[85%]">
          {fileName}
        </span>
        <span className="font-mono text-[10px] text-ink-muted/70 mt-1">
          [Image placeholder]
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio} overflow-hidden bg-paper-surface ${className}`}>
      <img
        src={resolvedSrc}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
});

ProjectImage.displayName = 'ProjectImage';
export default ProjectImage;

