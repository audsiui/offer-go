import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
        <Text style={styles.company}>{company} · {location}</Text>
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
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.slate['100'],
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 32,
    height: 32,
  },
  logoPlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceContainerHigh,
  },
  logoText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.onSurface,
    marginBottom: 2,
  },
  company: {
    fontSize: FontSize.xs,
    color: Colors.onSurfaceVariant,
  },
  right: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.tertiary,
  },
  postedAt: {
    fontSize: 10,
    color: Colors.outline,
    marginTop: 4,
  },
});