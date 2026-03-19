import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, Layout } from '../../constants/spacing';
import { Avatar } from '../common';

type TopAppBarProps = {
  showBackButton?: boolean;
  showNotification?: boolean;
  showStreak?: boolean;
  streakCount?: number;
  avatarSource?: { uri: string };
  onBackPress?: () => void;
  onNotificationPress?: () => void;
  rightContent?: React.ReactNode;
};

export function TopAppBar({
  showBackButton = false,
  showNotification = false,
  showStreak = false,
  streakCount = 0,
  avatarSource,
  onBackPress,
  onNotificationPress,
  rightContent,
}: TopAppBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          {showBackButton ? (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
            </TouchableOpacity>
          ) : (
            <>
              <Avatar source={avatarSource} size="sm" />
              <Text style={styles.logo}>OfferGo</Text>
            </>
          )}
          {showBackButton && (
            <Text style={styles.logo}>OfferGo</Text>
          )}
        </View>

        <View style={styles.rightSection}>
          {rightContent}
          {showNotification && (
            <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
              <MaterialIcons name="notifications-none" size={24} color={Colors.onSurfaceVariant} />
            </TouchableOpacity>
          )}
          {showStreak && (
            <View style={styles.streakBadge}>
              <MaterialIcons name="local-fire-department" size={14} color={Colors.tertiary} />
              <Text style={styles.streakCount}>{streakCount}</Text>
            </View>
          )}
          {!showBackButton && !avatarSource && showNotification && (
            <Avatar source={avatarSource} size="sm" />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.slate['100'],
  },
  content: {
    height: Layout.headerHeight,
    paddingHorizontal: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  backButton: {
    padding: Spacing.xs,
  },
  logo: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.black,
    fontStyle: 'italic',
    color: Colors.blue['600'],
  },
  iconButton: {
    padding: Spacing.xs,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerHigh,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: 999,
    gap: 4,
  },
  streakCount: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
});