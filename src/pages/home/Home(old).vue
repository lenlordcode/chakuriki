<template>
    <!--    ГЛАВНАЯ-->
    <section>
        <!--    О ФЕДЕРАЦИИ-->
<!--        h-[860px] bg-[url('@/assets/home/bg-red-black.png')] bg-cover-->
        <section class="relative h-[920px]">
            <div class="absolute w-screen -z-10 top-0 left-0 h-[920px] bg-[url('@/assets/home/bg-red-black.png')] bg-cover"></div>
            <div class="flex justify-center container mx-auto pt-40">
                <div class="my-auto text-center">
                    <img class="mx-auto size-96" src="@/assets/chakuriki-logo.png" >
                    <div class="text-4xl font-bold">О Федерации</div>
                    <div class="text-2xl">Спорт в боевых искусствах продолжает привлекать внимание и уважение людей со всего мира. Федерация спорта боевых искусств является организацией, объединяющей мастеров и поклонников боевых искусств в стремлении к совершенствованию и соперничеству.</div>
                </div>
            </div>
        </section>
        <!--СТРУКТУРА ФЕДЕРАЦИИ-->
        <section class="bg-white">
            <div>Структура Федерации</div>
            <div class="flex justify-center container mx-auto pt-40">
                <div class="my-auto text-center">
                    <img class="mx-auto size-96" src="@/assets/chakuriki-logo.png" >
                    <div class="text-4xl font-bold">О Федерации</div>
                    <div class="text-2xl">Спорт в боевых искусствах продолжает привлекать внимание и уважение людей со всего мира. Федерация спорта боевых искусств является организацией, объединяющей мастеров и поклонников боевых искусств в стремлении к совершенствованию и соперничеству.</div>
                </div>
            </div>
        </section>
    </section>




</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Home"
})
</script>