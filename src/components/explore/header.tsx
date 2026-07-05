import colors from '@/config/colors';
import { useCurrentLanguage, useTheme } from '@/hooks';
import { EllipsisVertical } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

export function ExploreHeader() {
  const { t } = useCurrentLanguage();
  const { isDark } = useTheme();

  return (
    <View className="mb-4 flex-row items-center justify-between">
      <View className="w-1/3" />
      <View className="w-1/3 items-center">
        <Text className="font-montserrat-bold text-2xl text-black dark:text-white">
          {t('explore.title')}
        </Text>
      </View>
      <View className="w-1/3 items-end">
        <Pressable onPress={() => {}}>
          <EllipsisVertical size={24} color={isDark ? colors.background : colors.dark.background} />
        </Pressable>
      </View>
    </View>
  );
}
