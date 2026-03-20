import { ScrollView, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants';
import { Spacing, Layout } from '../../constants/spacing';
import { TopAppBar, FAB } from '../../components/layout';
import {
  WeeklyProgress,
  TrendingChallenges,
  CodeEditor,
  QuickActions,
} from '../../components/screens/practice';

const weekDays = [
  { day: '周一', progress: 100 },
  { day: '周二', progress: 80 },
  { day: '周三', progress: 60 },
  { day: '今天', progress: 90, isToday: true },
  { day: '周五', progress: 0, isFuture: true },
  { day: '周六', progress: 0, isFuture: true },
  { day: '周日', progress: 0, isFuture: true },
];

const challenges = [
  {
    icon: 'hotel-class',
    iconBgColor: Colors.orange['100'],
    iconColor: Colors.orange['600'],
    title: '字节跳动 24 届\n秋招真题集',
    subtitle: '1.2w 人在练',
  },
  {
    icon: 'psychology',
    iconBgColor: '',
    iconColor: '',
    title: 'AI 每日算法：\n深度优先搜索',
    subtitle: '仅剩 14 小时',
    isFeatured: true,
  },
  {
    icon: 'account-tree',
    iconBgColor: Colors.blue['50'],
    iconColor: Colors.blue['600'],
    title: '大厂高频：\n链表专题',
    subtitle: '官方精选',
  },
];

const codeLines = [
  'class Solution:',
  '  def reverseList(self, head):',
  '    prev, curr = None, head',
  '    while curr:',
  '      # 在此输入代码...',
  '      next_node = curr.next',
];

const quickActions = [
  { icon: 'history', label: '刷题记录' },
  { icon: 'book', label: '错题本' },
  { icon: 'analytics', label: '能力雷达' },
  { icon: 'workspace-premium', label: '竞赛大厅' },
];

export default function PracticePage() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TopAppBar
        showNotification
        showStreak
        streakCount={12}
        avatarSource={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9jYbSWA6xTjjvS6N0D42MCx6fcn0v9R01hAOHsOicNkdywutyZm28hK5APSdcLUzfIECLYEWO4eq01Uq6T_A4YCvvT7Z4urHotZw4zwUZwti9jID4X87V3C13FClGCCMasMDymO_rVQ6kL-MH2iPM89nvSpCkqyrxygshMEJ7YTt2G5C2HeK55SV1iQweYm6LfsocxTWeYPW_ghqxs2iYQkQRra3QTz0bguQk4S1w1su-5oIYgT69uNoauQZbdkIFtkyO9l-aVsot',
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
        <WeeklyProgress
          days={weekDays}
          completed={14}
          total={20}
          aiSuggestion="AI 建议：今天再刷 2 道「动态规划」即可达成目标"
        />

        <TrendingChallenges challenges={challenges} />

        <CodeEditor
          difficulty="简单"
          title="206. 反转链表"
          description="给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。"
          code={codeLines}
        />

        <QuickActions actions={quickActions} />
      </ScrollView>
      <FAB icon="rocket-launch" onPress={() => {}} />
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
});