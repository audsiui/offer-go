import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import type { TargetJob } from '../../../types/job';

type TargetJobCardProps = {
  job: TargetJob;
  onPress?: () => void;
  onStartInterview?: () => void;
  compact?: boolean;
};

export function TargetJobCard({ job, onPress, onStartInterview, compact = false }: TargetJobCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.header}>
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>{job.company[0]}</Text>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title} numberOfLines={1}>{job.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>
        {job.salary && <Text style={styles.salary}>{job.salary}</Text>}
      </View>

      {!compact && (
        <>
          <View style={styles.jdSection}>
            <View style={styles.jdRow}>
              <MaterialIcons name="description" size={14} color={Colors.onSurfaceVariant} />
              <Text style={styles.jdLabel}>职位描述</Text>
            </View>
            <Text style={styles.jdContent} numberOfLines={2}>{job.jdDescription}</Text>
          </View>

          <View style={styles.jdSection}>
            <View style={styles.jdRow}>
              <MaterialIcons name="checklist" size={14} color={Colors.onSurfaceVariant} />
              <Text style={styles.jdLabel}>任职要求</Text>
            </View>
            <Text style={styles.jdContent} numberOfLines={2}>{job.jdRequirements}</Text>
          </View>
        </>
      )}

      <View style={styles.footer}>
        <Text style={styles.createdAt}>添加于 {job.createdAt}</Text>
        <TouchableOpacity style={styles.interviewBtn} onPress={onStartInterview}>
          <MaterialIcons name="play-circle-outline" size={16} color={Colors.onPrimary} />
          <Text style={styles.interviewBtnText}>开始面试</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  logoPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  headerContent: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  company: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
  },
  dot: {
    color: Colors.onSurfaceVariant,
    marginHorizontal: Spacing.xs,
  },
  location: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
  },
  salary: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.tertiary,
  },
  jdSection: {
    marginBottom: Spacing.md,
  },
  jdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  jdLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    color: Colors.onSurfaceVariant,
  },
  jdContent: {
    fontSize: FontSize.sm,
    color: Colors.onSurface,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.surfaceContainer,
  },
  createdAt: {
    fontSize: FontSize.xs,
    color: Colors.outline,
  },
  interviewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius['2xl'],
  },
  interviewBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});