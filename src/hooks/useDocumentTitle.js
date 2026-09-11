import { useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';

export const useDocumentTitle = (title, overridePrefix = false) => {
  useEffect(() => {
    if (!title) {
      document.title = `${siteConfig.name} | ${siteConfig.tagline}`;
      return;
    }

    if (overridePrefix) {
      document.title = title;
    } else {
      document.title = `${title} | ${siteConfig.name}`;
    }
  }, [title, overridePrefix]);
};

export default useDocumentTitle;
