<template>
  <div class='news'>
    <div class="news__top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49825 3.49268C8.17045 3.49268 6.89703 4.02015 5.95813 4.95905C5.01924 5.89794 4.49177 7.17136 4.49177 8.49917C4.49177 9.82697 5.01924 11.1004 5.95813 12.0393C6.89703 12.9782 8.17045 13.5057 9.49825 13.5057C10.8261 13.5057 12.0995 12.9782 13.0384 12.0393C13.9773 11.1004 14.5047 9.82697 14.5047 8.49917C14.5047 7.17136 13.9773 5.89794 13.0384 4.95905C12.0995 4.02015 10.8261 3.49268 9.49825 3.49268ZM1.98853 8.49917C1.98837 7.31726 2.26719 6.15201 2.80229 5.09819C3.3374 4.04436 4.11368 3.13171 5.06801 2.43447C6.02234 1.73722 7.12776 1.27507 8.29438 1.0856C9.46099 0.896134 10.6559 0.984696 11.7818 1.34408C12.9077 1.70347 13.9329 2.32354 14.774 3.15386C15.6152 3.98418 16.2484 5.0013 16.6223 6.1225C16.9962 7.2437 17.1002 8.43733 16.9258 9.60629C16.7514 10.7753 16.3035 11.8866 15.6187 12.8498L21.6477 18.8789C21.8757 19.1149 22.0019 19.4311 21.999 19.7593C21.9962 20.0874 21.8646 20.4013 21.6325 20.6334C21.4004 20.8655 21.0865 20.9971 20.7583 21C20.4302 21.0028 20.114 20.8766 19.8779 20.6487L13.8501 14.6208C12.7266 15.4197 11.4049 15.8939 10.0298 15.9915C8.65467 16.0891 7.27922 15.8063 6.05417 15.174C4.82912 14.5418 3.80173 13.5845 3.0846 12.4072C2.36747 11.2298 1.98826 9.87774 1.98853 8.49917V8.49917Z" fill="#CFD3F8"/>
      </svg>
      <div class='flex items-center'>
        <q-select borderless
          v-model="filt"
          :options="options"
          label="Самые новые"
          disable
          style='width: 160px; margin-right: 10px;'
        />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.3199 2.66667H1.65327C1.56603 2.6734 1.48456 2.71287 1.42521 2.77717C1.36585 2.84147 1.33301 2.92583 1.33327 3.01333V4.16C1.33247 4.27753 1.35504 4.39405 1.39968 4.50277C1.44432 4.6115 1.51012 4.71027 1.59327 4.79333L9.59327 12.7933V19.46L14.4266 21.8667V12.78L22.4266 4.78C22.5797 4.61491 22.6653 4.39845 22.6666 4.17333V3.01333C22.6666 2.92139 22.6301 2.83322 22.5651 2.7682C22.5001 2.70319 22.4119 2.66667 22.3199 2.66667V2.66667Z" fill="#CFD3F8"/>
        </svg>
      </div>
    </div>
    <div class="news__items">
      <news-card v-for="item in events" :key="item.id" :event="item"></news-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from 'components/NewsCard'

export default {
  data () {
    return {
      filt: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  },
  components: {
    NewsCard
  },
  computed: {
    ...mapGetters({
      events: 'events/events'
    })
  },
  methods: {
    ...mapActions({
      loadEvents: 'events/loadEvents'
    })
  },
  beforeMount () {
    this.loadEvents()
  }
}
</script>

<style lang='scss' scoped>
.news {
  padding: 30px 32px 0;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
