import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type TaskCardProps = {
  icon?: string;
  iconBgColor?: string;
  iconColor?: string;
  title: string;
  description: string;
  buttonText?: string;
  onPress?: () => void;
  variant?: 'vertical' | 'horizontal';
  extra?: React.ReactNode;
  backgroundImage?: ImageSourcePropType;
  titleColor?: string;
  descriptionColor?: string;
};

export function TaskCard({
  icon,
  iconBgColor,
  iconColor,
  title,
  description,
  buttonText,
  onPress,
  variant = 'horizontal',
  extra,
  backgroundImage,
  titleColor,
  descriptionColor,
}: TaskCardProps) {
  const isVertical = variant === 'vertical';
  const hasBackground = !!backgroundImage;

  const content = (
    <>
      {!hasBackground && icon && iconBgColor && iconColor && (
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <MaterialIcons name={icon as any} size={isVertical ? 28 : 22} color={iconColor} />
        </View>
      )}
      <Text style={[
        styles.title, 
        hasBackground && styles.titleOnBackground,
        titleColor && { color: titleColor }
      ]}>{title}</Text>
      <Text style={[
        styles.description, 
        hasBackground && styles.descriptionOnBackground,
        descriptionColor && { color: descriptionColor }
      ]}>{description}</Text>
      {extra}
      {buttonText && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
          <MaterialIcons name="arrow-forward" size={16} color={Colors.onPrimary} />
        </TouchableOpacity>
      )}
    </>
  );

  if (hasBackground) {
    return (
      <TouchableOpacity
        style={[styles.container, styles.containerBackground, isVertical && styles.containerVertical]}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
          resizeMode="cover"
        >
          <View style={styles.backgroundContent}>{content}</View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, isVertical && styles.containerVertical]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
    overflow: 'hidden',
  },
  containerBackground: {
    padding: 0,
    borderWidth: 0,
  },
  containerVertical: {
    flex: 1,
    minHeight: 200,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    borderRadius: BorderRadius['2xl'],
  },
  backgroundContent: {
    flex: 1,
    padding: Spacing.lg,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(10px)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.xs,
  },
  titleOnBackground: {
    color: '#1a1a2e',
  },
  description: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
    lineHeight: 20,
  },
  descriptionOnBackground: {
    color: '#2d2d44',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.full,
    gap: Spacing.xs,
    marginTop: Spacing.lg,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.onPrimary,
  },
});