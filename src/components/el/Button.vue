<template>
  <button>
      <slot></slot>
  </button>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button"
})
</script>