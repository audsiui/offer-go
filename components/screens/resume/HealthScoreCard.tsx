import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { ProgressBar } from '../../common';

type HealthScoreCardProps = {
  score: number;
  status: string;
  suggestion: string;
};

export function HealthScoreCard({ score, status, suggestion }: HealthScoreCardProps) {
  const getScoreColor = () => {
    if (score >= 80) return Colors.green['600'];
    if (score >= 60) return Colors.amber['400'];
    return Colors.tertiary;
  };

  const scoreColor = getScoreColor();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>简历健康度</Text>
      
      <View style={styles.scoreSection}>
        <Text style={[styles.score, { color: scoreColor }]}>{score}</Text>
        <Text style={styles.scoreMax}>/100</Text>
      </View>

      <ProgressBar 
        progress={score} 
        height={8} 
        fillColor={scoreColor}
        backgroundColor={scoreColor + '20'}
      />

      <View style={styles.statusRow}>
        <View style={[styles.statusDot, { backgroundColor: scoreColor }]} />
        <Text style={styles.statusText}>{status}</Text>
      </View>

      <Text style={styles.suggestion}>{suggestion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.xl,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  label: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    fontWeight: FontWeight.medium,
    marginBottom: Spacing.sm,
  },
  scoreSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: Spacing.md,
  },
  score: {
    fontSize: 48,
    fontWeight: FontWeight.black,
    lineHeight: 48,
  },
  scoreMax: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurfaceVariant,
    marginLeft: 2,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.lg,
    gap: Spacing.xs,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  suggestion: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    lineHeight: 22,
    backgroundColor: Colors.surfaceContainerLow,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
});