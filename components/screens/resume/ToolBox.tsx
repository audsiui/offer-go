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
          <TouchableOpacity key={index} style={styles.tool} onPress={tool.onPress}>
            <View style={styles.iconContainer}>
              <MaterialIcons name={tool.icon as any} size={20} color={Colors.primary} />
            </View>
            <Text style={styles.label}>{tool.label}</Text>
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
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    paddingHorizontal: 4,
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
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
});