<template>
  <div class="voteCard">
    <div class="voteCard__image">
      <img src="../statics/images/news.png" alt="">
      <div class="voteCard__header flex justify-between items-center">
        <div class="voteCard__user flex items-center">
          <div class="voteCard__photo">
            <img :src="user.image" alt="">
          </div>
          <div class="voteCard__name">{{user.name}}</div>
        </div>
        <div class="voteCard__edit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13.0013H17.32L15.32 15.0013H17.23L19 17.0013H5L6.78 15.0013H8.83L6.83 13.0013H6L3 16.0013V20.0013C3 20.5318 3.21071 21.0405 3.58579 21.4156C3.96086 21.7906 4.46957 22.0013 5 22.0013H19C19.5304 22.0013 20.0391 21.7906 20.4142 21.4156C20.7893 21.0405 21 20.5318 21 20.0013V16.0013L18 13.0013ZM17 7.95134L12.05 12.9013L8.5 9.36134L13.46 4.41134L17 7.95134ZM12.76 2.29134L6.39 8.66134C6.2973 8.75386 6.22375 8.86374 6.17357 8.98472C6.12339 9.10569 6.09756 9.23537 6.09756 9.36634C6.09756 9.49731 6.12339 9.62699 6.17357 9.74797C6.22375 9.86894 6.2973 9.97883 6.39 10.0713L11.34 15.0013C11.73 15.4113 12.36 15.4113 12.75 15.0013L19.11 8.66134C19.2027 8.56883 19.2763 8.45894 19.3264 8.33797C19.3766 8.21699 19.4024 8.08731 19.4024 7.95634C19.4024 7.82537 19.3766 7.69569 19.3264 7.57472C19.2763 7.45374 19.2027 7.34386 19.11 7.25134L14.16 2.30134C14.0698 2.20694 13.9615 2.13163 13.8416 2.07987C13.7218 2.02811 13.5927 2.00096 13.4621 2.00002C13.3315 1.99909 13.2021 2.0244 13.0815 2.07444C12.9609 2.12448 12.8516 2.19824 12.76 2.29134Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="voteCard__info">
      <div class="voteCard__ttl" @click="$router.push({ name: 'vote.page', params: { id: id }})">{{title}}</div>
      <div class="voteCard__date">{{date}}</div>
      <div class="voteCard__footer flex items-center  justify-between">
        <div class="voteCard__rate flex items-center">
          <div class="voteCard__plus flex items-center">
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
          <div class="voteCard__rating">{{rating}}</div>
          <div class="voteCard__minus flex items-center">
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
        <div class="voteCard__rang flex items-center">
          <div class="rang__image">
            <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4.13623 15.0681V10.0679H5.90896V17.0981H6.1622V9.80756H4.72714V7.63774H7.17519V19.3058C5.94836 18.1295 4.84928 16.7125 4.13623 15.0681ZM7.42843 19.5436V4.51321H7.7661V19.846C7.65278 19.7471 7.54016 19.6463 7.42843 19.5436ZM7.93493 19.9914V4.51321H8.27259V9.89435H8.44143V4.51321H8.77909V9.89435H8.94792V7.63774H10.4674V9.89435H10.8895V8.59246H11.0583V9.89435H11.9869V22.6184C10.7659 22.0387 9.3063 21.1574 7.93493 19.9914ZM9.79208 17.7925H8.77909V16.751H9.79208V17.7925ZM9.79208 16.4038H8.77909V15.3623H9.79208V16.4038ZM9.79208 13.366H8.77909V12.3245H9.79208V13.366ZM9.79208 11.8906H8.77909V10.8491H9.79208V11.8906ZM8.94792 5.03397H10.4674V7.46416H8.94792V5.03397ZM10.4674 4.51321H8.94792V4.86038H10.4674V4.51321ZM11.2271 10.8491H10.2142V11.8906H11.2271V10.8491ZM10.2142 12.3245H11.2271V13.366H10.2142V12.3245ZM11.2271 15.3623H10.2142V16.4038H11.2271V15.3623Z" fill="url(#paint0_linear)"/>
                <path opacity="0.2" d="M22.4625 10.0754C23.3428 17.2108 16.4294 21.6649 12.8627 23C9.40973 21.6373 2.67085 17.1447 3.33867 10.0754C4.17344 1.23878 10.2066 0 12.8627 0C15.5187 0 21.3621 1.15619 22.4625 10.0754Z" fill="url(#paint1_linear)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9807 8.24525C17.5164 8.41884 17.3642 8.50745 17.0814 8.90048C16.9465 9.08804 16.763 9.33297 16.6738 9.44478C16.4163 9.76718 16.113 10.3416 16.0388 10.647C16.0051 10.7862 15.9396 10.9701 15.8933 11.0557C15.8136 11.2032 15.7808 11.2281 15.2682 11.5295C14.7274 11.8476 14.2807 12.1017 13.982 12.2611C13.5548 12.4891 13.5598 12.8384 13.9974 13.3395C14.1667 13.5335 14.1928 13.6419 14.1167 13.8362C14.0633 13.9726 14.0416 13.996 13.898 14.0711C13.7748 14.1356 13.7323 14.1754 13.7113 14.2457C13.6738 14.3714 13.7372 14.5922 13.8435 14.706C13.8923 14.7581 13.9266 14.8109 13.9198 14.8232C13.913 14.8356 13.8509 14.8745 13.7818 14.9098C13.5382 15.034 13.4568 15.3521 13.6158 15.5591C13.7659 15.7545 13.7293 15.9386 13.5001 16.142C13.3436 16.2808 13.0837 16.7 13.0516 16.8652C12.9925 17.1698 13.053 17.3954 13.2471 17.5947C13.3622 17.7129 14.055 18.0586 14.6808 18.3102C15.175 18.5089 15.2811 18.584 15.3485 18.7825C15.4061 18.9519 15.4056 18.9825 15.3313 19.7674L14.9417 22.0019C14.9417 22.0019 15.7306 21.3801 16.1236 21.2641C18.5559 20.5462 20.2515 18.5965 21.172 17.1659C22.4505 15.1786 22.9793 12.5238 22.4298 10.6226C22.028 9.23246 21.6761 8.62142 20.4288 8.24525C18.971 7.80563 18.445 8.07166 17.9807 8.24525Z" fill="url(#paint2_linear)" fill-opacity="0.3"/>
                <path opacity="0.3" d="M21.4839 17.8358C18.7523 20.6444 17.4601 21.5968 15.7437 22.6528C18.1636 22.3201 23.2988 21.2121 24.4807 19.4415C25.9579 17.2283 23.5521 15.7094 21.4839 17.8358Z" fill="url(#paint3_linear)"/>
                <path opacity="0.3" d="M23.7315 11.9093C23.0982 14.3688 22.6869 15.305 22.0784 16.4223C23.2797 15.5454 25.7095 13.4419 25.8184 12.0423C25.9547 10.2928 24.2109 10.0472 23.7315 11.9093Z" fill="url(#paint4_linear)"/>
                <path d="M21.836 5.40187C21.1724 3.99279 20.8169 3.47696 20.3217 2.87561C21.1475 3.26011 22.8556 4.23719 23.0814 5.06943C23.3636 6.10972 22.3384 6.46872 21.836 5.40187Z" fill="white"/>
                <path d="M21.836 5.40187C21.1724 3.99279 20.8169 3.47696 20.3217 2.87561C21.1475 3.26011 22.8556 4.23719 23.0814 5.06943C23.3636 6.10972 22.3384 6.46872 21.836 5.40187Z" fill="url(#paint5_linear)" fill-opacity="0.3"/>
                <path opacity="0.3" d="M2.18897 11.9093C2.82225 14.3688 3.23354 15.305 3.84203 16.4223C2.64075 15.5454 0.210955 13.4419 0.101977 12.0423C-0.0342454 10.2928 1.70949 10.0472 2.18897 11.9093Z" fill="url(#paint6_linear)"/>
                <path d="M3.7303 5.40595C4.36499 3.98286 4.70981 3.45947 5.19266 2.84756C4.37487 3.24981 2.6871 4.26355 2.47836 5.10048C2.21744 6.14664 3.24976 6.48341 3.7303 5.40595Z" fill="white"/>
                <path d="M3.7303 5.40595C4.36499 3.98286 4.70981 3.45947 5.19266 2.84756C4.37487 3.24981 2.6871 4.26355 2.47836 5.10048C2.21744 6.14664 3.24976 6.48341 3.7303 5.40595Z" fill="url(#paint7_linear)" fill-opacity="0.3"/>
                <path opacity="0.3" d="M4.12839 17.8359C6.86002 20.6444 8.1522 21.5969 9.86865 22.6528C7.44874 22.3201 2.31346 21.2121 1.13164 19.4415C-0.345634 17.2283 2.06021 15.7095 4.12839 17.8359Z" fill="url(#paint8_linear)"/>
                <path d="M18.8474 16.8598C17.9506 19.7413 14.4962 22.4122 12.916 23C20.0506 21.2098 22.5215 16.072 22.3635 12.3041C22.3496 11.9721 22.3089 11.6481 22.246 11.3334C21.9678 9.94085 21.1851 10.6817 21.1787 12.0746C21.1786 12.0961 21.1437 12.1061 21.1311 12.0887C20.7858 11.6134 20.1081 12.4917 20.2114 13.095C20.4997 14.7781 20.014 16.5165 19.6076 17.3988C19.6772 17.1272 19.6341 16.8763 19.5412 16.6626C19.379 16.2899 18.9672 16.4746 18.8474 16.8598Z" fill="url(#paint9_linear)" fill-opacity="0.4"/>
                <path d="M6.93171 16.8598C7.83652 19.7413 11.3217 22.4122 12.916 23C5.71775 21.2098 3.22481 16.072 3.38418 12.3041C3.39823 11.9721 3.43926 11.6481 3.5027 11.3334C3.78344 9.94092 4.57305 10.6816 4.5796 12.0744C4.5797 12.0961 4.6148 12.1062 4.62763 12.0887C4.97598 11.6134 5.65975 12.4917 5.55548 13.095C5.26459 14.7781 5.75467 16.5165 6.16471 17.3988C6.09442 17.1272 6.13793 16.8763 6.23172 16.6626C6.39536 16.2899 6.81076 16.4746 6.93171 16.8598Z" fill="url(#paint10_linear)" fill-opacity="0.4"/>
                <path opacity="0.8" d="M13.5866 5.12076V8.12812H12.9097V5.67927H12.3247V5.12076H13.5866Z" fill="url(#paint11_linear)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear" x1="8.06155" y1="4.51321" x2="8.06155" y2="22.6184" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0C349E"/>
                  <stop offset="1" stop-color="#001682" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="12.9159" y1="0" x2="12.9159" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="12.2006" y1="7.76998" x2="20.9525" y2="16.1421" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0C349E"/>
                  <stop offset="1" stop-color="#001682" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="20.3403" y1="16.8151" x2="20.3403" y2="22.6528" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint4_linear" x1="22.8138" y1="11.6121" x2="24.6259" y2="15.0979" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint5_linear" x1="21.3157" y1="5.69225" x2="21.9941" y2="3.36259" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint6_linear" x1="3.1066" y1="11.6121" x2="1.2945" y2="15.0979" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint7_linear" x1="4.25644" y1="5.68504" x2="3.52837" y2="3.37125" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint8_linear" x1="5.272" y1="16.8151" x2="5.272" y2="22.6528" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3F75FF" stop-opacity="0"/>
                  <stop offset="1" stop-color="#B0AEFF"/>
                </linearGradient>
                <linearGradient id="paint9_linear" x1="17.6433" y1="10.5887" x2="17.6433" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0C349E"/>
                  <stop offset="1" stop-color="#001682" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint10_linear" x1="8.14653" y1="10.5887" x2="8.14653" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0C349E"/>
                  <stop offset="1" stop-color="#001682" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint11_linear" x1="12.9557" y1="5.12076" x2="12.9557" y2="8.12812" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4065C5"/>
                  <stop offset="1" stop-color="#BEBDFF"/>
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="26" height="23" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="rang__stat">1234 ответов</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'voteCard',
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
  .voteCard {
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
      margin-top: 8px;
    }
    &__ttl {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 120%;
    }
    &__footer{
      margin-top: 28px;
    }
    &__rating {
      margin: 0 16px;
    }
  }
  .voteCard__image:before {
    content: '';
    width: 100%;
    height: 76px;
    display: block;
    position: absolute;
    z-index: 20;
    background: linear-gradient(180deg, #0C349E 0%, rgba(0, 22, 130, 0) 100%);
    border-radius: 3px 3px 0px 0px;
  }
  .rang__stat {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 110%;
    margin-left: 8px;
    color: #4367C6;
  }
</style>
