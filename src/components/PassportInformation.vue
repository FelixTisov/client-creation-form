<template>
  <div class="passport-information">
    <label>Паспортные данные клиента</label>
    <!-- Тип документа -->
    <div class="form-group">
      <select v-model="passport.documentType">
        <option value="Паспорт">Паспорт</option>
        <option value="Свидетельство о рождении">
          Свидетельство о рождении
        </option>
        <option value="Вод. удостоверение">Вод. удостоверение</option>
      </select>
      <span v-if="!v$.passport.documentType.required" class="error-message"
        >Выберите тип докумениа</span
      >
    </div>

    <!-- Серия -->
    <div class="form-group">
      <input
        v-model.trim="passport.series"
        type="text"
        id="series"
        placeholder="Серия"
      />
    </div>

    <!-- Номер -->
    <div class="form-group">
      <input
        v-model.trim="passport.number"
        type="text"
        id="number"
        placeholder="Номер"
      />
    </div>

    <!-- Кем выдан -->
    <div class="form-group">
      <input
        v-model.trim="passport.issuedBy"
        type="text"
        id="issuedBy"
        placeholder="Кем выдан"
      />
    </div>

    <!-- Дата выдачи -->
    <div class="form-group">
      <label>Дата выдачи</label>
      <input
        v-model.trim="passport.issueDate"
        type="date"
        id="birthdate"
        required
        onfocus="(this.type='date')"
      />
      <span v-if="!v$.passport.issueDate.required" class="error-message"
        >Поле обязательно для заполнения</span
      >
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
  name: 'PassportInformation',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      passport: {
        documentType: '', // Тип документа
        series: '', // Серия
        number: '', // Номер
        issuedBy: '', // Кем выдан
        issueDate: '', // Дата выдачи
      },

      isSuccess: false,
    }
  },
  validations() {
    return {
      passport: {
        documentType: { required },
        issueDate: { required },
      },
    }
  },
}
</script>

<style scoped lang="sass"></style>
