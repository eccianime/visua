import { Header, TabScreenWrapper } from '@/components';
import { useTranslation } from 'react-i18next';

export default function Account() {
  const { t } = useTranslation();
  return (
    <TabScreenWrapper>
      <Header title={t('account.title')} />
    </TabScreenWrapper>
  );
}
