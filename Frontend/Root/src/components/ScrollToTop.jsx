import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately on mount/refresh
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } else {
      // If there is a hash, scroll to that element
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        // Delay slightly to ensure content is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 10);
      }
    }
  }, [pathname, hash]);

  return null;
}
