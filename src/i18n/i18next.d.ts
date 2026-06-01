import translationEn from '@/i18n/locales/en';

type TranslationKeys = typeof translationEn;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationKeys;
    };
  }
}
