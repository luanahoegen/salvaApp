import { api } from './api';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email: string;
  password: string;
};

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/api/users/login', payload);
  return response.data;
}
