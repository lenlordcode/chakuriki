<template>
  <footer class="container mx-auto mt-10 text-sm">
    <div class="bg-gradient-to-r from-yellow-400 to-red-600 via-transparent text-white px-6 py-3 rounded-lg">

      <div class="flex justify-center gap-6 mb-6">
        <img class="size-24" src="@/assets/chakuriki-logo.png">
        <div class="font-bold my-auto">ФЕДЕРАЦИЯ ЧАКУРИКИ</div>
      </div>

      <div class="flex justify-between sm:block xs:block ">
        <div class="text-black sm:text-white xs:text-white">© Общероссийская Общественная организация <br> "Федерация ЧАКУРИКИ"<br> 2004-2023</div>
        <div>АДРЕС: <br>123022, г. Москва, ул. Большая Декабрьская, дом 10, ст. 2. <br>(станция метро улица 1905 года)</div><div>
          <div>
            <div>ТЕЛЕФОН:</div>
            <div class="font-semibold">+7 (495) 787-28-39</div>
          </div>
          <div>
            <div>E-MAIL:</div>
            <div class="font-semibold">HAKURIKIRUSSIA@GMAIL.COM</div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-4">
        <div class="flex gap-2 mt-2">
          <a href="http://vk.com"><img class="size-10" src="@/assets/icon-vk.png"></a>
          <a href="http://web.telegram.org/"><img class="size-10" src="@/assets/icon-tg.png"></a>
          <a href="http://ok.ru/"><img class="size-10" src="@/assets/icon-ok.png"></a>
        </div>
      </div>

    </div>

  </footer>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Footer"
})
</script>
