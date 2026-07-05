import { Button, PaletteList, ScreenHeader } from '@/components';
import { useCurrentLanguage } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { ScrollView, View } from 'react-native';

export default function SelectPalette() {
  const { t } = useCurrentLanguage();
  const { colorPalette, setColorPalette } = useGenerateStore();

  const handleClean = useCallback(() => {
    setColorPalette(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-background dark:bg-dark-background"
        contentContainerClassName="pt-safe p-6 flex-grow"
      >
        <ScreenHeader title={t('generate.paletteSelector.selectPalette')} onClose={router.back} />
        <PaletteList />
      </ScrollView>
      {!!colorPalette?.id && (
        <View className="p-6">
          <Button title={t('generate.paletteSelector.cleanSelection')} onPress={handleClean} />
        </View>
      )}
    </View>
  );
}
