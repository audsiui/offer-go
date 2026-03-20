import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type ProgressHeroCardProps = {
  progress: number;
  completedItems: number;
  remainingItems: number;
  targetCompany: string;
};

export function ProgressHeroCard({
  progress,
  completedItems,
  remainingItems,
  targetCompany,
}: ProgressHeroCardProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.primaryContainer]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.subLabel}>目标达成进度</Text>
            <Text style={styles.title}>Offer 进度 {progress}%</Text>
          </View>
          <View style={styles.targetBadge}>
            <Text style={styles.targetText}>目标: {targetCompany}</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>已完成 {completedItems} 项准备</Text>
          <Text style={styles.footerText}>还差 {remainingItems} 个核心环节</Text>
        </View>

        <View style={styles.decorativeCircle} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius['2xl'],
    overflow: 'hidden',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 12,
  },
  gradient: {
    padding: Spacing.xl,
    gap: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  subLabel: {
    fontSize: FontSize.xs,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: Spacing.xs,
    fontWeight: FontWeight.medium,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 32,
    fontWeight: FontWeight.black,
    color: Colors.onPrimary,
    fontStyle: 'italic',
    letterSpacing: -0.5,
  },
  targetBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  targetText: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
  progressContainer: {
    marginTop: Spacing.xs,
  },
  progressTrack: {
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.full,
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.xs,
  },
  footerText: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  decorativeCircle: {
    position: 'absolute',
    right: -40,
    bottom: -40,
    width: 160,
    height: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 80,
  },
});