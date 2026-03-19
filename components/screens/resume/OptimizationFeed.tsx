import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { Card, Badge } from '../../common';

type SuggestionItem = {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  tag: string;
  description: string;
};

type OptimizationFeedProps = {
  suggestions: SuggestionItem[];
};

export function OptimizationFeed({ suggestions }: OptimizationFeedProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI 优化建议</Text>
        <Text style={styles.link}>查看全部</Text>
      </View>
      {suggestions.map((item, index) => (
        <Card key={index} style={styles.card} variant="elevated">
          <View style={styles.cardContent}>
            <View style={[styles.iconContainer, { backgroundColor: item.iconBgColor }]}>
              <MaterialIcons name={item.icon as any} size={20} color={item.iconColor} />
            </View>
            <View style={styles.textContent}>
              <View style={styles.titleRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Badge label={item.tag} variant="neutral" />
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </Card>
      ))}
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
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  link: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.primary,
  },
  card: {
    borderRadius: BorderRadius['2xl'],
  },
  cardContent: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  description: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    lineHeight: 18,
  },
});