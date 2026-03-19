import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type TaskCardProps = {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  buttonText?: string;
  onPress?: () => void;
  variant?: 'vertical' | 'horizontal';
  extra?: React.ReactNode;
};

export function TaskCard({
  icon,
  iconBgColor,
  iconColor,
  title,
  description,
  buttonText,
  onPress,
  variant = 'horizontal',
  extra,
}: TaskCardProps) {
  const isVertical = variant === 'vertical';

  return (
    <TouchableOpacity
      style={[styles.container, isVertical && styles.containerVertical]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <MaterialIcons name={icon as any} size={isVertical ? 24 : 20} color={iconColor} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {extra}
      {buttonText && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
          <MaterialIcons name="arrow-forward" size={14} color={Colors.onPrimary} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  containerVertical: {
    flex: 1,
    minHeight: 180,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: 4,
  },
  description: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    lineHeight: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    gap: 4,
    marginTop: Spacing.md,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});