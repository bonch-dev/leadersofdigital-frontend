<template>
  <q-page>
    <div>
      <div v-for="event in 2" :key="event" :to="{ name: 'events.card', params: {id: event}}">
        <q-card  class="my-card q-mb-xl">
        <div class="card-top-bg"></div>
        <div class="card-top-info q-px-sm q-py-md">
          <div class="flex items-center">
            <img src="../statics/images/user-1.png" alt="" height="24px" width="24px" style="border-radius: 50%">
            <span style="margin-left: 8px;" class="text-white">test</span>
          </div>
          <div class="card-top-info-right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="20" r="2" fill="white"/>
              <path d="M14.9761 8.57092C15.2505 13.2244 13.0953 16.1293 11.9834 17C10.907 16.1113 8.80621 13.1813 9.0144 8.57092C9.27463 2.8079 11.1554 2 11.9834 2C12.8114 2 14.6331 2.75404 14.9761 8.57092Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div><img src="../statics/images/card-img.png" width="100%"></div>

        <q-card-section>
          <div class="time-card q-mb-sm text-dark font-lable">
            23 ноября, 11:00 - 15:30
          </div>
          <div class="ttl-card q-mb-sm font-header2"
            style="line-height: 28px !important; color: #000 !important;"
          >
            test
          </div>
          <div class="card-info">
            <div class="card-info-icon q-mb-sm flex align-center">
              <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70938 11.8833C8.11862 12.6723 7.42643 13.5968 6.61662 14.6974C6.31869 15.1009 5.68134 15.1009 5.38338 14.6974C4.57357 13.5968 3.88138 12.6723 3.29062 11.8833C0.568991 8.24839 0 7.48847 0 5.625C0 2.51839 2.68628 0 6 0C9.31372 0 12 2.51839 12 5.625C12 7.48847 11.431 8.24839 8.70938 11.8833ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#0C1120"/>
              </svg>
              <div class="icon-info q-ml-sm">test</div>
            </div>
          </div>
          <div class='card-stats'>
            <div class='flex items-center'>
              <button>
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
              <span>34</span>
              <button>
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
            <button class='flex items-center'>
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
              <button>
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.536 4.93244L13.9553 5.58016L14.3752 4.9328C16.557 1.56892 19.6289 0.880263 22.1307 1.8413C24.6642 2.81453 26.7143 5.51703 26.7143 9.15786C26.7143 10.4528 26.0298 12.003 24.892 13.6659C23.7645 15.3137 22.24 17.0036 20.6651 18.5639C19.0924 20.1221 17.4817 21.5394 16.1888 22.6432C15.7244 23.0397 15.3027 23.3943 14.9376 23.7014C14.7939 23.8222 14.659 23.9357 14.5337 24.0414C14.3118 24.2287 14.1147 24.3961 13.953 24.5376C13.7845 24.3939 13.5781 24.2243 13.3461 24.0356C13.1656 23.8888 12.967 23.7284 12.7518 23.5545C12.4139 23.2815 12.0348 22.9753 11.6199 22.6363C10.2682 21.5319 8.57899 20.1142 6.92767 18.5555C5.27403 16.9946 3.67149 15.3043 2.48581 13.6562C1.28831 11.9917 0.571426 10.445 0.571426 9.15786C0.571426 5.50708 2.76125 2.79697 5.46145 1.82293C8.13831 0.857302 11.3658 1.5802 13.536 4.93244Z" stroke="#4367C6"/>
                </svg>
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9557 4.66072C9.36427 -2.43142 0.0714111 1.43215 0.0714111 9.15786C0.0714111 14.9593 12.8114 24.0343 13.9557 25.2143C15.1078 24.0343 27.2143 14.9593 27.2143 9.15786C27.2143 1.49072 18.5557 -2.43142 13.9557 4.66072Z" fill="url(#paint0_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="0.0714111" y1="0.928467" x2="28.386" y2="2.38158" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4065C5"/>
                  <stop offset="1" stop-color="#8897E6"/>
                  </linearGradient>
                  </defs>
                </svg>
              </button>
              <span class='font-bold' style='margin: 0 7px;'>34</span>
            </div>
          </div>
        </q-card-section>
        <!-- <div class="card-btns flex row">
          <q-btn @click.prevent="" class="col-12 q-py-md" color="blue-2" no-caps label="Я иду!"></q-btn>
        </div> -->
      </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Events',
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
    // ...mapActions({}),
    // iGo (event) {
    //   alert(`Ждем вас здесь: ${event.position}`)
    // }
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
    margin: 0 12px;
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
