<template>
  <div>
    <profile-video></profile-video>
  </div>
</template>

<script>
import ProfileVideo from '../../components/ProfileVideo'

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
    ProfileVideo
  }
}
</script>

<style>

</style>
