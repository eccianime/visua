import {
  BuildingStyleSelector,
  BuildingTypeSelector,
  Button,
  ColorStyleSelector,
  GenerateHeader,
  ImagePickerModal,
  ImageSelector,
  SelectType,
  TabScreenWrapper,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function Generate() {
  const { t } = useTranslation();

  return (
    <TabScreenWrapper>
      <GenerateHeader />
      <SelectType />
      <ImageSelector />
      <View className="mb-4 flex-row items-center gap-3">
        <BuildingTypeSelector />
        <BuildingStyleSelector />
      </View>
      <ColorStyleSelector />
      <Button title={t('generate.generate')} />
      <ImagePickerModal />
    </TabScreenWrapper>
  );
}
