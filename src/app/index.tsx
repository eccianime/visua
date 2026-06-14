import { router } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  useEffect(() => {
    router.replace('/(tabs)/generate');
  }, []);
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-slate-900"></SafeAreaView>
  );
}
