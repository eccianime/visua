import colors from '@/config/colors';
import { useTheme } from '@/hooks';
import { Href, router, usePathname } from 'expo-router';
import {
  CheckSquareOffsetIcon,
  GlobeHemisphereWestIcon,
  Icon,
  MagicWandIcon,
  UserCircleIcon,
} from 'phosphor-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function CustomTab() {
  const { t } = useTranslation();
  const pathName = usePathname();

  const buttons: { text: string; icon: Icon; route: Href }[] = [
    {
      text: t('generate.title'),
      icon: MagicWandIcon,
      route: '/generate',
    },
    {
      text: t('explore.title'),
      icon: GlobeHemisphereWestIcon,
      route: '/explore',
    },
    {
      text: t('works.title'),
      icon: CheckSquareOffsetIcon,
      route: '/works',
    },
    {
      text: t('account.title'),
      icon: UserCircleIcon,
      route: '/account',
    },
  ];

  const { isDark } = useTheme();

  return (
    <View className="absolute bottom-0 w-full p-4">
      <View className="mb-2 w-full flex-row items-center justify-between rounded-full bg-white py-1 shadow-md dark:bg-slate-900">
        {buttons.map((button) => {
          const isActive = pathName === button.route;
          return (
            <Pressable
              key={button.text}
              className={`w-1/4 items-center justify-center px-3 py-1`}
              onPress={() => router.push(button.route)}
            >
              <button.icon
                size={20}
                color={isActive ? colors.gold : isDark ? colors.white : colors.black}
                weight={isActive ? 'bold' : 'thin'}
              />
              <Text
                className={`${isActive ? 'font-montserrat-semibold text-gold' : 'font-montserrat-light text-black dark:text-white'}  text-sm`}
              >
                {button.text}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
