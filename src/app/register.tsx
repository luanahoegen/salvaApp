import { Link } from 'expo-router';
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { PasswordInput } from '../components/PasswordInput';
import { styles } from '../styles/registerStyles';
import { useRegisterViewModel } from '../viewmodels/useRegisterViewModel';

export default function Register() {
  const {
    name,
    setName,
    email,
    setEmail,
    birthDate,
    setBirthDate,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    isLoading,
  } = useRegisterViewModel();

return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image
            source={require('../assets/images/salva-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
            />
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <View style={styles.titleBar} />
                <Text style={styles.title}>CRIE SUA CONTA</Text>
            </View>

            <View style={styles.form}>
                <CustomInput
                    label="NOME COMPLETO"
                    labelStyle={styles.label}
                    placeholder="Seu nome completo"
                    placeholderTextColor="#404040"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputField}
                    value={name}
                    onChangeText={setName}
                />

                <CustomInput
                    label="E-MAIL"
                    labelStyle={styles.label}
                    placeholder="exemplo@cervejaria.com"
                    placeholderTextColor="#404040"
                    keyboardType="email-address"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputField}
                    value={email}
                    onChangeText={setEmail}
                />

                <CustomInput
                    label="DATA DE NASCIMENTO"
                    labelStyle={styles.label}
                    placeholder="dd/mm/aaaa"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputField}
                    value={birthDate}
                    onChangeText={setBirthDate}
                />

                <PasswordInput
                    label="SENHA"
                    labelStyle={styles.label}
                    placeholder="********"
                    placeholderTextColor="#404040"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputField}
                    eyeStyle={styles.eye}
                    value={password}
                    onChangeText={setPassword}
                />

                <PasswordInput
                    label="CONFIRMAR SENHA"
                    labelStyle={styles.label}
                    placeholder="********"
                    placeholderTextColor="#404040"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputField}
                    eyeStyle={styles.eye}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <CustomButton
                    title="CADASTRAR →"
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={handleRegister}
                    disabled={isLoading}
                />

                <Text style={styles.registerText}>
                    Já possui uma conta?{' '}
                    <Link href="/login" style={styles.registerLink}>
                        Entre aqui
                    </Link>
                </Text>
            </View>

            <Text style={styles.footer}>
                BEBA COM SABEDORIA. PRODUTO DESTINADO A
                {'\n'}
                MAIORES DE 18 ANOS.
            </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
);
}