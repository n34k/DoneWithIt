import { ReactNode } from 'react';
import { ImageSourcePropType, TextStyle } from 'react-native';

export interface AppTextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

export interface BigButtonProps {
    title: string,
    onPress: () => void
    color: string
}

export interface CardProps {
    title: string,
    subTitle: string,
    image: ImageSourcePropType
}

export interface ListItemProps extends CardProps {}