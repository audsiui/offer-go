import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type ChallengeItem = {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  subtitle: string;
  isFeatured?: boolean;
};

type TrendingChallengesProps = {
  challenges: ChallengeItem[];
};

export function TrendingChallenges({ challenges }: TrendingChallengesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>热门挑战</Text>
        <Text style={styles.link}>查看全部</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {challenges.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              item.isFeatured && styles.cardFeatured,
            ]}
            activeOpacity={0.9}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: item.isFeatured ? 'rgba(255, 255, 255, 0.2)' : item.iconBgColor },
              ]}
            >
              <MaterialIcons
                name={item.icon as any}
                size={20}
                color={item.isFeatured ? Colors.white : item.iconColor}
              />
            </View>
            <Text
              style={[
                styles.cardTitle,
                item.isFeatured && styles.cardTitleFeatured,
              ]}
            >
              {item.title}
            </Text>
            <View style={styles.cardFooter}>
              {item.isFeatured ? (
                <>
                  <MaterialIcons name="timer" size={12} color="rgba(255, 255, 255, 0.8)" />
                  <Text style={styles.cardSubtitleFeatured}>{item.subtitle}</Text>
                </>
              ) : (
                <>
                  <MaterialIcons name="group" size={12} color={Colors.outline} />
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  link: {
    fontSize: FontSize.xs,
    color: Colors.outline,
  },
  scrollContent: {
    gap: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  card: {
    width: 160,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    justifyContent: 'space-between',
    height: 160,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardFeatured: {
    backgroundColor: Colors.primary,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    lineHeight: 18,
  },
  cardTitleFeatured: {
    color: Colors.white,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cardSubtitle: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: Colors.outline,
  },
  cardSubtitleFeatured: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});