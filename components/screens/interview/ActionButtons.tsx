import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type ActionButton = {
  icon: string;
  label: string;
  variant?: 'default' | 'danger';
  onPress?: () => void;
};

type ActionButtonsProps = {
  actions: ActionButton[];
};

export function ActionButtons({ actions }: ActionButtonsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {actions.map((action, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            action.variant === 'danger' && styles.buttonDanger,
          ]}
          onPress={action.onPress}
        >
          <MaterialIcons
            name={action.icon as any}
            size={14}
            color={action.variant === 'danger' ? Colors.white : Colors.onSurfaceVariant}
          />
          <Text
            style={[
              styles.label,
              action.variant === 'danger' && styles.labelDanger,
            ]}
          >
            {action.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
    paddingBottom: Spacing['3xl'],
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.surfaceContainerHigh,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius['2xl'],
  },
  buttonDanger: {
    backgroundColor: Colors.error,
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.onSurfaceVariant,
  },
  labelDanger: {
    color: Colors.white,
  },
});