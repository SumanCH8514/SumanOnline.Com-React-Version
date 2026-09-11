import React, { useState } from 'react';
import { isValidEmail } from '@/utils/validators';

const ResetPasswordForm = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    setStatusMessage({ type: 'success', text: 'Password reset link sent to your email.' });
  };

  return (
    <div className="account-wrapper">
      <h2>Reset Password</h2>
      <p className="account-subtitle">
        Enter your registered email to receive reset instructions
      </p>

      {statusMessage && (
        <div
          style={{
            padding: '10px',
            borderRadius: '6px',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            textAlign: 'center',
            backgroundColor: statusMessage.type === 'error' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
            border: `1px solid ${statusMessage.type === 'error' ? 'var(--danger)' : 'var(--success)'}`,
            color: statusMessage.type === 'error' ? 'var(--danger)' : 'var(--success)'
          }}
        >
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            name="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <label>Enter your email</label>
        </div>

        <button type="submit">Send Reset Link</button>

        <div className="register" style={{ marginTop: '1.5rem' }}>
          <p>
            Remember your password?{' '}
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                onSwitchToLogin();
              }}
            >
              Back to Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
