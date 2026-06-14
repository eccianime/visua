import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { XIcon } from 'phosphor-react-native';
import { Pressable, Text, View } from 'react-native';

interface HeaderProps {
  title: string;
  onClose: () => void;
}

export function ScreenHeader({ title, onClose }: Readonly<HeaderProps>) {
  const { isDark } = useTheme();

  return (
    <View className="mb-6 flex-row items-center gap-3 ">
      <Pressable onPress={onClose} className="p-1">
        <XIcon size={20} color={isDark ? colors.white : colors.black} />
      </Pressable>
      <Text className="font-montserrat-semibold text-2xl text-black dark:text-white">{title}</Text>
    </View>
  );
}
