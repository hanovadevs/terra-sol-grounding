import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export const useSEO = ({ title, description, canonical, schema }: SEOProps) => {
  useEffect(() => {
    // Set title
    const fullTitle = title.includes('Terra Sol') ? title : `${title} | Terra Sol Grounding`;
    document.title = fullTitle;

    // Set meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
      }
      
      // Update OpenGraph description
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    // Set canonical link
    const canonicalUrl = canonical || window.location.href;
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
  }, [title, description, canonical, JSON.stringify(schema)]);
};

