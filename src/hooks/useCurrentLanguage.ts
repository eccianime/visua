import { useTranslation } from 'react-i18next';

export function useCurrentLanguage() {
  const { t, i18n } = useTranslation();
  return {
    t,
    language: i18n.resolvedLanguage,
  };
}
