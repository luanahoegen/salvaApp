import axios from 'axios';
import { useState } from 'react';
import { loginUser } from '../services/loginService';

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    const normalizedEmail = email.trim();

    if (!normalizedEmail || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await loginUser({
        email: normalizedEmail,
        password: password,
      });
      setSuccessMessage('Login realizado com sucesso!');
    } catch (error) {
       setErrorMessage('Não foi possível realizar o login. Verifique sua conexão.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Recuperar senha para:', email);
  };

  const clearErrorMessage = () => setErrorMessage(null);
  const clearSuccessMessage = () => setSuccessMessage(null);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    errorMessage,
    successMessage,
    handleLogin,
    handleForgotPassword,
    clearErrorMessage,
    clearSuccessMessage,
  };
}
