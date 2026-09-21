import React, { useState } from 'react';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = PERSONAL_INFO.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setToastMessage(`Copied ${PERSONAL_INFO.email} to clipboard`);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setToastMessage(`Email: ${PERSONAL_INFO.email}`);
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
      </main>

      <Contact
        onCopyEmail={handleCopyEmail}
        onOpenResume={() => setResumeOpen(true)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <Toast
        message={toastMessage || ''}
        isVisible={!!toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
