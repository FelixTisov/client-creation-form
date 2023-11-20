<template>
  <div class="main-information">
    <div class="client-name-container">
      <label>ФИО клиента</label>
      <div class="client-name">
        <!-- Фамилия -->
        <div class="form-group">
          <input
            @blur="v$.mainInformation.lastName.$touch"
            v-model.trim="v$.mainInformation.lastName.$model"
            type="text"
            id="lastName"
            required
            placeholder="Фамилия*"
          />
          <span v-if="v$.mainInformation.lastName.$error" class="error-message"
            >Обязательное поле</span
          >
        </div>

        <!-- Имя -->
        <div class="form-group">
          <input
            @blur="v$.mainInformation.firstName.$touch"
            v-model.trim="v$.mainInformation.firstName.$model"
            type="text"
            id="firstName"
            required
            placeholder="Имя*"
          />
          <span v-if="v$.mainInformation.firstName.$error" class="error-message"
            >Обязательное поле</span
          >
        </div>

        <!-- Отчество -->
        <div class="form-group">
          <input
            v-model.trim="mainInformation.middleName"
            type="text"
            id="middleName"
            placeholder="Отчество"
          />
        </div>
      </div>
    </div>

    <!-- Дата рождения -->
    <div class="form-group">
      <label>Дата рождения*</label>
      <input
        @blur="v$.mainInformation.birthDate.$touch"
        v-model.trim="v$.mainInformation.birthDate.$model"
        type="date"
        id="birthdate"
        required
        onfocus="(this.type='date')"
      />
      <span v-if="v$.mainInformation.birthDate.$error" class="error-message"
        >Обязательное поле</span
      >
    </div>

    <!-- Номер телефона -->
    <div class="form-group">
      <label>Номер телефона*</label>
      <input
        @blur="v$.mainInformation.phoneNumber.$touch"
        v-model.trim="formattedPhoneNumber"
        required
        type="tel"
        id="phoneNumber"
        placeholder="+7 (___) ___ - ___"
      />
      <!-- <span v-if="v$.mainInformation.phoneNumber.$error" class="error-message"
        >Обязательное поле</span
      > -->
      <span v-if="v$.mainInformation.phoneNumber.$error" class="error-message"
        >Номер телефона должен начинаться с 7 и содержать 11 цифр</span
      >
    </div>

    <!-- Пол -->
    <div class="form-group">
      <label>Пол</label>
      <input
        v-model.trim="mainInformation.gender"
        type="text"
        id="gender"
        placeholder="Мужской"
      />
    </div>

    <!-- Группа клиентов -->
    <div class="form-group">
      <label>Группа клиента*</label>
      <select v-model="v$.mainInformation.clientGroup.$model" multiple>
        <option value="VIP">VIP</option>
        <option value="Проблемные">Проблемные</option>
        <option value="ОМС">ОМС</option>
      </select>
      <span
        v-if="!v$.mainInformation.clientGroup.required"
        class="error-message"
        >Выберите хотя бы одну группу</span
      >
    </div>

    <!-- Лечащий врач -->
    <div class="form-group">
      <label>Лечащий врач</label>
      <select v-model="mainInformation.attendingDoctor">
        <option value="Иванов">Иванов</option>
        <option value="Захаров">Захаров</option>
        <option value="Чернышева">Чернышева</option>
      </select>
    </div>

    <!-- Не отправлять СМС -->
    <div class="form-group checkbox-group">
      <div class="checkbox-container">
        <div class="circle">
          <input
            v-model="mainInformation.doNotSendSMS"
            type="checkbox"
            id="checkbox-18"
          />
          <label for="checkbox-18"></label>
        </div>
      </div>
      <label class="checkbox-title" for="doNotSendSMS">Не отправлять СМС</label>
    </div>

    <div class="comment-container">
      <p>* - обязательное поле</p>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'

export default {
  name: 'MainInformation',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
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
      isSuccess: false,
    }
  },
  validations() {
    return {
      mainInformation: {
        lastName: { required },
        firstName: { required },
        birthDate: { required },
        phoneNumber: {
          required,
          minLength: minLength(18),
          maxLength: maxLength(18),
        },
        clientGroup: { required },
      },
    }
  },
  computed: {
    // Форматирование номера телефона
    formattedPhoneNumber: {
      get() {
        return this.mainInformation.phoneNumber
      },
      set(value) {
        const newValue = value.replace(/[^\d]/g, '') // Удаляем все символы, кроме цифр
        let formatted = '+7 (' + newValue.substring(1, 4)

        if (newValue.length > 3) {
          formatted += ') ' + newValue.substring(4, 7)
        }
        if (newValue.length > 6) {
          formatted += ' ' + newValue.substring(7, 9)
        }
        if (newValue.length > 8) {
          formatted += '-' + newValue.substring(9)
        }

        this.mainInformation.phoneNumber = formatted
      },
    },
  },
}
</script>

<style lang="sass">
.wrapper
 .form-container
  .client-form
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
          margin-bottom: -4px

    .main-information
      .form-group
        .checkbox-container
          .circle
            position: relative

            label
              background-color: #fff
              border: 1px solid #ccc
              border-radius: 50%
              cursor: pointer
              height: 24px
              width: 24px
              display: block

              &:after
                border: 2px solid #fff
                border-top: none
                border-right: none
                content: ""
                height: 6px
                left: 7px
                opacity: 0
                position: absolute
                top: 7px
                transform: rotate(-45deg)
                width: 10px

            input[type="checkbox"]
              visibility: hidden
              display: none
              opacity: 0

              &:checked + label
                background-color: #50A49A
                border-color: #50A49A

              &:checked + label:after
                opacity: 1

      .checkbox-group
        display: flex
        flex-direction: row !important
        align-items: center

        .checkbox-title
          margin-left: 6px

@media (max-width: 640px)
  .wrapper
    .form-container
      .client-form
        .client-name-container
          min-width: 100%
          max-width: 100%
          .client-name
            flex-direction: column
            .form-group
              width: 100%
</style>
