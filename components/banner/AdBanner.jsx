import { useEffect } from 'react'
import Script from 'next/script'

const AdBanner = () => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({})
		} catch (e) {
			console.error('Adsense error:', e)
		}
	}, [])

	return (
		<>
			<Script
				async
				strategy="afterInteractive"
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732"
				crossOrigin="anonymous"
			/>

			<ins
  className="adsbygoogle"
  style={{ display: 'block', width: '100%', minHeight: '250px' }}
  data-ad-client="ca-pub-9872384661755732"
  data-ad-slot="3612719902"
  data-ad-format="auto"
  data-full-width-responsive="true"
></ins>

		</>
	)
}

export default AdBanner
