import { RoomList, SelectTypeHeader } from '@/components';
import { ScrollView } from 'react-native';

export default function SelectType() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white dark:bg-dark-background"
      contentContainerClassName="pt-safe  p-6 flex-grow"
    >
      <SelectTypeHeader />
      <RoomList />
    </ScrollView>
  );
}
