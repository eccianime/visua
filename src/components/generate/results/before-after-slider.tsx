import { CaretLeftIcon, CaretRightIcon } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, Image, PanResponder, Text, View } from 'react-native';

const { width: SCREEN_W } = Dimensions.get('window');

interface BeforeAfterSliderProps {
  beforeUri: string;
  afterUri: string;
  width?: number;
  height?: number;
  beforeText: string;
  afterText: string;
}

export function BeforeAfterSlider({
  beforeUri,
  afterUri,
  width = SCREEN_W,
  height = 400,
  beforeText,
  afterText,
}: Readonly<BeforeAfterSliderProps>) {
  const [sliderX, setSliderX] = useState(width / 2);
  const sliderXRef = useRef(width / 2);
  const startX = useRef(0);
  const startSliderX = useRef(width / 2);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        startX.current = evt.nativeEvent.pageX;
        startSliderX.current = sliderXRef.current;
      },
      onPanResponderMove: (evt) => {
        const delta = evt.nativeEvent.pageX - startX.current;
        const next = Math.max(0, Math.min(startSliderX.current + delta, width));
        sliderXRef.current = next;
        setSliderX(next);
      },
    })
  ).current;

  return (
    <View className="relative overflow-hidden rounded-2xl" style={{ width, height }}>
      <Image
        source={{ uri: afterUri }}
        className="absolute left-0 top-0"
        style={[{ width, height }]}
        resizeMode="cover"
      />

      <View className="absolute left-0 top-0 h-[100%] overflow-hidden" style={{ width: sliderX }}>
        <Image
          source={{ uri: beforeUri }}
          className="absolute left-0 top-0"
          style={[{ width, height }]}
          resizeMode="cover"
        />
      </View>

      <View
        className="absolute bottom-0 top-0 -ml-[22px] w-[44px] items-center justify-center"
        style={[{ left: sliderX }]}
        {...panResponder.panHandlers}
      >
        <View className="w-[2px] flex-[10] bg-white" />
        <View className="size-[50px] flex-row items-center justify-center rounded-full bg-white">
          <CaretLeftIcon size={20} />
          <CaretRightIcon size={20} />
        </View>
        <View className="w-[2px] flex-1 bg-white" />
      </View>
      <View
        className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-2"
        pointerEvents="none"
      >
        <Text className="font-montserrat-medium text-lg text-white">{beforeText}</Text>
      </View>
      <View
        className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-2"
        pointerEvents="none"
      >
        <Text className="font-montserrat-medium text-lg text-white">{afterText}</Text>
      </View>
    </View>
  );
}
