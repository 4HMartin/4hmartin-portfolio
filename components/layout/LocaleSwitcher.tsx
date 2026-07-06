'use client';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSelector() {
    const locale = useLocale();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'es', name: 'Español', flag: 'ES' },
        { code: 'ca', name: 'Català', flag: 'CA' },
        { code: 'en', name: 'English', flag: 'GB' },
        { code: 'de', name: 'Deutsch', flag: 'DE' },
    ];

    const currentLanguage = languages.find(lang => lang.code === locale);

    const handleLanguageChange = (code: string) => {
        setIsOpen(false);
        router.replace('/', { locale: code });
    };

  return (
    <div className="relative inline-block text-left w-full">
      {/* Botón del selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-3 w-full justify-center bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 lg:w-fit"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-bold text-txt-body">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-txt-body transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menú de opciones */}
          <div className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    locale === language.code
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span>{language.name}</span>
                  {locale === language.code && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}