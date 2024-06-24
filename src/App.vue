<template>
<!--    <Header></Header>-->
<!--    <Container>-->
<!--        <router-view></router-view>-->
<!--    </Container>-->
<!--    <Footer></Footer>-->
  <div class="container mx-auto relative">
    <div class="block xl:hidden absolute top-5 right-20">
      <MobMenu></MobMenu>
    </div>
  </div>
  <Header></Header>
  <div class="container flex justify-between gap-5 mx-auto">
    <Menu class="hidden xl:block"></Menu>
    <div class="w-full px-6 pt-3 pb-10 bg-white rounded-lg text-black">
      <div>Главная</div>
      <router-view></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>

</style>

<script setup>
import Header from "./shared/Header/Header.vue";
import Container from "./shared/Container/Container.vue";
import Footer from "./shared/Footer/Footer.vue";
import Menu from "@/shared/Menu/Menu.vue";
import MobMenu from "@/shared/Menu/MobMenu.vue";
</script>