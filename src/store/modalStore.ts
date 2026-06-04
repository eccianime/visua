import { create } from 'zustand';
import { useGenerateStore } from './generateStore';

interface ModalState {
  pickerModalVisible: boolean;
  setPickerModalVisible: (visible: boolean) => void;
  onSelect: (image: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  pickerModalVisible: false,
  setPickerModalVisible: (visible) => set({ pickerModalVisible: visible }),
  onSelect: (image) => {
    useGenerateStore.getState().setImage(image);
    set({ pickerModalVisible: false });
  },
}));
