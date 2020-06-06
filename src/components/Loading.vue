<template>
  <div class="loading">
    <img src="../statics/images/bear.png" alt="">
    <h1>Единство</h1>
    <p>Мы сильны вместе</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-weight: bold;
    font-size: 44px;
    color: $dark;
    line-height: 54px;
    margin-top: 0;
    margin-bottom: 7px;
  }
  p {
    font-weight: 14;
    line-height: 140%;
    font-weight: normal;
    margin: 0;
  }
}
</style>
