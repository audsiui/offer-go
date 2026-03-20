import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, Layout } from '../../constants/spacing';
import { TopAppBar } from '../../components/layout';
import { ProgressHeroCard, TaskCard, QuickEntry, JobCard } from '../../components/screens/home';

const quickEntryItems = [
  { icon: 'menu-book', label: '八股文' },
  { icon: 'analytics', label: '面经分析' },
  { icon: 'groups', label: '求职社群' },
  { icon: 'more-horiz', label: '更多' },
];

const recommendedJobs = [
  {
    title: '产品经理实习生',
    company: '腾讯',
    location: '深圳',
    salary: '200-300/天',
    postedAt: '昨日更新',
  },
  {
    title: '前端开发工程师',
    company: '小红书',
    location: '上海',
    salary: '30k-50k',
    postedAt: '刚刚',
  },
];

export default function HomePage() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TopAppBar
        showNotification
        avatarSource={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPYgA0_zsIthm9Y_dVye2eQ1j_TlHY2W1A4jfIKYiioB-GaV9eXiIvGzYeFR8BTVA1EQDnLYQMaDH6_k74RA2KO-ZbxQOnRhZlwPjQk5XKaaKG1lrZBv4PVU7wNFaIGzZP3ySZBN99pe4YfwbcPv9OIYuULf643u-msfNhgb-u-e2ZU_xhMZORuxP8D82AOqjBCSQOrRhoOFd6g1qzuaSBG1_GNKsdXEjPpp7cwCmRs4lzDNz4G_OUXtlvdR55qRzy05CxNI14cZ0d',
        }}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: Layout.headerHeight + insets.top + Spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.greeting}>
          <Text style={styles.greetingTitle}>你好，张小明</Text>
          <Text style={styles.greetingSubtitle}>今天又是充满挑战的一天，加油！</Text>
        </View>

        <View style={styles.sectionSpacing}>
          <ProgressHeroCard
            progress={85}
            completedItems={12}
            remainingItems={3}
            targetCompany="字节跳动"
          />
        </View>

        <View style={styles.sectionSpacing}>
          <View style={styles.taskGrid}>
            <TaskCard
              icon="description"
              iconBgColor="rgba(163, 190, 254, 0.3)"
              iconColor={Colors.primary}
              title="简历完善"
              description="AI 已分析您的简历，建议优化 3 处项目描述。"
              buttonText="立即优化"
              variant="vertical"
            />
            <View style={styles.taskColumn}>
              <TaskCard
                icon="fitness-center"
                iconBgColor={Colors.tertiaryFixed}
                iconColor={Colors.tertiary}
                title="今日题目"
                description="算法热题：动态规划专项"
                extra={
                  <View style={styles.avatarStack}>
                    <View style={styles.avatarDot}><Text style={styles.avatarText}>1</Text></View>
                    <View style={styles.avatarDot}><Text style={styles.avatarText}>2</Text></View>
                    <View style={styles.avatarDot}><Text style={styles.avatarText}>3</Text></View>
                  </View>
                }
              />
              <View style={{ height: Spacing.sm }} />
              <TaskCard
                icon="forum"
                iconBgColor={Colors.primaryFixed}
                iconColor={Colors.primary}
                title="模拟面试"
                description="后端架构核心挑战"
                extra={
                  <View>
                    <Text style={styles.highlightText}>14:30 预告</Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionSpacing}>
          <QuickEntry items={quickEntryItems} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>待选工作岗位</Text>
            <TouchableOpacity onPress={() => router.push('/jobs' as any)}>
              <Text style={styles.sectionLink}>查看全部</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.jobList}>
            {recommendedJobs.map((job, index) => (
              <JobCard key={index} {...job} />
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
    paddingBottom: Layout.bottomNavHeight + Spacing['4xl'],
  },
  greeting: {
    marginBottom: Spacing.sm,
  },
  greetingTitle: {
    fontSize: FontSize['3xl'],
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    letterSpacing: 0.5,
  },
  greetingSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.xs,
    lineHeight: 20,
  },
  sectionSpacing: {
    marginBottom: Spacing.xl,
  },
  taskGrid: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  taskColumn: {
    flex: 1,
    gap: Spacing.sm,
  },
  avatarStack: {
    flexDirection: 'row',
    marginTop: Spacing.sm,
  },
  avatarDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.slate['200'],
    borderWidth: 2,
    borderColor: Colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  avatarText: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  highlightText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
    marginTop: Spacing.sm,
  },
  section: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  sectionLink: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  jobList: {
    gap: Spacing.lg,
  },
});