import colors from '@/config/colors';
import { useImagePicker } from '@/hooks/useImagePicker';
import { useModalStore } from '@/store/modalStore';
import { CameraIcon, ImageIcon, XIcon } from 'phosphor-react-native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Modal, Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export function ImagePickerModal() {
  const { pickerModalVisible, setPickerModalVisible, onSelect } = useModalStore();

  const backgroundOpacity = useSharedValue(0);
  const backgroundPosition = useSharedValue(SCREEN_HEIGHT);

  const contentPosition = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    if (pickerModalVisible) {
      backgroundPosition.value = 0;
      backgroundOpacity.value = withTiming(1, { duration: 300 });
      contentPosition.value = withTiming(0, { duration: 300 });
    } else {
      contentPosition.value = withTiming(SCREEN_HEIGHT, { duration: 300 });
      backgroundOpacity.value = withDelay(300, withTiming(0, { duration: 300 }));
      backgroundPosition.value = SCREEN_HEIGHT;
    }
  }, [pickerModalVisible]);

  const animatedBackGround = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  const animatedForeground = useAnimatedStyle(() => ({
    transform: [{ translateY: contentPosition.value }],
  }));

  const { t } = useTranslation();
  const { assets, pickFromCamera, pickFromLibrary } = useImagePicker();

  useEffect(() => {
    if (assets.length === 0) return;
    onSelect(assets[0].uri);
  }, [assets]);

  return (
    <Modal visible={pickerModalVisible} transparent animationType="fade">
      <Animated.View className="absolute inset-0 bg-black/50" style={animatedBackGround}>
        <Animated.View className={'absolute inset-0 justify-end'} style={animatedForeground}>
          <View className="bg-background p-6 dark:bg-dark-background">
            <View className="flex-row items-center justify-between">
              <Text className="font-montserrat-bold text-lg text-title dark:text-dark-title">
                {t('generate.selectImage')}
              </Text>
              <Pressable onPress={() => setPickerModalVisible(false)}>
                <XIcon size={24} color={colors.black} />
              </Pressable>
            </View>
            <View className="my-4 h-px w-full bg-gray-400" />
            <View className="gap-3">
              <Pressable
                className="flex-row items-center gap-4 rounded-lg bg-gray-300 px-6 py-4"
                onPress={pickFromCamera}
              >
                <CameraIcon size={24} color={colors.black} />
                <Text className="font-montserrat-medium text-base text-title">
                  {t('generate.takeFromCamera')}
                </Text>
              </Pressable>
              <Pressable
                className="flex-row items-center gap-4 rounded-lg bg-gray-300 px-6 py-4"
                onPress={pickFromLibrary}
              >
                <ImageIcon size={24} color={colors.black} />
                <Text className="font-montserrat-medium text-base text-title">
                  {t('generate.chooseFromGallery')}
                </Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}
