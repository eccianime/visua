import { useGenerateStore } from '@/store/generateStore';
import { useTranslation } from 'react-i18next';
import { Button } from '../shared/button';

export function GenerateButton() {
  const { t } = useTranslation();
  const { image, roomType, roomStyle, colorPalette } = useGenerateStore();

  const isDisabled = !image || !roomType || !roomStyle || !colorPalette;

  return <Button title={t('generate.generate')} disabled={isDisabled} />;
}
