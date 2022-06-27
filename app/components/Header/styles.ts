import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    leftContent: {
        justifyContent: 'center',
    },
    centerContent: {
        flex: 1,
        alignItems: 'center'
    },
    rightContent: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        display: 'flex',
        alignItems: 'center',
    },
    cityName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        fontSize: 14,
        fontStyle: 'italic',

    },
    iconCircle: {
        width: 40,
        height: 40,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    }
});
export default styles;
