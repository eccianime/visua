import ThemeSelector from '@/components/theme-selector';
import i18n from '@/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { t } = useTranslation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-slate-900">
      <Text className="text-center font-montserrat-bold text-2xl text-red-500">{t('title')}</Text>
      <TouchableOpacity
        className="mt-4 rounded-lg border border-blue-500 p-4"
        onPress={() => {
          const currentLanguage = i18n.language;
          const newLanguage =
            currentLanguage === 'en' ? 'es' : currentLanguage === 'es' ? 'pt' : 'en';
          i18n.changeLanguage(newLanguage);
          AsyncStorage.setItem('language', newLanguage);
        }}
      >
        <Text className="text-center font-montserrat-regular text-xl text-blue-500">
          {t('changeLanguage')}
        </Text>
      </TouchableOpacity>
      <View className="w-full p-6">
        <ThemeSelector />
      </View>
    </SafeAreaView>
  );
}
