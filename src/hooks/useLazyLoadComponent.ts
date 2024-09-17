"use client";

// hooks/.ts
import { useState } from 'react';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

export function useLazyLoadComponent<T extends HTMLElement = HTMLElement>(
  options?: IntersectionOptions
): [(node?: T | null) => void, boolean] {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView(options);

  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }

  return [ref, hasBeenInView];
}