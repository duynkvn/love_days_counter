import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import appStyles from '../../assets/styles/common';
import {format} from 'date-fns';

function Header() {
  const getToday = (): string => {
    const today: Date = new Date();
    return format(today, 'eeee, LLL dd | HH:mm');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.leftContent,
          ...styles.iconCircle,
          ...appStyles.boxShadowLight,
        }}>
        <Icon name="bookmark" size={16} style={{color: '#403F46'}} />
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.cityName}>Ho Chi Minh City</Text>
        <Text style={styles.date}>{getToday()}</Text>
      </View>
      <View
        style={{
          ...styles.rightContent,
          ...styles.iconCircle,
          ...appStyles.boxShadowLight,
        }}>
        <Icon name="search-location" size={16} style={{color: '#403F46'}} />
      </View>
    </View>
  );
}

export default Header;
