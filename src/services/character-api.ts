import { api } from './api';
import { TCharacterPreview } from '../types';

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
