import colors from '@/config/colors';
import { RoomType } from '@/data/room-type';
import { useTheme } from '@/hooks';
import { CaretRightIcon, CheckCircleIcon, CircleIcon } from 'phosphor-react-native';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  FadeInLeft,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface RoomListItemProps {
  isSelected: boolean;
  item: RoomType;
  setSelectedTop: (title: string | null) => void;
  hasChildrenSelected: boolean;
  onSelectItem: (item: string) => void;
  selectedItem: string;
}

export const RoomListItem = ({
  isSelected,
  item,
  setSelectedTop,
  hasChildrenSelected,
  onSelectItem,
  selectedItem,
}: RoomListItemProps) => {
  const { isDark } = useTheme();

  const animatedRotation = useSharedValue(0);
  const rotationAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${animatedRotation.value}deg` }],
  }));

  const boxHeight = item.items.length * 40;
  const currentBoxHeight = useSharedValue(0);

  const sizeAnimation = useAnimatedStyle(() => ({
    height: currentBoxHeight.value,
  }));

  useEffect(() => {
    if (isSelected) {
      animatedRotation.value = withTiming(90, { duration: 300 });
      currentBoxHeight.value = withTiming(boxHeight, { duration: 300 });
    } else {
      animatedRotation.value = withTiming(0, { duration: 300 });
      currentBoxHeight.value = withTiming(0, { duration: 300 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  return (
    <View>
      <Pressable
        className="flex-row items-center justify-between border-b border-b-gray-300 py-3 dark:border-b-gray-600"
        onPress={() => setSelectedTop(isSelected ? null : item.title)}
      >
        <View className="flex-1 flex-row items-center gap-3">
          <item.icon
            size={20}
            color={isDark ? colors.white : colors.black}
            weight={hasChildrenSelected ? 'regular' : 'light'}
          />
          <View className="flex-1">
            <Text
              className={`${hasChildrenSelected ? 'font-montserrat-semibold' : 'font-montserrat-regular'}  text-lg text-black dark:text-white`}
              numberOfLines={1}
            >
              {item.title}
              {hasChildrenSelected && ` - (${selectedItem})`}
            </Text>
          </View>
        </View>
        <Animated.View style={rotationAnimation}>
          <CaretRightIcon size={20} color={isDark ? colors.white : colors.black} />
        </Animated.View>
      </Pressable>
      <Animated.View style={sizeAnimation} className={'pl-10'}>
        {isSelected &&
          item.items.map((item, index) => (
            <Animated.View entering={FadeInLeft.duration(300).delay(100 * index)} key={item}>
              <Pressable
                className="h-[40px] flex-row items-center gap-3"
                onPress={() => onSelectItem(item)}
              >
                {item === selectedItem ? (
                  <CheckCircleIcon size={24} color={colors.gold} weight="fill" />
                ) : (
                  <CircleIcon size={24} color={isDark ? colors.white : colors.gray[600]} />
                )}
                <Text
                  className={`${item === selectedItem ? 'font-montserrat-semibold' : 'font-montserrat-regular'} text-base text-black dark:text-white`}
                >
                  {item}
                </Text>
              </Pressable>
            </Animated.View>
          ))}
      </Animated.View>
    </View>
  );
};
