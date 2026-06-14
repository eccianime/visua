import COLOR_PALETTES, { ColorPalette } from '@/data/color-palettes';
import ROOM_TYPES from '@/data/room-type';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { PaletteListItem } from './palette-list-item';

export function PaletteList() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as keyof typeof ROOM_TYPES;

  const { colorPalette, setColorPalette } = useGenerateStore();

  const handleSelectItem = useCallback((item: ColorPalette) => {
    setColorPalette(item);
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: ColorPalette; index: number }) => {
      return (
        <Animated.View entering={FadeInLeft.duration(300).delay(100 * index)}>
          <PaletteListItem
            isSelected={colorPalette?.id === item.id}
            onSelectItem={handleSelectItem}
            item={item}
            name={item.name[currentLanguage]}
          />
        </Animated.View>
      );
    },
    [colorPalette]
  );

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.name[currentLanguage]}
      data={COLOR_PALETTES}
      renderItem={renderItem}
      contentContainerClassName="gap-3"
    />
  );
}
