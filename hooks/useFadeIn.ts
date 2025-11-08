
// FIX: Imported React to make the React namespace available for type annotations.
import React, { useState, useEffect, useRef } from 'react';

interface FadeInOptions {
  threshold?: number;
  delay?: number;
  triggerOnce?: boolean;
}

const useFadeIn = (options: FadeInOptions = {}): [React.RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, delay = 0, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }, delay);
        } else if (!triggerOnce) {
            setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, triggerOnce]);

  return [elementRef, isVisible];
};

export default useFadeIn;
