import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
         <Script id="chatbot-config" strategy="beforeInteractive">
            {`
              window.embeddedChatbotConfig = {
                chatbotId: "S80SyICVjKTDP42wTT9EI",
                domain: "www.chatbase.co",
              };
            `}
          </Script>
          {/* Chatbot embed script */}
          <Script
            src="https://www.chatbase.co/embed.min.js"
            data-chatbot-id="S80SyICVjKTDP42wTT9EI"
            data-domain="www.chatbase.co"
            strategy="lazyOnload"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
