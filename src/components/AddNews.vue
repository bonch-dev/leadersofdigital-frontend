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
      Адрес
      <q-input v-model="place" color="primary" placeholder="Улица, дом / станция метро">
        <template v-slot:hint></template>
      </q-input>
    </div>
    <div class="AddComponent__input addMargin">
      Контактный телефон
      <q-input v-model="phone" color="primary"  mask="+7 (###) ### - ## - ##" fill-mask>
      </q-input>
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
      <button @click="addEvent">Опубликовать</button>
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
      place: null,
      phone: null
    }
  },
  methods: {
    ...mapActions({
      createEvent: 'events/createEvent'
    }),
    addEvent () {
      this.createEvent({ title: this.title, description: this.description, place: this.place, phone: this.phone })
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
