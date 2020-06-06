<template>
  <q-page class='profile'>
      <q-tabs
        inline-label
        no-caps
        :breakpoint="0"
        align="justify"
        class="profile__tabs text-white"
        indicator-color="white"
      >
        <q-route-tab name="profile"
          label="Профиль"
          :to="{ name: 'profile.active' }"
        />
        <q-route-tab name="events"
          label="Отклики"
          :to="{ name: 'reply.active' }"
          :style=" false ? 'background: #CFD3F8;' : ''"
        />
      </q-tabs>
      <router-view />
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      loadUser: 'user/user/loadUser'
    })
  },
  mounted () {
    this.loadUser()
  }
}
</script>

<style lang='scss' scoped>
.profile {
  &__tabs {
    background: $solid-blue;
    box-shadow: 4px 4px 4px rgba(173, 177, 247, 0.5);
  }
}
</style>
