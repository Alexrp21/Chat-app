<template>
  <div class="home">
    <input v-model="inputMessage" type="text" maxlength="255"/>
    <button @click="sendMessage">Send message</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputMessage: '',
    };
  },

  methods: {
    async sendMessage() {
      await fetch('backendurl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.inputMessage),
      }).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
