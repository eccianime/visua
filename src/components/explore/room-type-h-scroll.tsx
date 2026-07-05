import ROOM_TYPES from '@/data/room-type';
import { useCurrentLanguage } from '@/hooks';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export function RoomTypeHorizontalScroll() {
  const { t, language } = useCurrentLanguage();
  const roomTypesTitles = ROOM_TYPES[language as keyof typeof ROOM_TYPES].map((item) => item.title);
  const allRoomTypeTitle = t('explore.roomType.all');
  const [currentSelectedRoomType, setCurrentSelectedRoomType] = useState<string>(allRoomTypeTitle);

  return (
    <View className="mb-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2"
      >
        <Pill
          isActive={currentSelectedRoomType === allRoomTypeTitle}
          title={allRoomTypeTitle}
          onPress={() => setCurrentSelectedRoomType(allRoomTypeTitle)}
        />
        {roomTypesTitles.map((title) => (
          <Pill
            key={title}
            title={title}
            onPress={() => setCurrentSelectedRoomType(title)}
            isActive={currentSelectedRoomType === title}
          />
        ))}
      </ScrollView>
    </View>
  );
}

interface PillProps {
  title: string;
  onPress: () => void;
  isActive: boolean;
}

const Pill = ({ title, onPress, isActive }: PillProps) => (
  <Pressable
    className={`rounded-full px-4 py-2 ${isActive ? 'bg-gold' : 'border border-gray-300'}`}
    onPress={onPress}
  >
    <Text
      className={`text-base ${isActive ? 'font-montserrat-semibold text-white' : 'font-montserrat-regular text-gray-800 dark:text-white'}`}
    >
      {title}
    </Text>
  </Pressable>
);
