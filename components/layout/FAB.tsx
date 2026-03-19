import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants';
import { Layout } from '../../constants/spacing';

type FABProps = {
  icon?: string;
  onPress: () => void;
  style?: ViewStyle;
  size?: number;
};

export function FAB({ icon = 'rocket-launch', onPress, style, size = Layout.fabSize }: FABProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}
    >
      <LinearGradient
        colors={[Colors.primary, Colors.primaryContainer]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { borderRadius: size / 2 }]}
      >
        <MaterialIcons name={icon as any} size={24} color={Colors.onPrimary} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 24,
    bottom: 96,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});