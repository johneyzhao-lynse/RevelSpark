import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  navigate?: (path: string) => void;
}

export const Link: React.FC<LinkProps> = ({ href, className = '', children, onClick, navigate }) => {
  return (
    <a
      href={href}
      className={`${className}`}
      onClick={(e) => {
        // External links, mailto, hash-only anchors, or static pages: let browser handle
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('/policy/')) {
          if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }
          if (onClick) onClick();
          return;
        }

        // Anchor links (e.g. /#section)
        if (href.startsWith('/#')) {
          e.preventDefault();
          const anchor = href.substring(1);
          if (navigate) navigate('/');
          // Scroll after a tick to allow route change
          requestAnimationFrame(() => {
            const element = document.querySelector(anchor);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          });
          if (onClick) onClick();
          return;
        }

        // Internal SPA navigation
        e.preventDefault();
        if (navigate) navigate(href);
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};