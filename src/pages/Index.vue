<template>
  <q-layout class="mainPage flex column justify-center items-center">
    <img src="../statics/images/logotype.svg" alt="">
    <div>
      <div class="mainPage__ttl">Единство</div>
      <div class="mainPage__subTtl">Мы сильны вместе</div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'PageIndex',
  beforeMount () {
    setTimeout(() => {
      this.$router.replace({ name: 'login' })
    }, 3000)
  }
}
</script>

<style scoped lang="scss">
  .mainPage {
    padding: 0 35px;
    &__ttl {
      font-style: normal;
      font-weight: bold;
      font-size: 44px;
      line-height: 54px;
      color: #0C1120;
    }
    &__subTtl {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      text-align: center;
      color: #0C1120;
    }
  }
  @media (min-width: 320px) and (max-width: 420px) {
    .mainPage {
      & img {
        width: 100%;
      }
    }
  }
</style>
