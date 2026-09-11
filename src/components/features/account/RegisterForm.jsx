import React, { useState } from 'react';
import { isValidEmail, isValidPassword } from '@/utils/validators';

const RegisterForm = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (!isValidPassword(password)) {
      setStatusMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }
    if (password !== confirmPassword) {
      setStatusMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }
    setStatusMessage({ type: 'success', text: 'Account created! Redirecting to login...' });
    setTimeout(() => onSwitchToLogin(), 1500);
  };

  return (
    <div className="account-wrapper">
      <h2>Create Account</h2>
      <p className="account-subtitle">
        Join the SumanOnline network for exclusive access
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

        <div className="input-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
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

        <div className="input-field">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirm_password"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            <i className={showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
          </button>
          <label>Confirm password</label>
        </div>

        <button type="submit">Sign Up</button>

        <div className="account-divider">
          <span>or</span>
        </div>

        <button
          type="button"
          className="google-auth-btn"
        >
          <svg className="google-icon-svg" viewBox="0 0 18 18" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z" fill="#4285F4" />
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
            <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.173 0 7.547 0 9s.347 2.827.957 4.039l3.007-2.332z" fill="#FBBC05" />
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335" />
          </svg>
          <span>Sign up with Google</span>
        </button>

        <div className="register">
          <p>
            Already have an account?{' '}
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                onSwitchToLogin();
              }}
            >
              Login here!
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
