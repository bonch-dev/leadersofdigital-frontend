<template>
  <div>
    <news-card v-for="item in news2" :key="item.id" :user="item.user" :title="item.title" :date="item.date" :id="item.id" :position="item.position" :like="item.like" :rating="item.rating"></news-card>
    <profile-video></profile-video>
    <blog-card v-for="item in news" :key="item.id" :user="item.user" :title="item.title" :date="item.date" :id="item.id" :rating="item.rating" ></blog-card>
  </div>
</template>

<script>
import ProfileVideo from '../../components/ProfileVideo'
import BlogCard from '../../components/BlogCard'
import NewsCard from '../../components/NewsCard'

export default {
  data () {
    return {
      news: [
        { id: 1, user: { name: 'Денис Липкович', image: 'https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg' }, date: '16 ноября 2019', title: 'Как я стал активистом: простая история о непростом выборе', rating: 2 },
        { id: 2, user: { name: 'Владимир Черномырдин', image: 'https://sun9-24.userapi.com/c848520/v848520664/1ee6ff/m879mlD_gfs.jpg' }, date: '16 ноября 2019', title: 'Как я стал активистом: простая история о непростом выборе', rating: 32 }
      ],
      news2: [
        { id: 1, user: { name: 'Денис Липкович', image: 'https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg' }, date: '16 ноября 2019', title: 'Как я стал активистом: простая история о непростом выборе', position: 'Дальневосточный 71', like: 123, rating: 2 },
        { id: 2, user: { name: 'Владимир Черномырдин', image: 'https://sun9-24.userapi.com/c848520/v848520664/1ee6ff/m879mlD_gfs.jpg' }, date: '16 ноября 2019', title: 'Как я стал активистом: простая история о непростом выборе', position: 'Дальневосточный 71', like: 123, rating: 32 }
      ]
    }
  },
  components: {
    NewsCard,
    ProfileVideo,
    BlogCard
  }
}
</script>

<style>

</style>
