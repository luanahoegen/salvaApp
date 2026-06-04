import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 40,
        paddingBottom: 30,
    },

    logoImage: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 35,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
    },

    underline: {
        width: 60,
        height: 3,
        backgroundColor: '#FFFFFF',
        marginTop: 8,
    },

    form: {
        paddingHorizontal: 25,
    },

    label: {
        color: '#808080',
        fontSize: 12,
        letterSpacing: 2,
        marginBottom: 10,
        marginTop: 10,
    },

    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#1A1A1A',
        flexDirection: 'row',
        alignItems: 'center',
    },

    inputField: {
        flex: 1,
        color: '#FFFFFF',
        paddingBottom: 10,
        fontSize: 16,
    },

    eye: {
        color: '#808080',
        fontSize: 18,
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'flex-start',
    },

    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#808080',
        marginTop: 2,
        marginRight: 10,
    },

    checkboxSelected: {
        backgroundColor: '#FFFFFF',
    },

    button: {
        backgroundColor: '#FFFFFF',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 22,
    },

    registerText: {
        color: '#808080',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 40,
    },

    registerLink: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    bottomInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 30,
    },

    card: {
        borderWidth: 1,
        borderColor: '#1A1A1A',
        padding: 30,
        backgroundColor: '#000000',
    },

    smallText: {
        color: '#404040',
        fontSize: 10,
    },

    titleBar: {
        width: 5,
        height: 40,
        backgroundColor: '#FFFFFF',
        marginRight: 15,
    },

    footer: {
        color: '#1A1A1A',
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 12,
    },
});