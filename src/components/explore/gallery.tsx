import COLOR_PALETTES from '@/data/color-palettes';
import ROOM_STYLES from '@/data/room-styles';
import ROOM_TYPES from '@/data/room-type';
import { useCurrentLanguage } from '@/hooks';
import { FlashList } from '@shopify/flash-list';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface GalleryItemProps {
  id: string;
  url: string;
  type: string;
  subType: string;
  styleId: string;
  paletteId: string;
}

const BASE = 280;
const VARIANCE = 80;

export function ExploreGallery() {
  const { language } = useCurrentLanguage();

  const placeholderItems = Array.from({ length: 20 }).map((_, index) => {
    const randomType =
      ROOM_TYPES[language as keyof typeof ROOM_TYPES][
        Math.floor(Math.random() * ROOM_TYPES[language as keyof typeof ROOM_TYPES].length)
      ];
    const randomSubType = randomType.items[Math.floor(Math.random() * randomType.items.length)];
    const randomStyle = ROOM_STYLES[Math.floor(Math.random() * ROOM_STYLES.length)];
    const randomPalette = COLOR_PALETTES[Math.floor(Math.random() * COLOR_PALETTES.length)];

    return {
      id: index.toString(),
      url: `https://picsum.photos/seed/${index}/600/600`,
      type: randomType.title,
      subType: randomSubType,
      styleId: randomStyle.id,
      paletteId: randomPalette.id,
    };
  });

  const renderImageCard = useCallback(
    ({ item, index }: { item: GalleryItemProps; index: number }) => {
      const randomHeight = () => Math.round(BASE + (Math.random() * VARIANCE * 2 - VARIANCE));

      return (
        <ImageCard
          item={item}
          index={index}
          height={randomHeight()}
          onPress={() =>
            router.push({
              pathname: '/explore/design-details',
              params: { ...item },
            })
          }
        />
      );
    },
    []
  );

  return (
    <FlashList
      data={placeholderItems}
      numColumns={2}
      masonry
      bounces={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderImageCard}
    />
  );
}

interface ImageCardProps {
  item: GalleryItemProps;
  index: number;
  height: number;
  onPress: () => void;
}

const ImageCard = ({ item, index, height, onPress }: ImageCardProps) => (
  <Pressable className="p-2" onPress={onPress}>
    <Image
      source={{ uri: item.url }}
      className="rounded-2xl"
      style={{
        height,
      }}
      resizeMode="cover"
    />
    <View className="absolute inset-0 items-center justify-center">
      <View className="rounded-lg bg-black/80 p-4">
        <Text className="text-2xl font-bold text-white">
          {index}:{height}
        </Text>
      </View>
    </View>
  </Pressable>
);
