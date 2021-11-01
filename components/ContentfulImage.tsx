import { FunctionComponent } from 'react';
import Image, { ImageLoader, ImageLoaderProps } from 'next/image';

type ContentfulImageProps = {
  alt: string;
  className?: string;
  height: number;
  width: number;
  quality?: number;
  src: string;
};

const contentfulLoader: ImageLoader = ({
  width,
  quality,
  src,
}: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: FunctionComponent<ContentfulImageProps> = ({
  alt,
  className,
  height,
  width,
  src,
}: ContentfulImageProps) => {
  return (
    <Image
      loader={contentfulLoader}
      alt={alt}
      className={className}
      height={height}
      width={width}
      src={src}
    />
  );
};

export default ContentfulImage;
