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
            placeholder="Фамилия*"
            @input="formatName('lastName')"
          />
          <div class="form-group-footer">
            <span
              v-if="v$.mainInformation.lastName.$error"
              class="error-message"
              >Обязательное поле</span
            >
          </div>
        </div>

        <!-- Имя -->
        <div class="form-group">
          <input
            @blur="v$.mainInformation.firstName.$touch"
            v-model.trim="v$.mainInformation.firstName.$model"
            type="text"
            id="firstName"
            placeholder="Имя*"
            @input="formatName('firstName')"
          />
          <div class="form-group-footer">
            <span
              v-if="v$.mainInformation.firstName.$error"
              class="error-message"
              >Обязательное поле</span
            >
          </div>
        </div>

        <!-- Отчество -->
        <div class="form-group">
          <input
            v-model.trim="mainInformation.middleName"
            type="text"
            id="middleName"
            placeholder="Отчество"
            @input="formatDefaultTextInput('middleName')"
          />
          <div class="form-group-footer"></div>
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
      />
      <div class="form-group-footer">
        <span v-if="v$.mainInformation.birthDate.$error" class="error-message"
          >Обязательное поле</span
        >
      </div>
    </div>

    <!-- Номер телефона -->
    <div class="form-group">
      <label>Номер телефона*</label>
      <input
        @blur="v$.mainInformation.phoneNumber.$touch"
        v-model.trim="mainInformation.phoneNumber"
        type="tel"
        id="phoneNumber"
        placeholder="+7XXXXXXXXX"
        @keydown.space.prevent
        @input="formatPhone"
      />
      <div class="form-group-footer">
        <span v-if="v$.mainInformation.phoneNumber.$error" class="error-message"
          >Номер телефона должен содержать 11 цифр</span
        >
      </div>
    </div>

    <!-- Пол -->
    <div class="form-group">
      <label>Пол</label>
      <input
        v-model.trim="mainInformation.gender"
        type="text"
        id="gender"
        placeholder="Мужской"
        @input="formatDefaultTextInput('gender')"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Группа клиентов -->
    <div class="form-group">
      <label>Группа клиентов*</label>
      <div class="dropdown-container">
        <DropDown
          @optionChanged="changeClientGroup"
          type="multiple"
          :currentValue="mainInformation.clientGroup"
        >
          <template
            v-slot:dropdown-items="{
              clickOption: { changeOption },
              option: { currentOption },
            }"
          >
            <DropdownItem
              type="multiple"
              title="VIP"
              :option="currentOption"
              @clickOption="changeOption"
            />
            <DropdownItem
              type="multiple"
              title="Проблемные"
              :option="currentOption"
              @clickOption="changeOption"
            />
            <DropdownItem
              type="multiple"
              title="ОМС"
              :option="currentOption"
              @clickOption="changeOption"
            />
          </template>
        </DropDown>
      </div>
      <div class="form-group-footer">
        <span v-if="v$.mainInformation.clientGroup.$error" class="error-message"
          >Обязательное поле</span
        >
      </div>
    </div>

    <!-- Лечащий врач -->
    <div class="form-group">
      <label>Лечащий врач</label>
      <div class="dropdown-container">
        <DropDown @optionChanged="changeAttendingDoctor">
          <template
            v-slot:dropdown-items="{
              clickOption: { changeOption },
              option: { currentOption },
            }"
          >
            <DropdownItem
              title="Иванов"
              :option="currentOption"
              @clickOption="changeOption"
            />
            <DropdownItem
              title="Захаров"
              :option="currentOption"
              @clickOption="changeOption"
            />
            <DropdownItem
              title="Чернышева"
              :option="currentOption"
              @clickOption="changeOption"
            />
          </template>
        </DropDown>
      </div>
      <div class="form-group-footer"></div>
    </div>

    <!-- Не отправлять СМС -->
    <div class="form-group checkbox-group">
      <div class="checkbox-container">
        <div class="circle">
          <input
            v-model.trim="mainInformation.doNotSendSMS"
            type="checkbox"
            id="checkbox-18"
          />
          <label for="checkbox-18"></label>
        </div>
      </div>
      <label class="checkbox-title" for="doNotSendSMS">Не отправлять СМС</label>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import DropDown from './dropdown/DropDown.vue'
import DropdownItem from './dropdown/DropdownItem.vue'

export default {
  name: 'MainInformation',
  setup() {
    return { v$: useVuelidate() }
  },
  components: { DropDown, DropdownItem },
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
          minLength: minLength(12),
          maxLength: maxLength(12),
        },
        clientGroup: { required },
      },
    }
  },
  methods: {
    // Выбор лечащего врача
    changeAttendingDoctor(option) {
      this.mainInformation.attendingDoctor = option
    },
    // Выбор группы клиента
    changeClientGroup(option) {
      const index = this.mainInformation.clientGroup.indexOf(option)
      if (index === -1) this.mainInformation.clientGroup.push(option)
      else this.mainInformation.clientGroup.splice(index, 1)
    },
    // Форматирование номера телефона
    formatPhone() {
      let value = this.mainInformation.phoneNumber

      if (value.length < 12 && value.length > 1) {
        const newValue = value.replace(/[^\d]/g, '') // Удаляем все символы, кроме цифр
        let formatted = '+7' + newValue.substring(1, 2)
        if (newValue.length > 2) {
          formatted += newValue.substring(2, 12)
        }
        this.mainInformation.phoneNumber = formatted
      } else if (value.length === 1 && value[0] === '+')
        this.mainInformation.phoneNumber = ''
      else this.mainInformation.phoneNumber = value.substring(0, 12)
    },
    // Форматирование для полей, которые могут включать только буквы
    formatDefaultTextInput(field) {
      let value = this.mainInformation[field]
      let formatted = value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '')
      this.mainInformation[field] = formatted
    },
    // Форматирование для имени и фамилии, которые могут включать символ "-"
    formatName(field) {
      let value = this.mainInformation[field]
      let formatted = value.replace(
        /[^a-zA-Zа-яА-ЯёЁ-]|-{2,}| (?= )| -(?= )| (?=-)| (?=\s)|-(?=\s)|^[\s-]/g,
        (match) => (match[0] === '-' ? '-' : ' ')
      )
      this.mainInformation[field] = formatted
    },
  },
}
</script>

<style lang="sass">
.wrapper
 .form-container
  .client-form
    .curentPageContainer
      .main-information
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

        .form-group
          .checkbox-container
            .circle
              position: relative

              label
                background-color: #fff
                border-radius: 50%
                cursor: pointer
                height: 24px
                width: 24px
                display: block
                box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25)

                &:after
                  border: 2px solid #fff
                  border-top: none
                  border-right: none
                  content: ""
                  height: 6px
                  left: 6px
                  opacity: 0
                  position: absolute
                  top: 6px
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
          min-height: 26px !important
          max-height: 26px !important
          display: flex
          flex-direction: row !important
          align-items: center !important
          justify-content: flex-start !important

          .checkbox-title
            margin-left: 6px

@media (max-width: 640px)
  .wrapper
    .form-container
      .client-form
        .curentPageContainer
          .main-information
            .client-name-container
              min-width: 320px
              width: 85%
              max-width: 640px

              label
                width: 100%
                font-size: 18px
              .client-name
                flex-direction: column

                .form-group
                  min-width: 100%
                  max-width: 100%
                  min-height: 75px
                  max-height: 75px
                  margin-bottom: 20px
</style>
