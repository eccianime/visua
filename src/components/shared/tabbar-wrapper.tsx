import { View } from 'react-native';

export function TabScreenWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <View className="pt-safe flex-1 bg-background p-6 dark:bg-dark-background">
      {children}
      <View className="h-[80px]" />
    </View>
  );
}
