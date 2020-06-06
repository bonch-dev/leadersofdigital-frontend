<template>
  <q-layout view="hhh lpR fFf">

    <q-header class="header bg-light-blue text-white">
      <q-toolbar>
        <q-toolbar-title class="q-py-sm flex items-center">
          <router-link to='/' class="logo">
            <img src="../statics/images/logo.png" height="32" alt="">
          </router-link>
          <q-space/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer text-white">
      <q-toolbar class="footer__toolbar flex justify-between q-py-xs q-px-lg">
        <div class='flex'>
          <q-item v-for="link in links"
            :key="link.icon"
            :to="link.url"
            active-class="text-white"
            class='flex items-center'
          >
            <q-icon  :name="link.icon" style="font-size: 20px" />
          </q-item>
        </div>
        <button v-if="page === 'news' || page === 'blog' || page === 'initiative.current' || page === 'vote'" @click="$router.push({ name: 'add', params: { type: page } })">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#0C1120"/>
          </svg>
        </button>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      links: [
        { icon: 'person', url: '/profile/me' },
        { icon: 'fas fa-exclamation', url: '/news' },
        { icon: 'create', url: '/blog' },
        { icon: 'play_circle_filled', url: '/initiative' },
        { icon: 'how_to_vote', url: '/vote' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user/user'
    }),
    page () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .logo {
    display: flex;
    align-items: center;
  }
}
.footer {
  // position: relative;
  background: $button-blue;
  &__toolbar {
    button {
      position: absolute;
      right: 16px;
      bottom: 28px;
      border-radius: 50%;
      border: none;
      padding: 21px;
      line-height: 100%;
      background: $light-blue;
      box-shadow: 4px 4px 4px rgba(173, 177, 247, 0.5);
    }
    a {
      color: #CFD3F8;
    }
  }
}
</style>
