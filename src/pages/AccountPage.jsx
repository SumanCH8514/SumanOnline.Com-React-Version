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
    <div className="account-page-container">
      <div
        className="account-page-bg"
        style={{ backgroundImage: `url(${heroBg1})` }}
        aria-hidden="true"
      />
      <div className="account-page-overlay" aria-hidden="true" />

      <div className="account-page-content">
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

