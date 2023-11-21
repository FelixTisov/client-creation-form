<template>
  <div class="adress-information">
    <div class="form-group label-group"><label>Адрес клиента</label></div>

    <!-- Индекс -->
    <div class="form-group">
      <input
        v-model.trim="adress.index"
        type="text"
        id="index"
        placeholder="Индекс"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Страна -->
    <div class="form-group">
      <input
        v-model.trim="adress.country"
        type="text"
        id="country"
        placeholder="Страна"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Область -->
    <div class="form-group">
      <input
        v-model.trim="adress.region"
        type="text"
        id="region"
        placeholder="Область"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Город -->
    <div class="form-group">
      <input
        v-model.trim="adress.city"
        type="text"
        id="city"
        placeholder="Город*"
      />
      <div class="form-group-footer">
        <span v-if="v$.adress.city.$error" class="error-message"
          >Обязательное поле</span
        >
      </div>
    </div>

    <!-- Улица -->
    <div class="form-group">
      <input
        v-model.trim="adress.street"
        type="text"
        id="street"
        placeholder="Улица"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Дом -->
    <div class="form-group">
      <input
        v-model.trim="adress.house"
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
  name: 'AdressInformation',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      adress: {
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
      adress: {
        city: { required },
      },
    }
  },
}
</script>

<style lang="sass"></style>
