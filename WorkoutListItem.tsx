import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Clock, Dumbbell, ChevronRight } from 'lucide-react-native';

interface WorkoutListItemProps {
  workout: {
    id: string;
    title: string;
    duration: number;
    level: string;
    category: string;
    imageUrl: string;
    exerciseCount: number;
  };
  onPress: () => void;
}

export default function WorkoutListItem({ workout, onPress }: WorkoutListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: workout.imageUrl }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.category}>{workout.category}</Text>
        <Text style={styles.title}>{workout.title}</Text>
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock color="#6B7280" size={14} style={styles.metaIcon} />
            <Text style={styles.metaText}>{workout.duration} min</Text>
          </View>
          <View style={styles.metaDot} />
          <View style={styles.metaItem}>
            <Dumbbell color="#6B7280" size={14} style={styles.metaIcon} />
            <Text style={styles.metaText}>{workout.level}</Text>
          </View>
        </View>
      </View>
      <ChevronRight color="#A0AEC0" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  category: {
    color: '#3B78FF',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    marginRight: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#CBD5E0',
    marginHorizontal: 6,
  },
});