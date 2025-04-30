import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface ExerciseStepProps {
  exercise: {
    id: string;
    name: string;
    reps?: string;
    sets?: number;
    duration?: string;
  };
  index: number;
  onPress: () => void;
}

export default function ExerciseStep({ exercise, index, onPress }: ExerciseStepProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.index}>
        <Text style={styles.indexText}>{index + 1}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.details}>
          {exercise.sets && `${exercise.sets} sets `}
          {exercise.reps && `• ${exercise.reps}`}
          {exercise.duration && `• ${exercise.duration}`}
        </Text>
      </View>
      <ChevronRight color="#A0AEC0" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  index: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  indexText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3B78FF',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A202C',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#6B7280',
  },
});