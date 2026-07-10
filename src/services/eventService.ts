import { api } from './api';

export type EventPayload = {
  name: string;
  description: string;
  date: string;
  time: string;
  category: string;
};

export type EventModel = {
  name: string;
  description: string;
  date: string;
  time: string;
  category: string;
};

export async function createEvent(payload: EventPayload): Promise<any> {
  const response = await api.post('/api/events/create', payload);
  return response.data;
}

export async function getAllEvents(): Promise<EventModel[]> {
  const response = await api.get<EventModel[]>('/api/events/all');
  return response.data;
}
