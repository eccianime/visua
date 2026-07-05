import { FeaturesList, Header, TabScreenWrapper, UpgradePanel, UserCard } from '@/components';
import { useCurrentLanguage } from '@/hooks';

export default function Account() {
  const { t } = useCurrentLanguage();
  return (
    <TabScreenWrapper>
      <Header title={t('account.title')} />
      <UpgradePanel />
      <UserCard />
      <FeaturesList />
    </TabScreenWrapper>
  );
}
