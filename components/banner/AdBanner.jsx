import { useEffect } from 'react';

const AdBanner = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Adsense error:', e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9872384661755732"
            data-ad-slot="3612719902"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
};

export default AdBanner;
