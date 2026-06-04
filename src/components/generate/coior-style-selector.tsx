import colors from '@/config/colors';
import { useColorScheme } from 'nativewind';
import { PaletteIcon } from 'phosphor-react-native';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export function ColorStyleSelector() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();
  return (
    <View className="mb-4 flex-row items-center gap-3 rounded-xl bg-gray-100 px-6 py-4 dark:bg-slate-700">
      <View className="items-center justify-center rounded-full border border-gray-300 p-3 dark:border-slate-500">
        <PaletteIcon size={24} color={isDark ? colors.background : colors.dark.background} />
      </View>
      <View>
        <Text className="font-montserrat-bold  text-base  text-title dark:text-dark-title">
          {t('generate.colorPalette')}
        </Text>
        <Text className=" font-montserrat-regular text-sm text-gray-400 dark:text-gray-400">
          {t('generate.selectColorPalette')}
        </Text>
      </View>
    </View>
  );
}
