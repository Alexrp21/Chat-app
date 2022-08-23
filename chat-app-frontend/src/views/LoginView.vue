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
    repeatedPassword: ''
  }),
  methods: {
    sendUserData () {
      if (!this.validate) {
        return;
      }
    },
    validate () {
      if (this.password !== this.repeatedPassword) {
        alert('Password and repeated password do not match!');
        return false;
      }
    }
  }
}
</script>

<style>
.change-button {
  margin: 20px 0;
}
</style>
