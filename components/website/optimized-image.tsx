import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
}) => {
  // Generate a simple blur placeholder for Unsplash images
  const generateBlurDataURL = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      return originalSrc.replace(/w=\d+/, 'w=10').replace(/h=\d+/, 'h=10');
    }
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiNmNmY2ZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNmU2ZTYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+';
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('transition-opacity duration-300', className)}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL || generateBlurDataURL(src)}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      style={{
        objectFit: 'cover',
      }}
    />
  );
};

export default OptimizedImage;
