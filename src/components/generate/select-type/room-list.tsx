import ROOM_TYPES, { RoomType } from '@/data/room-type';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { RoomListItem } from './room-list-item';

export function RoomList() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as keyof typeof ROOM_TYPES;
  const roomList = ROOM_TYPES[currentLanguage];

  const { roomType, setRoomType } = useGenerateStore();
  const [selectedTop, setSelectedTop] = useState<string | null>(null);

  const handleSelectItem = useCallback((item: string) => {
    setRoomType(item);
    setSelectedTop(null);
    router.back();
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: RoomType; index: number }) => {
      return (
        <Animated.View entering={FadeInLeft.duration(300).delay(100 * index)}>
          <RoomListItem
            isSelected={selectedTop === item.title}
            setSelectedTop={setSelectedTop}
            hasChildrenSelected={item.items.includes(roomType)}
            onSelectItem={handleSelectItem}
            selectedItem={roomType}
            item={item}
          />
        </Animated.View>
      );
    },
    [selectedTop]
  );

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.title}
      data={roomList}
      renderItem={renderItem}
    />
  );
}
