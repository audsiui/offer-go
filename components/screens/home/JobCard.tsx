import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants';
import { FontSize, FontWeight, Spacing, BorderRadius } from '../../../constants/spacing';

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
  postedAt: string;
  companyLogo?: string;
  onPress?: () => void;
};

export function JobCard({
  title,
  company,
  location,
  salary,
  postedAt,
  companyLogo,
  onPress,
}: JobCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.logoContainer}>
        {companyLogo ? (
          <Image source={{ uri: companyLogo }} style={styles.logo} resizeMode="contain" />
        ) : (
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>{company[0]}</Text>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metaRow}>
          <MaterialIcons name="business" size={14} color={Colors.onSurfaceVariant} />
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.dot}>·</Text>
          <MaterialIcons name="location-on" size={14} color={Colors.onSurfaceVariant} />
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: Colors.surfaceContainer,
  },
  logoContainer: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.slate['100'],
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 36,
    height: 36,
  },
  logoPlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryFixed,
  },
  logoText: {
    fontSize: FontSize['2xl'],
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: Spacing.xs,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  company: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
  },
  dot: {
    color: Colors.onSurfaceVariant,
    marginHorizontal: 2,
  },
  location: {
    fontSize: FontSize.sm,
    color: Colors.onSurfaceVariant,
  },
  right: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.tertiary,
  },
  postedAt: {
    fontSize: FontSize.xs,
    color: Colors.outline,
    marginTop: Spacing.xs,
  },
});