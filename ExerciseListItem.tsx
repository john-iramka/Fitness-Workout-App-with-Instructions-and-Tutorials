import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface ExerciseListItemProps {
  exercise: {
    id: string;
    name: string;
    muscleGroup: string;
    difficulty: string;
    equipment: string;
  };
  onPress: () => void;
}

export default function ExerciseListItem({ exercise, onPress }: ExerciseListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{exercise.name.charAt(0)}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{exercise.name}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.muscleGroup}>{exercise.muscleGroup}</Text>
          <View style={styles.metaDot} />
          <Text style={styles.difficulty}>{exercise.difficulty}</Text>
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
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3B78FF',
  },
  content: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A202C',
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  muscleGroup: {
    fontSize: 14,
    color: '#6B7280',
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#CBD5E0',
    marginHorizontal: 6,
  },
  difficulty: {
    fontSize: 14,
    color: '#6B7280',
  },
});