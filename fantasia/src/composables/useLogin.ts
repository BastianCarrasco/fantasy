// src/composables/useLogin.ts
import { ref } from 'vue'

const isLoggedIn = ref(false)

const login = (username: string, password: string) => {
  if (username === 'admin' && password === '1234') {
    isLoggedIn.value = true
  } else {
    alert('Credenciales incorrectas')
  }
}

export function useLogin() {
  return {
    isLoggedIn,
    login
  }
}
