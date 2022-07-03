import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'rn-id-blurview';
import Today from './Today';
import Weekly from './Weekly';
import { useTranslation } from 'react-i18next';
import styles from './styles';

const data: any = [
  { time: 12 },
  { time: 13 },
  { time: 14 },
  { time: 15 },
  { time: 16 },
  { time: 17 },
  { time: 18 },
  { time: 19 },
  { time: 20 },
];
const { width } = Dimensions.get('window');

function ForeCast() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState<number>(0);
  const [xTabOne, setXTabOne] = useState<number>(0);
  const [xTabTwo, setXTabTwo] = useState<number>(0);
  const [translateX] = useState<any>(new Animated.Value(0));
  const [translateXTabOne] = useState<any>(new Animated.Value(0));
  const [translateXTabTwo] = useState<any>(new Animated.Value(0));
  const [translateY, setTranslateY] = useState<number>(-1000);

  useEffect(() => {
    if (isActive) {
      Animated.spring(translateX, {
        toValue: xTabTwo,
        useNativeDriver: true,
      }).start();
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.spring(translateX, {
        toValue: xTabOne,
        useNativeDriver: true,
      }).start();
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isActive]);

  return (
    <View>
      <BlurView blurType='light' blurAmount={2} style={styles.container}>
        <View style={styles.titleView}>
          <View style={{ flexDirection: 'row', position: 'relative' }}>
            <Animated.View
              style={{
                ...styles.buttonActive,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button]}
              onPress={() => setIsActive(0)}
              onLayout={event => setXTabOne(event.nativeEvent.layout.x)}>
              <Text
                style={[styles.titleText, !isActive && styles.titleTextActive]}>
                {t('forecast:today')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button]}
              onPress={() => setIsActive(1)}
              onLayout={event => setXTabTwo(event.nativeEvent.layout.x)}>
              <Text
                style={[
                  styles.titleText,
                  Boolean(isActive) && styles.titleTextActive,
                ]}>
                {t('forecast:weekly')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: translateXTabOne,
              },
            ],
          }}
          onLayout={event => setTranslateY(event.nativeEvent.layout.height)}>
          <View style={styles.viewItem}>
            <Today data={data} />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: translateXTabTwo,
              },
              {
                translateY: -translateY,
              },
            ],
          }}
          onLayout={event => setTranslateY(event.nativeEvent.layout.height)}>
          <View style={styles.viewItem}>
            <Weekly data={data} />
          </View>
        </Animated.View>
      </BlurView>
    </View>
  );
}
export default ForeCast;
