import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type ThemeOption = {
  key: string;
  label: string;
  color: string;
  isSelected?: boolean;
};

type ThemeSelectorProps = {
  options: ThemeOption[];
  onSelect?: (key: string) => void;
};

export function ThemeSelector({ options, onSelect }: ThemeSelectorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>视觉风格</Text>
        <Text style={styles.selectedLabel}>已选: 现代简约</Text>
      </View>
      <View style={styles.options}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.option}
            onPress={() => onSelect?.(option.key)}
          >
            <View
              style={[
                styles.preview,
                option.isSelected && styles.previewSelected,
              ]}
            >
              <View style={[styles.previewBar, { backgroundColor: `${option.color}33` }]} />
              <View style={[styles.previewShortBar, { backgroundColor: `${option.color}20` }]} />
              <View style={[styles.previewLongBar, { backgroundColor: `${option.color}10` }]} />
            </View>
            <Text
              style={[
                styles.label,
                option.isSelected && styles.labelSelected,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  selectedLabel: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
  },
  options: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  preview: {
    aspectRatio: 0.75,
    width: '100%',
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.surfaceContainerLow,
    padding: Spacing.sm,
    gap: 4,
  },
  previewSelected: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  previewBar: {
    height: 8,
    borderRadius: 4,
    width: '100%',
  },
  previewShortBar: {
    height: 4,
    borderRadius: 2,
    width: '50%',
  },
  previewLongBar: {
    height: 4,
    borderRadius: 2,
    width: '100%',
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    color: Colors.outline,
  },
  labelSelected: {
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
});