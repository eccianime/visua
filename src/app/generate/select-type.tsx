import { Button, RoomList, ScreenHeader } from '@/components';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

export default function SelectType() {
  const { t } = useTranslation();
  const { roomType, setRoomType } = useGenerateStore();

  const handleClean = useCallback(() => {
    setRoomType('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pt-safe  p-6 grow"
      >
        <ScreenHeader title={t('generate.roomTypeSelector.selectType')} onClose={router.back} />
        <RoomList />
      </ScrollView>
      {!!roomType && (
        <View className="p-6">
          <Button title={t('generate.roomTypeSelector.cleanSelection')} onPress={handleClean} />
        </View>
      )}
    </View>
  );
}
