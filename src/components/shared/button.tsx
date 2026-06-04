import { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  title,
  className,
  textClassName,
  icon,
  iconPosition = 'left',
  ...props
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-center gap-1 rounded-full bg-gold py-3 ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <Text className={`font-montserrat-semibold text-xl text-white ${textClassName}`}>
        {title}
      </Text>
      {icon && iconPosition === 'right' && icon}
    </TouchableOpacity>
  );
}
