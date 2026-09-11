import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { siteConfig } from '@/config/siteConfig';

const ProfileCard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="wrapper account-wrapper" style={{ maxWidth: '420px', textAlign: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block', margin: '0 auto 1rem' }}>
        <img
          src={user?.avatar || siteConfig.branding.logoUrl}
          alt={user?.name || siteConfig.author}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #4cc9f0',
            boxShadow: '0 4px 15px rgba(76, 201, 240, 0.3)'
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjY2NjIiBkPSJNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOFMyOTQuNyAwIDIyNCAwIDk2IDU3LjMgOTYgMTI4czU3LjMgMTI4IDEyOCAxMjh6bTQ4IDMyaC05NmMtODguNCAwLTE2MCA3MS42LTE2MCAxNjAgMCAyNi41IDIxLjUgNDggNDhoMzc2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4IDAtODguNC03MS42LTE2MC0xNjAtMTYweiIvPjwvc3ZnPg==';
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            border: '2px solid #ffffff'
          }}
        />
      </div>

      <h2>{user?.name || siteConfig.author}</h2>
      <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        {user?.email || 'suman@sumanonline.com'}
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.85rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '10px',
          marginBottom: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>Status</span>
        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#10b981', letterSpacing: '0.5px' }}>
          ✦ ACTIVE
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.85rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '10px',
          marginBottom: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>Account Type</span>
        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4cc9f0' }}>
          {user?.role || 'Developer'}
        </span>
      </div>

      <button
        type="button"
        onClick={logout}
        style={{
          width: '100%',
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          border: '1px solid #ef4444',
          color: '#ef4444',
          padding: '0.75rem',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        <i className="fas fa-sign-out-alt" style={{ marginRight: '0.5rem' }}></i>
        Sign Out
      </button>
    </div>
  );
};

export default ProfileCard;
