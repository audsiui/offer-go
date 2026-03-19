import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type QuickEntryProps = {
  items: {
    icon: string;
    label: string;
    onPress?: () => void;
  }[];
};

export function QuickEntry({ items }: QuickEntryProps) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.iconContainer}>
            <MaterialIcons name={item.icon as any} size={24} color={Colors.primary} />
          </View>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    color: Colors.onSurfaceVariant,
  },
});