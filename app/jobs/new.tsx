import { View, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius, Layout } from '../../constants/spacing';
import { JobForm } from '../../components/screens/jobs';
import type { CreateJobInput } from '../../types/job';

const initialForm: CreateJobInput = {
  title: '',
  company: '',
  location: '',
  salary: '',
  jdDescription: '',
  jdRequirements: '',
};

export default function NewJobPage() {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState<CreateJobInput>(initialForm);
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (!form.title.trim() || !form.company.trim()) {
      Alert.alert('提示', '请填写职位名称和公司名称');
      return;
    }

    setLoading(true);
    
    // TODO: 调用 API 保存数据
    setTimeout(() => {
      setLoading(false);
      Alert.alert('成功', '目标岗位已添加', [
        { text: '好的', onPress: () => router.back() }
      ]);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <MaterialIcons name="close" size={24} color={Colors.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>添加目标岗位</Text>
        <TouchableOpacity 
          style={[styles.saveBtn, loading && styles.saveBtnDisabled]}
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={[styles.saveBtnText, loading && styles.saveBtnTextDisabled]}>
            {loading ? '保存中...' : '保存'}
          </Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <JobForm
          value={form}
          onChange={setForm}
          onSubmit={handleSave}
          submitLabel="保存岗位"
        />
      </KeyboardAvoidingView>
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
  saveBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius['2xl'],
  },
  saveBtnDisabled: {
    backgroundColor: Colors.surfaceContainer,
  },
  saveBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
  saveBtnTextDisabled: {
    color: Colors.onSurfaceVariant,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },
});