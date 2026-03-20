import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type UpcomingCardProps = {
  company: string;
  position: string;
  time: string;
  icon?: string;
  onNotify?: () => void;
};

export function UpcomingCard({ company, position, time, icon, onNotify }: UpcomingCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <MaterialIcons name={icon as any || 'corporate-fare'} size={28} color={Colors.secondaryContainer} />
      </View>
      
      <View style={styles.info}>
        <Text style={styles.title}>{company} - {position}</Text>
        <View style={styles.timeRow}>
          <MaterialIcons name="schedule" size={14} color={Colors.outline} />
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.notifyBtn} onPress={onNotify} activeOpacity={0.8}>
        <MaterialIcons name="notifications-active" size={22} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['3xl'],
    padding: Spacing.lg,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius['2xl'],
    backgroundColor: 'rgba(163, 190, 254, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  timeText: {
    fontSize: FontSize.xs,
    color: Colors.outline,
  },
  notifyBtn: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});