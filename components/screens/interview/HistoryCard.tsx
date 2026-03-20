import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type HistoryCardProps = {
  company: string;
  position: string;
  date: string;
  score: number;
  scoreLabel: string;
  aiTip: string;
  icon?: string;
  onReview?: () => void;
  onViewReport?: () => void;
};

function getScoreColor(score: number): string {
  if (score >= 85) return Colors.primary;
  if (score >= 70) return Colors.tertiary;
  return Colors.outline;
}

export function HistoryCard({
  company,
  position,
  date,
  score,
  scoreLabel,
  aiTip,
  icon,
  onReview,
  onViewReport,
}: HistoryCardProps) {
  const scoreColor = getScoreColor(score);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconWrapper}>
            <MaterialIcons name={icon as any || 'business'} size={24} color={Colors.outline} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{company} - {position}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        
        <View style={styles.scoreContainer}>
          <Text style={[styles.scoreValue, { color: scoreColor }]}>{score}</Text>
          <Text style={[styles.scoreUnit, { color: scoreColor }]}>分</Text>
        </View>
      </View>
      
      <View style={styles.tipCard}>
        <MaterialIcons name="auto-awesome" size={14} color={Colors.secondary} />
        <Text style={styles.tipText}>{aiTip}</Text>
      </View>
      
      <View style={styles.actions}>
        {onReview && (
          <TouchableOpacity style={styles.secondaryBtn} onPress={onReview} activeOpacity={0.8}>
            <Text style={styles.secondaryBtnText}>重新练习</Text>
          </TouchableOpacity>
        )}
        {onViewReport && (
          <TouchableOpacity style={styles.primaryBtn} onPress={onViewReport} activeOpacity={0.8}>
            <Text style={styles.primaryBtnText}>查看报告</Text>
            <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['3xl'],
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    flexDirection: 'row',
    gap: Spacing.md,
    flex: 1,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius['2xl'],
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    gap: 2,
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  date: {
    fontSize: FontSize.xs,
    color: Colors.outline,
    marginTop: 2,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  scoreValue: {
    fontSize: FontSize['2xl'],
    fontWeight: FontWeight.black,
  },
  scoreUnit: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    marginLeft: 2,
  },
  tipCard: {
    flexDirection: 'row',
    gap: Spacing.sm,
    backgroundColor: Colors.surfaceContainerLow,
    padding: Spacing.md,
    borderRadius: BorderRadius['2xl'],
  },
  tipText: {
    flex: 1,
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    lineHeight: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  secondaryBtn: {
    flex: 1,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.surfaceContainerHigh,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurfaceVariant,
  },
  primaryBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: Spacing.md,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  primaryBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  },
});