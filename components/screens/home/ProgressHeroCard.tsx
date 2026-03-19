import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { ProgressBar } from '../../common';

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
        <ProgressBar
          progress={progress}
          height={10}
          backgroundColor="rgba(255, 255, 255, 0.2)"
          fillColor={Colors.white}
        />
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
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
  },
  gradient: {
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  subLabel: {
    fontSize: FontSize.xs,
    color: Colors.primaryFixed,
    marginBottom: 4,
  },
  title: {
    fontSize: FontSize['3xl'],
    fontWeight: FontWeight.black,
    fontStyle: 'italic',
    color: Colors.onPrimary,
  },
  targetBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  targetText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: FontSize.xs,
    color: Colors.onPrimary,
    opacity: 0.9,
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