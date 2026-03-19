import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, BorderRadius } from '../constants';
import { FontWeight, Spacing, Layout } from '../constants/spacing';
import { TopAppBar, BottomNavBar } from '../components/layout';
import {
  InterviewerCard,
  Transcript,
  AIFeedback,
  ActionButtons,
} from '../components/screens/interview';

const messages = [
  {
    id: '1',
    sender: 'interviewer' as const,
    senderName: '面试官',
    content: '很好，你能详细描述一下你在处理高并发场景时，如何优化数据库查询性能吗？',
  },
  {
    id: '2',
    sender: 'user' as const,
    senderName: '你',
    content: '在这个项目中，我们首先引入了 Redis 缓存层来减少对主库的直接访问，并实施了读写分离...',
  },
];

const metrics = [
  { icon: 'speed', label: '语速控制', value: '稳健', subValue: '115 wpm' },
  { icon: 'psychology', label: '逻辑结构', value: 'STAR', subValue: '优秀' },
];

const actions = [
  { icon: 'mic-off', label: '静音' },
  { icon: 'videocam-off', label: '关闭摄像头' },
  { icon: 'call-end', label: '结束面试', variant: 'danger' as const },
];

export default function InterviewPage() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TopAppBar
        showBackButton
        rightContent={
          <View style={styles.recBadge}>
            <View style={styles.recDot} />
            <Text style={styles.recText}>REC</Text>
          </View>
        }
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
        <InterviewerCard
          name="Sarah"
          role="高级技术招聘官"
          company="Google (Ex)"
          imageUri="https://lh3.googleusercontent.com/aida-public/AB6AXuDp52vLF9aNyHHlvCG7pOEOQY4Hw0MBtNKj3_UbrUPCQ27QwnjI5UEOcN8a66bByv4DoKmRL0TbDLOdGgjWR5T3xk8zWbQgR7NzR_hf62pu5M79v4051i_AIGUazbxamPhoM2t1sSJ_YV_Qrv7uKEwN20vIRUPiWE4oTmqJQ32q9DrDyvbHCc75j8C-C6P-cJa1JM391kxJNOg2svaieo_jtL1xMRlLeXCuVOW3xDyJsyDedSAWwfNSdd14Z7d_Fkb7dZuR3HPDIUoc"
        />

        <Transcript messages={messages} />

        <AIFeedback
          metrics={metrics}
          tip="尝试在提到 Redis 时补充具体的过期策略，这会让你的技术深度看起来更专业。"
        />

        <ActionButtons actions={actions} />
      </ScrollView>
      <BottomNavBar />
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
    gap: Spacing.lg,
  },
  recBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.errorContainer,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
    gap: 6,
  },
  recDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.error,
  },
  recText: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.onErrorContainer,
  },
});