import { StyleSheet } from "react-native";
import appStyles from "../../assets/styles/common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...appStyles.boxShadowLight
    },
    weatherView: {
        padding : 10,
        ...appStyles.borderRadius,
    },
    celsius: {
        color: 'white',
        fontSize: 52,
        fontWeight: 'bold',
        marginBottom: 10
    },
    moreInfo: {
        paddingStart : 10
    },
    something: {
        color: 'white',
        fontSize : 24,
        fontWeight : '500'
    },
    feelLike: {
        color: 'white',
    },
    lowHight: {
        color: 'white',
    }
});
export default styles;
