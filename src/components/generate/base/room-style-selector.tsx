import colors from '@/config/colors';
import ROOM_STYLES from '@/data/room-styles';
import { useCurrentLanguage, useTheme } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { CrownIcon } from 'phosphor-react-native';
import { useCallback } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export function RoomStyleSelector() {
  const { isDark } = useTheme();
  const { t, language } = useCurrentLanguage();
  const { roomStyle } = useGenerateStore();

  const handlePress = useCallback(() => {
    router.push('/generate/select-style');
  }, []);

  const imageUrl = ROOM_STYLES.find((item) => item.id === roomStyle?.id)?.imageUrl;

  const hasRoomStyle = roomStyle?.id && imageUrl;

  return (
    <View className="w-1/2 flex-1 pr-1.5">
      <Pressable
        className="items-center justify-center rounded-xl bg-gray-100 p-4 dark:bg-slate-700"
        onPress={handlePress}
      >
        <View
          className={`size-[60px] items-center justify-center overflow-hidden rounded-full border-[2px]  ${hasRoomStyle ? 'border-white' : 'border-gray-500 dark:border-slate-500'}`}
        >
          {hasRoomStyle ? (
            <Image source={{ uri: imageUrl }} className="size-[60px]" resizeMode="cover" />
          ) : (
            <CrownIcon size={36} color={isDark ? colors.background : colors.dark.background} />
          )}
        </View>
        <View className="h-[60px] justify-center">
          <Text className="text-center  font-montserrat-semibold text-base text-black dark:text-white">
            {roomStyle?.id
              ? roomStyle.name[language as keyof typeof roomStyle.name]
              : t('generate.roomStyleSelector.roomStyle')}
          </Text>
          <Text className="text-center font-montserrat-regular text-sm text-gray-500 dark:text-gray-400">
            {roomStyle?.id
              ? t('generate.roomStyleSelector.tapToChange')
              : t('generate.roomStyleSelector.selectStyle')}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
