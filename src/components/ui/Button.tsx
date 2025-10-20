import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex px-2 py-1 items-center justify-center rounded-[var(--radius-md)] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-sm',
    md: 'px-[var(--spacing-md)] py-[var(--spacing-sm)] text-sm',
    lg: 'px-[var(--spacing-lg)] py-[var(--spacing-md)] text-base',
  }[size];

  const variantStyles = {
    primary: 'bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] focus:ring-[var(--primary-color)]',
    secondary: 'bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-dark)] focus:ring-[var(--secondary-color)]',
    outline: 'border border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--bg-card)] focus:ring-[var(--primary-color)]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
