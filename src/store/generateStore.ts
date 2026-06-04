import { create } from 'zustand';

interface GenerateState {
  type: 'interior' | 'exterior';
  image: string;

  setType: (type: 'interior' | 'exterior') => void;
  setImage: (image: string) => void;
}

export const useGenerateStore = create<GenerateState>((set) => ({
  type: 'interior',
  image: '',

  setType: (type) => set({ type }),
  setImage: (image) => set({ image }),
}));
