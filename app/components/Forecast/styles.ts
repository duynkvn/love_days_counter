import { StyleSheet, Text } from 'react-native';
import appStyles from "../../assets/styles/common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 250,
        marginTop: 30,
        padding: 10,
        paddingTop: 40,
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 2,
        ...appStyles.borderRadius,
    },
    titleView: {
        width: '60%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
    },
    titleText: {
        color: appStyles.textLight.color,
    },
    titleTextActive: {
        color: appStyles.textLight.color,
        fontWeight: '800'
    },
    button: {
        width: '50%',
        padding: 5,
        alignItems : 'center',
        justifyContent: 'center'
    },
    buttonActive: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        borderBottomWidth : 1.5,
        borderColor : 'white'
    },
    viewItem: {
        height: '100%',
        flexDirection: 'row',
    },
    item: {
        height: '100%',
        width: 80,
        alignItems: 'center',
        justifyContent: "space-evenly",
        padding: 10
    },
});
export default styles;
