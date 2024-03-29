<template>
  <q-page class="q-pa-md">
    

    <q-card class="max-w-sm q-mt-md">
      <q-card-section>
        <h2 class="text-h6 q-mb-sm">Вход</h2>
        <q-input v-model="login.email" label="Email" type="email" outlined />
        <q-input v-model="login.password" label="Пароль" type="password" outlined />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Войти" @click="loginUser" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Auth } from 'aws-amplify';



const login = {
  email: '',
  password: ''
};



const loginUser = async () => {
  try {
    await Auth.signIn(login.email, login.password);
    console.log('User logged in successfully!');
  } catch (error) {
    console.error('Error logging in user:', error);
  }
};
</script>

<style scoped>
.max-w-sm {
  max-width: 300px;
  margin: auto;
}
</style>