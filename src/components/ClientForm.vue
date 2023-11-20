<template>
  <div class="wrapper">
    <div class="form-container">
      <form class="client-form" @submit.prevent="createClient">
        <!-- Основная информация -->
        <div v-if="currentIndex === 0"><MainInformation /></div>

        <!-- Адрес клиента -->
        <div v-if="currentIndex === 1"><AdressInformation /></div>

        <!-- Паспорт клиента -->
        <div v-if="currentIndex === 2"><PassportInformation /></div>

        <div class="buttons-container">
          <!-- Кнопка Назад -->
          <button
            v-if="currentIndex > 0"
            type="button"
            @click="navigatePrevious"
          >
            Назад
          </button>

          <!-- Кнопка Далее -->
          <button v-if="currentIndex < 2" type="button" @click="navigateNext">
            Далее
          </button>

          <!-- Кнопка Создать -->
          <button v-if="currentIndex === 2" type="submit">Создать</button>
        </div>

        <!-- Сообщение об успешном создании клиента -->
        <p v-if="isSuccess">Клиент успешно создан!</p>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import MainInformation from './MainInformation.vue'
import AdressInformation from './AdressInformation.vue'
import PassportInformation from './PassportInformation.vue'

export default {
  name: 'ClientForm',
  components: { MainInformation, AdressInformation, PassportInformation },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      clientData: {
        lastName: '', // Фамилия
        firstName: '', // Имя
        middleName: '', // Отчество
        birthDate: '', // Дата рождения
        phoneNumber: '', // Номер телефона
        gender: '', // Пол
        clientGroup: [], // Группа клиентов
        attendingDoctor: '', // Лечащий врач
        doNotSendSMS: false, // Не отправлять СМС
        address: {
          index: '', // Индекс
          country: '', // Страна
          region: '', // Область
          city: '', // Город
          street: '', // Улица
          house: '', // Дом
        },
        passport: {
          documentType: '', // Тип документа
          series: '', // Серия
          number: '', // Номер
          issuedBy: '', // Кем выдан
          issueDate: '', // Дата выдачи
        },
      },
      currentIndex: 0,
      isSuccess: false,
    }
  },
  validations() {
    return {
      clientData: {
        lastName: { required },
        firstName: { required },
        birthDate: { required },
        phoneNumber: { required },
        clientGroup: { required },
        address: {
          city: { required },
        },
        passport: {
          documentType: { required },
          issueDate: { required },
        },
      },
    }
  },
  methods: {
    createClient() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        this.successMessage = 'Новый клиент успешно создан'
      }
    },

    navigateNext() {
      this.currentIndex++
    },

    navigatePrevious() {
      this.currentIndex--
    },
  },
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap')

.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-width: 100%
  max-width: 100%
  height: 100vh
  background-image: url('../images/form-bg.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover

  .form-container
    display: flex
    align-items: center
    justify-content: center
    width: 1195px
    height: 660px
    background-color: #fff
    border-radius: 35px
    filter: drop-shadow(9px 9px 18.799999237060547px rgba(0, 0, 0, 0.45))

    .client-form
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      width: 60%
      height: 100%

      label
        margin-bottom: 5px
        font-family: 'Roboto'
        font-weight: 300
        font-size: 14px

      .main-information
        display: flex
        min-width: 100%
        max-width: 100%
        flex-direction: column
        align-items: center
        justify-content: center

        .client-name-container
          display: flex
          min-width: 90%
          max-width: 90%
          flex-direction: column
          align-items: flex-start
          justify-content: center
          .client-name
            display: flex
            width: 100%
            align-items: center
            justify-content: space-between

            .form-group
              width: 32%

        .form-group
          display: flex
          flex-direction: column
          margin-bottom: 15px
          width: 90%

          .SMS-checkbox
            display: flex
            align-items: center
            justify-content: flex-start
            height: 30px

            label
              margin-left: 6px

            input[type='checkbox']
              width: 15px
              height: 15px

          input,
          select
            width: 100%
            box-sizing: border-box
            padding: 8px
            border: 1px solid #ccc
            border-radius: 8px
            font-family: 'Roboto'
            font-weight: 400
            outline: none

          .error-message
            color: red

      .buttons-container
        display: flex
        align-items: center
        justify-content: center
        width: 250px
        height: 40px

      button
        padding: 10px 20px
        background-color: #50A49A
        color: #fff
        border: none
        border-radius: 10px
        cursor: pointer
        font-size: 16px
        font-family: 'Roboto'
        font-weight: 400
        letter-spacing: 1.6px
        margin-left: 8px
        margin-right: 8px

@media (max-width: 640px)
</style>
