<template>
  <div class="wrapper">
    <div class="form-container">
      <form class="client-form" @submit.prevent="createClient">
        <!-- Основная информация -->
        <div
          v-show="currentIndex === 0"
          :keep-alive="true"
          class="curentPageContainer"
        >
          <MainInformation ref="mainInformation" />
        </div>

        <!-- Адрес клиента -->
        <div
          v-show="currentIndex === 1"
          :keep-alive="true"
          class="curentPageContainer"
        >
          <AddressInformation ref="addressInformation" />
        </div>

        <!-- Паспорт клиента -->
        <div
          v-show="currentIndex === 2"
          :keep-alive="true"
          class="curentPageContainer"
        >
          <PassportInformation ref="passportInformation" />
        </div>

        <div v-if="currentIndex === 3" class="curentPageContainer">
          <p class="success-message">Клиент успешно создан!</p>
        </div>

        <div v-if="currentIndex < 3" class="comment-container">
          <p>* - обязательное поле</p>
        </div>

        <div class="buttons-container">
          <!-- Кнопка Назад -->
          <button
            v-show="currentIndex > 0 && currentIndex < 3"
            @click="navigatePrevious"
            type="button"
          >
            Назад
          </button>

          <!-- Кнопка Далее -->
          <button v-show="currentIndex < 2" @click="navigateNext" type="button">
            Далее
          </button>

          <!-- Кнопка Создать -->
          <button v-show="currentIndex === 2" type="submit">Создать</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MainInformation from './MainInformation.vue'
import AddressInformation from './AddressInformation.vue'
import PassportInformation from './PassportInformation.vue'

export default {
  name: 'ClientForm',
  components: { MainInformation, AddressInformation, PassportInformation },
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
      currentIndex: 0, // Номер текущей страницы формы
    }
  },
  methods: {
    // Обработчик кнопки "далее"
    async navigateNext() {
      // let isFormCorrect = false

      // switch (this.currentIndex) {
      //   case 0:
      //     isFormCorrect = await this.$refs.mainInformation.v$.$validate()
      //     this.clientData.mainInformation =
      //       this.$refs.mainInformation.$data.mainInformation
      //     break

      //   case 1:
      //     isFormCorrect = await this.$refs.addressInformation.v$.$validate()
      //     this.clientData.address = this.$refs.addressInformation.$data.address
      //     break

      //   default:
      //     break
      // }
      // if (isFormCorrect && this.currentIndex < 2)
      this.currentIndex++
    },
    // Обработчик кнопки "назад"
    navigatePrevious() {
      if (this.currentIndex > 0) this.currentIndex--
    },
    // Обработчик создания формы
    async createClient() {
      let isFormCorrect = await this.$refs.passportInformation.v$.$validate()
      if (isFormCorrect) {
        this.clientData.passport = this.$refs.passportInformation.$data.passport
        this.currentIndex++
      }
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
      min-width: 620px
      width: 60%
      height: 100%

      label
        position: relative
        font-family: 'Roboto'
        font-weight: 300
        font-size: 14px
        height: 16px

      .curentPageContainer
        display: flex
        align-items: center
        justify-content: center
        min-width: 580px
        width: 100%
        min-height: 500px
        max-height: 500px

        .main-information, .address-information, .passport-information
          display: flex
          position: relative
          width: 85%
          height: 100%
          flex-direction: column
          align-items: center
          justify-content: flex-start

          .label-group
            min-height: 16px !important
            max-height: 16px !important
            margin-bottom: 0 !important

          .form-group
            display: flex
            flex-direction: column
            justify-content: center
            align-items: flex-start
            width: 90%
            min-height: 64px
            max-height: 64px
            margin-bottom: 12px

            .dropdown-container
              position: relative
              min-height: 36px
              max-height: 36px
              width: 100%

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
              position: relative
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
              border: none
              -webkit-appearance: none !important
              background-color: #fff
              box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2)

            .form-group-footer
              display: flex
              align-items: center
              justify-content: flex-start
              min-height: 14px
              max-height: 14px
              width: 100%

              .error-message
                color: red
                font-family: 'Roboto'
                font-weight: 300
                font-size: 12px
                height: 14px
                z-index: 7
                margin: 0

        .success-message
          font-size: 16px
          font-family: 'Roboto'
          font-weight: 400

      .comment-container
        position: relative
        display: flex
        align-items: center
        justify-content: flex-start
        min-width: 580px
        width: 100%
        min-height: 40px
        max-height: 40px
        padding: 0 0 0 12.5%
        box-sizing: border-box

        p
          font-size: 14px
          font-family: 'Roboto'
          font-weight: 300

      .buttons-container
        display: flex
        position: relative
        align-items: flex-end
        justify-content: center
        min-width: 580px
        width: 100%
        min-height: 50px
        max-height: 50px

        button
          width: 95px
          height: 40px
          text-align: center
          padding: 0
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
    margin: 0
    padding: 0
    min-width: 320px
    width: 100%
    max-width: 640px
    min-height: 1200px
    max-height: 1200px
    background-image: none

    .form-container
      margin: 0
      padding: 0
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      min-width: 320px
      width: 100%
      max-width: 640px
      height: 100%
      border-radius: 0
      filter: none

      .client-form
        margin: 0
        padding: 0
        justify-content: flex-start
        min-width: 320px
        width: 100%
        max-width: 640px
        height: 100%
        margin-top: 30px

        label
          min-height: 25px
          max-height: 25px
          font-size: 18px

        .curentPageContainer
          align-items: flex-start
          min-width: 320px
          width: 100%
          max-width: 640px
          min-height: 960px
          max-height: 960px

          .main-information, .address-information, .passport-information
            min-width: 100vw
            max-width: 100vw
            min-height: 800px
            max-height: 800px

            .form-group
              min-width: 85%
              max-width: 58%
              margin-bottom: 20px
              min-height: 100px
              max-height: 100px

              .dropdown-container
                display: flex
                align-items: center
                justify-content: center
                min-height: 50px
                max-height: 50px

              .SMS-checkbox
                input[type='checkbox']
                  width: 30px
                  height: 30px

              input,
              select
                min-height: 50px
                max-height: 50px
                font-size: 18px

              .form-group-footer
                min-height: 25px
                max-height: 25px

                .error-message
                  font-size: 16px

        .comment-container
          min-width: 320px
          width: 85%
          max-width: 640px
          min-height: 70px
          max-height: 70px
          margin-bottom: 0px
          padding-left: 0

          p
            font-size: 18px

        .buttons-container
          min-width: 320px
          width: 100%
          max-width: 640px
          min-height: 70px
          max-height: 70px

          button
            width: 120px
            height: 50px
            padding: 0
            text-align: center
            background-color: #50A49A
            color: #fff
            border: none
            border-radius: 10px
            cursor: pointer
            font-size: 22px
            font-family: 'Roboto'
            font-weight: 400
            letter-spacing: 1.6px
            margin-left: 26px
            margin-right: 26px
</style>
