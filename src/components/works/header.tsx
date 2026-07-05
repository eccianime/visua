import { useCurrentLanguage } from '@/hooks';
import { Text, View } from 'react-native';

export function WorksHeader() {
  const { t } = useCurrentLanguage();

  return (
    <View className="mb-4 items-center">
      <Text className="font-montserrat-bold text-2xl text-black dark:text-white">
        {t('works.title')}
      </Text>
    </View>
  );
}
