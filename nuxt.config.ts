export default defineNuxtConfig({
    modules: ['@nuxtjs/auth'],
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: '/api/login', method: 'post' },
            logout: { url: '/api/logout', method: 'post' },
            user: { url: '/api/user', method: 'get' },
          },
        },
      },
      redirect: {
        login: '/login',
        logout: '/login',
        home: '/',
      },
    },
  });
  