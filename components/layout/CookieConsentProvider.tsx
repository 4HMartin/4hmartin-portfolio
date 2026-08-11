'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'
import * as CookieConsent from 'vanilla-cookieconsent'
import { cookieConsentConfig } from '@/lib/cookieconsent-config'

// Import the default stylesheet (can be overridden)
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export default function CookieConsentProvider() {
  const locale = useLocale()

  useEffect(() => {
    // Update the default language in config based on current locale
    const config = {
      ...cookieConsentConfig,
      language: {
        ...cookieConsentConfig.language,
        default: locale as 'en' | 'es',
      },
    }
    CookieConsent.run(config)
  }, [locale])

  return null // Renders no visible markup itself
}
