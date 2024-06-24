<template>
    <div ref="nav" class="inline-block sm:flex sm:overflow-x-scroll xs:flex xs:overflow-x-scroll">
        <el-link class="mr-4 mb-6" url="/federation">О федерации</el-link>
        <el-link class="mr-4 mb-6" url="/">Структура федерации</el-link>
        <el-link class="mr-4 mb-6" url="/">Офицальный документ</el-link>
        <el-link class="mr-4 mb-6" url="/">История федерации</el-link>
        <el-link class="mr-4 mb-6" url="/">Школа кикбоксинга и тайландского бокса</el-link>
        <el-link class="mr-4 mb-6" url="/">Региональные федерации</el-link>
        <el-link class="mr-4 mb-6" url="/">Устав федерации</el-link>
    </div>
</template>

<style scoped>
    .active-link {
        @apply bg-yellow-400 border-yellow-400 text-black
    }
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Navigator",
    mounted() {
        this.setActiveLink();
    },
    methods: {
        setActiveLink() {
            const links = this.$el.querySelectorAll('a');
            links.forEach(link => {
                if (link.href === window.location.href) {
                    link.classList.add('active-link');
                }
            });
        }
    }
})
</script>
