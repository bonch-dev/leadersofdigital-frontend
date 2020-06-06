<template>
  <div class="blogCard">
    <div class="blogCard__image">
      <img src="../statics/images/news.png" alt="">
      <div class="blogCard__header flex justify-between items-center">
        <div class="blogCard__user flex items-center">
          <div class="blogCard__photo">
            <img :src="user.image" alt="">
          </div>
          <div class="blogCard__name">{{user.name}}</div>
        </div>
        <div class="blogCard__edit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2214 6.27776L17.722 10.7785L7.9492 20.5518L3.93657 20.9948C3.39939 21.0542 2.94554 20.5999 3.0053 20.0627L3.45178 16.0471L13.2214 6.27776ZM20.5056 5.60767L18.3924 3.49439C17.7333 2.8352 16.6642 2.8352 16.005 3.49439L14.017 5.48251L18.5176 9.98329L20.5056 7.99517C21.1648 7.33563 21.1648 6.26686 20.5056 5.60767Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="blogCard__info">
      <div class="blogCard__date">{{date}}</div>
      <div class="blogCard__ttl" @click="$router.push({ name: 'blog.article', params: { id: id }})">{{title}}</div>
      <div class="blogCard__rate flex items-center">
        <div class="blogCard__plus flex items-center">
          <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.799805 0.399994H15.1998V3.59999H0.799805V0.399994Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0.799805" y1="0.399994" x2="15.2443" y2="3.3847" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4065C5"/>
                <stop offset="1" stop-color="#8897E6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="blogCard__rating">{{rating}}</div>
        <div class="blogCard__minus flex items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0591 6.37106V9.62898H9.62919V15.0588H6.37127V9.62898H0.941406V6.37106H6.37127V0.941193H9.62919V6.37106H15.0591Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0.941406" y1="0.941193" x2="15.6762" y2="1.61779" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4065C5"/>
                <stop offset="1" stop-color="#8897E6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'blogCard',
  data () {
    return {
    }
  },
  computed: {
    // ...mapGetters({
    //   eventsAll: 'events/eventsAll'
    // })
  },
  methods: {
    // ...mapActions({})
  },
  props: [
    'user',
    'title',
    'date',
    'id',
    'rating'
  ]
}
</script>

<style lang='scss' scoped>
  .blogCard {
    width: 100%;
    background: #FAFBFD;
    border-radius: 0px 0px 3px 3px;
    box-shadow: 4px 4px 4px rgba(173, 177, 247, 0.5);
    margin: 0 0 30px 0;
    &__image {
      position: relative;
      max-height: 158px;
      & img {
        width: 100%;
      }
    }
    &__header {
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 30;
      padding: 8px;
    }
    &__photo {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
    }
    &__name {
      margin-left: 8px;
      color: #fff;
      font-size: 12px;
      line-height: 110%;
    }
    &__info {
      padding: 16px;
      color: #0C1120;
    }
    &__date {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 110%;
      margin-bottom: 8px;
    }
    &__ttl {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 120%;
    }
    &__rate {
      margin-top: 28px;
    }
    &__rating {
      margin: 0 16px;
    }
  }
  .blogCard__image:before {
    content: '';
    width: 100%;
    height: 76px;
    display: block;
    position: absolute;
    z-index: 20;
    background: linear-gradient(180deg, #0C349E 0%, rgba(0, 22, 130, 0) 100%);
    border-radius: 3px 3px 0px 0px;
  }
</style>
