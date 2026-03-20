import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { usePathname, router } from 'expo-router';
import { Colors } from '../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../constants/spacing';

const tabs = [
  { key: 'home', label: '首页', icon: 'home', route: '/' },
  { key: 'resume', label: '简历', icon: 'description', route: '/resume' },
  { key: 'practice', label: '练习', icon: 'fitness-center', route: '/practice' },
  { key: 'interview', label: '面试', icon: 'forum', route: '/interview' },
];

export function BottomNavBar() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  
  const isActive = (route: string) => pathname === route;

  const handleTabPress = (route: string) => {
    router.replace(route as any);
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { paddingBottom: insets.bottom > 0 ? insets.bottom : Spacing.md }]}>
        {tabs.map((tab) => {
          const active = isActive(tab.route);
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabItem}
              onPress={() => handleTabPress(tab.route)}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name={tab.icon as any}
                size={24}
                color={active ? Colors.blue['600'] : Colors.slate['400']}
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: BorderRadius['3xl'],
    borderTopRightRadius: BorderRadius['3xl'],
    paddingTop: Spacing.md,
    paddingHorizontal: Spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xs,
  },
  tabLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    marginTop: 4,
  },
  tabLabelActive: {
    fontWeight: FontWeight.bold,
  },
});