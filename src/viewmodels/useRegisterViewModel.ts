import { useState } from 'react';
import { useUserDatabase } from '../database/useUserDatabase'; // Importe o hook useUserDatabase

export function useRegisterViewModel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { create: createUser } = useUserDatabase(); 

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.log("As senhas não coincidem");
      return;
    }

    setIsLoading(true);
    try {
      const hashedPassword = password; 

      const newUser = {
        nome_completo: name,
        email: email,
        senha_hash: hashedPassword,
        data_nascimento: birthDate,
      };

      const result = await createUser(newUser);
      console.log('Usuário cadastrado com sucesso. ID:', result.insertedId);
    } finally {
      setIsLoading(false);
    }
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
  };
}
