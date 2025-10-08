import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      zIndex: '1000',
    }}>
      <p style={{ margin: '0 0 1rem 0' }}>
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. Learn more in our{' '}
        <Link href="/privacy"><a style={{ color: '#4CAF50', textDecoration: 'underline' }}>Privacy Policy</a></Link>.
      </p>
      <button onClick={acceptCookies} style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
