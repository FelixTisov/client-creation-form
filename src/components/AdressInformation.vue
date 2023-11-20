<template>
  <div class="adress-information">
    <label>Адрес клиента</label>
    <!-- Индекс -->
    <div class="form-group">
      <input
        v-model.trim="adress.index"
        type="text"
        id="index"
        placeholder="Индекс"
      />
    </div>

    <!-- Страна -->
    <div class="form-group">
      <input
        v-model.trim="adress.country"
        type="text"
        id="country"
        placeholder="Страна"
      />
    </div>

    <!-- Область -->
    <div class="form-group">
      <input
        v-model.trim="adress.region"
        type="text"
        id="region"
        placeholder="Область"
      />
    </div>

    <!-- Город -->
    <div class="form-group">
      <input
        v-model.trim="adress.city"
        type="text"
        id="city"
        required
        placeholder="Город*"
      />
      <span
        v-if="!v$.adress.city.$pending && !v$.adress.city.required"
        class="error-message"
        >Поле обязательно для заполнения</span
      >
    </div>

    <!-- Улица -->
    <div class="form-group">
      <input
        v-model.trim="adress.street"
        type="text"
        id="street"
        placeholder="Улица"
      />
    </div>

    <!-- Дом -->
    <div class="form-group">
      <input
        v-model.trim="adress.house"
        type="text"
        id="house"
        placeholder="Дом"
      />
    </div>

    <div class="comment-container">
      <p>* - обязательное поле</p>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

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
