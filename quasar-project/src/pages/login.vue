<template>
  <q-card class="max-w-sm q-mt-md">
    <q-card-section>
    <!-- Ваши поля ввода для регистрации -->
   
    <q-input v-model="formData.email" label="Email" type="email" />
    <q-input v-model="formData.password" label="Password" type="password" />
    <!-- Кнопка для отправки формы -->
    </q-card-section>

    <q-card-actions align="right">
  <q-btn color="primary" label="войти" @click="handleSubmit" />
</q-card-actions>
</q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { authUser } from '../services/api.service';

interface FormData {
  
  email: string;
  password: string;
}

export default defineComponent({
  name: 'RegistrationForm',
  setup() {
    const formData = ref<FormData>({
      
      email:'',
      password: '',
    });

    const handleSubmit = async () => {
      try {
          console.log('1111111')
        const response = await authUser(formData.value);
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