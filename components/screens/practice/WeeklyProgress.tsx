import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { Card } from '../../common';

type WeekDay = {
  day: string;
  progress: number;
  isToday?: boolean;
  isFuture?: boolean;
};

type WeeklyProgressProps = {
  days: WeekDay[];
  completed: number;
  total: number;
  aiSuggestion: string;
};

export function WeeklyProgress({ days, completed, total, aiSuggestion }: WeeklyProgressProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>本周进度</Text>
        <Text style={styles.progress}>
          {completed}/{total} 题 ({percentage}%)
        </Text>
      </View>
      <Card style={styles.card} variant="filled">
        <View style={styles.days}>
          {days.map((item, index) => (
            <View key={index} style={styles.dayItem}>
              <View
                style={[
                  styles.barContainer,
                  item.isFuture && styles.barContainerFuture,
                ]}
              >
                {item.isFuture ? (
                  <View style={styles.emptyBar} />
                ) : (
                  <View style={styles.bar}>
                    <View
                      style={[
                        styles.barFill,
                        { height: `${item.progress}%` },
                      ]}
                    />
                  </View>
                )}
              </View>
              <Text
                style={[
                  styles.dayLabel,
                  item.isToday && styles.dayLabelToday,
                  item.isFuture && styles.dayLabelFuture,
                ]}
              >
                {item.day}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.suggestion}>
          <MaterialIcons name="auto-awesome" size={14} color={Colors.primary} />
          <Text style={styles.suggestionText}>{aiSuggestion}</Text>
        </View>
      </Card>
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
    alignItems: 'flex-end',
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  progress: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.primary,
  },
  card: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius.xl,
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    marginBottom: Spacing.lg,
  },
  dayItem: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  barContainer: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.primaryContainer,
    borderRadius: BorderRadius.lg,
    padding: 4,
    justifyContent: 'flex-end',
  },
  barContainerFuture: {
    backgroundColor: Colors.surfaceContainerHigh,
    opacity: 0.4,
  },
  bar: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 87, 194, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    backgroundColor: 'rgba(0, 87, 194, 0.3)',
    borderRadius: 4,
  },
  emptyBar: {
    width: '100%',
    height: '100%',
  },
  dayLabel: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: Colors.outline,
  },
  dayLabelToday: {
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  dayLabelFuture: {
    color: Colors.outline,
  },
  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.surfaceContainerLowest,
    padding: Spacing.sm,
    borderRadius: BorderRadius.lg,
  },
  suggestionText: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    flex: 1,
  },
});