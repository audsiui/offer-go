import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';
import { Colors } from '../constants';
import { FontSize, FontWeight, Spacing, BorderRadius, Layout } from '../constants/spacing';

const filters = ['全部', '技术', '产品', '设计', '运营'];

const jobs = [
  {
    id: '1',
    title: '前端开发工程师',
    company: '字节跳动',
    location: '北京',
    salary: '25k-45k',
    experience: '1-3年',
    education: '本科',
    tags: ['React', 'TypeScript', 'Node.js'],
    postedAt: '刚刚',
    hot: true,
  },
  {
    id: '2',
    title: '产品经理实习生',
    company: '腾讯',
    location: '深圳',
    salary: '200-300/天',
    experience: '不限',
    education: '本科',
    tags: ['B端产品', '数据分析'],
    postedAt: '昨日更新',
  },
  {
    id: '3',
    title: '后端开发工程师',
    company: '阿里巴巴',
    location: '杭州',
    salary: '30k-50k',
    experience: '3-5年',
    education: '本科',
    tags: ['Java', 'Spring', '微服务'],
    postedAt: '2天前',
  },
  {
    id: '4',
    title: 'UI设计师',
    company: '小红书',
    location: '上海',
    salary: '20k-35k',
    experience: '1-3年',
    education: '本科',
    tags: ['Figma', '移动端设计'],
    postedAt: '3天前',
  },
  {
    id: '5',
    title: '数据分析师',
    company: '美团',
    location: '北京',
    salary: '20k-40k',
    experience: '1-3年',
    education: '本科',
    tags: ['SQL', 'Python', '数据可视化'],
    postedAt: '1周前',
  },
];

export default function JobsPage() {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('全部');
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>待选工作岗位</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={20} color={Colors.outline} />
          <TextInput
            style={styles.searchInput}
            placeholder="搜索职位、公司"
            placeholderTextColor={Colors.outline}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.filterRow}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[styles.filterTab, activeFilter === filter && styles.filterTabActive]}
              onPress={() => setActiveFilter(filter)}
              activeOpacity={0.8}
            >
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + Spacing['3xl'] }]}
        showsVerticalScrollIndicator={false}
      >
        {jobs.map((job) => (
          <TouchableOpacity key={job.id} style={styles.jobCard} activeOpacity={0.9}>
            <View style={styles.jobHeader}>
              <View style={styles.jobMain}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobSalary}>{job.salary}</Text>
              </View>
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoText}>{job.company[0]}</Text>
              </View>
            </View>

            <View style={styles.jobMeta}>
              <Text style={styles.metaText}>{job.company}</Text>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaText}>{job.location}</Text>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaText}>{job.experience}</Text>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaText}>{job.education}</Text>
            </View>

            <View style={styles.tagRow}>
              {job.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
              {job.hot && (
                <View style={styles.hotTag}>
                  <Text style={styles.hotTagText}>热招</Text>
                </View>
              )}
            </View>

            <View style={styles.jobFooter}>
              <Text style={styles.postedAt}>{job.postedAt}</Text>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.applyBtnText}>投递简历</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  searchSection: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.slate['100'],
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius['2xl'],
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.onSurface,
  },
  filterRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  filterTab: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  filterTabActive: {
    borderBottomColor: Colors.primary,
  },
  filterText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.onSurfaceVariant,
  },
  filterTextActive: {
    color: Colors.primary,
    fontWeight: FontWeight.bold,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    gap: Spacing.lg,
  },
  jobCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  jobMain: {
    flex: 1,
  },
  jobTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.xs,
  },
  jobSalary: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.tertiary,
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
  jobMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: Spacing.md,
  },
  metaText: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
  },
  metaDot: {
    color: Colors.onSurfaceVariant,
    marginHorizontal: Spacing.xs,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  tag: {
    backgroundColor: Colors.surfaceContainerLow,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.lg,
  },
  tagText: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
  },
  hotTag: {
    backgroundColor: Colors.tertiaryFixed,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.lg,
  },
  hotTagText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.tertiary,
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.surfaceContainer,
  },
  postedAt: {
    fontSize: FontSize.xs,
    color: Colors.outline,
  },
  applyBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius['2xl'],
  },
  applyBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});