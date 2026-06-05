import {
  ColorStyleSelector,
  GenerateButton,
  GenerateHeader,
  ImagePickerModal,
  ImageSelector,
  RoomStyleSelector,
  RoomTypeSelector,
  SelectType,
  TabScreenWrapper,
} from '@/components';
import { View } from 'react-native';

export default function Generate() {
  return (
    <TabScreenWrapper>
      <GenerateHeader />
      <SelectType />
      <ImageSelector />
      <View className="mb-4 flex-row items-stretch">
        <RoomTypeSelector />
        <RoomStyleSelector />
      </View>
      <ColorStyleSelector />
      <GenerateButton />
      <ImagePickerModal />
    </TabScreenWrapper>
  );
}
