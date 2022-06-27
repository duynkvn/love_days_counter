import 'react-native-gesture-handler';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStack from './navigators';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgba(0,0,0,0)' 
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <ImageBackground
          source={require('./assets/images/morning-bg.jpeg')}
          resizeMode="cover"
          style={{flex: 1}}
          >
          <SafeAreaView style={{flex: 1}}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppStack />
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
