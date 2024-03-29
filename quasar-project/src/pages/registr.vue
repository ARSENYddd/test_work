<template>
    <q-form @submit="handleSubmit">
      <!-- Ваши поля ввода для регистрации -->
      <q-input v-model="formData.username" label="Username" />
      <q-input v-model="formData.email" label="Email" type="email" />
      <q-input v-model="formData.password" label="Password" type="password" />
      <!-- Кнопка для отправки формы -->
      <q-btn type="submit" label="Register" color="primary" />
    </q-form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { registerUser } from '../services/api.service';
  
  interface FormData {
    username: string;
    email: string;
    password: string;
  }
  
  export default defineComponent({
    name: 'RegistrationForm',
    setup() {
      const formData = ref<FormData>({
        username: '',
        email:'',
        password: '',
      });
  
      const handleSubmit = async () => {
        try {
            console.log('1111111')
          const response = await registerUser(formData.value);
          // Обработка успешного ответа от сервера
          console.log('222222')
          console.log('User registered:', response);
        } catch (error) {
          // Обработка ошибки
          console.error('Registration failed:', error);
        }
      };
  
      return { formData, handleSubmit };
    }
  });
  </script>
  <style scoped>
  .max-w-sm {
    max-width: 300px;
    margin: auto;
  }
  </style>