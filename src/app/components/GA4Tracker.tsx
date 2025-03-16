"use client";

import { useEffect } from 'react';

const GA4Tracker = () => {
  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

    if (measurementId) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `;
      document.head.appendChild(script2);
    } else {
      console.error('GA4 Measurement ID is not set in environment variables.');
    }
  }, []);

  return null;
};

export default GA4Tracker;