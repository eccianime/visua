import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { PaletteIcon } from 'phosphor-react-native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function ColorPaletteSelector() {
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const { colorPalette } = useGenerateStore();

  const handlePress = useCallback(() => {
    router.push('/generate/select-palette');
  }, []);

  return (
    <Pressable
      className="mb-4 flex-row items-center justify-between gap-3 rounded-xl bg-gray-100 px-6 py-4 dark:bg-slate-700"
      onPress={handlePress}
    >
      <View className="flex-row items-center gap-3">
        {!colorPalette.name && (
          <View className="items-center justify-center rounded-full border border-gray-300 p-3 dark:border-slate-500">
            <PaletteIcon size={24} color={isDark ? colors.background : colors.dark.background} />
          </View>
        )}
        <View>
          <Text className="  font-montserrat-semibold text-base text-black dark:text-white">
            {colorPalette.name || t('generate.paletteSelector.colorPalette')}
          </Text>
          <Text className=" font-montserrat-regular text-sm text-gray-500 dark:text-gray-400">
            {colorPalette.name
              ? t('generate.paletteSelector.tapToChange')
              : t('generate.paletteSelector.selectColorPalette')}
          </Text>
        </View>
      </View>
      {colorPalette.palette.length > 0 && (
        <View className="flex-row">
          {colorPalette.palette.map((color, index) => (
            <View
              key={color}
              style={{ backgroundColor: color, marginLeft: index === 0 ? 0 : -15 }}
              className="aspect-square size-[40px]  rounded-full border border-gray-300 dark:border-white"
            />
          ))}
        </View>
      )}
    </Pressable>
  );
}
