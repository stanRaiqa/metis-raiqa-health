"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {ServicesList} from "@/app/types";
import practitionerData from "@/public/services-data/practitioner-data.json";

/**
 * Hook to get the current URL slug
 * @returns The current slug or null if no slug exists
 */
export function useCurrentSlug(): string | null {
  const pathname = usePathname();
  
  return useMemo(() => {
    // Remove leading slash and split by '/'
    const segments = pathname.replace(/^\//, '').split('/');
    
    // Return the first segment as the slug, or null if empty
    return segments[0] || null;
  }, [pathname]);
}

/**
 * Hook to get the last slug from the current URL
 * @returns The last slug or null if no slug exists
 */
export function useLastSlug(): string | null {
  const pathname = usePathname();
  
  return useMemo(() => {
    // Remove leading slash and split by '/'
    const segments = pathname.replace(/^\//, '').split('/');
    
    // Return the last segment as the slug, or null if empty
    return segments.length > 0 ? segments[segments.length - 1] || null : null;
  }, [pathname]);
}

/**
 * Utility function to extract slug from a given pathname
 * @param pathname - The pathname to extract slug from
 * @returns The slug or null if no slug exists
 */
export function extractSlugFromPathname(pathname: string): string | null {
  // Remove leading slash and split by '/'
  const segments = pathname.replace(/^\//, '').split('/');
  
  // Return the first segment as the slug, or null if empty
  return segments[0] || null;
}

/**
 * Utility function to extract the last slug from a given pathname
 * @param pathname - The pathname to extract the last slug from
 * @returns The last slug or null if no slug exists
 */
export function extractLastSlugFromPathname(pathname: string): string | null {
  // Remove leading slash and split by '/'
  const segments = pathname.replace(/^\//, '').split('/');
  
  // Return the last segment as the slug, or null if empty
  return segments.length > 0 ? segments[segments.length - 1] || null : null;
}

/**
 * Utility function to get all path segments from a pathname
 * @param pathname - The pathname to extract segments from
 * @returns Array of path segments
 */
export function extractPathSegments(pathname: string): string[] {
  // Remove leading slash and split by '/', filter out empty segments
  return pathname.replace(/^\//, '').split('/').filter(Boolean);
}

/**
 * Hook to get all path segments of the current URL
 * @returns Array of path segments
 */
export function usePathSegments(): string[] {
  const pathname = usePathname();
  
  return useMemo(() => {
    return extractPathSegments(pathname);
  }, [pathname]);
}

/**
 * Hook to check if current path matches a specific slug
 * @param targetSlug - The slug to check against
 * @returns Boolean indicating if the current path matches the target slug
 */
export function useIsCurrentSlug(targetSlug: string): boolean {
  const currentSlug = useCurrentSlug();
  
  return useMemo(() => {
    return currentSlug === targetSlug;
  }, [currentSlug, targetSlug]);
}

/**
 * Hook to check if the last segment of current path matches a specific slug
 * @param targetSlug - The slug to check against
 * @returns Boolean indicating if the last segment matches the target slug
 */
export function useIsLastSlug(targetSlug: string): boolean {
  const lastSlug = useLastSlug();
  
  return useMemo(() => {
    return lastSlug === targetSlug;
  }, [lastSlug, targetSlug]);
}

export function usePractitionerservice(slug: string) {
  const practitionerServices: ServicesList[] = practitionerData as ServicesList[];
  const service = practitionerServices.find(p => p.slug == slug);
  return useMemo(() => {
    return service
  }, [slug])
}