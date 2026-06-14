import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { XIcon } from 'phosphor-react-native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, Modal, Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Button } from '../shared/button';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export interface ModalData {
  visible: boolean;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface RoomStyleModalProps {
  modalData: ModalData;
  setModalData: (data: ModalData) => void;
  onConfirm: (item: ModalData) => void;
}

export function RoomStyleModal({
  modalData,
  setModalData,
  onConfirm,
}: Readonly<RoomStyleModalProps>) {
  const backgroundOpacity = useSharedValue(0);
  const backgroundPosition = useSharedValue(SCREEN_HEIGHT);

  const contentScale = useSharedValue(0.5);

  useEffect(() => {
    if (modalData.visible) {
      backgroundPosition.value = 0;
      backgroundOpacity.value = withTiming(1, { duration: 300 });
      contentScale.value = withTiming(1, { duration: 300 });
    } else {
      contentScale.value = withTiming(0.5, { duration: 300 });
      backgroundOpacity.value = withDelay(300, withTiming(0, { duration: 300 }));
      backgroundPosition.value = SCREEN_HEIGHT;
    }
  }, [modalData]);

  const animatedBackGround = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  const animatedForeground = useAnimatedStyle(() => ({
    transform: [{ scale: contentScale.value }],
  }));

  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <Modal visible={modalData.visible} transparent animationType="fade">
      <Animated.View className="absolute inset-0 bg-black/50" style={animatedBackGround}>
        <Animated.View
          className={'absolute inset-0 items-center justify-center p-4'}
          style={animatedForeground}
        >
          <View className="w-full rounded-lg bg-background p-6 dark:bg-dark-background">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="font-montserrat-bold text-lg text-black dark:text-white ">
                  {t('generate.modal.roomStyle.confirmStyle')}
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  setModalData({
                    visible: false,
                    id: '',
                    title: '',
                    description: '',
                    imageUrl: '',
                  })
                }
              >
                <XIcon size={24} color={isDark ? colors.white : colors.black} />
              </Pressable>
            </View>
            <View className="my-4 h-px w-full bg-gray-400" />
            <View className="gap-3">
              <View className="overflow-hidden rounded-lg border border-gray-400">
                <Image
                  source={{ uri: modalData.imageUrl }}
                  resizeMode="cover"
                  className="w-full"
                  style={{
                    height: SCREEN_WIDTH - 80,
                  }}
                />
              </View>
              <View className="gap-1">
                <Text className="font-montserrat-bold text-lg text-gray-800 dark:text-white ">
                  {modalData.title}
                </Text>
                <Text className="font-montserrat-regular text-base text-gray-600 dark:text-white ">
                  {modalData.description}
                </Text>
              </View>
              <Button
                className="!py-2"
                textClassName="!text-base"
                title={t('generate.modal.roomStyle.confirm')}
                onPress={() => onConfirm(modalData)}
              />
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}
