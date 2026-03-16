import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sizes?: string;
}

/**
 * ImageWithFallback Component
 * 
 * A robust image component that handles loading errors gracefully.
 * If the `src` fails to load, it renders a placeholder SVG instead of a broken image icon.
 * Essential for ensuring visual stability when using dynamic or external image sources.
 * 
 * Features:
 * - Automatic lazy loading for performance (loading="lazy" by default)
 * - Responsive srcset generation for Unsplash images (400w, 800w, 1200w, 1600w)
 * - Graceful error handling with fallback placeholder
 * - Supports all standard HTML img attributes
 * 
 * @param {ImageWithFallbackProps} props - Standard HTML img attributes plus optional sizes
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.sizes='100vw'] - Responsive sizes attribute (e.g., "(max-width: 768px) 100vw, 50vw")
 * @param {string} [props.loading='lazy'] - Loading strategy (lazy or eager)
 * @returns {JSX.Element} The image or fallback placeholder
 */
export function ImageWithFallback({ 
  src, 
  alt, 
  sizes = '100vw',
  loading = 'lazy',
  className,
  style,
  ...rest 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  /**
   * Auto-generates responsive srcset for Unsplash images
   * Creates 4 sizes: 400w, 800w, 1200w, 1600w for responsive loading
   * 
   * @param {string} url - Image source URL
   * @returns {string | undefined} Srcset string or undefined for non-Unsplash images
   */
  const getSrcSet = (url: string): string | undefined => {
    if (!url || !url.includes('unsplash.com')) return undefined;
    
    // Parse URL to preserve existing params
    const urlParts = url.split('?');
    const baseUrl = urlParts[0];
    const params = new URLSearchParams(urlParts[1] || '');
    
    // Remove existing width param if present
    params.delete('w');
    
    // Generate srcset for 4 responsive sizes
    const widths = [400, 800, 1200, 1600];
    const srcsetArray = widths.map(w => {
      const newParams = new URLSearchParams(params);
      newParams.set('w', w.toString());
      newParams.set('q', '80'); // Good quality/size balance
      return `${baseUrl}?${newParams.toString()} ${w}w`;
    });
    
    return srcsetArray.join(', ');
  };

  const srcset = src ? getSrcSet(src) : undefined;

  const handleError = () => {
    setDidError(true)
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img 
      src={src} 
      srcSet={srcset}
      sizes={sizes}
      alt={alt} 
      className={className} 
      style={style} 
      loading={loading} 
      {...rest} 
      onError={handleError} 
    />
  )
}