import { useColorScheme } from 'nativewind';

export function useTheme() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    colorScheme,
    isDark,
  };
}
