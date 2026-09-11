import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { mainNavLinks, accountSubLinks } from '@/config/navigation';
import { siteConfig } from '@/config/siteConfig';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn } = useAuth();

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <nav className="navbar" aria-label="Main Navigation">
        
        <motion.div
          className="logo"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <i className="fas fa-globe"></i>
          <span>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              {siteConfig.name}
            </Link>
          </span>
        </motion.div>

        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
          
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-logo" onClick={handleCloseMenu}>
              <i className="fas fa-globe"></i>
              <span>{siteConfig.name}</span>
            </Link>
            <button
              className="close-btn-wrapper"
              onClick={handleCloseMenu}
              aria-label="Close navigation menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="menu-items-container">
            
            {mainNavLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={handleCloseMenu}
                >
                  <span className="nav-icon">
                    <i className={item.icon}></i>
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            
            <div className={`dropdown ${mobileDropdownOpen ? 'active' : ''}`}>
              <div
                className="nav-item dropdown-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMobileDropdownOpen((prev) => !prev);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setMobileDropdownOpen((prev) => !prev);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <span className="nav-icon">
                  <i className="fas fa-user-circle"></i>
                </span>
                <span>Account</span>
                <i className="fas fa-chevron-down dropdown-chevron"></i>
              </div>

              <div className="dropdown-content">
                {accountSubLinks.map((sub, index) => (
                  <Link
                    key={index}
                    to={sub.path}
                    className="nav-item sub-item"
                    onClick={handleCloseMenu}
                  >
                    <span className="nav-icon">
                      <i className={sub.icon}></i>
                    </span>
                    <span>{sub.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            
            <div
              className="theme-toggle-switch-wrapper"
              onClick={toggleTheme}
              role="button"
              tabIndex={0}
              aria-label={`Toggle Dark Mode ${theme === 'dark' ? 'Off' : 'On'}`}
            >
              <div className="theme-toggle-label">
                <span className="nav-icon">
                  <i className={`fas fa-${theme === 'dark' ? 'moon' : 'sun'}`}></i>
                </span>
                <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
              </div>
              <div className={`toggle-switch ${theme === 'dark' ? 'active' : ''}`}>
                <div className="toggle-slider"></div>
              </div>
            </div>
          </div>

          
          {isLoggedIn ? (
            <div className="mobile-profile-footer">
              <div className="profile-info">
                <div className="profile-avatar">
                  <img
                    src={user?.avatar || siteConfig.branding.logoUrl}
                    alt={user?.name || siteConfig.author}
                    className="profile-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjY2NjIiBkPSJNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOFMyOTQuNyAwIDIyNCAwIDk2IDU3LjMgOTYgMTI4czU3LjMgMTI4IDEyOCAxMjh6bTQ4IDMyaC05NmMtODguNCAwLTE2MCA3MS42LTE2MCAxNjAgMCAyNi41IDIxLjUgNDggNDhoMzc2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4IDAtODguNC03MS42LTE2MC0xNjAtMTYweiIvPjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className="profile-text">
                  <span className="profile-name">{user?.name || siteConfig.author}</span>
                  <span className="profile-status">✦ ACTIVE</span>
                </div>
              </div>
              <Link to="/accounts" onClick={handleCloseMenu} className="profile-settings-btn" aria-label="Account Settings">
                <i className="fas fa-cog"></i>
              </Link>
            </div>
          ) : (
            <div className="mobile-profile-footer mobile-login-footer">
              <Link to="/accounts" onClick={handleCloseMenu} className="mobile-login-card">
                <div className="mobile-login-avatar">
                  <i className="fas fa-user-lock"></i>
                </div>
                <div className="mobile-login-text">
                  <span className="mobile-login-title">Login / Register</span>
                  <span className="mobile-login-status">Access your account</span>
                </div>
                <div className="mobile-login-btn-icon">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          )}
        </div>

        
        <div
          className="menu-toggle"
          id="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          aria-label="Toggle navigation"
        >
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </div>

        
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={handleCloseMenu}
              className="mobile-backdrop-overlay"
            />
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
