import React from 'react';

interface BrandNameProps {
  children: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BrandName: React.FC<BrandNameProps> = ({ 
  children, 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <span 
      className={`
        font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default BrandName; 