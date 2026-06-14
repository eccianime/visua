import { Button } from '@/components/shared/button';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

export function GenerateButton() {
  const { t } = useTranslation();
  const { image, roomType, roomStyle, colorPalette } = useGenerateStore();

  const isDisabled = !image || !roomType || !roomStyle?.id || !colorPalette?.id;

  const handleGenerate = () => {
    router.push('/generate/please-wait');
  };

  return <Button onPress={handleGenerate} title={t('generate.generate')} disabled={isDisabled} />;
}
