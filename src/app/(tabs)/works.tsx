import { Header, TabScreenWrapper, WorksGallery, WorksSelectType } from '@/components';
import { useCurrentLanguage } from '@/hooks';

export default function Works() {
  const { t } = useCurrentLanguage();

  return (
    <TabScreenWrapper isClear>
      <Header title={t('works.title')} />
      <WorksSelectType />
      <WorksGallery />
    </TabScreenWrapper>
  );
}
