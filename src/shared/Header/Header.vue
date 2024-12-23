<template>
  <div class="">
    <div class="mx-auto flex justify-center my-4 w-64 h-56 gap-[20%]">
      <img src="@/assets/man-figheter.png">
      <img src="@/assets/chakuriki-new-logo.png">
      <img class="scale-x-[-1]" src="@/assets/man-figheter.png">
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'
import Modal from "@/components/el/Modal.vue";

export default defineComponent({
    name: "Header",
    components: {Modal}
})
</script>