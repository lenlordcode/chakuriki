<template>
  <button>
      <slot name="row" :callback="test"></slot>
  </button>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
    methods: {
      test () {
        console.log ('test');
      }
    },


})
</script>