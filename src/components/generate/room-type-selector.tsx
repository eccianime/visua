import colors from '@/config/colors';
import ROOM_TYPES from '@/data/room-type';
import { useTheme } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { ArmchairIcon } from 'phosphor-react-native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function RoomTypeSelector() {
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const { roomType } = useGenerateStore();

  const handlePress = useCallback(() => {
    router.push('/generate/select-type');
  }, []);

  const Icon = ROOM_TYPES[i18n.language as keyof typeof ROOM_TYPES].find((item) =>
    item.items.includes(roomType)
  )?.icon;

  return (
    <View className="w-1/2 flex-1 pr-1.5">
      <Pressable
        className="items-center justify-center rounded-xl bg-gray-100 p-4 dark:bg-slate-700"
        onPress={handlePress}
      >
        <View
          className={`size-[60px] items-center justify-center rounded-full border  ${roomType ? 'border-white bg-gold' : 'border-gray-300 dark:border-slate-500'}`}
        >
          {roomType && Icon ? (
            <Icon size={36} color={colors.white} />
          ) : (
            <ArmchairIcon size={36} color={isDark ? colors.background : colors.dark.background} />
          )}
        </View>
        <View className="h-[60px] justify-center">
          <Text className="text-center  font-montserrat-semibold text-base text-black dark:text-white">
            {roomType || t('generate.roomType')}
          </Text>
          <Text className="text-center font-montserrat-regular text-sm text-gray-500 dark:text-gray-400">
            {roomType ? t('generate.tapToChange') : t('generate.selectType')}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
