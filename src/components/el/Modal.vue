<template>
  <teleport to="body">
    <div v-if="modelValue" class="fixed h-full w-full left-0 top-0 bg-amber-950 bg-opacity-50 flex justify-center items-center z-50">
      <div class="absolute top-4 right-4 cursor-pointer text-xl" @click="$emit('update:modelValue', false)" >&#10006;</div>
      <div class="bg-white p-10">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Modal",
    props : {
        modelValue: {
            type: Boolean,
            default: false,
        },

    },
    methods: {
    },
})
</script>
