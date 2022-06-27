import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
    boxShadowLight: {
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 10,
    },
    textLight: {
        color: 'white'
    },
    textBlack: {
        color: 'black'
    },
    borderRadius : {
        borderRadius : 20
    }
});
export default appStyles;
