import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

export function ExploreSelectType() {
  const [type, setType] = useState<'interior' | 'exterior'>('interior');
  const { t } = useTranslation();

  const isLeftSelected = type === 'interior';
  const isRightSelected = type === 'exterior';

  const buttons = [
    {
      id: 'interior',
      title: t('explore.exploreSelectType.interior'),
      isActive: isLeftSelected,
    },
    {
      id: 'exterior',
      title: t('explore.exploreSelectType.exterior'),
      isActive: isRightSelected,
    },
  ];
  return (
    <View className="mb-4 flex-row rounded-xl bg-slate-200 p-1 dark:bg-slate-600">
      {buttons.map((button) => (
        <Pressable
          key={button.id}
          onPress={() => setType(button.id as 'interior' | 'exterior')}
          className={`h-10 w-1/2 items-center justify-center rounded-lg ${button.isActive ? 'bg-gold' : ''}`}
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
