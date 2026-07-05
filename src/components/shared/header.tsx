import { Text, View } from 'react-native';

interface HeaderProps {
  title: string;
}

export function Header({ title }: Readonly<HeaderProps>) {
  return (
    <View className="mb-4 items-center">
      <Text className="font-montserrat-bold text-2xl text-black dark:text-white">{title}</Text>
    </View>
  );
}
