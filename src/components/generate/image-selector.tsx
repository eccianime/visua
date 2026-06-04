import {
  House2Image,
  House3Image,
  House4Image,
  House5Image,
  House6Image,
  House7Image,
  House8Image,
} from '@/assets/app-assets';
import { useGenerateStore } from '@/store/generateStore';
import { PlusIcon } from 'phosphor-react-native';
import { useTranslation } from 'react-i18next';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Button } from '../shared/button';

export function ImageSelector() {
  const { image } = useGenerateStore();
  const { t } = useTranslation();

  return (
    <View className="mb-4 grow justify-center rounded-xl  bg-gray-100 p-6 dark:bg-slate-700">
      {image ? (
        <View></View>
      ) : (
        <View className="items-center justify-center">
          <View className="h-[180px] w-full items-center justify-center">
            <ImageBall source={House7Image} className="size-[80px]" />
            <ImageBall source={House2Image} className="left-[5%] size-[60px]" />
            <ImageBall source={House3Image} className="right-[5%] size-[60px]" />
            <ImageBall source={House4Image} className="left-[22%] top-[5%] size-[60px]" />
            <ImageBall source={House5Image} className="right-[22%] top-[5%] size-[60px]" />
            <ImageBall source={House6Image} className="bottom-[5%] left-[22%] size-[60px]" />
            <ImageBall source={House8Image} className="bottom-[5%] right-[22%] size-[60px]" />
          </View>
          <Text className="mb-2 text-center font-montserrat-bold text-xl text-gray-800 dark:text-dark-title">
            {t('generate.transformSpace')}
          </Text>
          <Text className="mb-6 text-center font-montserrat-regular text-base text-gray-600 dark:text-dark-title">
            {t('generate.aiMagic')}
          </Text>
          <Button
            title={t('generate.addPhoto')}
            className="px-3 py-2"
            textClassName="!text-base"
            icon={<PlusIcon size={20} color={'white'} />}
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
