import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { BottomNavBar } from '../../components/layout';
import { Colors } from '../../constants';

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        tabBar={() => null}
        screenOptions={{
          headerShown: false,
          animation: 'none',
          sceneStyle: { backgroundColor: Colors.surface },
        }}
      >
        <Tabs.Screen name="index" options={{ title: '首页' }} />
        <Tabs.Screen name="resume" options={{ title: '简历' }} />
        <Tabs.Screen name="practice" options={{ title: '练习' }} />
        <Tabs.Screen name="interview" options={{ title: '面试' }} />
      </Tabs>
      <View style={styles.navBarWrapper}>
        <BottomNavBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  navBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});