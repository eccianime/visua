import { CoinImage } from '@/assets/app-assets';
import { Image, Text, View } from 'react-native';

export function GenerateHeader() {
  return (
    <View className="mb-4 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Image source={CoinImage} resizeMode="contain" className="size-8" />
        <Text className="font-montserrat-bold text-xl text-title dark:text-dark-title">10</Text>
      </View>
      <Text className="font-montserrat-bold text-2xl text-title dark:text-dark-title">Visua</Text>
      <View className="items-center justify-center rounded-full bg-gold px-3 py-1">
        <Text className="font-montserrat-bold text-base text-white">PRO</Text>
      </View>
    </View>
  );
}
