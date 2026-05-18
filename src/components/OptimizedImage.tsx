import Image, { type ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'alt'> & {
  alt: string;
};

/** next/image wrapper — WebP/AVIF, responsive sizes, lazy by default */
export default function OptimizedImage({
  alt,
  quality = 75,
  sizes = '(max-width: 768px) 100vw, 50vw',
  ...props
}: OptimizedImageProps) {
  return <Image alt={alt} quality={quality} sizes={sizes} {...props} />;
}
