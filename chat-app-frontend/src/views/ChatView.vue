<template>
  <div class="home">
    <span v-if="loggedIn" class="my-login">Hello {{ loggedIn }}</span>
    <br>
    <textarea v-model="inputMessage" type="text" maxlength="255"/>
    <br>
    <button @click="sendMessage">Send message</button>
    <div class="divider"></div>
    <div class="message-story">
      <!-- <span v-if="message in messages">{{ message }}</span> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputMessage: '',
      messages: []
    };
  },
  computed: {
    loggedIn() {
      return localStorage.getItem('login');
    }
  },
  watch: {
    loggedIn(newVal, oldVal) {
      if (!newVal) this.$router.push('/login');
    }
  },
  mounted() {
    if (!this.loggedIn) this.$router.push('/login');
  },
  methods: {
    async sendMessage() {
      await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.inputMessage),
      }).then((data) => {
        console.log(data);

      });
    }
  },
};
</script>

<style>
.divider {
  width: 100%;
  height: 1px;
  margin: 20px 0;
  border-top: 1px solid black;
}
.my-login {
  position: absolute;
  top: 10px;
  left: 100px;
}
</style>
