import { Button, ScreenHeader, StyleList } from '@/components';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

export default function SelectStyle() {
  const { t } = useTranslation();
  const { roomStyle, setRoomStyle } = useGenerateStore();

  const handleClean = useCallback(() => {
    setRoomStyle(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="py-safe flex-grow px-2"
      >
        <ScreenHeader title={t('generate.roomStyleSelector.selectStyle')} onClose={router.back} />
        <StyleList />
      </ScrollView>
      {!!roomStyle?.id && (
        <View className="p-6">
          <Button title={t('generate.roomStyleSelector.cleanSelection')} onPress={handleClean} />
        </View>
      )}
    </View>
  );
}
