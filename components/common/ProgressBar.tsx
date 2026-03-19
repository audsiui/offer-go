import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../constants';
import { BorderRadius } from '../../constants/spacing';

type ProgressBarProps = {
  progress: number;
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  style?: ViewStyle;
  borderRadius?: number;
};

export function ProgressBar({
  progress,
  height = 10,
  backgroundColor = Colors.surfaceContainerHigh,
  fillColor = Colors.primary,
  style,
  borderRadius = BorderRadius.full,
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View
      style={[
        styles.container,
        { height, backgroundColor, borderRadius },
        style,
      ]}
    >
      <View
        style={[
          styles.fill,
          {
            width: `${clampedProgress}%`,
            backgroundColor: fillColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});