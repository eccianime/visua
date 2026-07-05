import {
  ExploreGallery,
  ExploreHeader,
  ExploreSelectType,
  RoomTypeHorizontalScroll,
  TabScreenWrapper,
} from '@/components';

export default function Explore() {
  return (
    <TabScreenWrapper isClear>
      <ExploreHeader />
      <ExploreSelectType />
      <RoomTypeHorizontalScroll />
      <ExploreGallery />
    </TabScreenWrapper>
  );
}
