import React from "react";
import { Text, View } from "react-native";
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";

function WeatherView() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 0.75, y: 1.5}}
          colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
          style={styles.weatherView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <VectorImage
              source={require('../../assets/images/day.svg')}
              width={128}
              height={128}
            />
            <View>
              <Text style={styles.celsius}>32 °C</Text>
              <Text style={styles.feelLike}>Feels like 31 °C</Text>
            </View>
          </View>
          <View style={styles.moreInfo}>
            <Text style={styles.something}>Mostly Cloudy</Text>
            <Text style={styles.lowHight}>Hight: 32°C - Low: 18°C</Text>
          </View>
        </LinearGradient>
      </View>
    );
}
export default WeatherView;