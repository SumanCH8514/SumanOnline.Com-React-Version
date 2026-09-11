import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';

const locationPins = [
  { id: 0, flag: '🇮🇳', country: 'Kolkata HQ', left: '12.85%', top: '64.5%', cx: 180, cy: 271 },
  { id: 1, flag: '🎬', country: 'Media CDN', left: '30%', top: '57.4%', cx: 420, cy: 241 },
  { id: 2, flag: '⚡', country: 'AI Engine', left: '50%', top: '54.8%', cx: 700, cy: 230 },
  { id: 3, flag: '☁️', country: 'Cloud Cluster', left: '70%', top: '57.4%', cx: 980, cy: 241 },
  { id: 4, flag: '🛡️', country: 'Global Gateway', left: '87.15%', top: '64.5%', cx: 1220, cy: 271 }
];

const sparkles = Array.from({ length: 35 }, (_, i) => {
  const angle = (Math.PI / 34) * i + Math.PI;
  const radiusX = 860 + ((i % 5) - 2) * 5;
  const radiusY = 200 + ((i % 5) - 2) * 4;
  const cx = 700 + radiusX * Math.cos(angle);
  const cy = 430 + radiusY * Math.sin(angle);
  const r = 0.8 + ((i * 7) % 15) / 10;
  const opacity = 0.3 + ((i * 13) % 50) / 100;
  return { id: i, cx, cy, r, opacity };
});

const socialLinksList = [
  { name: 'Telegram', url: siteConfig.socialLinks.telegram },
  { name: 'WhatsApp', url: siteConfig.socialLinks.whatsapp },
  { name: 'LinkedIn', url: siteConfig.socialLinks.linkedin },
  { name: 'Twitter', url: siteConfig.socialLinks.twitter },
  { name: 'GitHub', url: siteConfig.socialLinks.github }
];

