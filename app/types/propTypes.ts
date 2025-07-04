import { ReactNode  } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageSourcePropType, TextStyle, TextInputProps, TextProps  } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { RegisterFormValues } from './dataTypes';

export interface AppFormProps {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
  children: any;
}

export interface AppFormFieldProps extends AppTextInputProps {
  name: keyof RegisterFormValues;
  width?: number;
}

export interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

export interface AppTextInputProps extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  width?: number | string;
}

export interface BigButtonProps {
  title: string;
  onPress: () => void;
  color: string;
}

export interface CardProps {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
}

export interface ErrorMessageProps {
  error: string | undefined;
  visible: boolean | undefined;
}

export interface IconProps {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size: number;
  iconColor: string;
  backgroundColor: string;
}

export interface ListItemProps extends CardProps {
  IconComponent?: ReactNode;
  showChevron: boolean
  onPress: () => void;
  renderRightActions?: (
  progress: SharedValue<number>,
  translation: SharedValue<number>,
  swipeableMethods: any
  ) => ReactNode;
}

export interface ListItemDeleteActionProps {
  onPress: () => void;
}

export interface PickerProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  width?: any
  items: any;
  placeholder: string;
  selectedItem: any;
  onSelectItem: any;
}

export interface PickerItemProps {
  label: string;
  onPress: () => void;
}

export interface SubmitButtonProps {
  title: string;
}