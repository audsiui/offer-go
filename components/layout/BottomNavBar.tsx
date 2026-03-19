import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../constants/spacing';
import { TabItem } from '../../types/navigation';

const tabs: TabItem[] = [
  { key: 'home', label: '首页', icon: 'home', iconFilled: 'home', route: '/' },
  { key: 'resume', label: '简历', icon: 'description', iconFilled: 'description', route: '/resume' },
  { key: 'practice', label: '练习', icon: 'fitness-center', iconFilled: 'fitness-center', route: '/practice' },
  { key: 'interview', label: '面试', icon: 'forum', iconFilled: 'forum', route: '/interview' },
];

type BottomNavBarProps = {
  activeTab?: string;
};

export function BottomNavBar({ activeTab }: BottomNavBarProps) {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const currentTab = activeTab || pathname;

  const handleTabPress = (route: string) => {
    router.push(route as any);
  };

  const isActive = (route: string) => {
    if (route === '/') {
      return currentTab === '/';
    }
    return currentTab.startsWith(route);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom || Spacing.lg }]}>
      {tabs.map((tab) => {
        const active = isActive(tab.route);
        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabItem, active && styles.tabItemActive]}
            onPress={() => handleTabPress(tab.route)}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name={tab.icon as any}
              size={24}
              color={active ? Colors.blue['600'] : Colors.slate['400']}
              style={active && styles.iconFilled}
            />
            <Text
              style={[
                styles.tabLabel,
                { color: active ? Colors.blue['600'] : Colors.slate['400'] },
                active && styles.tabLabelActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: BorderRadius['3xl'],
    borderTopRightRadius: BorderRadius['3xl'],
    paddingTop: Spacing.sm,
    shadowColor: Colors.blue['600'],
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 10,
    zIndex: 50,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.lg,
  },
  tabItemActive: {
    transform: [{ scale: 1.1 }],
  },
  iconFilled: {
    fontWeight: '700',
  },
  tabLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    marginTop: 2,
  },
  tabLabelActive: {
    fontWeight: FontWeight.bold,
  },
});