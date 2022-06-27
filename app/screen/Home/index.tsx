import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import Header from '../../components/Header/index';
import WeatherView from '../../components/WeatherView';
import MoreInfo from '../../components/MoreInfo';
import ForeCast from '../../components/Forecast';
import styles from './styles';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function Home() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <WeatherView />
        <ForeCast />
        {/* <MoreInfo /> */}
      </ScrollView>
    </View>
  );
}
export default Home;
