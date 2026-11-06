import { useEffect } from "react";
import { SITE } from "../config/site";

// Sets document.title (and optionally meta description) for the current page.
export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
