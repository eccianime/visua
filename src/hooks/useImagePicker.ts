import * as ImagePicker from 'expo-image-picker';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

export type ImagePickerAsset = ImagePicker.ImagePickerAsset;

interface UseImagePickerOptions {
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
  allowsMultipleSelection?: boolean;
}

interface UseImagePickerReturn {
  assets: ImagePickerAsset[];
  isLoading: boolean;
  pickFromLibrary: () => Promise<void>;
  pickFromCamera: () => Promise<void>;
  clearAssets: () => void;
}

export function useImagePicker(options: UseImagePickerOptions = {}): UseImagePickerReturn {
  const {
    allowsEditing = true,
    aspect = [1, 1],
    quality = 0.8,
    allowsMultipleSelection = false,
  } = options;

  const [assets, setAssets] = useState<ImagePickerAsset[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const requestMediaLibraryPermission = useCallback(async (): Promise<boolean> => {
    const { status, canAskAgain } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      return true;
    }

    if (!canAskAgain) {
      Alert.alert(
        'Permissão necessária',
        'Para selecionar fotos, habilite o acesso à biblioteca de mídia nas configurações do dispositivo.'
      );
      return false;
    }

    Alert.alert(
      'Permissão negada',
      'O acesso à biblioteca de fotos é necessário para selecionar imagens.'
    );
    return false;
  }, []);

  const requestCameraPermission = useCallback(async (): Promise<boolean> => {
    const { status, canAskAgain } = await ImagePicker.requestCameraPermissionsAsync();

    if (status === 'granted') {
      return true;
    }

    if (!canAskAgain) {
      Alert.alert(
        'Permissão necessária',
        'Para selecionar fotos, habilite o acesso à biblioteca de mídia nas configurações do dispositivo.'
      );
      return false;
    }

    Alert.alert(
      'Permissão negada',
      'O acesso à biblioteca de fotos é necessário para selecionar imagens.'
    );
    return false;
  }, []);

  const pickFromLibrary = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestMediaLibraryPermission();
      if (!hasPermission) {
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing,
        aspect,
        quality,
        allowsMultipleSelection,
      });

      if (!result.canceled) {
        setAssets((prev) =>
          allowsMultipleSelection ? [...prev, ...result.assets] : result.assets
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [allowsEditing, aspect, quality, allowsMultipleSelection, requestMediaLibraryPermission]);

  const pickFromCamera = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        allowsEditing,
        aspect,
        quality,
        cameraType: ImagePicker.CameraType.back,
      });

      if (!result.canceled) {
        setAssets((prev) =>
          allowsMultipleSelection ? [...prev, ...result.assets] : result.assets
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [allowsEditing, aspect, quality, allowsMultipleSelection, requestCameraPermission]);

  const clearAssets = useCallback(() => setAssets([]), []);

  return {
    assets,
    isLoading,
    pickFromLibrary,
    pickFromCamera,
    clearAssets,
  };
}
