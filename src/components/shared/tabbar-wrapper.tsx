import { View } from 'react-native';

export function TabScreenWrapper({
  children,
  isClear,
}: Readonly<{ children: React.ReactNode; isClear?: boolean }>) {
  return (
    <View
      className={`pt-safe ${isClear ? 'bg-white dark:bg-dark-background' : 'bg-background dark:bg-dark-background'} flex-1 p-6`}
    >
      {children}
      <View className="h-[70px]" />
    </View>
  );
}
