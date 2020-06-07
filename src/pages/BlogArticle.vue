<template>
  <div class='article'>
    <div class="article__user flex items-center">
      <div class="article__photo">
        <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
      </div>
      <div class="article__name">
        {{ post.user.name }}
      </div>
    </div>
      <div class="article__date">{{post.created_at}}</div>
      <div class="article__title">{{post.title}}</div>
      <div class="article__image">
        <img src="../statics/images/news.png" alt="">
      </div>
      <div class="article__text">
        <p>{{post.text}}</p>
      </div>
      <div class="article__rate flex items-center">
        <div class="article__plus flex items-center" @click="downEvent" :disabled="post.karmed === -1">
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
        <div class="article__rating">{{post.karma}}</div>
        <div class="article__minus flex items-center" @click="upEvent" :disabled="post.karmed === 1">
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
      <div class="comment">
        <div class="comment__ttl">Комментарии</div>
        <div class="comment__wrapper" v-for="item in post.comments" :key="item">
          <div class="comment__user flex items-center">
            <div class="comment__photo">
              <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
            </div>
            <div class="comment__name">
              {{item.user.name}}
            </div>
          </div>
          <div class="comment__block">
            <div class="comment__text">{{item.text}}</div>
            <div class="comment__rate flex">
              <div class="comment__plus flex items-center">
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
              <div class="comment__rating">{{item.karma}}</div>
              <div class="comment__minus flex items-center">
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
export default {
  name: 'ArticlePage',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters({
      post: 'posts/post'
    })
  },
  methods: {
    ...mapActions({
      loadPost: 'posts/loadPost',
      postComment: 'posts/postComment',
      karmaUpPost: 'posts/karmaUpPost',
      karmaDownPost: 'posts/karmaDownPost',
      karmaUp: 'comments/karmaUp',
      karmaDown: 'comments/karmaDown'
    }),
    comment () {
      const data = {
        id: this.event.id,
        text: this.text
      }
      this.postComment(data)
        .then(() => {
          this.loadPost(this.post.id)
        })
    },
    upEvent () {
      this.karmaUpEvent(this.post.id)
        .then(() => {
          this.loadPost(this.post.id)
        })
    },
    downEvent () {
      this.karmaDownEvent(this.post.id)
        .then(() => {
          this.loadPost(this.post.id)
        })
    },
    commentKarmaUp (id) {
      this.karmaUp()
        .then(() => {
          this.loadPost(this.post.id)
        })
    },
    commentKarmaDown (id) {
      this.karmaDown()
        .then(() => {
          this.loadPost(this.post.id)
        })
    }
  },
  beforeMount () {
    this.loadPost(this.$route.params.id)
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
  &__image {
    margin: 20px 0 0;
    & img {
      width: 100%;
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
