import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 40,
        paddingBottom: 30,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    logoImage: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
    },

    subtitle: {
        color: '#808080',
        letterSpacing: 4,
        marginTop: 8,
        fontSize: 12,
    },

    card: {
        borderWidth: 1,
        borderColor: '#1A1A1A',
        padding: 30,
        backgroundColor: '#000000',
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 35,
    },

    titleBar: {
        width: 5,
        height: 40,
        backgroundColor: '#FFFFFF',
        marginRight: 15,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 34,
        fontWeight: 'bold',
    },

    label: {
        color: '#808080',
        fontSize: 12,
        letterSpacing: 2,
        marginBottom: 10,
        marginTop: 10,
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: '#1A1A1A',
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 55,
        marginBottom: 25,
    },

    inputField: {
        flex: 1,
        fontSize: 18,
        color: '#FFFFFF',
    },

    eye: {
        color: '#808080',
        fontSize: 20,
    },

    forgotPassword: {
        color: '#808080',
        textAlign: 'right',
        marginTop: 15,
        marginBottom: 30,
        letterSpacing: 1,
    },

    loginButton: {
        backgroundColor: '#FFFFFF',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginButtonText: {
        color: '#000000',
        fontSize: 26,
        fontWeight: 'bold',
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },

    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#1A1A1A',
    },

    dividerText: {
        color: '#808080',
        marginHorizontal: 12,
        letterSpacing: 2,
    },

    googleButton: {
        borderWidth: 1,
        borderColor: '#1A1A1A',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },

    googleText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

    registerText: {
        color: '#808080',
        textAlign: 'center',
        marginTop: 25,
        fontSize: 18,
        marginBottom: 40
    },

    registerLink: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    footer: {
        color: '#1A1A1A',
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 12,
    },
});