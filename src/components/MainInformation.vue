<template>
  <div class="main-information">
    <div class="client-name-container">
      <label>ФИО клиента</label>
      <div class="client-name">
        <!-- Фамилия -->
        <div class="form-group">
          <input
            v-model.trim="clientData.lastName"
            type="text"
            id="lastName"
            required
            placeholder="Фамилия"
          />
          <span
            v-if="
              !v$.clientData.lastName.$pending &&
              !v$.clientData.lastName.required
            "
            class="error-message"
            >Поле обязательно для заполнения</span
          >
        </div>

        <!-- Имя -->
        <div class="form-group">
          <input
            v-model.trim="clientData.firstName"
            type="text"
            id="firstName"
            required
            placeholder="Имя"
          />
          <span
            v-if="
              !v$.clientData.firstName.$pending &&
              !v$.clientData.firstName.required
            "
            class="error-message"
            >Поле обязательно для заполнения</span
          >
        </div>

        <!-- Отчество -->
        <div class="form-group">
          <input
            v-model.trim="clientData.middleName"
            type="text"
            id="middleName"
            placeholder="Отчество"
          />
        </div>
      </div>
    </div>

    <!-- Дата рождения -->
    <div class="form-group">
      <label>Дата рождения</label>
      <input
        v-model.trim="v$.clientData.birthDate.$model"
        type="date"
        id="birthdate"
        required
        onfocus="(this.type='date')"
      />
      <span v-if="!v$.clientData.birthDate.required" class="error-message"
        >Поле обязательно для заполнения</span
      >
    </div>

    <!-- Номер телефона -->
    <div class="form-group">
      <label>Номер телефона</label>
      <input
        v-model.trim="v$.clientData.phoneNumber.$model"
        type="tel"
        id="phoneNumber"
        placeholder="+7 (___) ___ - ___"
      />
      <span v-if="!v$.clientData.phoneNumber.required" class="error-message"
        >Поле обязательно для заполнения</span
      >
      <!-- <span
            v-if="!v$.clientData.phoneNumber.phoneStartingWith7"
            class="error-message"
            >Номер телефона должен начинаться с 7 и содержать 11 цифр</span
          > -->
    </div>

    <!-- Пол -->
    <div class="form-group">
      <label>Пол</label>
      <input
        v-model.trim="v$.clientData.gender"
        type="text"
        id="gender"
        placeholder="Мужской"
      />
    </div>

    <!-- Группа клиентов -->
    <div class="form-group">
      <label>Группа клиента</label>
      <select v-model="v$.clientData.clientGroup" multiple>
        <option value="VIP">VIP</option>
        <option value="Проблемные">Проблемные</option>
        <option value="ОМС">ОМС</option>
      </select>
      <span v-if="!v$.clientData.clientGroup.required" class="error-message"
        >Выберите хотя бы одну группу</span
      >
    </div>

    <!-- Лечащий врач -->
    <div class="form-group">
      <label>Лечащий врач</label>
      <select v-model="v$.clientData.attendingDoctor">
        <option value="Иванов">Иванов</option>
        <option value="Захаров">Захаров</option>
        <option value="Чернышева">Чернышева</option>
      </select>
    </div>

    <!-- Не отправлять СМС -->
    <div class="form-group">
      <div class="SMS-checkbox">
        <input
          v-model="v$.clientData.doNotSendSMS"
          type="checkbox"
          id="doNotSendSMS"
        />
        <label for="doNotSendSMS">Не отправлять СМС</label>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'MainInformation',
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
}
</script>

<style scoped lang="sass"></style>
