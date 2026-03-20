import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, Layout, BorderRadius } from '../../constants/spacing';
import { TopAppBar } from '../../components/layout';
import { ProgressHeroCard, TaskCard, QuickEntry } from '../../components/screens/home';
import { TargetJobCard } from '../../components/screens/jobs';

const quickEntryItems = [
  { icon: 'menu-book', label: '八股文' },
  { icon: 'analytics', label: '面经分析' },
  { icon: 'groups', label: '求职社群' },
  { icon: 'more-horiz', label: '更多' },
];

const mockTargetJobs = [
  {
    id: '1',
    title: '前端开发工程师',
    company: '字节跳动',
    location: '北京',
    salary: '25k-45k',
    jdDescription: '负责抖音前端架构设计与开发，参与核心业务功能实现',
    jdRequirements: '3年以上前端经验，精通React/Vue，熟悉性能优化',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: '产品经理',
    company: '腾讯',
    location: '深圳',
    salary: '30k-50k',
    jdDescription: '负责微信支付产品规划与迭代，推动产品创新',
    jdRequirements: '5年以上产品经验，有支付或金融产品背景优先',
    createdAt: '2024-01-10',
  },
];

export default function HomePage() {
  const insets = useSafeAreaInsets();
  const targetJobs = mockTargetJobs;

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
              title="简历完善"
              description="AI 已分析您的简历，建议优化 3 处项目描述。"
              buttonText="立即优化"
              variant="vertical"
              backgroundImage={require('../../assets/homepage/jianli.jpg')}
              titleColor="#1e1b4b"
              descriptionColor="#312e81"
            />
            <View style={styles.taskColumn}>
              <TaskCard
                title="今日题目"
                description="算法热题：动态规划专项"
                extra={
                  <View style={styles.avatarStack}>
                    <View style={styles.avatarDot}><Text style={styles.avatarText}>1</Text></View>
                    <View style={styles.avatarDot}><Text style={styles.avatarText}>2</Text></View>
                    <View style={styles.avatarDot}><Text style={styles.avatarText}>3</Text></View>
                  </View>
                }
                backgroundImage={require('../../assets/homepage/lianxi.jpg')}
                titleColor="#7c2d12"
                descriptionColor="#9a3412"
              />
              <View style={{ height: Spacing.sm }} />
              <TaskCard
                title="模拟面试"
                description="后端架构核心挑战"
                extra={
                  <View>
                    <Text style={styles.highlightTextCyan}>14:30 预告</Text>
                  </View>
                }
                backgroundImage={require('../../assets/homepage/mianshi.jpg')}
                titleColor="#164e63"
                descriptionColor="#155e75"
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionSpacing}>
          <QuickEntry items={quickEntryItems} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>目标岗位</Text>
            <TouchableOpacity onPress={() => router.push('/jobs' as any)}>
              <Text style={styles.sectionLink}>查看全部</Text>
            </TouchableOpacity>
          </View>
          
          {targetJobs.length === 0 ? (
            <View style={styles.emptyState}>
              <MaterialIcons name="work-outline" size={48} color={Colors.outline} />
              <Text style={styles.emptyTitle}>暂无目标岗位</Text>
              <Text style={styles.emptyDesc}>添加您心仪的岗位，开启针对性面试准备</Text>
              <TouchableOpacity 
                style={styles.emptyBtn}
                onPress={() => router.push('/jobs/new' as any)}
              >
                <Text style={styles.emptyBtnText}>添加目标岗位</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.jobList}>
              {targetJobs.slice(0, 2).map((job) => (
                <TargetJobCard key={job.id} job={job} />
              ))}
            </View>
          )}
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
    borderColor: Colors.white,
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
  highlightTextCyan: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: '#0891b2',
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
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing['3xl'],
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
    borderStyle: 'dashed',
  },
  emptyTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginTop: Spacing.lg,
  },
  emptyDesc: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  emptyBtn: {
    marginTop: Spacing.lg,
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius['2xl'],
  },
  emptyBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});