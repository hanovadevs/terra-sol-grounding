import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: Record<string, any> | Record<string, any>[];
}

const SITE_URL = 'https://terrasolgrounding.com';
const DEFAULT_IMAGE = `${SITE_URL}/terra-sol-grounding.jpeg`;

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const useSEO = ({ title, description, canonical, image = DEFAULT_IMAGE, type = 'website', schema }: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes('Terra Sol') ? title : `${title} | Terra Sol Grounding`;
    document.title = fullTitle;
    const canonicalUrl = canonical || `${SITE_URL}${window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '')}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${title} — Terra Sol Grounding`);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }

    // Set dynamic JSON-LD schema
    let schemaScript = document.querySelector('script[data-dynamic-schema="true"]');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('data-dynamic-schema', 'true');
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    return () => {
      // Clean up dynamic schema script when component unmounts or dependency changes
      const script = document.querySelector('script[data-dynamic-schema="true"]');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonical, image, type, JSON.stringify(schema)]);
};
