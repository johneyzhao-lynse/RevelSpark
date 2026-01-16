import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, className = '', children, onClick }) => {
  return (
    <a
      href={href}
      className={`text-sm font-medium hover:opacity-80 transition-opacity ${className}`}
      onClick={(e) => {
        // Handle smooth scrolling for anchor links
        if (href.startsWith('#') || href.startsWith('/#')) {
          e.preventDefault();
          // Extract the anchor part
          const anchor = href.startsWith('/#') ? href.substring(1) : href;
          
          // Check if we're already on the home page
          if (window.location.pathname !== '/') {
            // Navigate to home page first
            window.location.href = href;
          } else {
            // We're already on home page, just scroll to the element
            const element = document.querySelector(anchor);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              if (onClick) onClick();
            }
          }
        } else if (!href.startsWith('http') && !href.startsWith('mailto:')) {
          // Handle internal routing
          if (onClick) onClick();
          // Let the browser handle the navigation for internal routes
        } else if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </a>
  );
};