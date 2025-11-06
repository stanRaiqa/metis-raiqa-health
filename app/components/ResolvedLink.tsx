'use client';

import Link from 'next/link';
import React from 'react';

type ResolvedLinkProps = {
  link?: {
    href?: string;
    slug?: string;
    openInNewTab?: boolean;
  } | null;
  className?: string;
  children: React.ReactNode;
};

export default function ResolvedLink({ link, className, children }: ResolvedLinkProps) {
  const rawHref = (link?.href ?? (link?.slug ? `/${link.slug}` : '')) || '#';
  const isExternal = /^https?:\/\//i.test(rawHref);
  const target = link?.openInNewTab || isExternal ? '_blank' : undefined;
  const rel = target === '_blank' ? 'noreferrer noopener' : undefined;

  return (
    <Link href={rawHref} className={className} target={target} rel={rel}>
      {children}
    </Link>
  );
}


