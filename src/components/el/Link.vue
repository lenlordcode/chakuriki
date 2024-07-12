<template>
    <a class="inline-block px-6 py-2.5 border-2 rounded-lg duration-500
        text-nowrap xs:text-wrap xs:text-center border-zinc-500 text-zinc-500
        hover:border-black hover:bg-red-600 hover:text-black" :href="{path: url}">
        <slot></slot>
    </a>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Link",
    props: {
        url: {
            type: String,
            default: '',
        }
    }
})
</script>