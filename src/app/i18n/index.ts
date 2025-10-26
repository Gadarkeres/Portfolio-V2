import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'pt',
		debug: process.env.NODE_ENV === 'development',
		ns: ['common'],
		defaultNS: 'common',
		resources: resources,
		 detection: {
      order: ['cookie'],
      caches: ['cookie'],
      lookupCookie: 'i18next',
      cookieMinutes: 10080, 
      cookieDomain: window.location.hostname,
    },
		react: {
			bindI18n: 'languageChanged',
			transSupportBasicHtmlNodes: true,
			transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
			useSuspense: false,
		},
	});

export default i18n;
