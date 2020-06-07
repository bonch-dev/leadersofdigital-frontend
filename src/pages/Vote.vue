<template>
  <div class='blog'>
    <vote-card v-for="item in questions" :key="item.id" :item="item" ></vote-card>
  </div>
</template>

<script>
import VoteCard from 'components/VoteCard'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      news: [
        { id: 1, user: { name: 'Денис Липкович', image: 'https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg' }, date: '16 ноября 2019', title: 'Как я стал активистом: простая история о непростом выборе', rating: 2 },
        { id: 2, user: { name: 'Владимир Черномырдин', image: 'https://sun9-24.userapi.com/c848520/v848520664/1ee6ff/m879mlD_gfs.jpg' }, date: '16 ноября 2019', title: 'Как я стал активистом: простая история о непростом выборе', rating: 32 }
      ]
    }
  },
  beforeMount () {
    this.loadQuestions()
  },
  methods: {
    ...mapActions({
      loadQuestions: 'questions/loadQuestions'
    })
  },
  computed: {
    ...mapGetters({
      questions: 'questions/questions'
    })
  },
  components: { VoteCard }
}
</script>

<style lang='scss' scoped>
.blog {
  padding: 30px 32px 0;
}
</style>
