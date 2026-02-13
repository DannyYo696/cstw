'use client';

import { useState } from 'react';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentationModal = ({ isOpen, onClose }: DocumentationModalProps) => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const docs = [
    {
      id: 'ercaspay',
      title: 'ERCASPay',
      description: 'Payment gateway, collections, and disbursement APIs.',
      icon: '₊',
      url: 'https://docs.capitalsagetechnology.com/ercaspay',
    },
    {
      id: 'sagecloud',
      title: 'Sage Cloud',
      description: 'Cloud hosting, storage, and infrastructure APIs.',
      icon: '↑',
      url: 'https://docs.capitalsagetechnology.com/sagecloud',
    },
    {
      id: 'sagehive',
      title: 'Sage Hive',
      description: 'Core banking and microservice integration APIs.',
      icon: '◆',
      url: 'https://docs.capitalsagetechnology.com/sagehive',
    },
  ];

  if (!isOpen) return null;

  const handleDocClick = (docUrl: string) => {
    window.open(docUrl, '_blank');
    setSelectedDoc(null);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-deep)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '60px 40px',
          maxWidth: '1200px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '2rem',
            cursor: 'pointer',
            padding: '0',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Title */}
        <h2
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '50px',
            color: 'white',
          }}
        >
          Select Documentation
        </h2>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)', marginBottom: '50px' }}></div>

        {/* Documentation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          {docs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleDocClick(doc.url)}
              style={{
                backgroundColor: 'rgba(14, 32, 56, 0.5)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--primary)';
                el.style.backgroundColor = 'rgba(0, 50, 132, 0.1)';
                el.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--border)';
                el.style.backgroundColor = 'rgba(14, 32, 56, 0.5)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(249, 115, 22, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '30px',
                  fontSize: '2.5rem',
                  color: 'var(--secondary)',
                  fontWeight: 700,
                }}
              >
                {doc.id === 'ercaspay' && (
                  <i className="fas fa-file-invoice-dollar" style={{ fontSize: '2rem' }}></i>
                )}
                {doc.id === 'sagecloud' && (
                  <i className="fas fa-cloud-upload-alt" style={{ fontSize: '2rem' }}></i>
                )}
                {doc.id === 'sagehive' && (
                  <i className="fas fa-network-wired" style={{ fontSize: '2rem' }}></i>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                  color: 'white',
                }}
              >
                {doc.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                }}
              >
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationModal;
