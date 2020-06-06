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
              <path d="M13.2214 6.27776L17.722 10.7785L7.9492 20.5518L3.93657 20.9948C3.39939 21.0542 2.94554 20.5999 3.0053 20.0628L3.45178 16.0471L13.2214 6.27776V6.27776ZM20.5056 5.60767L18.3924 3.49439C17.7333 2.8352 16.6642 2.8352 16.005 3.49439L14.017 5.48251L18.5176 9.98329L20.5056 7.99517C21.1648 7.33563 21.1648 6.26686 20.5056 5.60767V5.60767Z" fill="white"/>
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
          <!-- <div class="card-info">
            <div class="card-info-icon q-mb-sm flex align-center">
              <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70938 11.8833C8.11862 12.6723 7.42643 13.5968 6.61662 14.6974C6.31869 15.1009 5.68134 15.1009 5.38338 14.6974C4.57357 13.5968 3.88138 12.6723 3.29062 11.8833C0.568991 8.24839 0 7.48847 0 5.625C0 2.51839 2.68628 0 6 0C9.31372 0 12 2.51839 12 5.625C12 7.48847 11.431 8.24839 8.70938 11.8833ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#0C1120"/>
              </svg>
              <div class="icon-info q-ml-sm">test</div>
            </div>
          </div> -->
          <div class='card-stats'>
            <div class='flex'>
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
