import { StyleSheet } from "react-native";
import appStyles from "../../assets/styles/common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        marginTop: 30,
        borderRadius: 30,
        padding: 20,
        paddingTop: 40,
        backgroundColor: 'white',
        ...appStyles.boxShadowLight,
        shadowOpacity: 0.1,
        shadowRadius: 2
    },
    titleView: {
        width: 'auto',
        padding: 10,
        borderRadius: 30,
        position: 'absolute',
        left: 20,
        top: -20
    },
    titleText: {
        color: appStyles.textLight.color,
        fontWeight : '600'
    },
    viewItem: {
        height : '100%',
        justifyContent : 'space-around'
    },
    item: {
        flexDirection: 'row',
        alignItems : 'center'
    },
    itemValue : {
        marginLeft : 10
    }
});
export default styles;
