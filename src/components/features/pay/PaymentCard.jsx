import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'qrcode';

const ACCOUNT_OPTIONS = [
  {
    id: 'normal',
    title: 'Personal Savings',
    badge: 'SBI Direct',
    subtitle: 'Mr. Suman Chakrabortty (SBI)',
    upiId: 'suman.9832@sbi',
    icon: 'fas fa-university',
    type: 'personal'
  },
  {
    id: 'merchant',
    title: 'Merchant Account',
    badge: 'Commercial',
    subtitle: 'SumanOnline Business Gateways',
    upiId: 'sumanonline.paytm@paytm',
    icon: 'fas fa-store',
    type: 'merchant',
    gateways: [
      {
        id: 'paytm',
        name: 'Paytm Business',
        payeeName: 'SumanOnline Paytm',
        upiId: 'sumanonline.paytm@paytm',
        icon: 'fas fa-wallet',
        color: '#00baf2'
      },
      {
        id: 'bharatpe',
        name: 'BharatPe Merchant',
        payeeName: 'SumanOnline BharatPe',
        upiId: 'bharatpe90204780562@yesbankltd',
        icon: 'fas fa-bolt',
        color: '#00d09c'
      },
      {
        id: 'gpay',
        name: 'Google Pay Business',
        payeeName: 'SumanOnline Google Pay',
        upiId: 'sumanonline@okaxis',
        icon: 'fab fa-google-pay',
        color: '#4285f4'
      },
      {
        id: 'phonepe',
        name: 'PhonePe Merchant',
        payeeName: 'SumanOnline PhonePe',
        upiId: 'sumanonline@ybl',
        icon: 'fas fa-mobile-alt',
        color: '#5f259f'
      }
    ]
  }
];

const PRESETS = ['50', '100', '250', '500', '1000', '2000', '5000'];

