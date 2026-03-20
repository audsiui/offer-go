import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type AddJobModalProps = {
  visible: boolean;
  onClose: () => void;
  onManualAdd: () => void;
  onImageUpload: () => void;
};

export function AddJobModal({ visible, onClose, onManualAdd, onImageUpload }: AddJobModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.container} onStartShouldSetResponder={() => true}>
          <View style={styles.handle} />
          
          <Text style={styles.title}>添加目标岗位</Text>
          <Text style={styles.subtitle}>选择添加方式</Text>

          <TouchableOpacity style={styles.option} onPress={onManualAdd} activeOpacity={0.8}>
            <View style={[styles.iconBox, { backgroundColor: Colors.primaryFixed }]}>
              <MaterialIcons name="edit" size={24} color={Colors.primary} />
            </View>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>手动填写</Text>
              <Text style={styles.optionDesc}>手动输入职位信息和JD要求</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={Colors.outline} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={onImageUpload} activeOpacity={0.8}>
            <View style={[styles.iconBox, { backgroundColor: Colors.tertiaryFixed }]}>
              <MaterialIcons name="camera-alt" size={24} color={Colors.tertiary} />
            </View>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>拍照/上传截图</Text>
              <Text style={styles.optionDesc}>AI 自动识别并解析岗位信息</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={Colors.outline} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>取消</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius['3xl'],
    borderTopRightRadius: BorderRadius['3xl'],
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing['3xl'],
    paddingTop: Spacing.md,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.outline,
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    marginBottom: Spacing.xl,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius.xl,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContent: {
    flex: 1,
    marginLeft: Spacing.lg,
  },
  optionTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: 2,
  },
  optionDesc: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
  },
  cancelBtn: {
    marginTop: Spacing.lg,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  cancelText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.onSurface,
  },
});