import { Image, View } from 'react-native';

interface DesignDetailsImageProps {
  url: string;
}

export function DesignDetailsImage({ url }: Readonly<DesignDetailsImageProps>) {
  return (
    <View className="flex-1 overflow-hidden rounded-2xl">
      <Image className="size-full" source={{ uri: url }} resizeMode="cover" />
    </View>
  );
}
