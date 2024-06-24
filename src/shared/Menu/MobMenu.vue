<template>
  <div class="absolute z-50" @click="toggleMenu">
    <div ref="burger" class="menu__button">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <teleport to="body">
    <transition name="slide">
      <div v-if="modalWindow" class="menu">
        <ul @click="toggleMenu">
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
    </transition>

  </teleport>
</template>

<style scoped>
  .menu {
    @apply fixed flex items-center justify-center h-full w-full left-0 top-0 bg-white z-10 duration-300
  }

  .menu li {
    @apply text-black text-xl xs:text-lg font-bold xs:font-semibold p-1
  }

  .menu li:hover {
    @apply bg-red-500
  }

  .slide-enter-active, .slide-leave-active {
    @apply duration-300 transform -translate-y-full
  }

  .slide-enter, .slide-leave-to {
    @apply transform -translate-y-full
  }

  .menu__button {
    @apply size-auto
  }

  .menu__button span {
    @apply block transition-all h-1 bg-red-500 w-10 m-2
  }

  .menu__button-first {
    @apply translate-y-4 rotate-45
  }

  .menu__button-middle {
    @apply scale-0
  }

  .menu__button-last {
    @apply -translate-y-2 -rotate-45
  }


</style>

<script>
import modal from "@/components/el/Modal.vue";

export default {
  name: "MobMenu",
  data () {
    return {
      modalWindow: false,
    }
  },
  methods: {
    toggleMenu () {
      const burger = this.$refs.burger.querySelectorAll('span');
      this.modalWindow = !this.modalWindow;
      if (burger[0].classList.contains('menu__button-first')){
        burger[0].classList.remove('menu__button-first');
        burger[1].classList.remove('menu__button-middle');
        burger[2].classList.remove('menu__button-last');
      }else{
        burger[0].classList.add('menu__button-first');
        burger[1].classList.add('menu__button-middle');
        burger[2].classList.add('menu__button-last');
      }
    },
  }
}
</script>
