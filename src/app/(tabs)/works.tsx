import { TabScreenWrapper, WorksGallery, WorksHeader, WorksSelectType } from '@/components';

export default function Works() {
  return (
    <TabScreenWrapper isClear>
      <WorksHeader />
      <WorksSelectType />
      <WorksGallery />
    </TabScreenWrapper>
  );
}
