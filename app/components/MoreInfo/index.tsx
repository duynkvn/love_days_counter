import React from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const renderItem = (): React.ReactElement => {
    return (
        <View style={styles.item}>
            <Icon name="white-balance-sunny" size={24}></Icon>
            <View style={styles.itemValue}>
                <Text style={{ color: 'gray' }}>
                    UV Index
                </Text>
                <Text style={{ fontWeight: '600' }}>
                    3
                </Text>
            </View>
        </View>
    )
}

function MoreInfo() {
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0.25, y: 0.25 }} end={{ x: 0.75, y: 1.5 }} colors={['#E262E6', '#9B63EC', '#8364EE']} style={styles.titleView} >
                <Text style={styles.titleText}>More Information</Text>
            </LinearGradient>
            <View style={styles.viewItem}>
                <View style={{ justifyContent : 'space-between', flexDirection: 'row' }}>
                    {renderItem()}
                    {renderItem()}
                    {renderItem()}
                </View>
                <View style={{ justifyContent : 'space-between', flexDirection: 'row' }}>
                    {renderItem()}
                    {renderItem()}
                    {renderItem()}
                </View>
            </View>
        </View>
    )
}
export default MoreInfo;