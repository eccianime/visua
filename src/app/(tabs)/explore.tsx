import {
  ExploreGallery,
  ExploreSelectType,
  Header,
  RoomTypeHorizontalScroll,
  TabScreenWrapper,
} from '@/components';
import { useTranslation } from 'react-i18next';

export default function Explore() {
  const { t } = useTranslation();

  return (
    <TabScreenWrapper isClear>
      <Header title={t('explore.title')} />
      <ExploreSelectType />
      <RoomTypeHorizontalScroll />
      <ExploreGallery />
    </TabScreenWrapper>
  );
}
