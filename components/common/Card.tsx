import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants';
import { BorderRadius, Spacing } from '../../constants/spacing';

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: keyof typeof Spacing | number;
  onPress?: () => void;
  activeOpacity?: number;
};

export function Card({
  children,
  style,
  variant = 'elevated',
  padding = 'lg',
  onPress,
  activeOpacity = 0.95,
}: CardProps) {
  const paddingValue = typeof padding === 'number' ? padding : Spacing[padding];

  const cardStyle: ViewStyle = {
    padding: paddingValue,
    borderRadius: BorderRadius.xl,
    ...styles[variant],
  };

  if (onPress) {
    return (
      <TouchableOpacity
        style={[cardStyle, style]}
        onPress={onPress}
        activeOpacity={activeOpacity}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[cardStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  elevated: {
    backgroundColor: Colors.surfaceContainerLowest,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  outlined: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: Colors.outlineVariant,
  },
  filled: {
    backgroundColor: Colors.surfaceContainerLow,
  },
});