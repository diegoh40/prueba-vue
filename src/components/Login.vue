<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const formData = new FormData();
      formData.append('user', this.username);
      formData.append('pacc', this.password);
      formData.append('key', '987342748AC');

      axios.post('https://jacgsaw.com/auth/login', formData)
        .then(response => {
          const responseData = response.data;
          console.log(responseData);
          // Si el inicio de sesión es exitoso, puedes redirigir al usuario a la página de inicio
          if (responseData.login) {
            this.$router.push('/home');
          } else {
            // Manejar el caso de inicio de sesión fallido
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>


