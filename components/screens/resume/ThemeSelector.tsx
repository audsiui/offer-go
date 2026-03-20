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
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.preview,
                option.isSelected && styles.previewSelected,
              ]}
            >
              <View style={[styles.previewBar, { backgroundColor: `${option.color}40` }]} />
              <View style={[styles.previewShortBar, { backgroundColor: `${option.color}25` }]} />
              <View style={[styles.previewLongBar, { backgroundColor: `${option.color}15` }]} />
              {option.isSelected && (
                <View style={[styles.checkMark, { backgroundColor: option.color }]}>
                  <Text style={styles.checkMarkText}>✓</Text>
                </View>
              )}
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
    gap: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  selectedLabel: {
    fontSize: FontSize.sm,
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
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.surfaceContainerLow,
    padding: Spacing.md,
    gap: 6,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  previewSelected: {
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.surfaceContainerLowest,
  },
  previewBar: {
    height: 10,
    borderRadius: 5,
    width: '100%',
  },
  previewShortBar: {
    height: 6,
    borderRadius: 3,
    width: '60%',
  },
  previewLongBar: {
    height: 6,
    borderRadius: 3,
    width: '100%',
  },
  checkMark: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMarkText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: FontWeight.bold,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.outline,
  },
  labelSelected: {
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
});