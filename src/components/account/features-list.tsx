import colors from '@/config/colors';
import { useCurrentLanguage, useTheme } from '@/hooks';
import { ContrastIcon } from 'lucide-react-native';
import {
  CaretRightIcon,
  MoneyIcon,
  QuestionIcon,
  ShieldIcon,
  SignOutIcon,
  StarIcon,
  TicketIcon,
  UsersIcon,
} from 'phosphor-react-native';
import { Pressable, Text, View } from 'react-native';

export function FeaturesList() {
  const { t } = useCurrentLanguage();
  const { isDark } = useTheme();

  const buttons = [
    {
      key: 'account',
      icon: ShieldIcon,
      title: t('account.featuresList.account'),
      onPress: () => {},
    },
    {
      key: 'payment',
      icon: MoneyIcon,
      title: t('account.featuresList.payment'),
      onPress: () => {},
    },
    {
      key: 'billings',
      icon: TicketIcon,
      title: t('account.featuresList.billings'),
      onPress: () => {},
    },
    {
      key: 'appearance',
      icon: ContrastIcon,
      title: t('account.featuresList.appearance'),
      onPress: () => {},
    },
    { key: 'help', icon: QuestionIcon, title: t('account.featuresList.help'), onPress: () => {} },
    { key: 'invite', icon: UsersIcon, title: t('account.featuresList.invite'), onPress: () => {} },
    { key: 'rateUs', icon: StarIcon, title: t('account.featuresList.rateUs'), onPress: () => {} },
    {
      key: 'logOut',
      icon: SignOutIcon,
      title: t('account.featuresList.logOut'),
      onPress: () => {},
    },
  ];
  return (
    <View className="overflow-hidden rounded-2xl">
      {buttons.map((button) => {
        const isLogout = button.key === 'logOut';

        const normalButtonColor = isDark ? colors.background : colors.dark.background;
        const buttonColor = isLogout ? colors.error : normalButtonColor;

        return (
          <Pressable
            key={button.key}
            className="flex-row items-center justify-between bg-white p-4 dark:bg-slate-700"
          >
            <View className="flex-row items-center gap-4">
              <button.icon size={20} color={buttonColor} />
              <Text
                className={`font-montserrat-medium text-base ${isLogout ? 'text-error' : 'text-black dark:text-white'}`}
              >
                {button.title}
              </Text>
            </View>
            {!isLogout && (
              <CaretRightIcon
                size={20}
                color={isDark ? colors.background : colors.dark.background}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
