import { View, Image, StyleSheet, ViewStyle, Text } from 'react-native';
import { Colors } from '../../constants';
import { FontWeight, Layout } from '../../constants/spacing';

type AvatarProps = {
  source?: { uri: string } | number;
  size?: 'sm' | 'md' | 'lg' | number;
  fallback?: string;
  style?: ViewStyle;
  backgroundColor?: string;
};

export function Avatar({
  source,
  size = 'md',
  fallback,
  style,
  backgroundColor = Colors.primaryContainer,
}: AvatarProps) {
  const sizeValue = typeof size === 'number' ? size : Layout.avatarSize[size] || Layout.avatarSize.md;

  const containerStyle: ViewStyle = {
    width: sizeValue,
    height: sizeValue,
    borderRadius: sizeValue / 2,
    backgroundColor,
  };

  if (source) {
    return (
      <View style={[containerStyle, styles.overflow, style]}>
        <Image
          source={source}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  }

  if (fallback) {
    return (
      <View style={[containerStyle, styles.center, style]}>
        <Text style={[styles.fallbackText, { fontSize: sizeValue * 0.4 }]}>
          {fallback}
        </Text>
      </View>
    );
  }

  return <View style={[containerStyle, style]} />;
}

const styles = StyleSheet.create({
  overflow: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: Colors.onPrimaryContainer,
    fontWeight: FontWeight.bold,
  },
});