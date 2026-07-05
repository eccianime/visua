import colors from '@/config/colors';
import ROOM_TYPES, { RoomType } from '@/data/room-type';
import { useCurrentLanguage } from '@/hooks';
import { useGenerateStore } from '@/store/generateStore';
import { router } from 'expo-router';
import { MagnifyingGlassIcon, SmileySadIcon } from 'phosphor-react-native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { RoomListItem } from './room-list-item';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export function RoomList() {
  const { t, language } = useCurrentLanguage();

  const fullRoomList = ROOM_TYPES[language as keyof typeof ROOM_TYPES];

  const { roomType, setRoomType } = useGenerateStore();
  const [selectedTop, setSelectedTop] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredRoomList = fullRoomList.filter((category) => {
    if (!debouncedSearchTerm) return true;
    const normalizedSearch = debouncedSearchTerm
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    const matchesItems = category.items.some((item) => {
      const normalizedItem = item
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
      return normalizedItem.includes(normalizedSearch);
    });
    return matchesItems;
  });

  const handleSelectItem = useCallback((item: string) => {
    setRoomType(item);
    setSelectedTop(null);
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            searchTerm={searchTerm}
            item={item}
          />
        </Animated.View>
      );
    },
    [selectedTop, roomType, handleSelectItem, searchTerm]
  );

  return (
    <>
      <View className="mb-4 justify-center">
        <TextInput
          className="h-11 rounded-lg border border-gray-300 pl-11 pr-4 font-montserrat-regular text-lg leading-5 text-black dark:text-white"
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder={t('generate.roomTypeSelector.enterSearchTerm')}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.gray[300]}
          autoComplete="off"
        />
        <View className="absolute left-4">
          <MagnifyingGlassIcon size={20} color={colors.gray[300]} />
        </View>
      </View>
      <FlatList
        scrollEnabled={false}
        contentContainerClassName="grow"
        keyExtractor={(item) => item.title}
        data={filteredRoomList}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <SmileySadIcon color={colors.gray[300]} size={100} />
            <Text className="text-center font-montserrat-semibold text-lg text-gray-500 dark:text-white">
              {t('generate.roomTypeSelector.noResults')}
            </Text>
          </View>
        )}
      />
    </>
  );
}
