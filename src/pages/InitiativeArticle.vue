<template>
  <div class='article'>
    <div class="article__user flex items-center">
      <div class="article__photo">
        <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
      </div>
      <div class="article__name">
        Vladimir Chernomyrdin
      </div>
    </div>
    <div class="article__date">16 ноября 2019</div>
    <div class="article__title">Школа разработки IT-проектов 2020.</div>
    <div class="article__position font-lable flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7094 11.8833C10.1186 12.6723 9.42643 13.5968 8.61662 14.6974C8.31869 15.1009 7.68134 15.1009 7.38338 14.6974C6.57357 13.5968 5.88138 12.6723 5.29062 11.8833C2.56899 8.24839 2 7.48847 2 5.625C2 2.51839 4.68628 0 8 0C11.3137 0 14 2.51839 14 5.625C14 7.48847 13.431 8.24839 10.7094 11.8833ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#0C1120"/>
      </svg>
      <div style="max-width: 250px; margin-left: 10px;">Санкт-Петербург, Проспект Большевиков, 22</div>
    </div>
    <div class="article__image">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5yx6BWlEVcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="article__text">
      <div class="problem">
        <h5 class="font-lable">Проблема</h5>
        <p>Нехватка идей (в голове дизайнера для такого большого описания), потребность в новых кадрах и решениях для бизнеса и не только</p>
      </div>
      <div class="goal">
        <h5 class="font-lable">Проблема</h5>
        <p>Нехватка идей (в голове дизайнера для такого большого описания), потребность в новых кадрах и решениях для бизнеса и не только</p>
      </div>
      <div class="tasks">
        <h5 class="font-lable">Проблема</h5>
        <p>Нехватка идей (в голове дизайнера для такого большого описания), потребность в новых кадрах и решениях для бизнеса и не только</p>
      </div>
    </div>
    <div class="article__rate flex items-center q-mt-lg">
      <div class="article__plus flex items-center">
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9558 4.66072C9.36439 -2.43142 0.0715332 1.43215 0.0715332 9.15786C0.0715332 14.9593 12.8115 24.0343 13.9558 25.2143C15.108 24.0343 27.2144 14.9593 27.2144 9.15786C27.2144 1.49072 18.5558 -2.43142 13.9558 4.66072Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0.0715332" y1="0.928467" x2="28.3862" y2="2.38158" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4065C5"/>
              <stop offset="1" stop-color="#8897E6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="article__rating font-bold">23</div>
      <button>
        Поддержать
      </button>
    </div>
    <div class="comment">
      <div class="comment__ttl">Комментарии</div>
      <div class="comment__wrapper" v-for="item in 2" :key="item">
        <div class="comment__user flex items-center">
          <div class="comment__photo">
            <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
          </div>
          <div class="comment__name">
            Денис Липкович
          </div>
        </div>
        <div class="comment__block">
          <div class="comment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut enim hic, in repudiandae sint totam ut vero. Consectetur, nemo!</div>
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
            <div class="comment__rating">23</div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  data () {
    return {
      news: [
      ]
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
