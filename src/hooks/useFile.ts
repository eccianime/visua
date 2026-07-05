import { Directory, File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { useCallback, useState } from 'react';

type State = {
  isLoading: boolean;
  error: Error | null;
};

export function useFile() {
  const [state, setState] = useState<State>({
    isLoading: false,
    error: null,
  });

  const download = useCallback(async (url: string, directory?: string) => {
    setState({
      isLoading: true,
      error: null,
    });

    try {
      const filename = `file-${Date.now()}.jpg`;

      const destination = new File(directory || Paths.cache, filename);

      const file = await File.downloadFileAsync(url, destination, {
        idempotent: true,
      });

      return file;
    } catch (error) {
      setState({
        isLoading: false,
        error: error as Error,
      });

      throw error;
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, []);

  const share = useCallback(
    async (url: string) => {
      if (!(await Sharing.isAvailableAsync())) {
        throw new Error('Sharing is not available on this device.');
      }

      const file = await download(url);

      await Sharing.shareAsync(file.uri);
    },
    [download]
  );

  const saveAs = useCallback(async (url: string) => {
    setState({
      isLoading: true,
      error: null,
    });

    try {
      const filename = `file-${Date.now()}.jpg`;
      const tempFile = await File.downloadFileAsync(url, new File(Paths.cache, filename), {
        idempotent: true,
      });
      const directory = await Directory.pickDirectoryAsync();
      if (!directory) {
        return;
      }
      tempFile.copy(new File(directory.uri, filename));

      return new File(directory.uri, filename);
    } catch (error) {
      setState({
        isLoading: false,
        error: error as Error,
      });

      throw error;
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, []);

  return {
    ...state,
    download,
    share,
    saveAs,
  };
}
