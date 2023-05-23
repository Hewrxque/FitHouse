import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
export default function InfoTrainings({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 8, width: '100%', height: '100%', alignItens: 'center'}}>
  <Text>Rendimento</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={400} // from react-native
    height={250}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#FF0000",
      backgroundGradientFrom: "#FF0000",
      backgroundGradientTo: "#FFFFFF",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#FF0000"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    </SafeAreaView>
  );
}
