<template>
  <div
    class="drop-item"
    :class="{
      'drop-item_current':
        (option === title && type !== 'multiple') ||
        (isSelected === true && type === 'multiple'),
    }"
    @click="changeOption(title)"
  >
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'DropdownItem',
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    changeOption(option) {
      this.$emit('clickOption', option)
      if (this.type === 'multiple') this.isSelected = !this.isSelected
    },
  },
  props: {
    title: String,
    option: String,
    type: String,
  },
}
</script>

<style scoped lang="sass">
.drop-item
  display: flex
  align-items: center
  height: 30px
  width: 85%
  cursor: pointer
  border-radius: 5px
  padding-left: 4px

  &:hover
    background-color: #f3f3f3

  p
    font-family: 'Roboto'
    font-size: 14px
    font-weight: 300
    color: #000

.drop-item_current
  p
    color: #50A49A
</style>
