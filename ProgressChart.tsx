import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

const CHART_HEIGHT = 160;
const BAR_WIDTH = 24;
const BAR_GAP = 12;

interface ProgressChartProps {
  data: {
    id: string;
    date: string;
    day: string;
    duration: number;
    score: number;
  }[];
}

export default function ProgressChart({ data }: ProgressChartProps) {
  const [maxDuration, setMaxDuration] = useState(0);
  
  useEffect(() => {
    // Find the max duration for scaling
    const max = Math.max(...data.map(item => item.duration));
    setMaxDuration(max > 0 ? max : 60); // Default to 60 if no data
  }, [data]);
  
  const getBarHeight = (duration: number) => {
    return (duration / maxDuration) * CHART_HEIGHT;
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        {data.slice(0, 7).map((item, index) => (
          <View key={item.id} style={styles.barContainer}>
            <View style={styles.barLabels}>
              <Text style={styles.barValue}>{item.duration}</Text>
            </View>
            <View style={styles.barWrapper}>
              <View 
                style={[
                  styles.bar, 
                  { 
                    height: getBarHeight(item.duration),
                    backgroundColor: '#3B78FF',
                  }
                ]} 
              />
            </View>
            <Text style={styles.dayLabel}>{item.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  chart: {
    height: CHART_HEIGHT + 40, // Extra space for labels
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  barContainer: {
    alignItems: 'center',
    width: BAR_WIDTH + BAR_GAP,
  },
  barLabels: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  barValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  barWrapper: {
    width: BAR_WIDTH,
    height: CHART_HEIGHT,
    justifyContent: 'flex-end',
  },
  bar: {
    width: BAR_WIDTH,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  dayLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#6B7280',
  },
});