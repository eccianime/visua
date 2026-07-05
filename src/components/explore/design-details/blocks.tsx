import colors from '@/config/colors';
import { ColorPalette } from '@/data/color-palettes';
import { useCurrentLanguage, useTheme } from '@/hooks';
import { CrownIcon, Icon } from 'phosphor-react-native';
import { Text, View } from 'react-native';

interface DesignDetailsBlocksProps {
  type: string;
  typeIcon?: Icon;
  style?: string;
  palette?: ColorPalette;
}

export function DesignDetailsBlocks({
  type,
  typeIcon: TypeIcon,
  style,
  palette,
}: Readonly<DesignDetailsBlocksProps>) {
  const { isDark } = useTheme();
  const { language } = useCurrentLanguage();
  return (
    <View className="gap-4">
      <View className="flex-row gap-4">
        <View className="flex-1 flex-row items-center justify-center rounded-xl bg-gray-200 py-3 dark:bg-slate-700">
          <View className="px-4">
            {TypeIcon ? (
              <TypeIcon size={24} color={isDark ? colors.background : colors.black} />
            ) : null}
          </View>
          <View className="flex-1 pr-4">
            <Text className="font-montserrat-semibold text-base text-black dark:text-white">
              {type}
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-row items-center justify-center rounded-xl bg-gray-200 py-3 dark:bg-slate-700">
          <View className="px-4">
            <CrownIcon size={24} color={isDark ? colors.background : colors.black} />
          </View>
          <View className="flex-1 pr-4">
            <Text className="font-montserrat-semibold text-base text-black dark:text-white">
              {style}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center justify-center gap-2 rounded-xl bg-gray-200 py-3 dark:bg-slate-700">
        <Text className="font-montserrat-semibold text-base text-black dark:text-white">
          {palette?.name[language as keyof typeof palette.name] || ''}
        </Text>
        <View className="flex-row">
          {!!palette?.palette &&
            palette.palette.map((color, index) => (
              <View
                key={color}
                style={{ backgroundColor: color, marginLeft: index === 0 ? 0 : -15 }}
                className="aspect-square size-[40px]  rounded-full border border-gray-300 dark:border-white"
              />
            ))}
        </View>
      </View>
    </View>
  );
}
