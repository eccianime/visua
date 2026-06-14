import { ModalData, RoomStyleModal } from '@/components/modals/room-style-modal';
import ROOM_STYLES, { RoomStyle } from '@/data/room-styles';
import ROOM_TYPES from '@/data/room-type';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { StyleListItem } from './style-list-item';

export function StyleList() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as keyof typeof ROOM_TYPES;
  const { roomStyle, setRoomStyle } = useGenerateStore();

  const [modalData, setModalData] = useState<ModalData>({
    visible: false,
    id: '',
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleSelectItem = useCallback((item: ModalData) => {
    const target = ROOM_STYLES.find((style) => style.id === item.id);
    if (!target) return;
    setRoomStyle(target);
    setModalData({
      visible: false,
      id: '',
      title: '',
      description: '',
      imageUrl: '',
    });
    router.back();
  }, []);

  const handleShowModal = useCallback((item: RoomStyle) => {
    setModalData({
      visible: true,
      id: item.id,
      title: item.name[currentLanguage],
      description: item.description[currentLanguage],
      imageUrl: item.imageUrl,
    });
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: RoomStyle; index: number }) => {
      return (
        <Animated.View entering={FadeInLeft.duration(300).delay(100 * index)} className={'w-1/3'}>
          <StyleListItem
            item={item}
            name={item.name[currentLanguage]}
            isSelected={roomStyle?.id === item.id}
            onSelectItem={handleShowModal}
          />
        </Animated.View>
      );
    },
    [roomStyle]
  );

  return (
    <>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        numColumns={3}
        data={ROOM_STYLES}
        renderItem={renderItem}
        contentContainerClassName="gap-4"
      />
      <RoomStyleModal
        modalData={modalData}
        setModalData={setModalData}
        onConfirm={handleSelectItem}
      />
    </>
  );
}
