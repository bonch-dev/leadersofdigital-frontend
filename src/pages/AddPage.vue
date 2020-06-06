<template>
  <div class='article'>
    {{$route.params}}
    <add-blog v-if="$route.params.type === 'blog'"></add-blog>
    <add-news v-if="$route.params.type === 'news'"></add-news>
    <add-initiative v-if="$route.params.type === 'initiative.current'"></add-initiative>
    <add-vote v-if="$route.params.type === 'vote'"></add-vote>
  </div>
</template>

<script>
import AddNews from 'components/AddNews'
import AddInitiative from 'components/AddInitiative'
import AddVote from 'components/AddVote'
import AddBlog from 'components/AddBlog'
export default {
  name: 'AddPAge',
  components: { AddBlog, AddNews, AddInitiative, AddVote }
}
</script>

<style lang='scss' scoped>
.article {
  padding: 30px 32px;
  &__photo {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    & img {
      width: 100%;
      display: flex;
    }
  }
  &__text {
    h5 {
      margin-bottom: 7px;
    }
  }
  &__name {
    margin-left: 8px;
    font-size: 12px;
    line-height: 110%;
    color: #0C1120;
  }
  &__date {
    margin: 20px 0 10px;
  }
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #0C1120;
  }
  &__position {
    margin-top: 14px;
  }
  &__rate {
    button {
      margin-left: auto;
      margin-right: 0;
      background: $button-blue;
      border: none;
      color: white;
      padding: 11px 20px;
      border-radius: 3px;
    }
  }
  &__phone {
    margin-bottom: 27px;
    p {
      margin: 0;
    }
    span {
      color: $solid-blue;
    }
  }
  &__image {
    display: flex;
    margin: 20px 0 0;
    & img {
      width: 100%;
    }
    img:not(:last-child) {
      margin-right: 5px;
    }
  }
  &__rating {
    margin: 0 12px;
    color: $solid-blue;
  }
}
.comment {
  margin: 60px 0 30px;
  &__ttl {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #0C1120;
    margin: 0 0 20px 0;
  }
  &__photo {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    & img {
      width: 100%;
      display: flex;
    }
  }
  &__name {
    font-size: 12px;
    line-height: 110%;
    align-items: center;
    color: #0C1120;
    margin: 0 0 0 8px;
  }
  &__wrapper {
    margin: 0 0 30px 0;
  }
  &__block {
    width: 100%;
    background: #FAFBFD;
    box-shadow: 4px 4px 10px rgba(173, 177, 247, 0.3);
    border-radius: 3px;
    margin: 12px 0 0;
    padding: 20px 15px;
  }
  &__rate {
    margin: 20px 0 0;
  }
  &__rating {
    margin: 0 18px;
  }
}
</style>
