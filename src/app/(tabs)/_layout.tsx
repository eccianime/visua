import { CustomTab } from '@/components';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
        }}
      >
        <Tabs.Screen name="generate" />
        <Tabs.Screen name="explore" />
        <Tabs.Screen name="works" />
        <Tabs.Screen name="account" />
      </Tabs>
      <CustomTab />
    </>
  );
}
