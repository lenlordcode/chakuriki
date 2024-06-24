<template>
  <div class="px-6 pt-3 pb-10 bg-white rounded-lg text-black">
    <div class="menu">
      <ul>
        <router-link to="/"><li>ГЛАВНАЯ</li></router-link>
        <router-link to="/news"><li>НОВОСТИ</li></router-link>
        <router-link to="/important-info"><li>ВАЖНАЯ ИНФОРМАЦИЯ</li></router-link>
        <router-link to="/federation"><li>О ФЕДЕРАЦИИ</li></router-link>
        <router-link to="/federation-structure"><li>ЧЛЕНСТВО В ФЕДЕРАЦИИ</li></router-link>
        <router-link to="/calendar"><li>КАЛЕНДАРЬ СОРЕВНОВАНИЙ</li></router-link>
        <router-link to="/results"><li>РЕЗУЛЬТАТЫ СОРЕВНОВАНИЙ</li></router-link>
        <router-link to="/docs"><li>ДОКУМЕНТЫ ФЕДЕРАЦИИ</li></router-link>
        <router-link to="/chakuriki-articles"><li>УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ</li></router-link>
        <router-link to="/anti-doping"><li>АНТИДОПИНГ</li></router-link>
        <router-link to="/requisites"><li>РЕКВИЗИТЫ</li></router-link>
        <router-link to="/contacts"><li>КОНТАКТЫ</li></router-link>
      </ul>
    </div>

    <div class="flex justify-center mb-4">
      <div class="flex gap-2">
        <a href="http://vk.com"><img class="size-10 duration-300 hover:opacity-50" src="@/assets/icon-vk.png"></a>
        <a href="http://web.telegram.org/"><img class="size-10 duration-300 hover:opacity-50" src="@/assets/icon-tg.png"></a>
        <a href="http://ok.ru/"><img class="size-10 duration-300 hover:opacity-50" src="@/assets/icon-ok.png "></a>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="mx-auto">
        <img class="size-36 mb-4 duration-300 hover:opacity-50" src="@/assets/chakuriki-logo.png">
        <img class="size-36 mb-4 duration-300 hover:opacity-50" src="@/assets/chakuriki-logo.png">
        <img class="size-36 mb-4 duration-300 hover:opacity-50" src="@/assets/chakuriki-logo.png">
        <img class="size-36 mb-4 duration-300 hover:opacity-50" src="@/assets/chakuriki-logo.png">
        <img class="size-36 mb-4 duration-300 hover:opacity-50" src="@/assets/chakuriki-logo.png">
      </div>

    </div>

  </div>
</template>

<style scoped>
  .menu {
    @apply mb-4 w-full
  }

  .menu li {
    @apply px-1 py-2 text-nowrap cursor-pointer
  }

  .menu li:hover {
    @apply bg-zinc-100 rounded-lg text-zinc-600
  }

  .active-link {
    @apply bg-zinc-100 rounded-lg text-red-600
  }

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Menu",
    mounted() {
      this.setActiveLink();
    },
    computed: {
      getActiveLink () {
        return window.location.href
      }
    },
    methods: {
      setActiveLink() {
        const links = this.$el.querySelectorAll('a');
        links.forEach(link => {
          if (link.href === window.location.href) {
            this.$el?.querySelector('.active-link')?.classList.remove();
            link.querySelector('li').classList.add ('active-link');
          }
        });
      }
    }
})
</script>