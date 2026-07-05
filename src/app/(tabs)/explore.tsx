import {
  ExploreGallery,
  ExploreHeader,
  RoomTypeHorizontalScroll,
  SelectType,
  TabScreenWrapper,
} from '@/components';

export default function Explore() {
  return (
    <TabScreenWrapper isClear>
      <ExploreHeader />
      <SelectType />
      <RoomTypeHorizontalScroll />
      <ExploreGallery />
    </TabScreenWrapper>
  );
}
