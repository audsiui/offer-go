import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type ToolItem = {
  icon: string;
  label: string;
  onPress?: () => void;
};

type ToolBoxProps = {
  tools: ToolItem[];
};

export function ToolBox({ tools }: ToolBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>简历工具箱</Text>
      <View style={styles.grid}>
        {tools.map((tool, index) => (
          <TouchableOpacity key={index} style={styles.tool} onPress={tool.onPress} activeOpacity={0.8}>
            <View style={styles.iconContainer}>
              <MaterialIcons name={tool.icon as any} size={24} color={Colors.primary} />
            </View>
            <Text style={styles.label}>{tool.label}</Text>
            <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.onSurfaceVariant} />
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
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  grid: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  tool: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    padding: Spacing.lg,
    borderRadius: BorderRadius['2xl'],
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  label: {
    flex: 1,
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
});