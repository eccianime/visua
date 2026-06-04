import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
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
      <Tabs.Screen name="my-boards" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}
