<script lang="ts" setup>
import { ref } from 'vue'
import { useLogin } from '../../composables/useLogin.ts'

const { login } = useLogin()
const username = ref('')
const password = ref('')

const handleLogin = () => {
  login(username.value, password.value)
}
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Iniciar Sesión</h2>
    <input v-model="username" type="text" placeholder="Usuario" class="border p-2 mr-2" />
    <input v-model="password" type="password" placeholder="Contraseña" class="border p-2 mr-2" />
    <button @click="handleLogin" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
  </div>
</template>
