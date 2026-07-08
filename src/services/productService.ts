import { api } from './api';

export type ProductPayload = {
  imageUrl: string;
  basicInfo: string;
  name: string;
  description: string;
  tastingNotes: string;
  marketingSummary: string;
};

export async function createProduct(payload: ProductPayload): Promise<any> {
  const response = await api.post('/api/products/create', payload);
  return response.data;
}
