import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edecee',
        padding: "10%",
    },
    logo: {
        alignSelf: 'center',
        width: "30%",
        height: "10%",
        marginTop: "15%"
    },
    brandName: {
        color: "black",
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: "1%",
        width: "100%",
        fontSize: "42%",
    },
    slogan: {
        color: "#77737a",
        alignSelf: 'center',
        textAlign: 'center',
        width: "100%",
        fontSize: "16%",
    },
    login: {
       marginTop: '25%',
    },
    loginText: {
        textAlign: 'center'
    },
    inputs: {
        alignSelf: 'center'
    },
    email: {
        margin: "5%",
        backgroundColor: 'white',
        borderRadius: '10%',
        padding: "4%"
    },

    password: {
        margin: "5%",
        backgroundColor: 'white',
        borderRadius: '5%',
        padding: "3%",
        
    },
    enter: {
        margin: "5%",
        backgroundColor: '#647ac6',
        borderRadius: '5%',
        padding: "4%",
       
    },
    noAccess: {
        marginTop: '35%' ,
        textAlign: 'center',
        color: 'black',

    },
    signIn: {
        margin: "5%",
        backgroundColor: '#d9d8da',
        borderRadius: '10%',
        padding: "4%",
        
    },
    signInText: {
        textAlign: 'center'
    }
})