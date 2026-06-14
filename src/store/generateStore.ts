import { ColorPalette } from '@/data/color-palettes';
import { RoomStyle } from '@/data/room-styles';
import { create } from 'zustand';

interface GenerateState {
  type: 'interior' | 'exterior';
  image: string;
  roomType: string;
  roomStyle: RoomStyle | null;
  colorPalette: ColorPalette | null;

  setType: (type: 'interior' | 'exterior') => void;
  setImage: (image: string) => void;
  setRoomType: (roomType: string) => void;
  setRoomStyle: (roomStyle: RoomStyle | null) => void;
  setColorPalette: (colorPalette: ColorPalette | null) => void;
}

export const useGenerateStore = create<GenerateState>((set) => ({
  type: 'interior',
  image: '',
  roomType: '',
  roomStyle: null,
  colorPalette: null,

  setType: (type) => set({ type }),
  setImage: (image) => set({ image }),
  setRoomType: (roomType) => set({ roomType }),
  setRoomStyle: (roomStyle) => set({ roomStyle }),
  setColorPalette: (colorPalette) => set({ colorPalette }),
}));
