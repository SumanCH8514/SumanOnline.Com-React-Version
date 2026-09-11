import React, { useState } from 'react';
import LoginForm from '@/components/features/account/LoginForm';
import RegisterForm from '@/components/features/account/RegisterForm';
import ResetPasswordForm from '@/components/features/account/ResetPasswordForm';
import ProfileCard from '@/components/features/account/ProfileCard';
import { useAuth } from '@/hooks/useAuth';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import heroBg1 from '@/assets/hero-bg-1.jpg';

const AccountPage = () => {
  const { isLoggedIn } = useAuth();
  const [formType, setFormType] = useState('login');

  const getTitle = () => {
    if (isLoggedIn) return 'My Account';
    switch (formType) {
      case 'register':
        return 'Create Account';
      case 'reset':
        return 'Reset Password';
      default:
        return 'Account Login';
    }
  };

  useDocumentTitle(getTitle());

  return (
    <div
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1rem 3rem',
        backgroundColor: '#0a0f1d',
        overflow: 'hidden'
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(10, 15, 29, 0.72), rgba(10, 15, 29, 0.85)), url(${heroBg1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        {isLoggedIn ? (
          <ProfileCard />
        ) : (
          <>
            {formType === 'login' && (
              <LoginForm
                onSwitchToRegister={() => setFormType('register')}
                onSwitchToReset={() => setFormType('reset')}
              />
            )}

            {formType === 'register' && (
              <RegisterForm onSwitchToLogin={() => setFormType('login')} />
            )}

            {formType === 'reset' && (
              <ResetPasswordForm onSwitchToLogin={() => setFormType('login')} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AccountPage;

