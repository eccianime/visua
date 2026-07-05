import { Button, DesignDetailsBlocks, DesignDetailsHeader, DesignDetailsImage } from '@/components';
import COLOR_PALETTES from '@/data/color-palettes';
import ROOM_STYLES from '@/data/room-styles';
import ROOM_TYPES from '@/data/room-type';
import { useCurrentLanguage } from '@/hooks';
import { router, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

interface GalleryItemProps {
  id: string;
  url: string;
  type: string;
  subType: string;
  styleId: string;
  paletteId: string;
}

export default function DesignDetails() {
  const { t, language } = useCurrentLanguage();

  const { url, type, styleId, paletteId } = useLocalSearchParams() as unknown as GalleryItemProps;
  const TypeIcon = ROOM_TYPES[language as keyof typeof ROOM_TYPES].find(
    (item) => item.title === type
  )?.icon;
  const style = ROOM_STYLES.find((item) => item.id === styleId)?.name[
    language as keyof (typeof ROOM_STYLES)[number]['name']
  ];
  const palette = COLOR_PALETTES.find((item) => item.id === paletteId);

  const handleTryDesign = () => {
    router.dismissTo('/generate');
  };

  return (
    <View className="py-safe flex-1 gap-4 bg-white p-6 dark:bg-dark-background">
      <DesignDetailsHeader url={url} />
      <DesignDetailsImage url={url} />
      <DesignDetailsBlocks type={type} typeIcon={TypeIcon} style={style} palette={palette} />
      <Button
        title={t('explore.designDetails.tryDesign')}
        onPress={handleTryDesign}
        className="mt-4"
      />
    </View>
  );
}
