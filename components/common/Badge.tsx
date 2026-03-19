import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../constants';
import { BorderRadius, FontSize, FontWeight } from '../../constants/spacing';

type BadgeProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const variantStyles = {
  primary: {
    container: { backgroundColor: Colors.primaryContainer },
    text: { color: Colors.onPrimary },
  },
  secondary: {
    container: { backgroundColor: Colors.secondaryContainer },
    text: { color: Colors.onSecondaryContainer },
  },
  tertiary: {
    container: { backgroundColor: Colors.tertiaryFixed },
    text: { color: Colors.onTertiaryFixedVariant },
  },
  success: {
    container: { backgroundColor: Colors.green['600'] },
    text: { color: Colors.white },
  },
  warning: {
    container: { backgroundColor: Colors.amber['400'] },
    text: { color: Colors.black },
  },
  error: {
    container: { backgroundColor: Colors.errorContainer },
    text: { color: Colors.onErrorContainer },
  },
  neutral: {
    container: { backgroundColor: Colors.surfaceContainerHigh },
    text: { color: Colors.outline },
  },
};

export function Badge({
  label,
  variant = 'primary',
  size = 'sm',
  style,
  textStyle,
}: BadgeProps) {
  const sizeStyle = size === 'sm' ? styles.sizeSm : styles.sizeMd;

  return (
    <View style={[styles.container, variantStyles[variant].container, sizeStyle, style]}>
      <Text style={[styles.text, variantStyles[variant].text, textStyle]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: BorderRadius.full,
  },
  sizeSm: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  sizeMd: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  text: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
  },
});