<template>
  <form @submit.prevent="handleIn">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref(null);

const handleIn = async () => {
  try {
    await store.dispatch("login", {
      email: email.value,
      password: password.value,
    });
    router.push({ name: "home" });
  } catch (err) {
    error.value = err.message;
  }
};
</script>
