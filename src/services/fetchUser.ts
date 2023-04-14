import { api } from './api';

export const getUsers = async () => {
  const response = await api.get('');
  
  return response.data;
};

export const getUsersQtd = async () => {
  const response = await api.get('/?results=10');
  
  return response.data
}