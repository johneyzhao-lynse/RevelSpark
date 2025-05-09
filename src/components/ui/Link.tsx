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
        if (href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (onClick) onClick();
          }
        } else if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </a>
  );
};