import { BeforeAfterSlider, ScreenHeader } from '@/components';
import colors from '@/config/colors';
import { router } from 'expo-router';
import { ArrowDownToLine, ExternalLink, RefreshCw, Trash2 } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Dimensions, Pressable, Text, View } from 'react-native';

export default function Results() {
  const { t } = useTranslation();

  const onClose = () => {
    router.dismissTo('/generate');
  };

  const buttons = [
    {
      title: t('generate.results.regenerate'),
      icon: RefreshCw,
      onPress: () => {},
    },
    {
      title: t('generate.results.download'),
      icon: ArrowDownToLine,
      onPress: () => {},
    },
    {
      title: t('generate.results.share'),
      icon: ExternalLink,
      onPress: () => {},
    },
    {
      title: t('generate.results.discard'),
      icon: Trash2,
      onPress: () => {},
    },
  ];
  const { height, width } = Dimensions.get('screen');
  return (
    <View className="py-safe flex-1 bg-background px-6 dark:bg-dark-background">
      <ScreenHeader title={t('generate.results.title')} onClose={onClose} />
      <BeforeAfterSlider
        beforeUri="https://myside.com.br/_next/image?url=https%3A%2F%2Frocket.myside.com.br%2Fapplication%2Fplugins%2Fmodule_imobles%2Fuploads%2Fenterprise%2F356188%2Fimages%2F_0b6ace9e471489171805527710299015.webp&w=3840&q=75"
        afterUri="https://myside.com.br/_next/image?url=https%3A%2F%2Frocket.myside.com.br%2Fapplication%2Fplugins%2Fmodule_imobles%2Fuploads%2Fenterprise%2F356188%2Fimages%2F_bcfa8a78748010171805528110986933.webp&w=3840&q=75"
        width={width - 48}
        height={height * 0.7}
        beforeText={t('generate.results.before')}
        afterText={t('generate.results.after')}
      />
      <View className="mt-auto flex-row items-center justify-between">
        {buttons.map((item) => (
          <View key={item.title} className="items-center gap-2">
            <Pressable className="items-center justify-center rounded-full bg-gray-300 p-5">
              <item.icon size={24} color={colors.black} />
            </Pressable>
            <Text className="font-montserrat-regular text-sm text-black dark:text-white">
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
