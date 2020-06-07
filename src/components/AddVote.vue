<template>
  <div class="AddComponent">
    <div class="AddComponent__title">Новая запись</div>
    <div class="AddComponent__description">Тут вы можете поделиться своими мыслями</div>
    <div class="AddComponent__input">
      Наименование
      <q-input v-model="name" color="primary" counter maxlength="50">
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
      >
        <template v-slot:hint></template>
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
      <button>Опубликовать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBlog',
  data () {
    return {
      name: null,
      description: null
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
</style>
