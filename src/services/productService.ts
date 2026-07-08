import { api } from './api';

export type Product = {
  id: string;
  imageUrl: string;
  basicInfo: string;
  name: string;
  description: string;
  tastingNotes: string;
  marketingSummary: string;
};

export type ProductPayload = Omit<Product, 'id'>;

export async function createProduct(payload: ProductPayload): Promise<any> {
  const response = await api.post('/api/products/create', payload);
  return response.data;
}

export async function getAllProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>('/api/products/all');
  return response.data;
}