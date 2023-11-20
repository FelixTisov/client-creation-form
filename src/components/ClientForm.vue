<template>
  <div class="wrapper">
    <div class="form-container">
      <form class="client-form" @submit.prevent="createClient">
        <!-- Основная информация -->
        <div v-if="currentIndex === 0">
          <MainInformation ref="mainInformation" />
        </div>

        <!-- Адрес клиента -->
        <div v-if="currentIndex === 1">
          <AdressInformation ref="addressInformation" />
        </div>

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
        mainInformation: {
          lastName: '', // Фамилия
          firstName: '', // Имя
          middleName: '', // Отчество
          birthDate: '', // Дата рождения
          phoneNumber: '', // Номер телефона
          gender: '', // Пол
          clientGroup: [], // Группа клиентов
          attendingDoctor: '', // Лечащий врач
          doNotSendSMS: false, // Не отправлять СМС
        },
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
  methods: {
    createClient() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        this.successMessage = 'Новый клиент успешно создан'
      }
    },

    navigateNext() {
      this.currentIndex++
      switch (this.currentIndex) {
        case 0:
          this.clientData.mainInformation =
            this.$refs.mainInformation.$data.mainInformation
          break

        case 1:
          this.clientData.address = this.$refs.addressInformation.$data.adress
          break
        default:
          break
      }
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
        height: 14px

      .main-information, .adress-information, .passport-information
        display: flex
        min-width: 617px
        max-width: 617px
        min-height: 500px
        max-height: 500px
        flex-direction: column
        align-items: center
        justify-content: flex-start

        .form-group
          display: flex
          flex-direction: column
          width: 90%
          height: 56px
          margin-bottom: 15px

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
            min-height: 36px
            max-height: 36px
            box-sizing: border-box
            padding: 8px
            border: 1px solid #ccc
            border-radius: 8px
            font-family: 'Roboto'
            font-weight: 400
            outline: none

          .error-message
            color: red
            font-family: 'Roboto'
            font-weight: 300
            font-size: 12px

        .comment-container
          display: flex
          align-items: center
          justify-content: flex-start
          width: 90%
          height: 30px
          margin-bottom: 15px
          padding-left: 6px
          box-sizing: border-box

          p
            font-size: 14px
            font-family: 'Roboto'
            font-weight: 300

      .buttons-container
        display: flex
        align-items: flex-end
        justify-content: center
        width: 350px
        height: 60px

      button
        width: 95px
        height: 40px
        text-align: center
        background-color: #50A49A
        color: #fff
        border: none
        border-radius: 10px
        cursor: pointer
        font-size: 16px
        font-family: 'Roboto'
        font-weight: 400
        letter-spacing: 1.6px
        margin-left: 26px
        margin-right: 26px

@media (max-width: 640px)
  .wrapper
    min-width: 320px
    width: 100%
    max-width: 640px
    background-image: none

    .form-container
      min-width: 320px
      width: 100%
      max-width: 640px
      height: 1000px
      border-radius: 0
      filter: none

      .client-form
        min-width: 320px
        width: 100%
        max-width: 640px

        .main-information, .adress-information, .passport-information
          min-width: 100vw
          max-width: 100vw
          min-height: 800px
          max-height: 800px

          .form-group
            min-width: 85%
            max-width: 58%
            height: 90px
            margin-bottom: 20px

            .SMS-checkbox
              display: flex
              align-items: center
              justify-content: flex-start
              height: 30px

              label
                margin-left: 6px

              input[type='checkbox']
                width: 30px
                height: 30px

            input,
            select
              width: 100%
              min-height: 50px
              max-height: 50px
              box-sizing: border-box
              padding: 8px
              border: 1px solid #ccc
              border-radius: 8px
              font-family: 'Roboto'
              font-weight: 400
              outline: none

            .error-message
              color: red
              font-family: 'Roboto'
              font-weight: 300
              font-size: 16px

          .comment-container
            display: flex
            align-items: center
            justify-content: flex-start
            width: 90%
            height: 30px
            margin-bottom: 15px
            padding-left: 6px
            box-sizing: border-box

            p
              font-size: 14px
              font-family: 'Roboto'
              font-weight: 300

        .buttons-container
          display: flex
          align-items: flex-end
          justify-content: center
          width: 350px
          height: 60px

        button
          width: 95px
          height: 40px
          text-align: center
          background-color: #50A49A
          color: #fff
          border: none
          border-radius: 10px
          cursor: pointer
          font-size: 16px
          font-family: 'Roboto'
          font-weight: 400
          letter-spacing: 1.6px
          margin-left: 26px
          margin-right: 26px
</style>
