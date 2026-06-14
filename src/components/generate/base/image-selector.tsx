import {
  House2Image,
  House3Image,
  House4Image,
  House5Image,
  House6Image,
  House7Image,
  House8Image,
} from '@/assets/app-assets';
import { Button } from '@/components/shared/button';
import colors from '@/config/colors';
import { useGenerateStore } from '@/store/generateStore';
import { useModalStore } from '@/store/modalStore';
import { PlusIcon, XIcon } from 'phosphor-react-native';
import { useTranslation } from 'react-i18next';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';

export function ImageSelector() {
  const { image, setImage } = useGenerateStore();
  const { t } = useTranslation();
  const { setPickerModalVisible } = useModalStore();

  const handleClear = () => {
    setImage('');
    setPickerModalVisible(true);
  };
  return (
    <View className="mb-4 grow justify-center overflow-hidden  rounded-xl bg-gray-100 dark:bg-slate-700">
      {image ? (
        <View className="max-h-[280px]">
          <Image source={{ uri: image }} className="size-full" resizeMode="cover" />
          <Pressable
            className="absolute bottom-4 right-4 items-center justify-center rounded-full border-2 border-white bg-gold p-2"
            onPress={handleClear}
          >
            <XIcon size={20} color={colors.white} />
          </Pressable>
        </View>
      ) : (
        <View className="items-center justify-center p-6">
          <View className="h-[110px] w-full items-center justify-center">
            <ImageBall source={House7Image} className="size-[60px]" />
            <ImageBall source={House2Image} className="left-[5%] size-[50px]" />
            <ImageBall source={House3Image} className="right-[5%] size-[50px]" />
            <ImageBall source={House4Image} className="left-[22%] top-[5%] size-[40px]" />
            <ImageBall source={House5Image} className="right-[22%] top-[5%] size-[40px]" />
            <ImageBall source={House6Image} className="bottom-[5%] left-[22%] size-[40px]" />
            <ImageBall source={House8Image} className="bottom-[5%] right-[22%] size-[40px]" />
          </View>
          <Text className="mb-2 text-center font-montserrat-bold text-xl text-gray-800 dark:text-white">
            {t('generate.imageSelector.transformSpace')}
          </Text>
          <Text className="mb-4 text-center font-montserrat-regular text-base text-gray-600 dark:text-white">
            {t('generate.imageSelector.aiMagic')}
          </Text>
          <Button
            onPress={() => setPickerModalVisible(true)}
            title={t('generate.imageSelector.addPhoto')}
            className="px-5 py-2"
            textClassName="!text-base"
            icon={<PlusIcon size={20} color={colors.white} />}
          />
        </View>
      )}
    </View>
  );
}

interface ImageBallProps {
  source: ImageSourcePropType;
  className: string;
}

const ImageBall = ({ source, className }: ImageBallProps) => (
  <View className={`absolute overflow-hidden rounded-full ${className}`}>
    <Image source={source} className="size-full" resizeMode="cover" />
  </View>
);
