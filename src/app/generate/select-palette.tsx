import { PaletteList, SelectPaletteHeader } from '@/components';
import { ScrollView } from 'react-native';

export default function SelectPalette() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-background dark:bg-dark-background"
      contentContainerClassName="pt-safe p-6 flex-grow"
    >
      <SelectPaletteHeader />
      <PaletteList />
    </ScrollView>
  );
}
