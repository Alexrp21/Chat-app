<template>
  <div class="login">
    <button @click="registrate = !registrate" class="change-button">
      {{ !registrate ? "Registrate your account" : "Login" }}
    </button>
    <form v-if="registrate" class="registrate">
      <input type="text" v-model="login" placeholder="Enter your login"><br><br>
      <input type="text" v-model="password" placeholder="Enter your password"><br><br>
      <input type="text" v-model="repeatedPassword" placeholder="Repeat password">
    </form>

    <form v-else class="login">
      <input type="text" v-model="login" placeholder="Enter your login"><br><br>
      <input type="text" v-model="password" placeholder="Enter your password">
    </form>
    <br>
    <button @click="sendUserData">
      {{ registrate ? "Registrate" : "Enter" }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    registrate: true,
    login: '',
    password: '',
    repeatedPassword: '',
  }),
  methods: {
    sendUserData () {
      if (!this.validate) {
        return;
      }
      let url = this.registrate ? 'http://localhost:3000/registrate' : 'http://localhost:3000/login';
      fetch(url, {
        method: 'POST',
        body: {
          "login": this.login,
          "password": this.password
        },
      }).then(async res => {
        const respJSON = await res.json();
        const result = respJSON.result;
        if (result === 'exists') {
          alert('This login already exists!');
        } else if (result === 'created') {
          alert('Account created!');
          this.$emit('loggedIn');
          this.$router.push('/');
        } else if (result === 'success') {
          alert('Login successful!')
          this.$emit('loggedIn');
          this.$router.push('/');
        } else {
          alert ('Incorrect login or password!');
        }
      })
    },
    validate () {
      regexp = /((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/;
      if (!regexp.test(this.password)) {
        alert('The password must be between 6 and 20 characters long and contain uppercase and lowercase letters and numbers!')
        return false;
      }
      if (this.password !== this.repeatedPassword) {
        alert('Password and repeated password do not match!');
        return false;
      }
      return true;
    }
  }
}
</script>

<style>
.change-button {
  margin: 20px 0;
}
</style>
