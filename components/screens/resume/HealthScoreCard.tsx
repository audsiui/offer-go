import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { ProgressBar } from '../../common';

type HealthScoreCardProps = {
  score: number;
  status: string;
  suggestion: string;
};

export function HealthScoreCard({ score, status, suggestion }: HealthScoreCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>简历健康度</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
      <View style={styles.scoreRow}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.scoreMax}>/100</Text>
      </View>
      <ProgressBar progress={score} height={8} fillColor={Colors.primary} />
      <Text style={styles.suggestion}>{suggestion}</Text>
      <MaterialIcons
        name="analytics"
        size={120}
        color={Colors.primary}
        style={styles.decorativeIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['3xl'],
    padding: Spacing.xl,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 30,
    elevation: 4,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    fontWeight: FontWeight.medium,
  },
  statusBadge: {
    backgroundColor: Colors.tertiaryFixed,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
  statusText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.onTertiaryFixedVariant,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: Spacing.md,
  },
  score: {
    fontSize: 48,
    fontWeight: FontWeight.black,
    color: Colors.primary,
    lineHeight: 48,
  },
  scoreMax: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurfaceVariant,
    marginBottom: 8,
  },
  suggestion: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    lineHeight: 18,
    marginTop: Spacing.lg,
  },
  decorativeIcon: {
    position: 'absolute',
    right: -16,
    bottom: -16,
    opacity: 0.05,
  },
});