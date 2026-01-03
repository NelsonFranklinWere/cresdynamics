'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(gtagScript);

    const gtagConfig = document.createElement('script');
    gtagConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        custom_map: {
          'custom_parameter_1': 'contact_form_submissions',
          'custom_parameter_2': 'strategy_session_requests'
        }
      });
    `;
    document.head.appendChild(gtagConfig);

    // Track contact form submissions
    const handleContactFormSubmit = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
    };

    // Track strategy session requests
    const handleStrategySessionRequest = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'strategy_session_request', {
          event_category: 'conversion',
          event_label: 'strategy_session',
          value: 1
        });
      }
    };

    // Add event listeners to forms
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    // Add event listeners to strategy session buttons
    const strategyButtons = document.querySelectorAll('a[href*="contact"], button');
    strategyButtons.forEach(button => {
      button.addEventListener('click', handleStrategySessionRequest);
    });

    return () => {
      if (contactForm) {
        contactForm.removeEventListener('submit', handleContactFormSubmit);
      }
      strategyButtons.forEach(button => {
        button.removeEventListener('click', handleStrategySessionRequest);
      });
    };
  }, []);

  return null;
}
