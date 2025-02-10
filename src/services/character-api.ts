import { api } from './api';
import { TCharacter, TCharacterPreview } from '../types';

export const fetchCharactersByName = async (
  name: string
): Promise<TCharacterPreview[]> => {
  try {
    const response = await api.get('/character', {
      params: { name }
    });

    return response.data.results;
  } catch (error) {
    console.error('Request execution error:', error);
    throw error;
  }
};

export const fetchCharacterById = async (id: number): Promise<TCharacter> => {
  try {
    const response = await api.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error('Request execution error:', error);
    throw error;
  }
};
