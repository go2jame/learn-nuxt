<template>
    <div class="login-form">
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="email" required />
        <input type="password" v-model="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async onSubmit() {
        try {
          await this.$auth.login({
            data: {
              email: this.email,
              password: this.password,
            },
          });
          this.$router.push('https://dummyjson.com/auth/login');
        } catch (error) {
          console.error('Login error:', error);
        }
      },
    },
  };
  </script>
  