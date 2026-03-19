import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { Card } from '../../common';

type Metric = {
  icon: string;
  label: string;
  value: string;
  subValue: string;
};

type AIFeedbackProps = {
  metrics: Metric[];
  tip: string;
};

export function AIFeedback({ metrics, tip }: AIFeedbackProps) {
  return (
    <Card style={styles.container} variant="elevated">
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="auto-awesome" size={18} color={Colors.white} />
          </View>
          <View>
            <Text style={styles.title}>AI 建议已就绪</Text>
            <Text style={styles.subtitle}>深度解析你的回答表现</Text>
          </View>
        </View>
        <Text style={styles.link}>查看详情</Text>
      </View>

      <View style={styles.metrics}>
        {metrics.map((metric, index) => (
          <View key={index} style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <MaterialIcons name={metric.icon as any} size={14} color={Colors.tertiary} />
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
            <View style={styles.metricValues}>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricSubValue}>{metric.subValue}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.tipCard}>
        <MaterialIcons name="tips-and-updates" size={14} color={Colors.primary} />
        <Text style={styles.tipText}>
          <Text style={styles.tipHighlight}>小贴士：</Text>
          {tip}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius['3xl'],
    padding: Spacing.xl,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 4,
    borderWidth: 1,
    borderColor: Colors.blue['50'],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: Colors.primary,
  },
  link: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  metrics: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  metricCard: {
    flex: 1,
    backgroundColor: Colors.surfaceContainerHigh,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.md,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.outline,
  },
  metricValues: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  metricValue: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.black,
    color: Colors.onSurface,
  },
  metricSubValue: {
    fontSize: 10,
    marginBottom: 2,
  },
  tipCard: {
    flexDirection: 'row',
    gap: Spacing.md,
    backgroundColor: 'rgba(0, 87, 194, 0.05)',
    padding: Spacing.md,
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
    borderColor: 'rgba(0, 87, 194, 0.1)',
  },
  tipText: {
    flex: 1,
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    lineHeight: 18,
  },
  tipHighlight: {
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
});