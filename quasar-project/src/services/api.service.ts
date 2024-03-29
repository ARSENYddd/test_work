import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

interface UserData {
  // Определите типы данных для пользовательских данных
  username: string;
  password: string;
  email: string;
  // Другие поля
}

export async function registerUser(userData: UserData): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}