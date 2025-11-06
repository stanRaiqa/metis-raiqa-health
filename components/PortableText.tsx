import { PortableText as SanityPortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity.client';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = !value.href.startsWith('/') ? '_blank' : undefined;
      
      return (
        <Link 
          href={value.href} 
          rel={rel} 
          target={target} 
          className="text-blue-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
};

export function PortableText({ content }: { content: any }) {
  return <SanityPortableText value={content} components={components} />;
} 