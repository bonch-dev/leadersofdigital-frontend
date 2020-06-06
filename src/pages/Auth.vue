<template>
  <q-page>
  </q-page>
</template>

<script>
import API from '../boot/API'
export default {
  beforeMount () {
    localStorage.setItem('user-token', decodeURIComponent(location.href.split('callback/')[1]))
    API.defaults.headers.common.Authorization = 'Bearer ' + decodeURIComponent(location.href.split('callback/')[1])
    this.$router.replace({ name: 'profile' })
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  top: -50px;
  h3 {
    font-size: 22px;
    margin: 0 0 26px;
  }
  p {
    max-width: 312px;
    text-align: center;
    margin: 0 0 25px;
  }
  .vk {
    margin-bottom: 12px;
  }
  a {
    background: linear-gradient(102.21deg, #4065C5 0%, #8897E6 100%);
    border-radius: 3px;
    border: none;
    color: white;
    padding: 11px 50px;
    text-decoration: none;
  }
}
</style>
