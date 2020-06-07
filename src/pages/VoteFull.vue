<template>
  <div class='article'>
    <div class="article__user flex items-center">
      <div class="article__photo">
        <img :src="question.user.photo" alt="">
      </div>
      <div class="article__name">
        {{question.user.name}}
      </div>
    </div>
    <div class="article__date">Опрос закончится {{question.end_at | date}}</div>
    <div class="article__title">{{question.title}}</div>
    <div class="article__image">
      <img v-if="question.photos.length > 0" :src="question.photos[0].url" alt="">
      <img v-if="question.photos.length < 1" src="../statics/images/news.png" alt="">
    </div>
    <div class="article__text">
      {{question.description}}
    </div>
    <div class="poll__block" v-if="!results">
      <q-option-group
        :options="options"
        label="Notifications"
        type="radio"
        v-model="group"
      />
    </div>
    <div class="poll__results" v-if="results">
      <q-linear-progress class="progress__bar" size="25px" :value="progress1" >
        <div class="absolute-full progress__text flex items-center">
          Реализуем • {{progress1}}%
        </div>
      </q-linear-progress>
      <q-linear-progress class="progress__bar" size="25px" :value="progress2" >
        <div class="absolute-full progress__text flex items-center">
          Еще нужно все взвесить • {{progress2}}%
        </div>
      </q-linear-progress>
      <q-linear-progress class="progress__bar" size="25px" :value="progress3" >
        <div class="absolute-full progress__text flex items-center">
          Зависит от ситуации • {{progress3}}%
        </div>
      </q-linear-progress>
      <q-linear-progress class="progress__bar" size="25px" :value="progress4" >
        <div class="absolute-full progress__text flex items-center">
          Не поддерживаю предложение • {{progress4}}%
        </div>
      </q-linear-progress>
    </div>
    <div class="poll__vote row">
      <div class="col-6 flex items-center">
        <div class="poll__image">
          <svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M8.43164 29.481V19.6981H12.0453V33.4528H12.5615V19.1887H9.63619V14.9434H14.6264V37.7722C12.1256 35.4707 9.88517 32.6983 8.43164 29.481ZM15.1427 38.2374V8.8302H15.831V38.8291C15.6 38.6357 15.3704 38.4385 15.1427 38.2374ZM16.1751 39.1136V8.8302H16.8635V19.3585H17.2076V8.8302H17.8959V19.3585H18.2401V14.9434H21.3375V19.3585H22.1979V16.8113H22.542V19.3585H24.4349V44.2533C21.9459 43.1192 18.9706 41.3949 16.1751 39.1136ZM19.9609 34.8113H17.8959V32.7736H19.9609V34.8113ZM19.9609 32.0943H17.8959V30.0566H19.9609V32.0943ZM19.9609 26.151H17.8959V24.1132H19.9609V26.151ZM19.9609 23.2642H17.8959V21.2264H19.9609V23.2642ZM18.2401 9.84907H21.3375V14.6038H18.2401V9.84907ZM21.3375 8.8302H18.2401V9.50945H21.3375V8.8302ZM22.8862 21.2264H20.8213V23.2642H22.8862V21.2264ZM20.8213 24.1132H22.8862V26.151H20.8213V24.1132ZM22.8862 30.0566H20.8213V32.0943H22.8862V30.0566Z" fill="url(#paint0_linear)"/>
              <path opacity="0.2" d="M45.7888 19.7127C47.5833 33.6733 33.4905 42.3878 26.2199 45C19.1812 42.3339 5.44426 33.544 6.80558 19.7127C8.50723 2.4237 20.8055 0 26.2199 0C31.6342 0 43.5457 2.26212 45.7888 19.7127Z" fill="url(#paint1_linear)"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6526 16.132C35.7062 16.4717 35.3959 16.645 34.8194 17.414C34.5444 17.781 34.1704 18.2602 33.9885 18.479C33.4636 19.1097 32.8453 20.2337 32.6942 20.8312C32.6254 21.1034 32.4919 21.4633 32.3975 21.6308C32.2349 21.9193 32.1681 21.968 31.1233 22.5578C30.0209 23.1801 29.1103 23.6772 28.5014 23.9892C27.6307 24.4353 27.6407 25.1186 28.5327 26.099C28.878 26.4786 28.9311 26.6907 28.776 27.0708C28.6671 27.3378 28.6229 27.3834 28.3301 27.5305C28.0791 27.6566 27.9925 27.7344 27.9496 27.8721C27.8731 28.1179 28.0025 28.55 28.2192 28.7726C28.3185 28.8746 28.3884 28.9778 28.3746 29.002C28.3607 29.0262 28.2341 29.1024 28.0933 29.1713C27.5967 29.4143 27.4308 30.0367 27.7548 30.4416C28.0608 30.824 27.9863 31.1843 27.519 31.5822C27.2001 31.8538 26.6703 32.6739 26.6049 32.9972C26.4844 33.5931 26.6076 34.0346 27.0033 34.4244C27.238 34.6557 28.6501 35.3321 29.9258 35.8244C30.9332 36.2131 31.1496 36.36 31.287 36.7483C31.4044 37.0798 31.4033 37.1397 31.2518 38.6753L30.4578 43.0471C30.4578 43.0471 32.0659 41.8306 32.8669 41.6037C37.8251 40.1991 41.2815 36.3846 43.1579 33.5854C45.7642 29.6973 46.842 24.5031 45.7219 20.7834C44.9028 18.0635 44.1855 16.868 41.6429 16.132C38.6713 15.2719 37.599 15.7924 36.6526 16.132Z" fill="url(#paint2_linear)" fill-opacity="0.3"/>
              <path opacity="0.3" d="M43.7941 34.8962C38.2258 40.3912 35.5917 42.2547 32.0928 44.3207C37.0257 43.6698 47.4937 41.5019 49.9028 38.0377C52.9142 33.7075 48.01 30.7358 43.7941 34.8962Z" fill="url(#paint3_linear)"/>
              <path opacity="0.3" d="M48.3759 23.3009C47.085 28.1128 46.2466 29.9446 45.0062 32.1305C47.4549 30.415 52.408 26.2993 52.6301 23.561C52.9078 20.1381 49.3533 19.6576 48.3759 23.3009Z" fill="url(#paint4_linear)"/>
              <path d="M44.5114 10.5688C43.1586 7.81191 42.4341 6.80268 41.4246 5.62612C43.108 6.37842 46.5899 8.29009 47.0501 9.91838C47.6254 11.9537 45.5356 12.6561 44.5114 10.5688Z" fill="white"/>
              <path d="M44.5114 10.5688C43.1586 7.81191 42.4341 6.80268 41.4246 5.62612C43.108 6.37842 46.5899 8.29009 47.0501 9.91838C47.6254 11.9537 45.5356 12.6561 44.5114 10.5688Z" fill="url(#paint5_linear)" fill-opacity="0.3"/>
              <path opacity="0.3" d="M4.46152 23.3009C5.75244 28.1128 6.59085 29.9446 7.83122 32.1305C5.38247 30.415 0.429423 26.2993 0.207276 23.561C-0.0704085 20.1381 3.48413 19.6576 4.46152 23.3009Z" fill="url(#paint6_linear)"/>
              <path d="M7.6043 10.5768C8.89809 7.79247 9.601 6.76844 10.5853 5.57123C8.91823 6.35824 5.47778 8.34164 5.05227 9.97911C4.52039 12.026 6.62474 12.6849 7.6043 10.5768Z" fill="white"/>
              <path d="M7.6043 10.5768C8.89809 7.79247 9.601 6.76844 10.5853 5.57123C8.91823 6.35824 5.47778 8.34164 5.05227 9.97911C4.52039 12.026 6.62474 12.6849 7.6043 10.5768Z" fill="url(#paint7_linear)" fill-opacity="0.3"/>
              <path opacity="0.3" d="M8.41589 34.8963C13.9842 40.3913 16.6183 42.2548 20.1172 44.3208C15.1843 43.6699 4.71621 41.5019 2.30712 38.0378C-0.704241 33.7076 4.19997 30.7359 8.41589 34.8963Z" fill="url(#paint8_linear)"/>
              <path d="M38.4189 32.9865C36.5908 38.6243 29.5493 43.85 26.3281 45C40.8717 41.4974 45.9084 31.4453 45.5864 24.0733C45.5581 23.4236 45.4752 22.7897 45.347 22.174C44.7799 19.4502 43.1851 20.8982 43.1712 23.6222C43.171 23.666 43.1006 23.6866 43.0742 23.6517C42.3704 22.7218 40.9888 24.4402 41.1995 25.6206C41.7872 28.9137 40.7971 32.3149 39.9686 34.0412C40.1106 33.5098 40.0227 33.0189 39.8332 32.6008C39.5026 31.8714 38.6633 32.2329 38.4189 32.9865Z" fill="url(#paint9_linear)" fill-opacity="0.4"/>
              <path d="M14.1293 32.9865C15.9738 38.6243 23.0782 43.85 26.3281 45C11.6547 41.4974 6.57298 31.4453 6.89785 24.0733C6.92648 23.4236 7.01012 22.7897 7.13945 22.174C7.71158 19.4503 9.32049 20.898 9.33465 23.6217C9.33488 23.6659 9.40574 23.6868 9.43257 23.6517C10.1427 22.7218 11.5365 24.4402 11.324 25.6206C10.731 28.9137 11.73 32.3149 12.5658 34.0412C12.4226 33.5098 12.5113 33.0189 12.7025 32.6008C13.036 31.8714 13.8828 32.2329 14.1293 32.9865Z" fill="url(#paint10_linear)" fill-opacity="0.4"/>
              <path opacity="0.8" d="M27.6959 10.0189V15.9028H26.316V11.1116H25.1235V10.0189H27.6959Z" fill="url(#paint11_linear)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear" x1="16.4333" y1="8.8302" x2="16.4333" y2="44.2533" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C349E"/>
                <stop offset="1" stop-color="#001682" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="26.3283" y1="0" x2="26.3283" y2="45" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="24.87" y1="15.2022" x2="42.0102" y2="32.2851" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C349E"/>
                <stop offset="1" stop-color="#001682" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear" x1="41.4629" y1="32.899" x2="41.4629" y2="44.3207" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint4_linear" x1="46.5053" y1="22.7194" x2="49.9662" y2="29.6557" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint5_linear" x1="43.4507" y1="11.137" x2="44.7325" y2="6.55068" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint6_linear" x1="6.33209" y1="22.7194" x2="2.87117" y2="29.6557" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint7_linear" x1="8.67681" y1="11.1228" x2="7.29982" y2="6.56348" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint8_linear" x1="10.7471" y1="32.8991" x2="10.7471" y2="44.3208" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3F75FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#B0AEFF"/>
              </linearGradient>
              <linearGradient id="paint9_linear" x1="35.9645" y1="20.717" x2="35.9645" y2="45" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C349E"/>
                <stop offset="1" stop-color="#001682" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint10_linear" x1="16.6057" y1="20.717" x2="16.6057" y2="45" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C349E"/>
                <stop offset="1" stop-color="#001682" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint11_linear" x1="26.4097" y1="10.0189" x2="26.4097" y2="15.9028" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4065C5"/>
                <stop offset="1" stop-color="#BEBDFF"/>
              </linearGradient>
              <clipPath id="clip0">
                <rect width="53" height="45" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="poll__info">
          Ваш ответ <br> <span>1 голос</span>
        </div>
      </div>
      <div class="col-6">
        <button :disabled="!group" class="poll__btn" :class="{ unActive: results }" @click="sendPoll()"><span v-if="!results">Отдать голос</span><span v-if="results">Голоса отданы</span></button>
      </div>
    </div>
    <div class="poll__stat row flex items-center">
      <div class="col-8 flex items-center">
        <div class="poll__red">
          <img src="../statics/images/polls_red_rang.png" alt="">
          +0
        </div>
        <div class="poll__blue" style="margin-left: 8px;">
          <img src="../statics/images/polls_blue_rang.png" alt="">
          +{{votes}}
        </div>
      </div>
      <div class="col-4">
        <div class="poll__fullStat flex column items-end">
          <div class="poll__polls">{{votes}} ответов</div>
          <div class="poll__votes">{{votes}} голосов</div>
        </div>
      </div>
    </div>
    <div class="article__rate flex items-center">
      <div class="article__plus flex items-center">
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
      <div class="article__rating">{{question.karma}}</div>
      <div class="article__minus flex items-center">
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
<!--      <div class="comment__wrapper" v-for="item in 2" :key="item">-->
<!--        <div class="comment__user flex items-center">-->
<!--          <div class="comment__photo">-->
<!--            <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">-->
<!--          </div>-->
<!--          <div class="comment__name">-->
<!--            Денис Липкович-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="comment__block">-->
<!--          <div class="comment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut enim hic, in repudiandae sint totam ut vero. Consectetur, nemo!</div>-->
<!--          <div class="comment__rate flex">-->
<!--            <div class="comment__plus flex items-center">-->
<!--              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M0.799805 0.399994H15.1998V3.59999H0.799805V0.399994Z" fill="url(#paint0_linear)"/>-->
<!--                <defs>-->
<!--                  <linearGradient id="paint0_linear" x1="0.799805" y1="0.399994" x2="15.2443" y2="3.3847" gradientUnits="userSpaceOnUse">-->
<!--                    <stop stop-color="#4065C5"/>-->
<!--                    <stop offset="1" stop-color="#8897E6"/>-->
<!--                  </linearGradient>-->
<!--                </defs>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <div class="comment__rating">23</div>-->
<!--            <div class="comment__minus flex items-center">-->
<!--              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M15.0591 6.37106V9.62898H9.62919V15.0588H6.37127V9.62898H0.941406V6.37106H6.37127V0.941193H9.62919V6.37106H15.0591Z" fill="url(#paint0_linear)"/>-->
<!--                <defs>-->
<!--                  <linearGradient id="paint0_linear" x1="0.941406" y1="0.941193" x2="15.6762" y2="1.61779" gradientUnits="userSpaceOnUse">-->
<!--                    <stop stop-color="#4065C5"/>-->
<!--                    <stop offset="1" stop-color="#8897E6"/>-->
<!--                  </linearGradient>-->
<!--                </defs>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'VoteFullPage',
  data () {
    return {
      group: null,
      results: false,
      votes: 0,
      options: [
        { label: 'Реализуем', value: '1' },
        { label: 'Еще нужно все взвесить', value: '2' },
        { label: 'Зависит от ситуации', value: '3' },
        { label: 'Не поддерживаю предложение', value: '4' }
      ],
      progress1: 0,
      progress2: 0,
      progress3: 0,
      progress4: 0
    }
  },
  methods: {
    sendPoll () {
      if (this.group === '1') {
        this.progress1 = 100
      } else if (this.group === '2') {
        this.progress2 = 100
      } else if (this.group === '3') {
        this.progress3 = 100
      } else {
        this.progress4 = 100
      }
      this.results = true
      this.votes++
    },
    ...mapActions({
      loadQuestion: 'questions/loadQuestion'
    }),
    moment () {
      return moment()
    }
  },
  beforeMount () {
    this.loadQuestion(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      question: 'questions/question'
    }),
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(2) + '%'
    },

    progressLabel2 () {
      return (this.progress2 * 100).toFixed(2) + '%'
    },

    progressLabel3 () {
      return (this.progress3 * 100).toFixed(2) + '%'
    },

    progressLabel4 () {
      return (this.progress4 * 100).toFixed(2) + '%'
    }
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
    &__text {
      margin-top: 30px;
    }
    &__rate {
      margin-top: 40px;
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
  .poll {
    &__block {
      margin-top: 30px;
    }
    &__results {
      margin-top: 30px;
    }
    &__btn {
      width: 100%;
      height: 42px;
      color: #fff;
      border: none;
      outline: none;
      background: linear-gradient(98.95deg, #4065C5 0%, #8897E6 100%);
      border-radius: 3px;
    }
    &__unactive {
      background: #CFD3F8;
    }
    &__vote {
      margin: 30px 0;
    }
    &__fullStat {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 110%;
      text-align: right;
      color: #0C1120;
    }
    &__polls {
      color: #4367C6;
      margin-bottom: 10px;
    }
    &__info {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 110%;
      color: #79879B;
      margin-left: 8px;
      & span {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #4367C6;
      }
    }
  }
  .progress {
    margin-top: 30px;
    &__bar {
      background-color: #F1F5FF;
      margin-bottom: 10px;
    }
    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 110%;
      color: #0C1120;
      padding-left: 8px;
    }
  }
  .unActive {
    background: #CFD3F8;
  }
</style>
