import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function WorksSelectType() {
  const [type, setType] = useState<'all' | 'interior' | 'exterior'>('all');
  const { t } = useTranslation();

  const isAllSelected = type === 'all';
  const isLeftSelected = type === 'interior';
  const isRightSelected = type === 'exterior';

  const buttons = [
    {
      id: 'all',
      title: t('works.selectWorksType.all'),
      isActive: isAllSelected,
    },
    {
      id: 'interior',
      title: t('works.selectWorksType.interior'),
      isActive: isLeftSelected,
    },
    {
      id: 'exterior',
      title: t('works.selectWorksType.exterior'),
      isActive: isRightSelected,
    },
  ];
  return (
    <View className="mb-4 flex-row rounded-xl bg-slate-200 p-1 dark:bg-slate-600">
      {buttons.map((button) => (
        <Pressable
          key={button.id}
          onPress={() => setType(button.id as 'all' | 'interior' | 'exterior')}
          className={`h-10 w-1/3 items-center justify-center rounded-lg ${button.isActive ? 'bg-gold' : ''}`}
        >
          <Text
            className={`text-lg  ${button.isActive ? 'font-montserrat-bold text-white' : 'font-montserrat-regular dark:text-white'}`}
          >
            {button.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
