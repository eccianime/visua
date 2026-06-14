import { RoomStyle } from '@/data/room-styles';
import { CheckCircleIcon } from 'phosphor-react-native';
import { Image, Pressable, Text, View } from 'react-native';

interface StyleListItemProps {
  item: RoomStyle;
  name: string;
  isSelected: boolean;
  onSelectItem: (item: RoomStyle) => void;
}

export const StyleListItem = ({ item, isSelected, onSelectItem, name }: StyleListItemProps) => {
  return (
    <Pressable
      onPress={() => onSelectItem(item)}
      className={`w-full items-center justify-center gap-2 rounded-xl p-2`}
    >
      <View className={`size-24 overflow-hidden rounded-full`}>
        <Image source={{ uri: item.imageUrl }} resizeMode="cover" className="size-full" />
        {isSelected && (
          <View className="absolute inset-0 items-center justify-center bg-white/70">
            <CheckCircleIcon size={60} color="white" />
          </View>
        )}
      </View>
      <Text
        numberOfLines={1}
        className={`${isSelected ? 'font-montserrat-semibold' : 'font-montserrat-regular'} text-sm text-black dark:text-white`}
      >
        {name}
      </Text>
    </Pressable>
  );
};
