<template>
  <div class="dropdown" ref="mydropdown">
    <div class="dropdown_header" @click="dropdownHandler">
      <input
        v-model="currentOption"
        type="text"
        id="attendingDoctor"
        readonly
      />
      <img
        src="./svg/arrow-down.svg"
        alt="dropdown icon"
        class="dropdown-icon"
      />
    </div>
    <div v-if="isDropdown" class="dropdown_body">
      <slot
        name="dropdown-items"
        :option="{ currentOption }"
        :clickOption="{ changeOption }"
      ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  data() {
    return {
      currentOption: '',
      isDropdown: false,
    }
  },
  mounted() {
    window.addEventListener('click', this.close)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.close)
  },
  methods: {
    // Закрыть выпадающий список по клику снаружи
    close(event) {
      if (!this.$refs.mydropdown?.contains(event.target)) {
        this.isDropdown = false
      }
    },
    // Открыть или закрыть выпадающий список
    dropdownHandler() {
      this.isDropdown = !this.isDropdown
    },
    // Изменить выбор
    changeOption(option) {
      this.currentOption = option
      this.$emit('optionChanged', option)
      if (this.type !== 'multiple') this.dropdownHandler()
    },
  },
  props: {
    type: String,
    currentValue: Array,
  },
  watch: {
    currentValue(newValue) {
      this.currentOption = newValue.toString()
    },
  },
}
</script>

<style scoped lang="sass">
.dropdown
  position: absolute
  display: flex
  flex-direction: column
  width: 100%
  height: fit-content
  background-color: #fff
  border-radius: 8px
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2)
  user-select: none

  .dropdown_header
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    min-height: 36px
    max-height: 36px
    padding-right: 6px
    box-sizing: border-box
    cursor: pointer
    z-index: 6

    input[type="text"]
      width: 90% !important
      border: none !important
      background-color: transparent !important
      box-shadow: none !important
      cursor: pointer
      z-index: 7

    .dropdown-icon
      width: 12px
      height: 5.67px
      cursor: pointer

  .dropdown_body
    position: relative
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    flex-direction: column
    margin-top: 40px
    width: 100%
    height: 132px
    background-color: white
    border-radius: 15px
    z-index: 8
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2)
@media (max-width: 640px)
  .dropdown
    width: 100%
    height: fit-content
    .dropdown_header
      min-height: 47px
      max-height: 47px

      input[type="text"]

      .dropdown-icon
        width: 15px
        height: 8.67px
    .dropdown_body
      margin-top: 56px
      height: 132px
</style>
