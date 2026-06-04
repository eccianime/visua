import { create } from 'zustand';

interface GenerateState {
  type: 'interior' | 'exterior';
  image: string;
  roomType: string;
  roomStyle: string;
  colorPalette: string;

  setType: (type: 'interior' | 'exterior') => void;
  setImage: (image: string) => void;
  setRoomType: (roomType: string) => void;
  setRoomStyle: (roomStyle: string) => void;
  setColorPalette: (colorPalette: string) => void;
}

export const useGenerateStore = create<GenerateState>((set) => ({
  type: 'interior',
  image: '',
  roomType: '',
  roomStyle: '',
  colorPalette: '',

  setType: (type) => set({ type }),
  setImage: (image) => set({ image }),
  setRoomType: (roomType) => set({ roomType }),
  setRoomStyle: (roomStyle) => set({ roomStyle }),
  setColorPalette: (colorPalette) => set({ colorPalette }),
}));
