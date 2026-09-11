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
    <div className="wrapper account-wrapper">
      <h2>Reset Password</h2>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
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
            backgroundColor: statusMessage.type === 'error' ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)',
            border: `1px solid ${statusMessage.type === 'error' ? 'red' : 'green'}`,
            color: '#ffffff'
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
