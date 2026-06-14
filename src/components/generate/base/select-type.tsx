import { useGenerateStore } from '@/store/generateStore';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function SelectType() {
  const { type, setType } = useGenerateStore();
  const { t } = useTranslation();

  const isLeftSelected = type === 'interior';
  const isRightSelected = type === 'exterior';
  return (
    <View className="mb-4 flex-row rounded-xl bg-slate-300 p-1 dark:bg-slate-600">
      <Pressable
        onPress={() => setType('interior')}
        className={`h-10 w-1/2 items-center justify-center rounded-lg ${isLeftSelected ? 'bg-gold' : ''}`}
      >
        <Text
          className={`text-lg  ${isLeftSelected ? 'font-montserrat-bold text-white' : 'font-montserrat-regular dark:text-white'}`}
        >
          {t('generate.selectType.interior')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setType('exterior')}
        className={`h-10 w-1/2 items-center justify-center rounded-lg ${isRightSelected ? 'bg-gold' : ''}`}
      >
        <Text
          className={`text-lg ${isRightSelected ? 'font-montserrat-bold text-white ' : 'font-montserrat-regular dark:text-white'}`}
        >
          {t('generate.selectType.exterior')}
        </Text>
      </Pressable>
    </View>
  );
}
