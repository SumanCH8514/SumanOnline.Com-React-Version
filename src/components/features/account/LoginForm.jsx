import React, { useState } from 'react';
import { isValidEmail } from '@/utils/validators';
import { useAuth } from '@/hooks/useAuth';
import { siteConfig } from '@/config/siteConfig';

const LoginForm = ({ onSwitchToRegister, onSwitchToReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (!password) {
      setStatusMessage({ type: 'error', text: 'Please enter your password.' });
      return;
    }
    const username = email.split('@')[0];
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
    login({
      name: formattedName || siteConfig.author,
      email,
      avatar: siteConfig.branding.logoUrl,
      role: 'Developer'
    });
    setStatusMessage({ type: 'success', text: 'Welcome back! Signed in successfully.' });
  };

  return (
    <div className="wrapper account-wrapper">
      <h2>Welcome Back</h2>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Log in to access your SumanOnline dashboard
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

        <div className="input-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
          </button>
          <label>Enter your password</label>
        </div>

        <div className="forget">
          <a
            href="#reset"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToReset();
            }}
          >
            Forgot password?
          </a>
        </div>

        <button type="submit">Log In</button>
        <br />

        <button
          type="button"
          style={{
            backgroundColor: '#4285F4',
            color: '#ffffff',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <i className="fab fa-google"></i> Login with Google
        </button>

        <div className="register">
          <p>
            Don't have an account?{' '}
            <a
              href="#signup"
              onClick={(e) => {
                e.preventDefault();
                onSwitchToRegister();
              }}
            >
              Sign Up Now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