const Footer = () => {
  const [activePinIndex, setActivePinIndex] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePinIndex((prev) => (prev + 1) % locationPins.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <footer className="velara-footer-root desktop-only-footer">
        <div className="velara-globe-wrapper">
          <div className="velara-globe-top-fade" />

          <svg
            viewBox="0 0 1400 420"
            className="velara-globe-svg"
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <radialGradient id="planetGrad" cx="50%" cy="100%" r="100%">
                <stop offset="0%" stopColor="#4361ee" />
                <stop offset="40%" stopColor="#240046" />
                <stop offset="75%" stopColor="#10002b" />
                <stop offset="100%" stopColor="#010100" />
              </radialGradient>

              <filter id="velaraGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <ellipse
              cx="700"
              cy="420"
              rx="900"
              ry="220"
              fill="url(#planetGrad)"
            />

            <ellipse
              cx="700"
              cy="430"
              rx="860"
              ry="200"
              fill="none"
              stroke="#4cc9f0"
              strokeWidth="2.5"
              opacity="0.85"
            />

            <ellipse
              cx="700"
              cy="430"
              rx="860"
              ry="200"
              fill="none"
              stroke="#7209b7"
              strokeWidth="14"
              opacity="0.2"
              filter="url(#velaraGlow)"
            />

            <motion.path
              d="M -160 430 A 860 200 0 0 1 1560 430"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
              strokeDasharray="140 1800"
              animate={{ strokeDashoffset: [1940, -1940] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              filter="url(#velaraGlow)"
            />

            {sparkles.map((sp) => (
              <circle
                key={sp.id}
                cx={sp.cx}
                cy={sp.cy}
                r={sp.r}
                fill="#c77dff"
                opacity={sp.opacity}
              />
            ))}

            {locationPins.map((pin, idx) => {
              const isActive = idx === activePinIndex;
              return (
                <g key={pin.id}>
                  <motion.circle
                    cx={pin.cx}
                    cy={pin.cy}
                    r="16"
                    fill="#7209b7"
                    animate={{
                      opacity: isActive ? 0.8 : 0.25,
                      scale: isActive ? 1.3 : 1
                    }}
                    transition={{ duration: 0.6 }}
                    filter="url(#velaraGlow)"
                  />
                  <motion.circle
                    cx={pin.cx}
                    cy={pin.cy}
                    r={isActive ? 6 : 4}
                    fill={isActive ? '#ffffff' : '#4cc9f0'}
                    animate={{
                      r: isActive ? 6 : 4
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </g>
              );
            })}
          </svg>

          {locationPins.map((pin, idx) => {
            const isActive = idx === activePinIndex;
            return (
              <motion.div
                key={pin.id}
                className="velara-pin-badge-wrapper"
                style={{ left: pin.left, top: pin.top }}
                initial={{ x: '-50%', y: '-100%' }}
                animate={{
                  x: '-50%',
                  y: isActive ? '-106%' : '-100%',
                  opacity: isActive ? 1 : 0.45,
                  scale: isActive ? 1.06 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={`velara-pin-pill ${isActive ? 'active' : ''}`}>
                  <span className="velara-pin-flag">{pin.flag}</span>
                  <span className="velara-pin-title">{pin.country}</span>
                </div>
                <motion.div
                  className="velara-pin-dropline"
                  animate={{
                    height: isActive ? 64 : 48,
                    opacity: isActive ? 1 : 0.45
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="velara-links-section">
          <div className="velara-links-top-fade" />

          <div className="velara-links-grid">
            <div className="velara-col">
              <h4>Quick Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/projects">Projects Hub</Link></li>
                <li><Link to="/contact">Contact Support</Link></li>
                <li><Link to="/pay">Payment Gateway</Link></li>
              </ul>
            </div>

            <div className="velara-col">
              <h4>Digital Ecosystem</h4>
              <ul>
                <li><a href="https://movies.sumanonline.com/" target="_blank" rel="noreferrer">HD Movies & Cinema</a></li>
                <li><Link to="/services">Cloud File Storage</Link></li>
                <li><Link to="/services">AI Image Generation</Link></li>
                <li><Link to="/services">Style Conversion</Link></li>
                <li><Link to="/services">Developer Utilities</Link></li>
              </ul>
            </div>

            <div className="velara-col">
              <h4>Direct Tools</h4>
              <ul>
                <li><Link to="/services">PDF Converter Suite</Link></li>
                <li><Link to="/services">Media Downloader</Link></li>
                <li><Link to="/services">QR Code Generator</Link></li>
                <li><a href={siteConfig.socialLinks.telegramBot} target="_blank" rel="noreferrer">Telegram AI Bot</a></li>
                <li><Link to="/accounts">User Account Portal</Link></li>
              </ul>
            </div>

            <div className="velara-col">
              <h4>About SumanOnline</h4>
              <ul>
                <li><span className="velara-static-text">{siteConfig.description}</span></li>
                <li><a href={`mailto:${siteConfig.supportEmail}`} className="velara-highlight-link">{siteConfig.supportEmail}</a></li>
                <li><span className="velara-static-text">{siteConfig.location}</span></li>
              </ul>
            </div>
          </div>

          <div className="velara-social-row">
            {socialLinksList.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="velara-social-btn"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                whileTap={{ scale: 0.96 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="velara-copyright-bar">
          <div className="velara-copyright-content">
            <p>
              &copy; {siteConfig.startYear}-{currentYear} {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="velara-status-indicator">
              <span className="velara-status-pulse" />
              <span>SumanOnline Cloud Active • All Services Operational</span>
            </div>
          </div>
        </div>

        <div className="velara-brand-signoff">
          <motion.h1
            className="velara-brand-wordmark"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            SUMANONLINE
          </motion.h1>
          <div className="velara-brand-bottom-fade" />
        </div>
      </footer>

      <footer className="mobile-classic-footer mobile-only-footer">
        <div className="mobile-footer-content">
          <div className="mobile-footer-column">
            <h3>About SumanOnline</h3>
            <div className="mobile-ftr-logo-wrap">
              <img
                src="https://sumanonline.com/Projects/Ghibli/assets/img/Gemini_Generated_Image_anod90anod90anod.jpg"
                alt="SumanOnline Logo"
                className="mobile-ftr-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p className="mobile-ftr-desc">
              SumanOnline.Com, Suman Online, Suman Online Web, Suman Chakrabortty.
              <br />
              We provide premium web services to enhance your digital experience with high-quality solutions.
            </p>
            <div className="mobile-social-links">
              <a href={siteConfig.socialLinks.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
              <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href={siteConfig.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            </div>
          </div>

          <div className="mobile-footer-column">
            <h3>Quick Links</h3>
            <p><i className="fa-solid fa-globe"></i> <a href="https://sumanonline.likesyou.org/" target="_blank" rel="noreferrer">SumanOnline.likesyou.org</a></p>
            <p><span className="rs-symbol">₨</span> <Link to="/pay">Pay Online via QR</Link></p>
            <p><i className="fa-solid fa-music"></i> <a href="https://sumanmusic.0-0-0.click/" target="_blank" rel="noreferrer">Music</a></p>
            <p><i className="fa-solid fa-link"></i> <a href="https://url.sumanonline.com/" target="_blank" rel="noreferrer">URL Shortener</a></p>
            <p><i className="fa-solid fa-film"></i> <a href="https://plyr.0-0-0.click/" target="_blank" rel="noreferrer">Movie Player</a></p>
          </div>

          <div className="mobile-footer-column">
            <h3>Page Links</h3>
            <p><i className="fas fa-angle-right"></i> <Link to="/contact">Contact Us</Link></p>
            <p><i className="fas fa-angle-right"></i> <Link to="/contact">Return policy</Link></p>
            <p><i className="fas fa-angle-right"></i> <Link to="/contact">Terms and Conditions</Link></p>
            <p><i className="fas fa-angle-right"></i> <Link to="/contact">Privacy Policy</Link></p>
          </div>

          <div className="mobile-footer-column">
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope"></i> <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p>
            <p><i className="fab fa-telegram"></i> <a href="https://t.me/Contact_SumanOnline_bot" target="_blank" rel="noreferrer">Contact On Telegram</a></p>
          </div>
        </div>

        <div className="mobile-copyright-bar">
          <p>
            &copy; {siteConfig.startYear}-{currentYear}{' '}
            <a href="https://sumanonline.com" target="_blank" rel="noreferrer">SumanOnline.com</a>
            {' '}| All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
