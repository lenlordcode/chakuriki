<template>
    <div class="absolute top-0 w-full z-20">
        <div class="container flex mx-auto justify-between py-4 gap-6">
            <router-link to="/">
                <div class="cursor-pointer flex gap-5">
                    <img class="size-24" src="@/assets/chakuriki-logo.png">
                    <div class="my-auto font-semibold">ФЕДЕРАЦИЯ<br>ЧАКУРИКИ</div>
                </div>
            </router-link>
            <el-modal>
                <div>test</div>
            </el-modal>
            <div class="hidden xl:flex 2xl:flex
                        justify-center gap-4 my-auto font-semibold text-xs 2xl:text-base">
                            <ul class="header__list">
                                <router-link to="/"><li @mousemove="">Новости</li></router-link>
                                <router-link to="/"><li>Медиа</li></router-link>
                                <router-link to="/"><li>События и <br>соревнования</li></router-link>
                                <router-link to="/"><li>Команда</li></router-link>
                                <router-link to="/federation"><li>О Федерации</li></router-link>
                                <router-link to="/"><li>Документы</li></router-link>
                                <router-link to="/"><li>Антидопинг</li></router-link>
                                <router-link to="/"><li>О гимнастике</li></router-link>
                                <router-link to="/"><li>Контакты</li></router-link>
                            </ul>
                            <input class="h-6" placeholder="Поиск...">
                        </div>
            <svg version="1.0" class="flex xl:hidden 2xl:hidden size-24" xmlns="http://www.w3.org/2000/svg"
                 width="900.000000pt" height="900.000000pt" viewBox="0 0 900.000000 900.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
                    <path d="M1590 6015 l0 -335 2910 0 2910 0 0 335 0 335 -2910 0 -2910 0 0 -335z"/>
                    <path d="M1595 4827 c-3 -6 -4 -158 -3 -337 l3 -325 2905 0 2905 0 0 335 0 335 -2903 3 c-2327 2 -2904 0 -2907 -11z"/>
                    <path d="M1590 2985 l0 -335 2910 0 2910 0 0 335 0 335 -2910 0 -2910 0 0 -335z"/>
                </g>
            </svg>
        </div>
    </div>
</template>

<style scoped>
    .header__list {
        @apply flex gap-4
    }

    .header__list li{
        @apply cursor-pointer text-nowrap
    }

    .header__list li:before{
        @apply content-[''] absolute inline-block size-[0.5px] h-5 top-0 bg-red-500 duration-500;
    }

    .header__list li:before:hover{
        @apply h-9
    }

    .header__list li:hover{
        @apply text-red-700
    }
</style>

<script>
import {defineComponent} from 'vue'
import Modal from "@/components/el/Modal.vue";

export default defineComponent({
    name: "Header",
    components: {Modal}
})
</script>