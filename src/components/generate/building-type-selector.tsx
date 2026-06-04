import colors from '@/config/colors';
import { useColorScheme } from 'nativewind';
import { ArmchairIcon } from 'phosphor-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function BuildingTypeSelector() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();
  return (
    <Pressable className="grow items-center justify-center  rounded-xl bg-gray-100 p-6 dark:bg-slate-700">
      <View className="mb-3 items-center justify-center rounded-full border border-gray-300 p-3 dark:border-slate-500">
        <ArmchairIcon size={24} color={isDark ? colors.background : colors.dark.background} />
      </View>
      <View>
        <Text className="text-center  font-montserrat-bold text-base text-title dark:text-dark-title">
          {t('generate.roomType')}
        </Text>
        <Text className="text-center font-montserrat-regular text-sm text-gray-400 dark:text-gray-400">
          {t('generate.selectType')}
        </Text>
      </View>
    </Pressable>
  );
}
