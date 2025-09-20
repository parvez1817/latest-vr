import { useEffect, useState, useRef, RefObject } from "react";

const useScrollAnimation = <T extends HTMLElement = HTMLElement>(): {
  ref: RefObject<T>;
  isVisible: boolean;
} => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { ref, isVisible };
};

export default useScrollAnimation;