const PaymentCard = () => {
  const [accountType, setAccountType] = useState('normal');
  const [gatewayId, setGatewayId] = useState('paytm');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [shared, setShared] = useState(false);
  const [upiIntentUri, setUpiIntentUri] = useState('');

  const getActiveDetails = useCallback(() => {
    if (accountType === 'normal') {
      const normalAcc = ACCOUNT_OPTIONS[0];
      return {
        id: normalAcc.id,
        name: normalAcc.subtitle,
        typeLabel: normalAcc.title,
        upiId: normalAcc.upiId,
        icon: normalAcc.icon,
        badge: normalAcc.badge
      };
    }
    const merchantAcc = ACCOUNT_OPTIONS[1];
    const gw = merchantAcc.gateways.find((g) => g.id === gatewayId) || merchantAcc.gateways[0];
    return {
      id: gw.id,
      name: gw.payeeName,
      typeLabel: gw.name,
      upiId: gw.upiId,
      icon: gw.icon,
      badge: 'Merchant Verified',
      color: gw.color
    };
  }, [accountType, gatewayId]);

  const activeAccount = getActiveDetails();

  useEffect(() => {
    let isMounted = true;

    const generateCode = async () => {
      const current = getActiveDetails();
      const params = new URLSearchParams();
      params.append('pa', current.upiId);
      params.append('pn', current.name);
      params.append('cu', 'INR');
      if (amount && Number(amount) > 0) {
        params.append('am', Number(amount).toFixed(2));
      }
      if (purpose.trim()) {
        params.append('tn', purpose.trim());
      }

      const uri = `upi://pay?${params.toString()}`;
      setUpiIntentUri(uri);

      try {
        const url = await QRCode.toDataURL(uri, {
          width: 360,
          margin: 1.5,
          color: {
            dark: '#03071e',
            light: '#ffffff'
          },
          errorCorrectionLevel: 'H'
        });

        if (isMounted) {
          setQrCodeUrl(url);
        }
      } catch {
        if (isMounted) {
          setQrCodeUrl('');
        }
      }
    };

    generateCode();

    return () => {
      isMounted = false;
    };
  }, [getActiveDetails, amount, purpose]);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(activeAccount.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleShare = async () => {
    const pageUrl = window.location.href;
    const shareMessage = `Pay ₹${amount || 'any amount'} to ${activeAccount.name} via UPI (${activeAccount.upiId})`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SumanOnline UPI Payment',
          text: shareMessage,
          url: pageUrl
        });
      } catch {
        navigator.clipboard.writeText(pageUrl);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(pageUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const handleDownloadQR = () => {
    if (!qrCodeUrl) return;

    const canvas = document.createElement('canvas');
    canvas.width = 720;
    canvas.height = 1480;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const qrImg = new Image();
    qrImg.crossOrigin = 'anonymous';
    qrImg.onload = () => {
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, 720, 1480);

      const ribbon = ctx.createLinearGradient(0, 320, 720, 680);
      ribbon.addColorStop(0, '#0052cc');
      ribbon.addColorStop(0.5, '#1d4ed8');
      ribbon.addColorStop(1, '#0284c7');

      ctx.save();
      ctx.fillStyle = ribbon;
      ctx.beginPath();
      ctx.moveTo(0, 480);
      ctx.lineTo(720, 300);
      ctx.lineTo(720, 680);
      ctx.lineTo(0, 860);
      ctx.closePath();
      ctx.fill();

      const ribbonAccent = ctx.createLinearGradient(0, 480, 720, 860);
      ribbonAccent.addColorStop(0, 'rgba(255, 255, 255, 0.18)');
      ribbonAccent.addColorStop(1, 'rgba(0, 0, 0, 0.06)');
      ctx.fillStyle = ribbonAccent;
      ctx.beginPath();
      ctx.moveTo(0, 560);
      ctx.lineTo(720, 380);
      ctx.lineTo(720, 460);
      ctx.lineTo(0, 640);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#64748b';
      ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('Powered by', 360, 80);

      ctx.save();
      const logoIconX = 220;
      const logoIconY = 100;
      ctx.fillStyle = '#0052cc';
      ctx.beginPath();
      ctx.moveTo(logoIconX, logoIconY + 24);
      ctx.lineTo(logoIconX + 16, logoIconY + 4);
      ctx.lineTo(logoIconX + 28, logoIconY + 4);
      ctx.lineTo(logoIconX + 12, logoIconY + 24);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.moveTo(logoIconX + 12, logoIconY + 24);
      ctx.lineTo(logoIconX + 28, logoIconY + 4);
      ctx.lineTo(logoIconX + 36, logoIconY + 12);
      ctx.lineTo(logoIconX + 20, logoIconY + 32);
      ctx.closePath();
      ctx.fill();

      ctx.textAlign = 'left';
      ctx.fillStyle = '#0f172a';
      ctx.font = '800 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('SumanOnline.Com', logoIconX + 44, logoIconY + 24);
      ctx.restore();

      const cardX = 75;
      const cardY = 175;
      const cardW = 570;
      const cardH = 690;
      const cardR = 28;

      ctx.save();
      ctx.shadowColor = 'rgba(15, 23, 42, 0.16)';
      ctx.shadowBlur = 38;
      ctx.shadowOffsetY = 16;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(cardX, cardY, cardW, cardH, cardR);
      } else {
        ctx.rect(cardX, cardY, cardW, cardH);
      }
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = '#0f172a';
      ctx.font = '800 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('BHIM', cardX + 45, cardY + 58);

      ctx.fillStyle = '#f47920';
      ctx.beginPath();
      ctx.moveTo(cardX + 120, cardY + 42);
      ctx.lineTo(cardX + 134, cardY + 53);
      ctx.lineTo(cardX + 120, cardY + 64);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#00a651';
      ctx.beginPath();
      ctx.moveTo(cardX + 132, cardY + 42);
      ctx.lineTo(cardX + 146, cardY + 53);
      ctx.lineTo(cardX + 132, cardY + 64);
      ctx.closePath();
      ctx.fill();

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0f172a';
      ctx.fillText('UPI', cardX + cardW - 75, cardY + 58);

      ctx.fillStyle = '#00a651';
      ctx.beginPath();
      ctx.moveTo(cardX + cardW - 68, cardY + 42);
      ctx.lineTo(cardX + cardW - 54, cardY + 53);
      ctx.lineTo(cardX + cardW - 68, cardY + 64);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#f47920';
      ctx.beginPath();
      ctx.moveTo(cardX + cardW - 56, cardY + 42);
      ctx.lineTo(cardX + cardW - 42, cardY + 53);
      ctx.lineTo(cardX + cardW - 56, cardY + 64);
      ctx.closePath();
      ctx.fill();

      const qrSize = 430;
      const qrX = cardX + (cardW - qrSize) / 2;
      const qrY = cardY + 95;
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

      const badgeSize = 74;
      const badgeX = qrX + (qrSize - badgeSize) / 2;
      const badgeY = qrY + (qrSize - badgeSize) / 2;

      ctx.save();
      ctx.fillStyle = '#0b1e4f';
      ctx.beginPath();
      ctx.arc(badgeX + badgeSize / 2, badgeY + badgeSize / 2, badgeSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = '800 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('SO', badgeX + badgeSize / 2, badgeY + 47);
      ctx.restore();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#475569';
      ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('SCAN & PAY WITH ANY UPI APP', 360, cardY + cardH - 42);

      const railsY = 930;

      ctx.save();
      ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

      ctx.fillStyle = '#4285f4';
      ctx.textAlign = 'right';
      ctx.fillText('G', 205, railsY);
      ctx.fillStyle = '#3c4043';
      ctx.textAlign = 'left';
      ctx.fillText('Pay', 208, railsY);

      ctx.fillStyle = '#5f259f';
      ctx.beginPath();
      ctx.arc(325, railsY - 8, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('पे', 325, railsY - 2);

      ctx.fillStyle = '#5f259f';
      ctx.textAlign = 'left';
      ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('PhonePe', 348, railsY);

      ctx.fillStyle = '#002e6e';
      ctx.fillText('pay', 485, railsY);
      ctx.fillStyle = '#00baf2';
      ctx.fillText('tm', 525, railsY);
      ctx.restore();

      const detailsY = 1040;

      ctx.fillStyle = '#0f172a';
      ctx.font = '800 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(activeAccount.name, 360, detailsY);

      if (amount && Number(amount) > 0) {
        ctx.fillStyle = '#059669';
        ctx.font = '800 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillText(`₹${Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 360, detailsY + 55);

        ctx.fillStyle = '#2563eb';
        ctx.font = '600 24px monospace';
        ctx.fillText(activeAccount.upiId, 360, detailsY + 105);

        if (purpose.trim()) {
          ctx.fillStyle = '#64748b';
          ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.fillText(`Note: ${purpose.trim().substring(0, 45)}`, 360, detailsY + 148);
        }
      } else {
        ctx.fillStyle = '#2563eb';
        ctx.font = '700 26px monospace';
        ctx.fillText(activeAccount.upiId, 360, detailsY + 50);

        if (purpose.trim()) {
          ctx.fillStyle = '#64748b';
          ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.fillText(`Note: ${purpose.trim().substring(0, 45)}`, 360, detailsY + 95);
        } else {
          ctx.fillStyle = '#64748b';
          ctx.font = '500 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.fillText('Accepted from all UPI and Bank Mobile Apps', 360, detailsY + 95);
        }
      }

      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('Direct Bank Settlement • NPCI UPI 256-bit Encrypted Protocol', 360, 1420);

      const finalUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = finalUrl;
      link.download = `SumanOnline-UPI-Poster-${activeAccount.id}-${amount ? `${amount}INR` : 'open'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    qrImg.src = qrCodeUrl;
  };

  return (
    <div className="fintech-pay-wrapper">
      <motion.div
        className="fintech-pay-terminal"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="fintech-grid">

          <div className="fintech-config-panel">
            <div className="fintech-brand-header">
              <div className="fintech-brand-badge">
                <span className="live-pulse-dot" />
                <span>SECURE PAYMENT TERMINAL</span>
              </div>
              <h1 className="fintech-portal-title">SumanOnline Payment</h1>
              <p className="fintech-portal-desc">
                Instant UPI settlements powered by NPCI Unified Payments Interface. Zero transaction fees.
              </p>
            </div>

            <div className="fintech-section">
              <label className="fintech-label">Select Settlement Destination</label>
              <div className="fintech-account-tabs">
                {ACCOUNT_OPTIONS.map((opt) => {
                  const isActive = accountType === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`fintech-acc-tab ${isActive ? 'active' : ''}`}
                      onClick={() => setAccountType(opt.id)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="fintech-acc-tab-header">
                        <div className="fintech-acc-icon">
                          <i className={opt.icon} />
                        </div>
                        <span className="fintech-acc-badge">{opt.badge}</span>
                      </div>
                      <div className="fintech-acc-info">
                        <span className="fintech-acc-title">{opt.title}</span>
                        <span className="fintech-acc-sub">{opt.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <AnimatePresence>
                {accountType === 'merchant' && (
                  <motion.div
                    className="fintech-gateway-selector"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="fintech-sublabel">Select Merchant Gateway</span>
                    <div className="fintech-gateway-pills">
                      {ACCOUNT_OPTIONS[1].gateways.map((gw) => {
                        const isGwActive = gatewayId === gw.id;
                        return (
                          <button
                            type="button"
                            key={gw.id}
                            className={`fintech-gw-btn ${isGwActive ? 'active' : ''}`}
                            onClick={() => setGatewayId(gw.id)}
                          >
                            <i className={gw.icon} style={{ color: gw.color }} />
                            <span>{gw.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="fintech-verified-banner">
              <div className="verified-shield-icon">
                <i className="fas fa-shield-halved" />
              </div>
              <div className="verified-details">
                <span className="verified-caption">Verified Payee:</span>
                <span className="verified-name">
                  {activeAccount.name} <span className="verified-tick">✓ Verified Merchant</span>
                </span>
              </div>
            </div>

            <div className="fintech-section">
              <label htmlFor="fintech-amount-field" className="fintech-label">Payment Amount (INR)</label>
              <div className="fintech-amount-box">
                <span className="fintech-currency-sign">₹</span>
                <input
                  id="fintech-amount-field"
                  type="number"
                  min="1"
                  step="any"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="fintech-amount-input"
                />
                {amount && (
                  <button
                    type="button"
                    className="fintech-input-clear"
                    onClick={() => setAmount('')}
                    aria-label="Clear amount"
                  >
                    <i className="fas fa-times" />
                  </button>
                )}
              </div>

              <div className="fintech-presets-row">
                {PRESETS.map((p) => {
                  const isPresetActive = amount === p;
                  return (
                    <button
                      type="button"
                      key={p}
                      className={`fintech-preset-chip ${isPresetActive ? 'active' : ''}`}
                      onClick={() => setAmount(p)}
                    >
                      ₹{p}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="fintech-section">
              <label htmlFor="fintech-note-field" className="fintech-label">Payment Purpose / Note (Optional)</label>
              <input
                id="fintech-note-field"
                type="text"
                placeholder="e.g. Web Development Services, Hosting, Consultation"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="fintech-note-input"
                maxLength={70}
              />
            </div>

            <div className="fintech-security-footer">
              <i className="fas fa-lock" />
              <span>Direct Bank-to-Bank Transfer • 256-Bit SSL Encrypted Protocol</span>
            </div>
          </div>


          <div className="fintech-terminal-panel">
            <div className="fintech-terminal-card">

              <div className="terminal-card-top">
                <div className="terminal-live-status">
                  <span className="terminal-dot" />
                  <span>UPI 2.0 INTENT READY</span>
                </div>
                <span className="terminal-type-pill">{activeAccount.typeLabel}</span>
              </div>

              <div className="terminal-qr-viewport">
                {qrCodeUrl ? (
                  <div className="qr-container-surface">
                    <img src={qrCodeUrl} alt="UPI Payment QR Code" className="terminal-qr-img" />
                    <div className="qr-center-brand">
                      <i className="fas fa-qrcode" />
                    </div>
                  </div>
                ) : (
                  <div className="qr-loading-placeholder">
                    <i className="fas fa-spinner fa-spin" />
                  </div>
                )}
              </div>

              <div className="terminal-instruction">
                <i className="fas fa-camera" />
                <span>Scan with Google Pay, PhonePe, Paytm, or BHIM</span>
              </div>

              <div className="terminal-receipt">
                <div className="receipt-row total-row">
                  <span className="receipt-key">Total Payable</span>
                  <span className="receipt-value receipt-amount">
                    {amount && Number(amount) > 0 ? `₹${Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}` : 'Open Custom Amount'}
                  </span>
                </div>

                <div className="receipt-row">
                  <span className="receipt-key">Beneficiary</span>
                  <span className="receipt-value">{activeAccount.name}</span>
                </div>

                {purpose && (
                  <div className="receipt-row">
                    <span className="receipt-key">Purpose Note</span>
                    <span className="receipt-value">{purpose}</span>
                  </div>
                )}

                <div className="receipt-upi-box" onClick={handleCopyUpi} role="button" tabIndex={0}>
                  <div className="upi-code-col">
                    <span className="upi-id-label">UPI ID</span>
                    <code className="upi-id-value">{activeAccount.upiId}</code>
                  </div>
                  <div className="upi-copy-action">
                    <i className={`fas fa-${copiedUpi ? 'check' : 'copy'}`} />
                    <span>{copiedUpi ? 'Copied' : 'Copy'}</span>
                  </div>
                </div>
              </div>

              <div className="terminal-actions">
                {upiIntentUri && (
                  <a href={upiIntentUri} className="terminal-btn-primary">
                    <i className="fas fa-bolt" />
                    <span>Pay with Installed UPI App</span>
                  </a>
                )}

                <div className="terminal-btn-row">
                  <button type="button" onClick={handleShare} className="terminal-btn-secondary">
                    <i className="fas fa-share-nodes" />
                    <span>{shared ? 'Copied Link' : 'Share QR'}</span>
                  </button>

                  <button type="button" onClick={handleDownloadQR} className="terminal-btn-secondary">
                    <i className="fas fa-download" />
                    <span>Download QR</span>
                  </button>
                </div>
              </div>

              <div className="terminal-apps-bar">
                <span className="apps-bar-label">Supported Payment Rails</span>
                <div className="apps-bar-icons">
                  <span className="app-tag"><i className="fab fa-google-pay" /> GPay</span>
                  <span className="app-tag"><i className="fas fa-mobile-screen" /> PhonePe</span>
                  <span className="app-tag"><i className="fas fa-wallet" /> Paytm</span>
                  <span className="app-tag"><i className="fas fa-building-columns" /> BHIM</span>
                  <span className="app-tag"><i className="fab fa-amazon-pay" /> Amazon Pay</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default PaymentCard;
