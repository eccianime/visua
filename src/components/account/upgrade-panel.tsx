import colors from '@/config/colors';
import { useCurrentLanguage } from '@/hooks';
import { CrownIcon } from 'phosphor-react-native';
import { Text, View } from 'react-native';

export function UpgradePanel() {
  const { t } = useCurrentLanguage();
  return (
    <View className="mb-4 flex-row items-center gap-2 rounded-2xl bg-gold p-4">
      <View className="items-center justify-center rounded-full bg-white p-3">
        <CrownIcon color={colors.gold} size={24} weight="fill" />
      </View>
      <View className="flex-1">
        <Text className="font-montserrat-bold text-xl text-white">
          {t('account.upgradePanel.upgradeNow')}
        </Text>
        <Text className="font-montserrat-medium text-base text-white">
          {t('account.upgradePanel.enjoyBenefits')}
        </Text>
      </View>
    </View>
  );
}
