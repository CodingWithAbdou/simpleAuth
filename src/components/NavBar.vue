<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all user -->
    <div>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>
    <!--  logged in user -->
    <div>
      <span>Logged in as...</span>
      <button>Logout</button>
    </div>
    <!--  logged out user -->
    <div>
      <router-link :to="{ name: 'loge in' }">Login</router-link>
      <router-link :to="{ name: 'sing up' }">Signup</router-link>
    </div>
  </nav>
</template>
