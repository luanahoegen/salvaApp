import { useState } from 'react';
import { useUserDatabase } from '../database/useUserDatabase';

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const userDatabase = useUserDatabase();

  const handleLogin = async () => {
    if (!email || !password) {
      console.log('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Recuperar senha para:', email);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
    handleForgotPassword,
  };
}
