import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { router } from 'expo-router';
import { Colors } from '../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../constants/spacing';

export default function LoginPage() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'one-click' | 'code'>('one-click');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleLogin = () => {
    if (!agreed) {
      return;
    }
    router.replace('/(tabs)' as any);
  };

  const handleGetCode = () => {
    if (countdown > 0) return;
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + Spacing.md, paddingBottom: Spacing.lg }]}>
        <Text style={styles.logo}>OfferGo</Text>
        <TouchableOpacity style={styles.helpBtn}>
          <Text style={styles.helpText}>帮助</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + Spacing['3xl'] }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleSection}>
          <Text style={styles.title}>登录 / 注册</Text>
          <Text style={styles.subtitle}>登录即注册，快速开启您的 Offer 之路</Text>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'one-click' && styles.tabActive]}
            onPress={() => setActiveTab('one-click')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'one-click' && styles.tabTextActive]}>
              手机号一键登录
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'code' && styles.tabActive]}
            onPress={() => setActiveTab('code')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'code' && styles.tabTextActive]}>
              验证码登录
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'one-click' ? (
          <View style={styles.oneClickCard}>
            <View style={styles.iconCircle}>
              <MaterialIcons name="verified-user" size={32} color={Colors.primary} />
            </View>
            <Text style={styles.oneClickHint}>本机号码直接登录</Text>
            <Text style={styles.maskedPhone}>138 **** 8888</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.loginBtnWrapper, !agreed && styles.loginBtnDisabled]}
              onPress={handleLogin}
              disabled={!agreed}
            >
              <LinearGradient
                colors={agreed ? [Colors.primary, Colors.primaryContainer] : [Colors.slate['300'], Colors.slate['400']]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.loginBtn}
              >
                <Text style={styles.loginBtnText}>本机号码一键登录</Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.providerHint}>由 中国移动/联通/电信 提供认证服务</Text>
          </View>
        ) : (
          <View style={styles.codeSection}>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="smartphone" size={20} color={Colors.outline} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="手机号"
                placeholderTextColor={Colors.outline}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                maxLength={11}
              />
            </View>
            <View style={styles.codeRow}>
              <View style={[styles.inputWrapper, { flex: 1 }]}>
                <MaterialIcons name="lock" size={20} color={Colors.outline} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="短信验证码"
                  placeholderTextColor={Colors.outline}
                  value={code}
                  onChangeText={setCode}
                  keyboardType="number-pad"
                  maxLength={6}
                />
              </View>
              <TouchableOpacity
                style={[styles.getCodeBtn, countdown > 0 && styles.getCodeBtnDisabled]}
                onPress={handleGetCode}
                disabled={countdown > 0 || phone.length !== 11}
              >
                <Text style={[styles.getCodeText, (countdown > 0 || phone.length !== 11) && styles.getCodeTextDisabled]}>
                  {countdown > 0 ? `${countdown}s` : '获取验证码'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.loginBtnWrapper, (!agreed || code.length < 4) && styles.loginBtnDisabled]}
              onPress={handleLogin}
              disabled={!agreed || code.length < 4}
            >
              <LinearGradient
                colors={agreed && code.length >= 4 ? [Colors.primary, Colors.primaryContainer] : [Colors.slate['300'], Colors.slate['400']]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.loginBtn}
              >
                <Text style={styles.loginBtnText}>登录 / 注册</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.agreement}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setAgreed(!agreed)}
            activeOpacity={0.8}
          >
            <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
              {agreed && <MaterialIcons name="check" size={14} color={Colors.onPrimary} />}
            </View>
            <Text style={styles.agreementText}>
              我已阅读并同意
              <Text style={styles.agreementLink}>《用户协议》</Text>
              和
              <Text style={styles.agreementLink}>《隐私政策》</Text>
              。登录即注册。
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.decorCircle1} />
      <View style={styles.decorCircle2} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.surface,
  },
  logo: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.black,
    color: Colors.blue['600'],
  },
  helpBtn: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  helpText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.slate['500'],
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  titleSection: {
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSize['3xl'],
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    fontWeight: FontWeight.medium,
    lineHeight: 20,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.outlineVariant,
    marginBottom: Spacing.xl,
  },
  tab: {
    flex: 1,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onSurfaceVariant,
  },
  tabTextActive: {
    color: Colors.primary,
  },
  oneClickCard: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  oneClickHint: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginBottom: Spacing.xs,
  },
  maskedPhone: {
    fontSize: FontSize['2xl'],
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.xl,
  },
  loginBtnWrapper: {
    width: '100%',
  },
  loginBtnDisabled: {
    opacity: 0.7,
  },
  loginBtn: {
    height: 52,
    borderRadius: BorderRadius['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  loginBtnText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
  providerHint: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.lg,
  },
  codeSection: {
    gap: Spacing.lg,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius['2xl'],
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  inputIcon: {
    marginRight: Spacing.md,
  },
  input: {
    flex: 1,
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.onSurface,
  },
  codeRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  getCodeBtn: {
    height: 52,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  getCodeBtnDisabled: {
    backgroundColor: Colors.surfaceContainerLow,
  },
  getCodeText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  getCodeTextDisabled: {
    color: Colors.outline,
  },
  agreement: {
    paddingTop: Spacing['3xl'],
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.md,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: BorderRadius.sm,
    borderWidth: 2,
    borderColor: Colors.outlineVariant,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  agreementText: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    lineHeight: 22,
  },
  agreementLink: {
    color: Colors.primary,
    fontWeight: FontWeight.bold,
  },
  decorCircle1: {
    position: 'absolute',
    top: 120,
    right: -40,
    width: 160,
    height: 160,
    backgroundColor: Colors.primaryFixed,
    borderRadius: 80,
    opacity: 0.3,
  },
  decorCircle2: {
    position: 'absolute',
    bottom: 80,
    left: -60,
    width: 180,
    height: 180,
    backgroundColor: Colors.secondaryFixed,
    borderRadius: 90,
    opacity: 0.3,
  },
});