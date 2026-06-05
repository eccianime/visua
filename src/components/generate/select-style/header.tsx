import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { XIcon } from 'phosphor-react-native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function SelectStyleHeader() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const { setRoomStyle } = useGenerateStore();

  const handleClose = useCallback(() => {
    router.back();
    setRoomStyle({
      name: '',
      description: '',
    });
  }, []);

  return (
    <View className="mb-6 flex-row items-center gap-3 px-6">
      <Pressable onPress={handleClose} className="p-1">
        <XIcon size={20} color={isDark ? colors.white : colors.black} />
      </Pressable>
      <Text className="font-montserrat-semibold text-2xl text-black dark:text-white">
        {t('generate.roomStyleSelector.selectStyle')}
      </Text>
    </View>
  );
}
