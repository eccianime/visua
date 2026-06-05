import { RoomList, SelectTypeHeader } from '@/components';
import { ScrollView } from 'react-native';

export default function SelectType() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerClassName="pt-safe bg-white dark:bg-dark-background p-6 flex-grow"
    >
      <SelectTypeHeader />
      <RoomList />
    </ScrollView>
  );
}
