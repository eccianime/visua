/* eslint-disable react-hooks/exhaustive-deps */
import COLOR_PALETTES, { ColorPalette } from '@/data/color-palettes';
import { useCurrentLanguage } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { PaletteListItem } from './palette-list-item';

export function PaletteList() {
  const { language } = useCurrentLanguage();

  const { colorPalette, setColorPalette } = useGenerateStore();

  const handleSelectItem = useCallback((item: ColorPalette) => {
    setColorPalette(item);
    router.back();
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: ColorPalette; index: number }) => {
      return (
        <Animated.View entering={FadeInLeft.duration(300).delay(100 * index)}>
          <PaletteListItem
            isSelected={colorPalette?.id === item.id}
            onSelectItem={handleSelectItem}
            item={item}
            name={item.name[language as keyof typeof item.name]}
          />
        </Animated.View>
      );
    },
    [colorPalette]
  );

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.name[language as keyof typeof item.name]}
      data={COLOR_PALETTES}
      renderItem={renderItem}
      contentContainerClassName="gap-3"
    />
  );
}
