import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type InterviewerCardProps = {
  name: string;
  role: string;
  company: string;
  imageUri?: string;
  onVolumePress?: () => void;
};

export function InterviewerCard({
  name,
  role,
  company,
  imageUri,
  onVolumePress,
}: InterviewerCardProps) {
  return (
    <View style={styles.container}>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.backgroundImage} />
      )}
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{role}</Text>
            </View>
            <View style={[styles.tag, styles.primaryTag]}>
              <Text style={styles.primaryTagText}>{company}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.volumeButton} onPress={onVolumePress}>
          <MaterialIcons name="volume-up" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: '4/3',
    borderRadius: BorderRadius['3xl'],
    overflow: 'hidden',
    backgroundColor: Colors.surfaceContainerHigh,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    backgroundColor: Colors.black,
    opacity: 0.6,
  },
  content: {
    position: 'absolute',
    bottom: Spacing.lg,
    left: Spacing.lg,
    right: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  info: {
    gap: Spacing.sm,
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  },
  tags: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
  tagText: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: Colors.white,
  },
  primaryTag: {
    backgroundColor: 'rgba(0, 87, 194, 0.8)',
  },
  primaryTagText: {
    fontSize: 10,
    fontWeight: FontWeight.medium,
    color: Colors.white,
  },
  volumeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});