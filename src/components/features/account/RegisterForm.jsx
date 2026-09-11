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
    <div className="wrapper account-wrapper">
      <h2>Create Account</h2>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
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
          <i className="fab fa-google"></i> Sign Up with Google
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
