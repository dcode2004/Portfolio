import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { IconClose, IconDownload, IconExternal } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
    >
      <div
        className="modal-container resume-modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '960px', width: '92vw', height: '90vh' }}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <h2 id="resume-dialog-title" className="modal-title">
              Resume — {PERSONAL_INFO.name}
            </h2>
          </div>

          <div className="modal-actions">
            <a
              href="/Devansh_Vyas_Resume.pdf"
              download="Devansh_Vyas_Resume.pdf"
              className="btn btn-primary btn-sm"
              aria-label="Download original resume PDF"
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/Devansh_Vyas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label="Open resume PDF in new tab"
            >
              <IconExternal className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onClose}
              aria-label="Close modal"
              style={{ padding: '6px' }}
            >
              <IconClose className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ padding: 0, height: 'calc(100% - 60px)', overflow: 'hidden', background: '#1e232a' }}>
          <iframe
            src="/Devansh_Vyas_Resume.pdf#toolbar=0&navpanes=0"
            title={`Resume of ${PERSONAL_INFO.name}`}
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};
