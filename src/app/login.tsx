import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
  Alert,
  Image,
  Platform,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { PasswordInput } from '../components/PasswordInput';
import { styles } from '../styles/loginStyles';
import { useLoginViewModel } from '../viewmodels/useLoginViewModel';

export default function Login() {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgotPassword,
    isLoading,
    errorMessage,
    successMessage,
    clearErrorMessage,
    clearSuccessMessage
  } = useLoginViewModel();

  const router = useRouter();

  useEffect(() => {
    if (errorMessage) {
      Alert.alert('Erro no login', errorMessage, [
        { text: 'OK', onPress: clearErrorMessage }
      ]);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      Alert.alert('Sucesso', successMessage, [
        { text: 'OK', onPress: clearSuccessMessage }
      ]);
    }
  }, [successMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/salva-logo.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />

      <View style={styles.card}>
          <View style={styles.titleContainer}>
            <View style={styles.titleBar} />
            <Text style={styles.title}>ACESSE SUA CONTA</Text>
          </View>

          <CustomInput
            label="E-MAIL CORPORATIVO / PESSOAL"
            labelStyle={styles.label}
            placeholder="mestre@salvacraft.com.br"
            containerStyle={styles.inputContainer}
            inputStyle={styles.inputField}
            value={email}
            onChangeText={setEmail}
          />

          <PasswordInput
            label="SENHA"
            labelStyle={styles.label}
            placeholder="••••••••"
            containerStyle={styles.inputContainer}
            inputStyle={styles.inputField}
            eyeStyle={styles.eye}
            value={password}
            onChangeText={setPassword}
          />

          <CustomButton
            title="ESQUECI MINHA SENHA"
            textStyle={styles.forgotPassword}
            onPress={handleForgotPassword}
          />

          <CustomButton
            title={isLoading ? "CARREGANDO..." : "INICIAR SESSÃO →"}
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
            onPress={handleLogin}
            disabled={isLoading}
          />

          <Text style={styles.registerText}>
            Novo no universo Salva?{' '}
            <Link href="/register" style={styles.registerLink}>
              Cadastre-se aqui
            </Link>
          </Text>

        <Text style={styles.footer}>
          BEBA COM SABEDORIA. PRODUTO DESTINADO A
          {'\n'}
          MAIORES DE 18 ANOS.
        </Text>
      </View>
    </SafeAreaView>
  );
}