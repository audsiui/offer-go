import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';
import { Colors } from '../constants';
import { FontSize, FontWeight, Spacing, BorderRadius, Layout } from '../constants/spacing';
import { TargetJobCard, AddJobModal } from '../components/screens/jobs';
import type { TargetJob } from '../types/job';

const mockJobs: TargetJob[] = [
  {
    id: '1',
    title: '前端开发工程师',
    company: '字节跳动',
    location: '北京',
    salary: '25k-45k',
    jdDescription: '负责抖音前端架构设计与开发，参与核心业务功能实现，与产品、设计、后端团队紧密协作，推动产品迭代优化。',
    jdRequirements: '3年以上前端经验，精通React/Vue，熟悉性能优化，有大型项目经验优先。',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: '产品经理',
    company: '腾讯',
    location: '深圳',
    salary: '30k-50k',
    jdDescription: '负责微信支付产品规划与迭代，推动产品创新，深入理解用户需求，制定产品策略并推动落地。',
    jdRequirements: '5年以上产品经验，有支付或金融产品背景优先，具备数据分析能力。',
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    title: '后端开发工程师',
    company: '阿里巴巴',
    location: '杭州',
    salary: '30k-50k',
    jdDescription: '负责电商平台核心系统架构设计与开发，保障系统高可用、高性能运行。',
    jdRequirements: '3年以上Java开发经验，熟悉Spring生态，有分布式系统设计经验。',
    createdAt: '2024-01-08',
  },
];

export default function JobsPage() {
  const insets = useSafeAreaInsets();
  const [jobs, setJobs] = useState<TargetJob[]>(mockJobs);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDelete = (job: TargetJob) => {
    Alert.alert(
      '删除岗位',
      `确定要删除「${job.title}」吗？`,
      [
        { text: '取消', style: 'cancel' },
        { 
          text: '删除', 
          style: 'destructive',
          onPress: () => setJobs(jobs.filter(j => j.id !== job.id))
        },
      ]
    );
  };

  const handleStartInterview = (job: TargetJob) => {
    router.push({
      pathname: '/interview' as any,
      params: { jobId: job.id, jobTitle: job.title, company: job.company }
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>我的目标岗位</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text style={styles.statNum}>{jobs.length}</Text>
          <Text style={styles.statLabel}>目标岗位</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNum}>{jobs.filter(j => j).length}</Text>
          <Text style={styles.statLabel}>待准备</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <TouchableOpacity 
            style={styles.uploadEntry}
            onPress={() => setShowAddModal(true)}
          >
            <MaterialIcons name="add" size={16} color={Colors.primary} />
            <Text style={styles.uploadText}>新增目标岗位</Text>
          </TouchableOpacity>
        </View>
      </View>

      {jobs.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyState}>
            <MaterialIcons name="work-outline" size={64} color={Colors.outline} />
            <Text style={styles.emptyTitle}>还没有目标岗位</Text>
            <Text style={styles.emptyDesc}>添加您心仪的岗位，AI 将根据 JD 为您定制面试题目</Text>
            <TouchableOpacity 
              style={styles.emptyBtn}
              onPress={() => router.push('/jobs/new' as any)}
            >
              <MaterialIcons name="add" size={20} color={Colors.onPrimary} />
              <Text style={styles.emptyBtnText}>添加目标岗位</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + Spacing['3xl'] }]}
          showsVerticalScrollIndicator={false}
        >
          {jobs.map((job) => (
            <TargetJobCard
              key={job.id}
              job={job}
              onStartInterview={() => handleStartInterview(job)}
            />
          ))}
        </ScrollView>
      )}

      <AddJobModal
        visible={showAddModal}
        onClose={() => setShowAddModal(false)}
        onManualAdd={() => {
          setShowAddModal(false);
          router.push('/jobs/new' as any);
        }}
        onImageUpload={() => {
          setShowAddModal(false);
          // TODO: 实现图片上传和 OCR 解析
          Alert.alert('提示', '图片上传功能开发中，敬请期待');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    minHeight: Layout.headerHeight,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.slate['100'],
  },
  backBtn: {
    padding: Spacing.xs,
  },
  headerTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  statsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.slate['100'],
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNum: {
    fontSize: FontSize['2xl'],
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  statLabel: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: Colors.surfaceContainer,
  },
  uploadEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primaryFixed,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius['2xl'],
  },
  uploadText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    gap: Spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing['3xl'],
    paddingHorizontal: Spacing.xl,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
    borderStyle: 'dashed',
    width: '100%',
  },
  emptyTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginTop: Spacing.lg,
  },
  emptyDesc: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.sm,
    textAlign: 'center',
    lineHeight: 20,
  },
  emptyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: Spacing.xl,
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius['2xl'],
  },
  emptyBtnText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});