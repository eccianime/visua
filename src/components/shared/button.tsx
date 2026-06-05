import { ReactNode } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  title: string;
  className?: string;
  textClassName?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

export function Button({
  title,
  className,
  textClassName,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <Pressable
      className={`flex-row items-center justify-center gap-1 rounded-lg bg-gold py-3 ${className} ${disabled ? 'opacity-50' : ''}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <Text className={`font-montserrat-semibold text-xl text-white ${textClassName}`}>
        {title}
      </Text>
      {icon && iconPosition === 'right' && icon}
    </Pressable>
  );
}
