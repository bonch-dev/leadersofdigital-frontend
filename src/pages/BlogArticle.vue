<template>
  <div class='article'>
    <div class="article__user flex items-center">
      <div class="article__photo">
        <img src="https://sun9-29.userapi.com/c854420/v854420062/8e3c8/PWyEg512mqo.jpg" alt="">
      </div>
      <div class="article__name">
        Денис Липкович {{$route.params.id}}
      </div>
    </div>
      <div class="article__date">16 ноября 2019</div>
      <div class="article__title">Как я стал активистом: простая история о непростом выборе</div>
      <div class="article__image">
        <img src="../statics/images/news.png" alt="">
      </div>
      <div class="article__text">
        <p>Как вы думаете, почему на картинке из интернета про активизм присутствует черный котик? Он, несомненно, очень красивый, но как он связан с тематикой?</p>
        <p>Начнем издалека... С древних времен с черной кошкой, окруженной мистическим ореолом, связывали множество примет и предрассудков. Из-за черного окраса этих красивых созданий люди обвиняли в различных бедствиях, а некоторые считали черную кошку пособником сатаны или по крайней мере – ведьмы.</p>
        <p>Приметы и суеверия, связанные с черными кошками, бытуют по сей день — наверное, многие помнят песню, популярную в прошлом веке, посвященную черному коту: "Говорят не повезет, если черный кот дорогу перейдет…".</p>
        <p>Также говорят и про активистов: мол, если им стать, то тоже не повезет. Так же как я не верю в суеверия про милых кошек, я не верю и в это. Именно поэтому, друзья, я и стал общественным активистом! Любите кошек и себя!</p>
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
        <div class="article__rating">23</div>
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
