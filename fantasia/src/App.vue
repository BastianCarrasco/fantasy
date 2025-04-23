<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import LoginForm from './components/App/Login.vue'
import { useLogin } from './composables/useLogin.ts'

const { isLoggedIn } = useLogin()
</script>

<template>
  <div id="app">
    <div v-if="!isLoggedIn">
      <LoginForm />
    </div>
    <div v-else>
      <Navbar />
      <router-view />
    </div>
  </div>
</template>
