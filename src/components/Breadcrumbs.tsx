import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();

  // Auto-generate breadcrumbs from the current path if not provided
  const crumbs: BreadcrumbItem[] = items || (() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const auto: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    const nameMap: Record<string, string> = {
      products: 'Products',
      science: 'Science',
      research: 'Research',
      blog: 'Journal',
      story: 'Our Story',
      faq: 'FAQ',
      warranty: 'Warranty',
      contact: 'Contact',
    };

    let pathAccumulator = '';
    segments.forEach((seg, idx) => {
      pathAccumulator += `/${seg}`;
      const isLast = idx === segments.length - 1;
      auto.push({
        label: nameMap[seg] || decodeURIComponent(seg).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        href: isLast ? undefined : pathAccumulator,
      });
    });

    return auto;
  })();

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center flex-wrap gap-1 text-xs">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          const absoluteUrl = crumb.href ? `${window.location.origin}${crumb.href}` : window.location.href;

          return (
            <li 
              key={idx} 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem" 
              className="flex items-center gap-1"
            >
              {idx === 0 && <Home size={12} className="text-earth-600 mr-0.5" />}
              {crumb.href && !isLast ? (
                <Link
                  to={crumb.href}
                  itemProp="item"
                  className="font-medium text-earth-600 hover:text-earth-900 transition-colors"
                >
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              ) : (
                <span itemProp="name" className="font-bold text-earth-900">{crumb.label}</span>
              )}
              {!crumb.href && <link itemProp="item" href={absoluteUrl} />}
              <meta itemProp="position" content={(idx + 1).toString()} />
              {!isLast && (
                <ChevronRight size={12} className="text-earth-800/20" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
