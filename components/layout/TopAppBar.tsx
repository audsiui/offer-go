import { View, Text, StyleSheet, TouchableOpacity, Animated, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, Layout, BorderRadius } from '../../constants/spacing';
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

type MenuItem = {
  icon: string;
  label: string;
  onPress: () => void;
  danger?: boolean;
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
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const avatarRef = useRef<View>(null);

  useEffect(() => {
    if (menuVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 7,
          tension: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.9);
    }
  }, [menuVisible]);

  const menuItems: MenuItem[] = [
    { icon: 'person', label: '个人资料', onPress: () => setMenuVisible(false) },
    { icon: 'settings', label: '设置', onPress: () => setMenuVisible(false) },
    { icon: 'help-outline', label: '帮助与反馈', onPress: () => setMenuVisible(false) },
    {
      icon: 'logout',
      label: '退出登录',
      onPress: () => {
        setMenuVisible(false);
        router.replace('/login');
      },
      danger: true,
    },
  ];

  const handleAvatarPress = () => {
    avatarRef.current?.measureInWindow((x, y, width, height) => {
      setMenuTop(y + height + 8);
      setMenuVisible(true);
    });
  };

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.content}>
          <View style={styles.leftSection}>
            {showBackButton ? (
              <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                ref={avatarRef}
                style={styles.avatarWrapper}
                onPress={handleAvatarPress}
                activeOpacity={0.8}
              >
                <Avatar source={avatarSource} size="sm" />
              </TouchableOpacity>
            )}
            <Text style={styles.logo}>OfferGo</Text>
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
          </View>
        </View>
      </View>

      {menuVisible && (
        <Pressable style={styles.backdrop} onPress={() => setMenuVisible(false)}>
          <Animated.View
            style={[
              styles.menu,
              {
                top: menuTop,
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
            onStartShouldSetResponder={() => true}
          >
            <View style={styles.menuHeader}>
              <Avatar source={avatarSource} size="md" />
              <View style={styles.menuHeaderText}>
                <Text style={styles.menuUserName}>张小明</Text>
                <Text style={styles.menuUserEmail}>zhangxiaoming@email.com</Text>
              </View>
            </View>
            <View style={styles.menuDivider} />
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name={item.icon as any}
                  size={20}
                  color={item.danger ? Colors.error : Colors.onSurfaceVariant}
                />
                <Text style={[styles.menuItemText, item.danger && styles.menuItemTextDanger]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
  avatarWrapper: {
    padding: Spacing.xs,
    marginLeft: -Spacing.xs,
  },
  logo: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.black,
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
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
  menu: {
    position: 'absolute',
    left: Spacing.lg,
    width: 220,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
    overflow: 'hidden',
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  menuHeaderText: {
    flex: 1,
  },
  menuUserName: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  menuUserEmail: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
  menuDivider: {
    height: 1,
    backgroundColor: Colors.outlineVariant,
    marginHorizontal: Spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.md,
  },
  menuItemText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.onSurface,
  },
  menuItemTextDanger: {
    color: Colors.error,
  },
});