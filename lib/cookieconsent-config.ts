import type { CookieConsentConfig } from 'vanilla-cookieconsent'

export const cookieConsentConfig: CookieConsentConfig = {
  // Persist consent for 365 days
  cookie: {
    name: 'cc_cookie',
    expiresAfterDays: 365,
  },

  // Called when the user accepts/rejects cookies (on load and on change)
  onConsent: ({ cookie }) => updateGoogleConsent(cookie.categories),
  onChange:  ({ cookie }) => updateGoogleConsent(cookie.categories),

  categories: {
    necessary: {
      enabled: true,   // Always on
      readOnly: true,  // User cannot disable
    },
    analytics: {
      enabled: false,
      autoClear: {
        // Automatically delete these cookies if analytics is rejected
        cookies: [
          { name: /^(_ga)/ },
          { name: '_gid' },
        ],
      },
    },
    marketing: {
      enabled: false,
      autoClear: {
        cookies: [
          { name: /^(_gcl)/ },
        ],
      },
    },
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. By clicking "Accept All" you consent to our use of cookies.',
          acceptAllBtn:    'Accept All',
          acceptNecessaryBtn: 'Reject All',
          showPreferencesBtn: 'Manage Preferences',
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn:       'Accept All',
          acceptNecessaryBtn: 'Reject All',
          savePreferencesBtn: 'Save Preferences',
          closeIconLabel:     'Close',
          sections: [
            {
              title: 'Strictly Necessary',
              description:
                'These cookies are required for the website to function and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics',
              description:
                'These cookies help us understand how visitors interact with our website (Google Analytics 4).',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: { name: 'Cookie', domain: 'Domain', desc: 'Description' },
                body: [
                  { name: '_ga',  domain: '4hmartin.com', desc: 'GA4 — distinguishes users (2 years)' },
                  { name: '_ga_*', domain: '4hmartin.com', desc: 'GA4 — session persistence (2 years)' },
                  { name: '_gid', domain: '4hmartin.com', desc: 'GA4 — distinguishes users (24 hours)' },
                ],
              },
            },
            {
              title: 'Marketing',
              description:
                'These cookies are used to track visitors across websites for advertising purposes.',
              linkedCategory: 'marketing',
            },
          ],
        },
      },
      es: {
        consentModal: {
          title: 'Utilizamos Cookies',
          description:
            'Utilizamos cookies para mejorar tu experiencia de navegación, ofrecerte contenido personalizado y analizar nuestro tráfico. Al hacer clic en «Aceptar todo», das tu consentimiento para que utilicemos cookies.',
          acceptAllBtn:    'Aceptar todo',
          acceptNecessaryBtn: 'Rechazar todo',
          showPreferencesBtn: 'Configurar preferencias',
        },
        preferencesModal: {
          title: 'Preferencia de Cookies',
          acceptAllBtn:       'Aceptar todo',
          acceptNecessaryBtn: 'Rechazar todo',
          savePreferencesBtn: 'Guardar preferencias',
          closeIconLabel:     'Cerrar',
          sections: [
            {
              title: 'Estrictamente necesario',
              description:
                'Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden desactivar.',
              linkedCategory: 'necesario',
            },
            {
              title: 'Analítica',
              description:
                'Estas cookies nos ayudan a comprender cómo interactúan los visitantes con nuestro sitio web (Google Analytics 4).',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: { name: 'Cookie', domain: 'Domain', desc: 'Description' },
                body: [
                  { name: '_ga',  domain: '4hmartin.com', desc: 'GA4 — distingue a los usuarios (2 años)' },
                  { name: '_ga_*', domain: '4hmartin.com', desc: 'GA4 — persistencia de la sesión (2 años)' },
                  { name: '_gid', domain: '4hmartin.com', desc: 'GA4 — distingue a los usuarios (24 horas)' },
                ],
              },
            },
            {
              title: 'Marketing',
              description:
                'Estas cookies se utilizan para realizar un seguimiento de los visitantes en distintos sitios web con fines publicitarios.',
              linkedCategory: 'marketing',
            },
          ],
        },
      },
    },
  },
}

// Helper: push Consent Mode v2 update to dataLayer
function updateGoogleConsent(acceptedCategories: string[]) {
  const has = (cat: string) => acceptedCategories.includes(cat)

  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('consent', 'update', {
    analytics_storage:       has('analytics') ? 'granted' : 'denied',
    functionality_storage:   has('analytics') ? 'granted' : 'denied',
    personalization_storage: has('analytics') ? 'granted' : 'denied',
    ad_storage:              has('marketing') ? 'granted' : 'denied',
    ad_user_data:            has('marketing') ? 'granted' : 'denied',
    ad_personalization:      has('marketing') ? 'granted' : 'denied',
  })
}