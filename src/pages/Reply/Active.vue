<template>
  <div>
    <profile-appeal></profile-appeal>
    <profile-blog></profile-blog>
    <profile-video></profile-video>
  </div>
</template>

<script>
import ProfileAppeal from '../../components/ProfileAppeal'
import ProfileBlog from '../../components/ProfileBlog'
import ProfileVideo from '../../components/ProfileVideo'

export default {
  data () {
    return {}
  },
  components: {
    ProfileBlog,
    ProfileAppeal,
    ProfileVideo
  }
}
</script>

<style>

</style>
