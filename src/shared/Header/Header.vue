<template>
  <div class="">
    <img class="mx-auto" src="@/assets/headers.png">
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