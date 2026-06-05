import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { PaletteIcon } from 'phosphor-react-native';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export function ColorStyleSelector() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <View className="mb-4 flex-row items-center gap-3 rounded-xl bg-gray-100 px-6 py-4 dark:bg-slate-700">
      <View className="items-center justify-center rounded-full border border-gray-300 p-3 dark:border-slate-500">
        <PaletteIcon size={24} color={isDark ? colors.background : colors.dark.background} />
      </View>
      <View>
        <Text className="  font-montserrat-semibold text-base text-black dark:text-white">
          {t('generate.colorSelector.colorPalette')}
        </Text>
        <Text className=" font-montserrat-regular text-sm text-gray-500 dark:text-gray-400">
          {t('generate.colorSelector.selectColorPalette')}
        </Text>
      </View>
    </View>
  );
}
