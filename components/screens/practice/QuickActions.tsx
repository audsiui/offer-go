import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type QuickAction = {
  icon: string;
  label: string;
  onPress?: () => void;
};

type QuickActionsProps = {
  actions: QuickAction[];
};

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.action} onPress={action.onPress}>
          <View style={styles.iconContainer}>
            <MaterialIcons name={action.icon as any} size={24} color={Colors.onSurfaceVariant} />
          </View>
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm,
  },
  action: {
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: Colors.outline,
  },
});