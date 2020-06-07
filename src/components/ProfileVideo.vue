<template>
  <div>
    <div>
      <q-card  class="my-card q-mb-xl">
      <div class="card-top-bg"></div>
      <div class="card-top-info q-px-sm q-py-md">
        <div class="flex items-center">
          <img src="../statics/images/user-1.png" alt="" height="24px" width="24px" style="border-radius: 50%">
          <span style="margin-left: 8px;" class="text-white">Vladimir Chernomyrdin</span>
        </div>
        <div class="card-top-info-right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C7.02991 3 3 7.02991 3 12C3 16.9701 7.02991 21 12 21C16.9701 21 21 16.9701 21 12C21 7.02991 16.9701 3 12 3ZM14.8949 12.1386L10.5074 15.3308C10.4833 15.3481 10.455 15.3584 10.4254 15.3606C10.3959 15.3628 10.3663 15.3569 10.3399 15.3434C10.3136 15.3299 10.2914 15.3094 10.276 15.2841C10.2605 15.2589 10.2523 15.2298 10.2522 15.2002V8.81987C10.2521 8.79019 10.2603 8.76106 10.2757 8.73572C10.2911 8.71037 10.3133 8.6898 10.3397 8.67627C10.3661 8.66275 10.3958 8.65681 10.4254 8.65911C10.455 8.6614 10.4833 8.67185 10.5074 8.68929L14.8949 11.8795C14.9156 11.8941 14.9325 11.9135 14.9442 11.9361C14.9558 11.9586 14.9619 11.9837 14.9619 12.009C14.9619 12.0344 14.9558 12.0594 14.9442 12.082C14.9325 12.1045 14.9156 12.124 14.8949 12.1386V12.1386Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div @click="$router.push({ name: 'initiative.article', params: { id: id }})">
        <img src="../statics/images/bonch.jpg" width="100%">
      </div>

      <q-card-section>
        <div class="time-card q-mb-sm text-dark font-lable">
          23 ноября, 11:00 - 15:30
        </div>
        <div class="ttl-card q-mb-sm font-header2"
          style="line-height: 28px !important; color: #000 !important;"
          @click="$router.push({ name: 'initiative.article', params: { id: id }})"
        >
          Школа разработки IT-проектов 2020.
        </div>
        <div class="card-info">
          <div class="card-info-icon q-mb-sm flex align-center" style="margin-bottom: 20px;">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70938 11.8833C8.11862 12.6723 7.42643 13.5968 6.61662 14.6974C6.31869 15.1009 5.68134 15.1009 5.38338 14.6974C4.57357 13.5968 3.88138 12.6723 3.29062 11.8833C0.568991 8.24839 0 7.48847 0 5.625C0 2.51839 2.68628 0 6 0C9.31372 0 12 2.51839 12 5.625C12 7.48847 11.431 8.24839 8.70938 11.8833ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#0C1120"/>
            </svg>
            <div style="max-width: 250px;" class="icon-info q-ml-sm">Санкт-Петербург, Проспект Большевиков, 22</div>
          </div>
          <div>
            <p>Цель проекта: повышение конкурентоспособность студентов СПбГУТ на рынке труда.</p>
          </div>
        </div>
        <div class='card-stats'>
          <div class='flex items-center'>
            <button>
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span class='font-bold'>34</span>
          </div>
          <div class='card-support'>
            <button>Поддержать</button>
          </div>
        </div>
      </q-card-section>
    </q-card>
    </div>
  </div>
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
    margin: 0 7px;
    color: $solid-blue;
  }
  .card-support {
    button {
      background: linear-gradient(98.27deg, #4065C5 0%, #8897E6 100%);
      border-radius: 3px;
      padding: 11px 20px;
      color: white;
    }
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
