<template>
<!--  container mx-auto pt-40-->
  <div class="mx-auto">
      <slot></slot>
  </div>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Container"
})
</script>