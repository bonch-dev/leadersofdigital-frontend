<template>
  <div class='article'>
    <div class="article__user flex items-center">
      <div class="article__photo">
        <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
      </div>
      <div class="article__name" v-if="event.user">
        {{ event.user.name }}
      </div>
    </div>
    <div class="article__date">{{ event.created_at | date }}</div>
    <div class="article__title">{{ event.title }}</div>
    <div class="article__position font-lable flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7094 11.8833C10.1186 12.6723 9.42643 13.5968 8.61662 14.6974C8.31869 15.1009 7.68134 15.1009 7.38338 14.6974C6.57357 13.5968 5.88138 12.6723 5.29062 11.8833C2.56899 8.24839 2 7.48847 2 5.625C2 2.51839 4.68628 0 8 0C11.3137 0 14 2.51839 14 5.625C14 7.48847 13.431 8.24839 10.7094 11.8833ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#0C1120"/>
      </svg>
      <div style="max-width: 250px; margin-left: 10px;">{{ event.place }}</div>
    </div>
    <div class="article__image">
      <img src="../statics/images/news-11.png" alt="">
      <img src="../statics/images/news-12.png" alt="">
    </div>
    <div class="article__text q-mt-md">
      <p>{{ event.description }}</p>
    </div>
    <div class="article__phone">
      <p class="font-lable">Связаться по вопросу:</p>
      <span class="font-text">{{ event.phone }}</span>
    </div>
    <div class="article__rate flex items-center">
      <div class="article__plus flex items-center" @click="downEvent" :disabled="event.karmed === -1">
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
      <div class="article__rating">{{ event.karma }}</div>
      <div class="article__minus flex items-center" @click="upEvent" :disabled="event.karmed === 1">
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
      <button @click="rateEvent(event.id)" :disabled="!event.ranked">
        Поддержать
      </button>
    </div>
    <div class="comment">
      <div class="comment__ttl">Комментарии</div>
      <div class="comment__wrapper" v-for="item in event.comments" :key="item.id">
        <div class="comment__user flex items-center">
          <div class="comment__photo">
            <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
          </div>
          <div class="comment__name">
            {{ item.user.name }}
          </div>
        </div>
        <div class="comment__block">
          <div class="comment__text">{{ item.text }}</div>
          <div class="comment__rate flex">
            <div class="comment__plus flex items-center" @click="commentKarmaDown(item.id)" :disabled="item.karmed === -1">
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
            <div class="comment__rating">{{ item.karma }}</div>
            <div class="comment__minus flex items-center" @click="commentKarmaUp(item.id)" :disabled="item.karmed === 1">
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
      <div>
        <q-input
            v-model="text"
            placeholder="Оставьте комментарий..."
            filled
            type="textarea"
        />
        <button class="comment-btn" @click="comment" :disabled="!text">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
  name: 'ArticlePage',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters({
      event: 'events/event'
    })
  },
  methods: {
    ...mapActions({
      loadEvent: 'events/loadEvent',
      rateEvent: 'events/rateEvent',
      eventComment: 'events/eventComment',
      karmaUpEvent: 'events/karmaUpEvent',
      karmaDownEvent: 'events/karmaDownEvent',
      karmaUp: 'comments/karmaUp',
      karmaDown: 'comments/karmaDown'
    }),
    comment () {
      const data = {
        id: this.event.id,
        text: this.text
      }
      this.eventComment(data)
        .then(() => {
          this.loadEvent(this.event.id)
        })
    },
    upEvent () {
      this.karmaUpEvent(this.event.id)
        .then(() => {
          this.loadEvent(this.event.id)
        })
    },
    downEvent () {
      this.karmaDownEvent(this.event.id)
        .then(() => {
          this.loadEvent(this.event.id)
        })
    },
    commentKarmaUp (id) {
      this.karmaUp()
        .then(() => {
          this.loadEvent(this.event.id)
        })
    },
    commentKarmaDown (id) {
      this.karmaDown()
        .then(() => {
          this.loadEvent(this.event.id)
        })
    },
    moment () {
      return moment()
    }
  },
  beforeMount () {
    this.loadEvent(this.$route.params.id)
  },
  filters: {
    date: function (date) {
      moment.locale('ru')
      return moment(date).format('DD MMM YYYY')
    }
  }
}
</script>

<style lang='scss' scoped>
.comment-btn {
  margin-left: auto;
  margin-right: 0;
  background: $button-blue;
  border: none;
  color: white;
  padding: 11px 20px;
  border-radius: 3px;
  display: flex;
  margin-top: 15px;
}
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
    margin: 0 18px;
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
