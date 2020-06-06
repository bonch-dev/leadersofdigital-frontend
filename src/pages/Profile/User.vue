<template>
  <div class='user'>
    <div class="user__preview">
      <img src="../../statics/images/user-1.png" alt="">
      <div class="user__preview_right">
        <div class='stats'>
          <div>
            <p class='font-lable'>Карма</p>
            <span class='font-bold'>56864</span>
          </div>
          <div>
            <p class='font-lable'>Карма</p>
            <span class='font-bold'>56864</span>
          </div>
        </div>
        <button>Объединиться</button>
      </div>
    </div>
    <div class="user__info">
      <div class='flex'>
        <h2 class='font-header no-margin q-pr-md'>Джек Лондон</h2>
        <q-icon class="fa fa-edit" style="font-size: 20px; color: #989898;"></q-icon>
      </div>
      <p>Я люблю свой район и хочу сделать его лучше! Приходите на мои мероприятия, вместе мы сможем все!</p>
      <div class="user__info_social">
        <q-icon class="fab fa-vk"></q-icon>
        <q-icon class="fab fa-youtube"></q-icon>
        <q-icon class="fab fa-instagram"></q-icon>
      </div>
    </div>
    <div class="user__rank">
      <img src="../../statics/images/rank.png" alt="">
      <div>
        <h6 class='font-lable'>Ваш ранг</h6>
        <h5 class='font-bold'>Гражданин</h5>
        <p class='font-lable'>Ранг влияет на ну на что-то же он влияет, ну вот тут и надо написать на что...</p>
      </div>
    </div>
    <q-tabs
        inline-label
        no-caps
        :breakpoint="0"
        align="justify"
        class="user__tabs"
        indicator-color="gray"
      >
        <q-route-tab name="profile"
          label="Активные"
          :to="{ name: 'profile.active' }"
        />
        <q-route-tab name="events"
          label="Архив"
          :to="{ name: 'profile.archive' }"
        />
      </q-tabs>
      <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.user {
  padding: 0 32px;
  &__preview {
    margin: 40px 0 48px;
    display: flex;
    img {
      border-radius: 50%;
    }
    &_right {
      margin-left: 22px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .stats {
        display: flex;
        margin-bottom: 14px;
        p {
          color: $gray;
          margin: 0;
        }
        span {
          color: $solid-blue;
        }
        div:first-child {
          margin-right: 22px;
        }
      }
      button {
        background: $button-blue;
        border: none;
        padding: 11px 20px;
        border-radius: 3px;
        color: white;
      }
    }
  }
  &__info {
    p {
      margin: 10px 0 8px;
    }
    &_social {
      font-size: 28px;
      color: $solid-blue;
      i:not(:last-child) {
        margin-right: 23px;
      }
    }
  }
  &__rank {
    display: flex;
    margin-top: 40px;
    img {
      max-height: 110px;
      margin-right: 10px;
    }
    h6, p {
      margin: 0;
      color: $gray;
    }
    h5 {
      margin: 4px 0 10px;
      color: $solid-blue;
    }
  }
  &__tabs {
    margin: 50px 0 30px;
    color: $gray;
  }
}
</style>
