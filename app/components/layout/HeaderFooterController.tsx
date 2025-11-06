'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLayout } from '@/app/context/LayoutContext';

interface HeaderFooterControllerProps {
  children: React.ReactNode;
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
}

export default function HeaderFooterController({
  children,
  headerComponent,
  footerComponent,
}: HeaderFooterControllerProps) {
  const pathname = usePathname();
  const { showHeaderFooter, setShowHeaderFooter } = useLayout();
  
  // Define pages that should not have header and footer
  const pagesWithoutHeaderFooter = ['/patient/join'];
  
  useEffect(() => {
    // Check if current pathname should have header and footer
    const shouldShowHeaderFooter = !pagesWithoutHeaderFooter.some(path => 
      pathname.startsWith(path)
    );
    
    setShowHeaderFooter(shouldShowHeaderFooter);
  }, [pathname, setShowHeaderFooter]);
  
  return (
    <>
      {showHeaderFooter && headerComponent}
      {children}
      {showHeaderFooter && footerComponent}
    </>
  );
} 