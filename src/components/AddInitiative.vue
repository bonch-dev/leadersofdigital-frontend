<template>
  <div class="AddComponent">
    <div class="AddComponent__title">Новое обращение</div>
    <div class="AddComponent__description">Тут вы можете поделиться вашей проблемой или предложить идею, способную улучшить жизнь города</div>
    <div class="AddComponent__input">
      Наименование
      <q-input v-model="title" color="primary" counter maxlength="50" placeholder="Укажите наименование обращения">
        <template v-slot:hint></template>
      </q-input>
    </div>
    <div class="AddComponent__input">
      Описание
      <q-input
              v-model="description"
              counter
              type="textarea"
              maxlength="500"
              color="primary"
              placeholder="Опишите обращение"
      >
        <template v-slot:hint></template>
      </q-input>
    </div>
    <div class="AddComponent__input addMargin">
      Ссылка на ролик YouTube
      <q-input v-model="video" color="primary" ></q-input>
    </div>
    <div class="AddComponent__input addMargin">
      Цели
      <q-input v-model="video" color="primary" ></q-input>
    </div>
    <div class="AddComponent__input addMargin">
      Результы проекта
      <q-input v-model="results" color="primary" ></q-input>
    </div>
    <div class="AddComponent__input addMargin">
      Адрес
      <q-input v-model="geography" color="primary" placeholder="Улица, дом / станция метро">
        <template v-slot:hint></template>
      </q-input>
    </div>
    <div class="AddComponent__input addMargin">
      Дополнительно
      <q-input v-model="additional" color="primary" ></q-input>
    </div>
    <div class="AddComponent__input">
      Фото-превью
      <br><br>
      <q-uploader
          auto-upload
          url="http://localhost:4444/upload"
          color="primary"
      />
    </div>
    <div class="AddComponent__btn">
      <button @click="addInitiative()">Опубликовать</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddBlog',
  data () {
    return {
      title: null,
      description: null,
      video: null,
      goals: null,
      geography: null,
      results: null,
      additional: null
    }
  },
  methods: {
    ...mapActions({
      createInitiative: 'initiatives/createInitiative'
    }),
    addInitiative: function () {
      this.createInitiative({
        title: [this.title],
        description: [this.description],
        video_url: this.video,
        objective: this.objective,
        goals: this.goals,
        geography: this.geography,
        results: this.results,
        additional: this.additional
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .AddComponent {
    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 110%;
      color: #2E2E2E;
    }
    &__description {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #79879B;
      margin: 10px 0 30px;
    }
    &__input {
      margin-bottom: 10px;
    }
    &__btn {
      margin-top: 30px;
      padding: 0 30px;
      & button {
        background: linear-gradient(102.75deg, #4065C5 0%, #8897E6 100%);
        border-radius: 3px;
        color: #fff;
        border: none;
        outline: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        padding: 12px 0;
        width: 100%;
      }
    }
  }
  .addMargin {
    margin-bottom: 15px;
  }
</style>
