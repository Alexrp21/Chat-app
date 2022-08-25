<template>
  <div id="app">
    <nav>
      <button class="logout-btn" @click="logout">Logout</button>
      <span v-if="myIp" class="my-ip">Your ip: {{ myIp }}</span>
      <router-link to="/">Chat</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: () => ({
    myIp: ''
  }),
  mounted() {
    fetch('http://localhost:3000/getIp')
      .then(async res => {
        const result = await res.json();
        this.myIp = result.ip;
      })
      .catch((err) => console.log(err))
  },
  methods: {
    logout() {
      localStorage.removeItem('login');
      this.$router.push('/login');
    }
  },
  beforeDestroy() {
    localStorage.removeItem('login');
  }
}
</script>

<style>
.logout-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.my-ip {
  position: absolute;
  top: 50px;
  right: 10px;
}
</style>
