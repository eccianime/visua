import {
  ExploreGallery,
  ExploreSelectType,
  Header,
  RoomTypeHorizontalScroll,
  TabScreenWrapper,
} from '@/components';
import { useCurrentLanguage } from '@/hooks';

export default function Explore() {
  const { t } = useCurrentLanguage();

  return (
    <TabScreenWrapper isClear>
      <Header title={t('explore.title')} />
      <ExploreSelectType />
      <RoomTypeHorizontalScroll />
      <ExploreGallery />
    </TabScreenWrapper>
  );
}
