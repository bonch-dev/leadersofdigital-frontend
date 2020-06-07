<template>
  <div class='blog'>
    <blog-card v-for="item in posts" :key="item.id" :post="item"></blog-card>
  </div>
</template>

<script>
import BlogCard from 'components/BlogCard'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: { BlogCard },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  },
  beforeMount () {
    this.loadPosts()
  }
}
</script>

<style lang='scss' scoped>
.blog {
  padding: 30px 32px 0;
}
</style>
