import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CR2DHCW8BQ"
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CR2DHCW8BQ');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
