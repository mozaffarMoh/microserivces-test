import React from 'react';

interface InputProps {
  label?: string;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className="form-label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`h-8 block w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-card)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] ${className}`}
      />
      {error && <div className="form-error">{error}</div>}
    </div>
  );
};
