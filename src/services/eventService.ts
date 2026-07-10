import { api } from './api';

export type EventModel = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  category: string;
};

export async function createEvent(event: Omit<EventModel, 'id'>): Promise<any> {
  const payload = {
    name: event.name,
    description: event.description,
    date: event.date,
    time: event.time,
    category: event.category
  };
  console.log('📤 Enviando Evento:', payload);
  const response = await api.post('/api/events/create', payload);
  return response.data;
}

export async function getAllEvents(): Promise<EventModel[]> {
  const response = await api.get<EventModel[]>('/api/events/all');
  return response.data;
}
