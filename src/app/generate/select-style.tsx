import { SelectStyleHeader, StyleList } from '@/components';
import { ScrollView } from 'react-native';

export default function SelectStyle() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white dark:bg-dark-background"
      contentContainerClassName="py-safe flex-grow"
    >
      <SelectStyleHeader />
      <StyleList />
    </ScrollView>
  );
}
