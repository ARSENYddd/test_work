import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

interface UserData {
  // Определите типы данных для пользовательских данных
  username?: string;
  password: string;
  email: string;
  
}

export async function registerUser(userData: UserData): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post(`${API_URL}/register/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}
export async function authUser(userData: UserData): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post(`${API_URL}/auth/auth`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}