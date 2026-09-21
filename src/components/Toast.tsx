import React, { useEffect } from 'react';
import { IconCheck } from './Icons';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
        <IconCheck className="w-4 h-4" />
      </span>
      <span>{message}</span>
    </div>
  );
};
