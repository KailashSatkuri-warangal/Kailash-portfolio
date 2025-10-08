
import { useEffect } from 'react';

const AdBanner = ({ adSlot, adFormat = 'auto', adResponsive = true }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9872384661755732"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={adResponsive}
    ></ins>
  );
};

export default AdBanner;
