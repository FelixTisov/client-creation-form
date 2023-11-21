<template>
  <div class="passport-information">
    <!-- Тип документа -->
    <div class="form-group label-group">
      <label>Тип документа*</label>
    </div>
    <div class="form-group">
      <div class="dropdown-container">
        <DropDown @optionChanged="changeDocumentType">
          <template
            v-slot:dropdown-items="{
              clickOption: { changeOption },
              option: { currentOption },
            }"
          >
            <DropdownItem
              title="Паспорт"
              :option="currentOption"
              @clickOption="changeOption"
            />
            <DropdownItem
              title="Свидетельство о рождении"
              :option="currentOption"
              @clickOption="changeOption"
            />
            <DropdownItem
              title="Вод. удостоверение"
              :option="currentOption"
              @clickOption="changeOption"
            />
          </template>
        </DropDown>
      </div>
      <div class="form-group-footer">
        <span v-if="v$.passport.documentType.$error" class="error-message"
          >Обязательное поле</span
        >
      </div>
    </div>

    <!-- Серия -->
    <div class="form-group">
      <input
        v-model.trim="passport.series"
        type="text"
        id="series"
        placeholder="Серия"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Номер -->
    <div class="form-group">
      <input
        v-model.trim="passport.number"
        type="text"
        id="number"
        placeholder="Номер"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Кем выдан -->
    <div class="form-group">
      <input
        v-model.trim="passport.issuedBy"
        type="text"
        id="issuedBy"
        placeholder="Кем выдан"
      />
      <div class="form-group-footer"></div>
    </div>

    <!-- Дата выдачи -->
    <div class="form-group">
      <label>Дата выдачи*</label>
      <input
        v-model.trim="passport.issueDate"
        type="date"
        id="birthdate"
        onfocus="(this.type='date')"
      />
      <div class="form-group-footer">
        <span v-if="v$.passport.issueDate.$error" class="error-message"
          >Обязательное поле</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import DropDown from './dropdown/DropDown.vue'
import DropdownItem from './dropdown/DropdownItem.vue'

export default {
  name: 'PassportInformation',
  components: { DropDown, DropdownItem },
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
  methods: {
    changeDocumentType(option) {
      this.passport.documentType = option
    },
  },
}
</script>

<style scoped lang="sass"></style>
