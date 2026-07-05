import colors from '@/config/colors';
import { useFile, useTheme } from '@/hooks';
import { router } from 'expo-router';
import { ArrowDownToLine, ExternalLink } from 'lucide-react-native';
import { ArrowLeftIcon } from 'phosphor-react-native';
import { Pressable, View } from 'react-native';

interface DesignDetailsHeaderProps {
  url: string;
}

export function DesignDetailsHeader({ url }: Readonly<DesignDetailsHeaderProps>) {
  const { saveAs, share } = useFile();
  const { isDark } = useTheme();

  const handleShare = async () => {
    await share(url);
  };

  const handleDownload = async () => {
    await saveAs(url);
  };

  return (
    <View className="flex-row items-center justify-between">
      <Pressable onPress={router.back}>
        <ArrowLeftIcon size={24} color={isDark ? colors.background : colors.dark.background} />
      </Pressable>
      <View className="flex-row items-center gap-4">
        <Pressable onPress={handleShare}>
          <ExternalLink size={24} color={isDark ? colors.background : colors.dark.background} />
        </Pressable>
        <Pressable onPress={handleDownload}>
          <ArrowDownToLine size={24} color={isDark ? colors.background : colors.dark.background} />
        </Pressable>
      </View>
    </View>
  );
}
