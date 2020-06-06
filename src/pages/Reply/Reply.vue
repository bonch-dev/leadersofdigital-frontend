<template>
  <div class='user'>
    <q-tabs
        inline-label
        no-caps
        :breakpoint="0"
        align="justify"
        class="user__tabs"
        indicator-color="gray"
      >
        <q-route-tab name="profile"
          label="Активные"
          :to="{ name: 'profile.active' }"
        />
        <q-route-tab name="events"
          label="Архив"
          :to="{ name: 'profile.archive' }"
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
.user {
  padding: 0 32px;
  &__tabs {
    margin: 20px 0 30px;
    color: $gray;
  }
}
</style>
