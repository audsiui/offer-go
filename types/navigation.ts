import { GestureResponderEvent } from 'react-native';

export type TabItem = {
  key: string;
  label: string;
  icon: string;
  iconFilled?: string;
  route: string;
};

export type NavigationAction = {
  onPress?: (event: GestureResponderEvent) => void;
  href?: string;
};

export type RootStackParamList = {
  index: undefined;
  resume: undefined;
  practice: undefined;
  interview: undefined;
};