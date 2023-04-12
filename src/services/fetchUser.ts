import { api } from './api';

export const getUsers = async () => {
  const response = await api.get('');
  
  return response.data;
};
