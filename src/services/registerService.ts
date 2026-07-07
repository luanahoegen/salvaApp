import { api } from './api';

export type RegisterUserPayload = {
  name: string;
  email: string;
  password: string;
  birthDate: string;
};

export async function registerUser(payload: RegisterUserPayload): Promise<string> {
  const response = await api.post<{ message: string }>('/api/users/register', payload);
  return response.data.message;
}
