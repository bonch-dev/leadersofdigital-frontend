<template>
  <div>
    <div>
      <q-card  class="my-card q-mb-xl">
        <div class="card-top-bg"></div>
        <div class="card-top-info q-px-sm q-py-md">
          <div class="flex items-center">
            <img :src="event.user.photo" alt="" height="24px" width="24px" style="border-radius: 50%">
            <span style="margin-left: 8px;" class="text-white">{{ event.user.name }}</span>
          </div>
          <div class="card-top-info-right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="20" r="2" fill="white"/>
              <path d="M14.9761 8.57092C15.2505 13.2244 13.0953 16.1293 11.9834 17C10.907 16.1113 8.80621 13.1813 9.0144 8.57092C9.27463 2.8079 11.1554 2 11.9834 2C12.8114 2 14.6331 2.75404 14.9761 8.57092Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div @click="$router.push({ name: 'news.article', params: { id: event.id }})">
          <img v-if="event.photos.length < 1" src="../statics/images/card-img.png" width="100%">
          <img v-if="event.photos.length > 0" :src="event.photos[0].url" width="100%">
        </div>
        <q-card-section>
          <div class="time-card q-mb-sm text-dark font-lable">
            {{ event.created_at | date }}
          </div>
          <div class="ttl-card q-mb-sm font-header2"
               style="line-height: 28px !important; color: #000 !important;"
               @click="$router.push({ name: 'news.article', params: { id: event.id }})"
          >
            {{ event.title }}
          </div>
          <div class="card-info" style="margin-bottom: 28px;">
            <div class="card-info-icon q-mb-sm flex align-center">
              <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70938 11.8833C8.11862 12.6723 7.42643 13.5968 6.61662 14.6974C6.31869 15.1009 5.68134 15.1009 5.38338 14.6974C4.57357 13.5968 3.88138 12.6723 3.29062 11.8833C0.568991 8.24839 0 7.48847 0 5.625C0 2.51839 2.68628 0 6 0C9.31372 0 12 2.51839 12 5.625C12 7.48847 11.431 8.24839 8.70938 11.8833ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#0C1120"/>
              </svg>
              <div class="icon-info q-ml-sm" style="max-width: 250px;">{{ event.place }}</div>
            </div>
          </div>
          <div class='card-stats'>
            <div class='flex items-center'>
              <button @click="downEvent">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.800003 0.400024H15.2V3.60002H0.800003V0.400024Z" fill="url(#paint0_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0.800003" y1="0.400024" x2="15.2445" y2="3.38473" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4065C5"/>
                      <stop offset="1" stop-color="#8897E6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <span>{{ event.karma }}</span>
              <button @click="upEvent">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0588 6.37103V9.62895H9.62896V15.0588H6.37104V9.62895H0.941177V6.37103H6.37104V0.941162H9.62896V6.37103H15.0588Z" fill="url(#paint0_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0.941177" y1="0.941162" x2="15.676" y2="1.61776" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4065C5"/>
                      <stop offset="1" stop-color="#8897E6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <button class='flex items-center' v-if="this.$route.name === 'reply.active'">
              <span>В архив</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4706 3.52798L12.4713 1.52865C12.4095 1.46662 12.336 1.41743 12.2552 1.3839C12.1743 1.35038 12.0875 1.33319 12 1.33331H3.99998C3.91242 1.33322 3.82571 1.35043 3.74482 1.38395C3.66394 1.41748 3.59047 1.46665 3.52865 1.52865L1.52931 3.52798C1.46709 3.58981 1.41772 3.66335 1.38408 3.74437C1.35044 3.82538 1.33319 3.91226 1.33331 3.99998V12.6666C1.33331 13.402 1.93131 14 2.66665 14H13.3333C14.0686 14 14.6666 13.402 14.6666 12.6666V3.99998C14.6668 3.91225 14.6496 3.82535 14.616 3.74432C14.5823 3.6633 14.5329 3.58976 14.4706 3.52798ZM4.27598 2.66665H11.724L12.3906 3.33331H3.60931L4.27598 2.66665ZM7.99998 12L4.66665 8.66665H6.66665V6.66665H9.33331V8.66665H11.3333L7.99998 12Z" fill="url(#paint0_linear)"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="1.33331" y1="1.33331" x2="15.2464" y2="2.0058" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4065C5"/>
                    <stop offset="1" stop-color="#8897E6"/>
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <div class='flex items-center'>
              <button @click="rate">
                <svg v-if="!event.rated" width="24" height="22" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.565 2.24011C20.7491 3.42654 21.399 5.00763 21.399 6.69725C21.399 8.38441 20.7466 9.96796 19.565 11.1544L18.0829 12.6393C18.2602 12.8983 18.3562 13.2041 18.3562 13.5248C18.3562 13.9441 18.1937 14.3363 17.9008 14.6298C17.6004 14.9308 17.209 15.0812 16.8151 15.0862C16.8126 15.5005 16.6502 15.8878 16.3597 16.1789C16.0667 16.4724 15.6753 16.6352 15.2568 16.6352H15.2543C15.2469 17.0422 15.0869 17.422 14.7989 17.7082C14.5108 17.9967 14.1317 18.1571 13.7255 18.1645C13.7255 18.5641 13.5729 18.9637 13.2701 19.2695C12.9673 19.5729 12.566 19.7258 12.1672 19.7258C11.7683 19.7258 11.3695 19.5729 11.0643 19.2695L10.8944 19.0993L4.48625 13.2066C4.48133 13.2017 4.47641 13.1967 4.47148 13.1918L2.43309 11.1495C1.25141 9.9655 0.599024 8.38441 0.599024 6.69479C0.599024 5.00763 1.25141 3.42408 2.43555 2.23764C3.61723 1.05367 5.19772 0.400024 6.88161 0.400024C8.41533 0.400024 9.86289 0.94021 11.0003 1.93178C12.1425 0.942676 13.5852 0.402491 15.1189 0.402491H15.1214C16.8028 0.402491 18.3808 1.05367 19.565 2.24011ZM20.4635 6.69479C20.4635 5.25676 19.9096 3.91 18.9027 2.90116C16.8151 0.80948 13.4202 0.811946 11.3326 2.90362L6.90623 7.34103C6.47049 7.77762 6.47049 8.48554 6.90623 8.92212C7.34198 9.35871 8.04852 9.35871 8.48426 8.92212L11.116 6.28286C11.207 6.1916 11.3277 6.14473 11.4458 6.14473C11.5665 6.14473 11.6846 6.1916 11.7757 6.28286L17.4379 11.956L18.9027 10.4884C19.9096 9.47958 20.4635 8.13281 20.4635 6.69479ZM17.4207 13.5223C17.4207 13.3546 17.3567 13.1967 17.2385 13.0808L17.1105 12.9525L17.1081 12.9501C17.1081 12.9501 17.1081 12.9501 17.1056 12.9476L11.4483 7.2769L9.1465 9.58317C8.75999 9.97043 8.24547 10.1826 7.69648 10.1826C7.14749 10.1826 6.63297 9.97043 6.24646 9.58317C5.44637 8.78153 5.44637 7.47916 6.24646 6.67752L10.3257 2.5879C8.22331 0.81688 5.07217 0.920477 3.09532 2.90116C2.08843 3.91 1.53452 5.25676 1.53452 6.69479C1.53452 8.13281 2.08843 9.47958 3.09532 10.4884L5.12633 12.5234L11.5345 18.4136C11.5394 18.4185 11.5443 18.4235 11.5492 18.4284L11.7265 18.606C11.9702 18.8502 12.3666 18.8502 12.6078 18.606C12.8515 18.3618 12.8515 17.9647 12.6078 17.723C12.6054 17.7205 12.6029 17.718 12.6029 17.7156C12.6004 17.7131 12.598 17.7106 12.5955 17.7082L9.37052 14.4769C9.18835 14.2944 9.18835 13.9959 9.37052 13.8134C9.5527 13.6309 9.84812 13.6309 10.0328 13.8134L13.2578 17.0446C13.3759 17.163 13.531 17.2272 13.6984 17.2272C13.8658 17.2272 14.0234 17.163 14.1391 17.0446C14.2573 16.9262 14.3213 16.7708 14.3213 16.6031C14.3213 16.4354 14.2573 16.2775 14.1391 16.1616C14.1366 16.1591 14.1366 16.1591 14.1342 16.1567L10.9141 12.9303C10.7319 12.7478 10.7319 12.4494 10.9141 12.2668C11.0963 12.0843 11.3941 12.0843 11.5763 12.2668L14.8186 15.5153C14.9367 15.6337 15.0918 15.6979 15.2592 15.6979C15.4266 15.6979 15.5842 15.6337 15.6999 15.5153C15.8181 15.3969 15.8821 15.2416 15.8821 15.0738C15.8821 14.9061 15.8181 14.7507 15.6999 14.6323C15.6999 14.6298 15.6974 14.6298 15.695 14.6274L12.4577 11.3838C12.2755 11.2013 12.2755 10.9053 12.4577 10.7203C12.6398 10.5377 12.9353 10.5377 13.1199 10.7203L16.3572 13.9639C16.3572 13.9639 16.3572 13.9639 16.3597 13.9663C16.3597 13.9663 16.3597 13.9663 16.3621 13.9688C16.6058 14.208 16.9973 14.2056 17.241 13.9639C17.3567 13.8479 17.4207 13.6901 17.4207 13.5223Z" fill="url(#paint0_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0.599024" y1="0.400024" x2="22.3011" y2="1.47256" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4065C5"/>
                      <stop offset="1" stop-color="#8897E6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg v-if="event.rated" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8025 14.8509C19.9502 14.9989 20.0302 15.1932 20.0302 15.4028C20.0302 15.6125 19.9502 15.8098 19.8025 15.9547C19.501 16.2569 19.0086 16.26 18.7039 15.9609C18.7039 15.9609 18.7009 15.9609 18.7009 15.9578C18.7009 15.9578 18.6978 15.9578 18.6978 15.9547L14.6511 11.9003C14.4234 11.6721 14.0511 11.6721 13.8234 11.9003C13.5956 12.1284 13.5956 12.5015 13.8234 12.7296L17.87 16.7841C17.87 16.7841 17.8731 16.7872 17.8761 16.7903C18.0208 16.9383 18.1039 17.1325 18.1039 17.3422C18.1039 17.5518 18.0239 17.7492 17.8761 17.8941C17.7284 18.0421 17.5346 18.1222 17.3253 18.1222C17.1161 18.1222 16.9191 18.0421 16.7745 17.8941L12.7217 13.8334C12.494 13.6053 12.1247 13.6053 11.8939 13.8334C11.6662 14.0616 11.6662 14.4316 11.8939 14.6628L15.919 18.6957C15.9221 18.6988 15.9221 18.6988 15.9251 18.7019C16.0729 18.8499 16.1529 19.0441 16.1529 19.2538C16.1529 19.4635 16.0729 19.6608 15.9251 19.8057C15.7774 19.9537 15.5836 20.0339 15.3743 20.0339C15.1651 20.0339 14.9681 19.9537 14.8235 19.8057L10.7922 15.7666C10.5645 15.5385 10.1922 15.5385 9.96444 15.7666C9.73672 15.9948 9.73672 16.3679 9.96444 16.596L13.9957 20.6351C13.9988 20.6382 14.0018 20.6413 14.0049 20.6443C14.008 20.6474 14.008 20.6505 14.0111 20.6536C14.3157 20.9588 14.3157 21.4552 14.0111 21.7574C13.7064 22.0626 13.211 22.0626 12.9094 21.7574L12.6878 21.5354C12.6817 21.5292 12.6755 21.5231 12.6694 21.5169L4.6592 14.1541L2.12043 11.6104C0.861823 10.3494 0.169434 8.66592 0.169434 6.86839C0.169434 5.07086 0.861823 3.3874 2.12043 2.12635C4.5915 -0.349496 8.53042 -0.482076 11.1584 1.73478L6.05628 6.84681C5.05617 7.84886 5.05617 9.4799 6.05628 10.4789C6.53942 10.9629 7.18257 11.2281 7.86881 11.2281C8.55504 11.2281 9.1982 10.9629 9.68133 10.4789L12.5586 7.59604L19.6333 14.6844C19.6333 14.6844 19.6333 14.6875 19.6364 14.6875C19.6364 14.6875 19.6364 14.6906 19.6394 14.6906L19.8025 14.8509Z" fill="url(#paint0_linear)"/>
                  <path d="M21.8797 2.12643C23.1383 3.38748 23.8307 5.07093 23.8307 6.86847C23.8307 8.666 23.1383 10.3495 21.8797 11.6105L20.0487 13.445L12.971 6.35356C12.8571 6.23948 12.7063 6.1809 12.5586 6.1809C12.4078 6.1809 12.2601 6.23948 12.1463 6.35356L8.85664 9.65264C8.31196 10.1984 7.42878 10.1984 6.8841 9.65264C6.33942 9.10691 6.33942 8.22201 6.8841 7.67628L12.4171 2.12951C15.0266 -0.485081 19.2733 -0.485081 21.8797 2.12643Z" fill="url(#paint1_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0.169434" y1="0.165314" x2="20.906" y2="1.03197" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4065C5"/>
                      <stop offset="1" stop-color="#8897E6"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="6.47559" y1="0.168182" x2="24.5625" y2="1.25381" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4065C5"/>
                      <stop offset="1" stop-color="#8897E6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <span class='font-bold like' style='margin: 0 7px;'>{{ event.rate }}</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'
export default {
  name: 'Events',
  data () {
    return {
    }
  },
  props: [
    'event'
  ],
  methods: {
    ...mapActions({
      loadEvents: 'events/loadEvents',
      rateEvent: 'events/rateEvent',
      unrateEvent: 'events/unrateEvent',
      karmaUpEvent: 'events/karmaUpEvent',
      karmaDownEvent: 'events/karmaDownEvent'
    }),
    moment () {
      return moment()
    },
    rate () {
      if (this.event.rated) {
        this.unrateEvent(this.event.id)
          .then(() => {
            this.loadEvents()
          })
      } else {
        this.rateEvent(this.event.id)
          .then(() => {
            this.loadEvents()
          })
      }
    },
    upEvent () {
      this.karmaUpEvent(this.event.id)
        .then(() => {
          this.loadEvents()
        })
    },
    downEvent () {
      this.karmaDownEvent(this.event.id)
        .then(() => {
          this.loadEvents()
        })
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
.my-card {
  box-shadow: 4px 4px 10px rgba(173, 177, 247, 0.3);
}
a{
  text-decoration: none;
}
.time-card{
  color: #148A92;
}
.card-top-bg{
  position: absolute;
  width: 100%;
  height: 20%;
  background: linear-gradient(180deg, #0C349E 0%, rgba(0, 22, 130, 0) 100%);
}
.card-top-info{
  position: absolute;
  z-index: 100;
  width: 100%;

}
.card-info-icon{
  height: 25px;
  display: flex;
  align-items: center;
  color: $dark;
}
.card-stats {
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
  }
  span {
    margin: 0 7px;
  }
  .like {
    color: $solid-blue;
  }
}
.card-top-info-right{
  position: absolute;
  top: 16px;
  right: 8px;
  height: 25px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
}
.event-img{
  width: 18px;
  height: 18px;
  background-color: #ff0000;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 5px;
}
.event-img img{
  width: 100%;
}
.event-circle p{
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
}
.event-circle p:before{
  position: absolute;
  left: 0;
  content: '';
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: #3FDB87;
  margin-right: 5px;
}
.icon-info{
  word-break: break-word;
}
</style>
