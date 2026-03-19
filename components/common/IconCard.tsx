import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../constants';
import { BorderRadius, FontSize, FontWeight, Spacing } from '../../constants/spacing';

type IconCardProps = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  labelStyle?: TextStyle;
};

export function IconCard({
  icon,
  label,
  onPress,
  style,
  backgroundColor = Colors.surfaceContainerHigh,
  labelStyle,
}: IconCardProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.iconContainer, { backgroundColor }]}>
        {icon}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    color: Colors.outline,
  },
});