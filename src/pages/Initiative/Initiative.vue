<template>
  <div class='initiative'>
    <div class='initiative__top'>
      <img src="../../statics/images/initiative-back.png" alt="">
      <h3 class='font-header'>Проект недели</h3>
      <p class='font-text'>Тут будет текст, который воодушевит, вдохновит и еще и все объяснит (или нет), но пояснить что происходит точно надо</p>
    </div>
    <q-tabs
        inline-label
        no-caps
        :breakpoint="0"
        align="justify"
        class="initiative__tabs"
        indicator-color="gray"
      >
        <q-route-tab name="current"
          label="Текущий этап"
          :to="{ name: 'initiative.current' }"
        />
        <q-route-tab name="archive"
          label="Прошлые этапы"
          :to="{ name: 'initiative.archive' }"
        />
      </q-tabs>
      <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.initiative {
  padding: 0 32px;
  &__top {
    position: relative;
    padding-left: 54px;
    margin-bottom: 60px;
    img {
      position: absolute;
      left: -32px;
    }
    h3, p {
      position: relative;
      margin: 0;
    }
    h3 {
      margin: 38px 0 10px;
    }
  }
  &__tabs {
    margin: 20px 0 30px;
    color: $gray;
  }
}
</style>
