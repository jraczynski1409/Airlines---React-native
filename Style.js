import { StyleSheet, TextInput } from 'react-native';

export let DarkBlue = "#1199E6";
export let VeryDarkBlue = "#336480";
export let Blue = "#5AAFDF";
export let Grey = "#EBEEF0";
export let DarkGrey = "#E3E3E3";
export let BgColor = "#fff";



// style 
export const styles = StyleSheet.create({
    container: {
        backgroundColor: BgColor,
        flex: 1,
        justifyContent: 'space-between'
    },

    mainTop: {

        alignItems: "center",
        alignContent: "center",
    },

    mainBottom: {
        alignItems: "center",
        justifyContent: "center",
    },

    LogoTop: {
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },

    smallLogo: {

        width: '40%',
        resizeMode: "contain",
    },

    bigLogo: {
        width: '100%',
        resizeMode: "contain",
    },

    h1: {
        fontSize: 26,
        textAlign: 'left',
        fontWeight: '800',
        width: '90%',
        marginVertical: 15,
    },

    description: {
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '300',
        width: '90%',
        marginBottom: 5,
    },

    button: {
        width: '90%',
        height: 48,
        padding: 4,
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: 15,
    },



    buttonText: {
        alignSelf: "center",
        fontSize: 16,
        textTransform: 'uppercase',
    },

    inputText: {
        width: '90%',
        height: 48,
        paddingHorizontal: 30,
        borderTopWidth: 1,
        borderTopColor: Grey,
        color: '#333',
        alignSelf: 'center',
    },

    inputContainer: {
        marginVertical: 20,
        backgroundColor: BgColor,
        borderWidth: 1,
        borderColor: Grey,
        width: '90%',
        borderRadius: 10,      
    },

    checkboxContainer: {
        width:'90%',
    },

    checkboxContent: {
        width:'100%',
        backgroundColor: '#fff',
        border: 0,
        borderColor: "#fff",
        margin: 0,
        paddingVertical: 3,
        paddingHorizontal:1,
    },

    listInput: {
        width: '90%',
        alignSelf: 'center',
        height: 40,
        backgroundColor: Grey,
        borderRadius: 5,
        
        
    }
});
