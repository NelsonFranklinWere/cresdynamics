'use client';

import { useEffect } from 'react';

/** Events pages use a dark canvas — override root body bg so the glass nav never shows white. */
export default function EventsBodyTheme() {
  useEffect(() => {
    const html = document.documentElement;
    const prevHtml = html.style.backgroundColor;
    const prevBody = document.body.style.backgroundColor;

    html.style.backgroundColor = '#060B18';
    document.body.style.backgroundColor = '#060B18';

    return () => {
      html.style.backgroundColor = prevHtml;
      document.body.style.backgroundColor = prevBody;
    };
  }, []);

  return null;
}
