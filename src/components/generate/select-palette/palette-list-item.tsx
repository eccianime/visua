import { ColorPalette } from '@/data/color-palettes';
import { Pressable, Text, View } from 'react-native';

interface PaletteListItemProps {
  item: ColorPalette;
  name: string;
  isSelected: boolean;
  onSelectItem: (item: ColorPalette) => void;
}

export const PaletteListItem = ({ item, isSelected, onSelectItem, name }: PaletteListItemProps) => {
  return (
    <Pressable
      onPress={() => onSelectItem(item)}
      className={`w-full gap-3 rounded-xl bg-white p-4 dark:bg-slate-700`}
    >
      <Text
        numberOfLines={1}
        className={`${isSelected ? 'font-montserrat-semibold' : 'font-montserrat-regular'} text-lg text-black dark:text-white`}
      >
        {name}
      </Text>
      <View className="flex-row items-center justify-between">
        {item.palette.map((color) => (
          <View
            key={color}
            style={{ backgroundColor: color }}
            className="aspect-square w-[15%] rounded-full"
          />
        ))}
      </View>
    </Pressable>
  );
};
