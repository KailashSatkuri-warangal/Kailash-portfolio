import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="google-adsense-account" content="ca-pub-9872384661755732" />
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732"
                        crossOrigin="anonymous"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
