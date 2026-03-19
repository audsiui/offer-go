import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type UploadCardProps = {
  onPress?: () => void;
};

export function UploadCard({ onPress }: UploadCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.95}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="upload-file" size={28} color={Colors.onPrimaryContainer} />
        </View>
        <MaterialIcons name="arrow-forward-ios" size={16} color={Colors.onPrimaryContainer} style={{ opacity: 0.6 }} />
      </View>
      <View>
        <Text style={styles.title}>上传新简历</Text>
        <Text style={styles.subtitle}>支持 PDF, Word 格式</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: BorderRadius['3xl'],
    padding: Spacing.xl,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 4,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.xl,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimaryContainer,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});