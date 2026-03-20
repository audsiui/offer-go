import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import type { CreateJobInput } from '../../../types/job';

type JobFormProps = {
  value: CreateJobInput;
  onChange: (value: CreateJobInput) => void;
  onSubmit?: () => void;
  submitLabel?: string;
};

export function JobForm({ value, onChange, onSubmit, submitLabel = '保存' }: JobFormProps) {
  const updateField = <K extends keyof CreateJobInput>(field: K, v: CreateJobInput[K]) => {
    onChange({ ...value, [field]: v });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>基本信息</Text>
        
        <View style={styles.field}>
          <Text style={styles.label}>职位名称 <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="如：前端开发工程师"
            placeholderTextColor={Colors.outline}
            value={value.title}
            onChangeText={(v) => updateField('title', v)}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>公司名称 <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="如：字节跳动"
            placeholderTextColor={Colors.outline}
            value={value.company}
            onChangeText={(v) => updateField('company', v)}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.field, { flex: 1 }]}>
            <Text style={styles.label}>工作地点</Text>
            <TextInput
              style={styles.input}
              placeholder="如：北京"
              placeholderTextColor={Colors.outline}
              value={value.location}
              onChangeText={(v) => updateField('location', v)}
            />
          </View>
          <View style={{ width: Spacing.lg }} />
          <View style={[styles.field, { flex: 1 }]}>
            <Text style={styles.label}>薪资范围</Text>
            <TextInput
              style={styles.input}
              placeholder="如：25k-45k"
              placeholderTextColor={Colors.outline}
              value={value.salary}
              onChangeText={(v) => updateField('salary', v)}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>职位描述</Text>
        <Text style={styles.hint}>粘贴或输入该岗位的职位描述（JD）</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="描述该职位的主要职责和工作内容..."
          placeholderTextColor={Colors.outline}
          value={value.jdDescription}
          onChangeText={(v) => updateField('jdDescription', v)}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>任职要求</Text>
        <Text style={styles.hint}>描述该岗位的技能和经验要求</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="如：3年以上开发经验，精通 React..."
          placeholderTextColor={Colors.outline}
          value={value.jdRequirements}
          onChangeText={(v) => updateField('jdRequirements', v)}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      {onSubmit && (
        <TouchableOpacity style={styles.submitBtn} onPress={onSubmit} activeOpacity={0.8}>
          <Text style={styles.submitBtnText}>{submitLabel}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.md,
  },
  hint: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginBottom: Spacing.sm,
  },
  field: {
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.onSurface,
    marginBottom: Spacing.sm,
  },
  required: {
    color: Colors.error,
  },
  row: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.onSurface,
  },
  textArea: {
    minHeight: 100,
    paddingTop: Spacing.md,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius['2xl'],
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing['3xl'],
  },
  submitBtnText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});