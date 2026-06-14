import colors from '@/config/colors';
import { SpinnerIcon } from 'phosphor-react-native';
import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 24 }: Readonly<SpinnerProps>) {
  const animatedRotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${animatedRotation.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    animatedRotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={animatedStyle} className="items-center">
      <SpinnerIcon color={colors.gold} size={size} />
    </Animated.View>
  );
}
