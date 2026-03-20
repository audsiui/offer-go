import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, Layout } from '../../constants/spacing';
import { TopAppBar, FAB } from '../../components/layout';
import {
  HealthScoreCard,
  UploadCard,
  OptimizationFeed,
  ThemeSelector,
  ToolBox,
} from '../../components/screens/resume';

const suggestions = [
  {
    icon: 'trending-up',
    iconBgColor: Colors.secondaryFixed,
    iconColor: Colors.onSecondaryContainer,
    title: '量化工作成果',
    tag: '核心',
    description: '将"负责项目开发"改为"主导项目开发，提升了 30% 的系统响应速度"。',
  },
  {
    icon: 'spellcheck',
    iconBgColor: Colors.tertiaryFixed,
    iconColor: Colors.onTertiaryFixedVariant,
    title: '排版优化',
    tag: '视觉',
    description: '技能列表间距过窄，建议使用 1.5 倍行距以增强可读性。',
  },
];

const themeOptions = [
  { key: 'modern', label: '现代简约', color: Colors.primary, isSelected: true },
  { key: 'classic', label: '经典学术', color: Colors.slate['400'], isSelected: false },
  { key: 'geek', label: '极客蓝绿', color: Colors.emerald['400'], isSelected: false },
  { key: 'creative', label: '创意活泼', color: Colors.amber['400'], isSelected: false },
];

const tools = [
  { icon: 'translate', label: '简历翻译' },
  { icon: 'picture-as-pdf', label: '一键导出' },
];

export default function ResumePage() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TopAppBar
        showNotification
        avatarSource={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv0xRyeRstbG25bGoFDvL0wjiejQJm7a3jI_V1LdPL4f2HyTXYL7PmhphDKczXvJ0fjPYEXOA9PTdpZzhakccvLaqJkigBaH2tCLEgjGCcglQ8QzPAfMDNeqX7xtHn7rPBndVGsDvKT6G-GQ2XhwwcKx8YqSkWC5u-3bhviCVxzT_TnkAHfHH-kZxChhA_fn5BRS3L6c7QAa6s2jUWh597CYCPziFwPMzCde7BLeyh7rPw6dEYNU_0XX0mdFPNvxDsS4Qobd5J3bnb',
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
        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>简历诊断助手</Text>
          <Text style={styles.welcomeSubtitle}>
            AI 驱动的简历优化专家，助你拿到心仪 Offer
          </Text>
        </View>

        <View style={styles.sectionSpacing}>
          <View style={styles.topGrid}>
            <View style={styles.scoreCard}>
              <HealthScoreCard
                score={72}
                status="待提升"
                suggestion='您的"工作经验"描述较为笼统，建议增加量化成果。'
              />
            </View>
            <View style={styles.uploadCard}>
              <UploadCard />
            </View>
          </View>
        </View>

        <View style={styles.sectionSpacing}>
          <OptimizationFeed suggestions={suggestions} />
        </View>

        <View style={styles.sectionSpacing}>
          <ThemeSelector options={themeOptions} />
        </View>

        <View style={styles.toolbox}>
          <ToolBox tools={tools} />
        </View>
      </ScrollView>
      <FAB icon="edit" onPress={() => {}} />
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
  welcome: {
    marginBottom: Spacing.sm,
  },
  welcomeTitle: {
    fontSize: FontSize['3xl'],
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    letterSpacing: 0.5,
  },
  welcomeSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.xs,
    lineHeight: 20,
  },
  sectionSpacing: {
    marginBottom: Spacing.xl,
  },
  topGrid: {
    flexDirection: 'row',
    gap: Spacing.lg,
    alignItems: 'stretch',
  },
  scoreCard: {
    flex: 1,
  },
  uploadCard: {
    flex: 1,
  },
  toolbox: {
    marginBottom: Spacing['4xl'],
  },
});