import COLOR_PALETTES from '@/data/color-palettes';
import ROOM_STYLES from '@/data/room-styles';
import ROOM_TYPES from '@/data/room-type';
import { useCurrentLanguage } from '@/hooks';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';
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

export function WorksGallery() {
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
      url: `https://picsum.photos/seed/${100 - index}/600/600`,
      type: randomType.title,
      subType: randomSubType,
      styleId: randomStyle.id,
      paletteId: randomPalette.id,
    };
  });

  const renderImageCard = useCallback(({ item }: { item: GalleryItemProps }) => {
    const randomHeight = () => Math.round(BASE + (Math.random() * VARIANCE * 2 - VARIANCE));

    return (
      <ImageCard
        item={item}
        height={randomHeight()}
        onPress={() =>
          router.push({
            pathname: '/works/results',
            params: { ...item },
          })
        }
      />
    );
  }, []);

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
  height: number;
  onPress: () => void;
}

const ImageCard = ({ item, height, onPress }: ImageCardProps) => (
  <Pressable className="p-2" onPress={onPress}>
    <Image
      source={{ uri: item.url }}
      className="rounded-2xl"
      style={{
        height,
      }}
      resizeMode="cover"
    />
    <View className="absolute inset-0 p-2">
      <LinearGradient
        colors={['transparent', 'transparent', '#00000066', '#000000cc']}
        className="size-full rounded-2xl"
      />
    </View>
    <View className="absolute bottom-0 p-6">
      <Text className="font-montserrat-bold text-sm text-white">{item.type}</Text>
      <Text className="font-montserrat-regular text-xs text-white">{item.subType}</Text>
    </View>
  </Pressable>
);
