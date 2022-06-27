import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './styles';

interface IToday {
    data: any,
}

const renderItem = (): React.ReactElement => {
    return (
        <View style={styles.item}>
            <Text>12:13</Text>
            <Icon name="white-balance-sunny" size={24} />
            <Text>28 °C</Text>
        </View>
    )
}

function Today({ data }: IToday) {
    return <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.time}
    />
}
export default Today;