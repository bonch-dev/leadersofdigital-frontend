<template>
  <q-page>
    <div class='login' v-if='true'>
      <img src="../statics/images/bear.png" height="137" alt="">
      <h3 class='font-bold'>Единство</h3>
      <p class='font-text'>
        Добро пожаловать! Здесь мы меняем мир к лучшему, присоединяйся прямо сейчас!
      </p>
      <img class='vk' src="../statics/icons/vk.svg" alt="">
      <a href='https://leadersofdigital-backend.server.bonch.dev/provider/vkontakte/?callback_url=https://leadersofdigital-frontend-staging.server.bonch.dev/callback/' class='font-text'>Авторизация</a>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      auth: 'user/auth/auth'
    })
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
