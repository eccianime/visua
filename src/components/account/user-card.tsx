import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { CaretRightIcon } from 'phosphor-react-native';
import { Image, Pressable, Text, View } from 'react-native';

const AVATAR_URL =
  'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109';

export function UserCard() {
  const { isDark } = useTheme();
  return (
    <Pressable className="mb-4 flex-row items-center justify-between rounded-2xl bg-white p-4 dark:bg-slate-700">
      <View className="flex-row gap-2">
        <View className="size-14 overflow-hidden rounded-full">
          <Image className="size-full" source={{ uri: AVATAR_URL }} />
        </View>
        <View>
          <Text className="font-montserrat-medium text-base text-black dark:text-white">
            {'Someone Some'}
          </Text>
          <Text className="font-montserrat-light text-base text-gray-500 dark:text-gray-300">
            {'someonoe.some@mail.com'}
          </Text>
        </View>
      </View>
      <CaretRightIcon size={20} color={isDark ? colors.background : colors.dark.background} />
    </Pressable>
  );
}
