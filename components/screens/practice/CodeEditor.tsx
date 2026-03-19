import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';
import { Badge } from '../../common';

type CodeEditorProps = {
  difficulty: string;
  title: string;
  description: string;
  code: string[];
  onAiHint?: () => void;
  onSubmit?: () => void;
};

export function CodeEditor({
  difficulty,
  title,
  description,
  code,
  onAiHint,
  onSubmit,
}: CodeEditorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.problemCard}>
        <View style={styles.problemHeader}>
          <View>
            <Badge label={difficulty} variant="secondary" />
            <Text style={styles.problemTitle}>{title}</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="fullscreen" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        <Text style={styles.problemDescription} numberOfLines={2}>
          {description}
        </Text>
      </View>

      <View style={styles.editor}>
        <View style={styles.editorHeader}>
          <View style={styles.windowControls}>
            <View style={[styles.windowDot, { backgroundColor: Colors.red['500'] }]} />
            <View style={[styles.windowDot, { backgroundColor: Colors.yellow['500'] }]} />
            <View style={[styles.windowDot, { backgroundColor: Colors.green['500'] }]} />
          </View>
          <Text style={styles.fileName}>solution.py</Text>
          <MaterialIcons name="settings" size={16} color={Colors.slate['400']} />
        </View>

        <View style={styles.codeArea}>
          <View style={styles.lineNumbers}>
            {code.map((_, index) => (
              <Text key={index} style={styles.lineNumber}>{index + 1}</Text>
            ))}
          </View>
          <View style={styles.codeContent}>
            {code.map((line, index) => (
              <Text key={index} style={styles.codeLine}>{line}</Text>
            ))}
          </View>
        </View>

        <View style={styles.editorFooter}>
          <TouchableOpacity style={styles.aiButton} onPress={onAiHint}>
            <MaterialIcons name="auto-awesome" size={14} color={Colors.white} />
            <Text style={styles.aiButtonText}>获取 AI 提示</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.submitButtonText}>提交运行</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  problemCard: {
    backgroundColor: Colors.surfaceContainerHigh,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
  },
  problemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  problemTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginTop: 4,
  },
  problemDescription: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    lineHeight: 18,
  },
  editor: {
    backgroundColor: Colors.slate['900'],
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  editorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    gap: Spacing.sm,
  },
  windowControls: {
    flexDirection: 'row',
    gap: 6,
  },
  windowDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  fileName: {
    flex: 1,
    fontSize: 10,
    color: Colors.slate['400'],
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  codeArea: {
    flexDirection: 'row',
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
  lineNumbers: {
    alignItems: 'flex-end',
  },
  lineNumber: {
    fontSize: 12,
    color: Colors.slate['600'],
    fontFamily: 'monospace',
    lineHeight: 24,
  },
  codeContent: {
    flex: 1,
  },
  codeLine: {
    fontSize: 12,
    color: Colors.slate['300'],
    fontFamily: 'monospace',
    lineHeight: 24,
  },
  editorFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: 'rgba(30, 41, 59, 0.3)',
  },
  aiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
  },
  aiButtonText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});