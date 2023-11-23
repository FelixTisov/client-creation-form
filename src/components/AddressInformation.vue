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
}
</script>

<style lang="sass"></style>
