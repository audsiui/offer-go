import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, Layout, BorderRadius } from '../../constants/spacing';
import { TopAppBar } from '../../components/layout';
import { HeroCard, UpcomingCard, HistoryCard } from '../../components/screens/interview';

const upcomingInterviews = [
  {
    id: '1',
    company: '字节跳动',
    position: '前端开发',
    time: '明天 10:00',
    icon: 'corporate-fare',
  },
];

const historyRecords = [
  {
    id: '1',
    company: '腾讯',
    position: '产品经理',
    date: '2023-10-24',
    score: 85,
    aiTip: '表现稳健，STAR法则应用较好，建议在行业洞察深度上进一步加强。',
    icon: 'business',
  },
  {
    id: '2',
    company: '美团',
    position: '算法工程师',
    date: '2023-10-20',
    score: 78,
    aiTip: '算法逻辑清晰，但在代码边界条件处理上存在漏洞，沟通表达尚可。',
    icon: 'code',
  },
];

export default function InterviewPage() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TopAppBar
        avatarSource={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcMvXAg4csYdYXBfNoiZE-Q4UjngDa3jnsrUolkZLeMPoJLJYNnN1h7tb2rXRfToADfa2ICWbF4QR1HE721W0iGZPQoI6BeglR9VqcGT8y8nF5HopSQmi-eO7iwxnQuGKmvI46YVjB21kzS-rKZgTG99Xu2nxOtaucxcarE_ezKLzHRACfi18JP5sWo80_ceb2N0tBtN8Hkz42gZXi29wqcjgnSfVGTKSGT3aYPYVzdGq0h-OaFdDt3RRq3-Dv4cxie5nebFRJvw7N',
        }}
      />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: Layout.headerHeight + insets.top + Spacing.lg },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <HeroCard
          title="OfferGo AI 面试官"
          description="AI 针对岗位需求，为您量身定制面试题，模拟真实场景，助您斩获心仪 Offer。"
          buttonText="开始新的模拟面试"
          onPress={() => {}}
        />

        {upcomingInterviews.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>预约面试</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{upcomingInterviews.length}</Text>
                </View>
              </View>
            </View>
            
            {upcomingInterviews.map((item) => (
              <UpcomingCard
                key={item.id}
                company={item.company}
                position={item.position}
                time={item.time}
                icon={item.icon}
                onNotify={() => {}}
              />
            ))}
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>模拟记录</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>查看全部</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.historyList}>
            {historyRecords.map((item) => (
              <HistoryCard
                key={item.id}
                company={item.company}
                position={item.position}
                date={item.date}
                score={item.score}
                scoreLabel={item.score >= 85 ? 'Excellent' : 'Good'}
                aiTip={item.aiTip}
                icon={item.icon}
                onReview={() => {}}
                onViewReport={() => {}}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Layout.bottomNavHeight + Spacing['5xl'],
    gap: Spacing.xl,
  },
  section: {
    gap: Spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xs,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  badge: {
    backgroundColor: 'rgba(0, 87, 194, 0.1)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  viewAllLink: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  historyList: {
    gap: Spacing.lg,
  },
});