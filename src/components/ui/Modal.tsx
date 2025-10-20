import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-[var(--bg-card)] rounded-[var(--radius-lg)] p-[var(--spacing-lg)] max-w-md w-full transform transition-all ${className}`}>
        <div className="flex justify-between items-center mb-[var(--spacing-lg)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
