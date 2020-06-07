<template>
  <div class="AddComponent">
    <div class="AddComponent__title">Новый опрос</div>
    <div class="AddComponent__description">Определи при помощи опроса, на сколько твоя инициатива поддерживается другими</div>
    <div class="AddComponent__input">
      Наименование
      <q-input v-model="title" color="primary" counter maxlength="50">
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
      Дата окончания
      <q-date
        v-model="end_at"
        minimal
        class="selectOtherDay__calendar"
        color="primary"
        mask="YYYY-MM-DD"
        :locale="calenderLocale"
        :options="calenderOptions"
        style="margin: 30px 0;"
      />
    </div>
    <div class="AddComponent__input">
      Варианты ответа
      <div v-for="(item, index) in items" :key="index">
        <q-input
          v-model="item.text"
          color="primary"
        />
      </div>
      <button class="addQuestion" @click="addQuestion()">Добавить вариант ответа</button>
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
      <button @click="createVote()">Опубликовать</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { date } from 'quasar'

export default {
  name: 'AddVote',
  data () {
    return {
      title: null,
      description: null,
      end_at: null,
      items: [
        { text: '' }
      ],
      calenderLocale: {
        days: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
        daysShort: 'ВС_ПН_ВТ_СР_ЧТ_ПТ_СБ'.split('_'),
        months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
        monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
        firstDayOfWeek: 1
      }
    }
  },
  methods: {
    ...mapActions({
      createQuestion: 'questions/createQuestion'
    }),
    createVote () {
      this.createQuestion({
        title: this.title,
        description: this.description,
        end_at: this.end_at + ' 00:00:00',
        items: this.items
      })
    },
    calenderOptions (calendarDate) {
      const now = Date.now()
      const newDate = date.addToDate(now, { days: 2 })
      const newDateFormatted = date.formatDate(newDate, 'YYYY/MM/DD')
      return calendarDate >= newDateFormatted
    },
    addQuestion () {
      this.items.push({ text: '' })
    }
  },
  beforeMount () {
    this.calenderOptions()
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
  .addQuestion{
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
    margin-top: 30px;
  }
</style>
