'use client';

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="aqua-cookie-consent"
      style={{
        background: '#1f2937',
        borderTop: '1px solid #374151',
        alignItems: 'center',
        padding: '12px 24px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        zIndex: 9999,
      }}
      buttonStyle={{
        background: '#0077b6',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: '600',
        borderRadius: '6px',
        padding: '8px 20px',
        margin: '4px 12px 4px 0',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: '#9ca3af',
        fontSize: '13px',
        fontWeight: '600',
        borderRadius: '6px',
        padding: '8px 20px',
        margin: '4px 32px 4px 12px',
        border: '1px solid #4b5563',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      }}
      contentStyle={{ margin: '0', flex: '1 1 auto' }}
    >
      <span style={{ color: '#f9fafb' }}>
        We use cookies to improve your experience on our site and to personalise content. By clicking{' '}
        <strong>Accept All</strong>, you agree to our use of cookies.{' '}
        <Link
          href="/privacy"
          style={{ color: '#38bdf8', textDecoration: 'underline' }}
        >
          Privacy Policy
        </Link>{' '}
        &amp;{' '}
        <Link
          href="/cookies"
          style={{ color: '#38bdf8', textDecoration: 'underline' }}
        >
          Cookie Policy
        </Link>
        .
      </span>
    </CookieConsent>
  );
}
