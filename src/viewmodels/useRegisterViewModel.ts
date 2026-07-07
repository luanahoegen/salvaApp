import axios from 'axios';
import { useState } from 'react';
import { registerUser } from '../services/registerService';

export function useRegisterViewModel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRegister = async () => {
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!normalizedName) {
      setErrorMessage('Por favor, preencha seu nome completo.');
      return;
    }
    if (!normalizedEmail) {
      setErrorMessage('Por favor, preencha seu e-mail.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setErrorMessage('Informe um e-mail válido.');
      return;
    }
    if (!birthDate) {
      setErrorMessage('Por favor, preencha sua data de nascimento.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    setIsLoading(true);
    try {
      const hashedPassword = password;

      const newUser = {
        name: normalizedName,
        email: normalizedEmail,
        password: hashedPassword,
        birthDate: birthDate?.toISOString().split('T')[0] || '',
      };

      const resultMessage = await registerUser(newUser);
      setSuccessMessage(resultMessage || 'Usuario cadastrado com sucesso.');
      
      setName('');
      setEmail('');
      setBirthDate(null);
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage('Não foi possível cadastrar o usuário. Verifique se o backend está rodando.');
        return;
      }
      setErrorMessage('Erro inesperado ao cadastrar.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearErrorMessage = () => setErrorMessage(null);
  const clearSuccessMessage = () => {
    setSuccessMessage(null);
  };

  return {
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
    errorMessage,
    successMessage,
    clearErrorMessage,
    clearSuccessMessage,
  };
}
