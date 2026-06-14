import { Spinner } from '@/components';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export default function PleaseWait() {
  const [percentage, setPercentage] = useState(0);
  const [t] = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 250);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (percentage >= 100) {
      router.push('/generate/results');
    }
  }, [percentage]);

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-background px-6 dark:bg-dark-background">
      <Spinner size={80} />
      <View className="items-center gap-3">
        <Text className="text-center font-montserrat-semibold text-2xl text-black dark:text-white">
          {t('generate.pleaseWait.generatingDesign', { percentage })}
        </Text>
        <Text className="text-center font-montserrat-regular text-lg text-gray-600 dark:text-gray-300">
          {t('generate.pleaseWait.pleaseWait')}
        </Text>
      </View>
    </View>
  );
}
