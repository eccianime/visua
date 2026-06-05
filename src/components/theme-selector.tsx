import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

export default function ThemeSelector() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const themes = [
    { id: 'light', label: '☀️ Claro' },
    { id: 'dark', label: '🌙 Oscuro' },
    { id: 'system', label: '⚙️ Sistema' },
  ];

  return (
    <View className="m-4 rounded-2xl bg-gray-100 p-4 shadow-sm dark:bg-slate-800">
      <Text className="mb-3 text-center text-lg font-bold text-gray-800 dark:text-white">
        Selecciona un Tema
      </Text>

      <View className="justify-space-around flex-row space-x-2">
        {themes.map((theme) => {
          // Validamos si este botón es el que está activo actualmente
          const isActive = colorScheme === theme.id;

          return (
            <Pressable
              key={theme.id}
              onPress={() => setColorScheme(theme.id as 'light' | 'dark' | 'system')}
              className={`flex-1 items-center justify-center rounded-xl px-2 py-3 ${
                isActive ? 'bg-blue-500 dark:bg-blue-600' : 'bg-white dark:bg-slate-700'
              }`}
            >
              <Text
                className={`font-montserrat-semibold text-sm ${
                  isActive ? 'text-white' : 'text-gray-600 dark:text-gray-200'
                }`}
              >
                {theme.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
