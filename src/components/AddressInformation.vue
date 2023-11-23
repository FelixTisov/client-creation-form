<template>
  <div class="address-information">
    <div class="form-group label-group"><label>Адрес клиента</label></div>

    <!-- Индекс -->
    <div class="form-group">
      <input
        v-model.trim="address.index"
        type="text"
        id="index"
        placeholder="Индекс"
        @input="checkIndex"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Страна -->
    <div class="form-group">
      <input
        v-model.trim="address.country"
        type="text"
        id="country"
        placeholder="Страна"
        @input="checkCountryAndRegion('country')"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Область -->
    <div class="form-group">
      <input
        v-model.trim="address.region"
        type="text"
        id="region"
        placeholder="Область"
        @input="checkCountryAndRegion('region')"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Город -->
    <div class="form-group">
      <input
        v-model.trim="address.city"
        type="text"
        id="city"
        placeholder="Город*"
        @input="checkCityAndStreet('city')"
      />
      <div class="form-group-footer">
        <span v-if="v$.address.city.$error" class="error-message"
          >Обязательное поле</span
        >
      </div>
    </div>

    <!-- Улица -->
    <div class="form-group">
      <input
        v-model.trim="address.street"
        type="text"
        id="street"
        placeholder="Улица"
        @input="checkCityAndStreet('street')"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Дом -->
    <div class="form-group">
      <input
        v-model.trim="address.house"
        type="text"
        id="house"
        placeholder="Дом"
        @input="checkHouse"
      />
      <div class="form-group-footer"></div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'AddressInformation',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      address: {
        index: '', // Индекс
        country: '', // Страна
        region: '', // Область
        city: '', // Город
        street: '', // Улица
        house: '', // Дом
      },

      isSuccess: false,
    }
  },
  validations() {
    return {
      address: {
        city: { required },
      },
    }
  },
  methods: {
    // Проверка почтового индекса
    checkIndex() {
      let value = this.address.index
      let formatted = value.replace(
        /[^A-Za-z0-9\[\]-]|-{2,}| (?= )| -(?= )| (?=-)| (?=\s)|-(?=\s)|^[\s-]/g,
        (match) =>
          match[0] === '-' || match[0] === '[' || match[0] === ']'
            ? match[0]
            : ' '
      )
      this.address.index = formatted
    },
    // Проверка страны и региона
    checkCountryAndRegion(field) {
      let value = this.address[field]
      let formatted = value.replace(
        /[^a-zA-Zа-яА-ЯёЁ'-]|([-'])(?=\s)|(?<=([-']))(?=[-'s])|(?<=([-']))(?=\s)|(?<![-'])([-']){2}|(^|(?<=[-'s]))(?=[-'s])|(?<=[-'s])(?=[-'s])|(?<=[-'s])(\s)(?=[-'s])|^[\s-'s]/g,
        (match) => (match[0] === '-' || match[0] === "'" ? match[0] : ' ')
      )
      this.address[field] = formatted
    },
    // Проверка города и улицы
    checkCityAndStreet(field) {
      let value = this.address[field]
      let formatted = value.replace(
        /[^a-zA-Zа-яА-ЯёЁ'0-9-]|([-'])(?=\s)|(?<=([-']))(?=[-'0-9\s])|(?<=([-']))(?=\s)|(?<![-'])([-']){2}|(^|(?<=[-'0-9\s]))(?=[-'0-9])|(?<=[-'0-9])(?=[-'0-9])|(?<=[-'0-9])(\s)(?=[-'0-9])|^[\s-'0-9]/g,
        (match) => (match[0] === '-' || match[0] === "'" ? match[0] : ' ')
      )
      this.address[field] = formatted
    },
    // Проверка номера дома
    checkHouse() {
      let value = this.address.house
      let formatted = value.replace(/[^A-Za-zА-Яа-я0-9]/g, '')
      this.address.house = formatted
    },
  },
}
</script>

<style lang="sass"></style>
