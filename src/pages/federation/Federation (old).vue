<template>
  <section>
      <section class="relative h-[500px]">
          <div class="absolute w-screen -z-10 top-0 left-0 h-[500px] bg-[url('@/assets/chakuriki-people.png')] bg-cover saturate-50 brightness-50"></div>
          <div class="container mx-auto pt-40">
              <div class="text-6xl font-bold mb-10">О Федерации</div>
              <Navigator />
          </div>
      </section>
<!--      Структура федерации-->
      <section class="bg-zinc-300 text-black z-10 py-12">
          <div class="container mx-auto">
              <div class="mx-auto text-xl">
                  <div class="mb-10">Официальный веб-сайт региональной общественной организации развития кикбоксинга  общественной организации развития кикбоксинга и тайландского бокса “ФЕДЕРАЦИЯ ЧАКУРИКИ”.</div>
                  <div class="mb-10">Информирование посетителей о деятельности РОО развития кикбоксинг посетителей о деятельности РОО развития кикбоксинга и тайландского бокса “ФЕДЕРАЦИЯ ЧАКУРИКИ”. Информирование посетителей о деятельности РОО развития кикбоксинга и тайландского бокса “ФЕДЕРАЦИЯ ЧАКУРИКИ”.</div>
              </div>
              <div class="bg-white px-20 py-10 flex justify-center gap-10">
                  <div>
                      <img class="size-96 rounded-full" src="@/assets/oleg.png">
                  </div>
                  <div class="my-auto">
                      <div class="font-semibold text-6xl">Шишляков</div>
                      <div class="font-semibold text-5xl">Олег Александрович</div>
                      <div class="text-2xl">Президент Федерации Чакурики </div>
                  </div>
              </div>
          </div>
      </section>
<!--      Цели и задачи Федерации-->
      <section class="relative py-20">
          <div class="container mx-auto">
              <div class="text-6xl font-bold mb-10">Цели и задачи Федерации</div>
              <ul class="text-black">
                  <li class="inline-block w-full rounded-3xl bg-yellow-400 px-10 py-10 mb-4">Увеличение популярности и признания: Продвижение кикбоксинга и тайландского бокса как востребованных и уважаемых видов спорта, привлечение большего числа участников и болельщиков.</li>
                  <li class="inline-block w-full rounded-3xl bg-yellow-400 px-10 py-10 mb-4">Развитие профессионализма: Поддержка молодых спортсменов, обучение и повышение квалификации тренеров, судей и администраторов, создание благоприятных условий для соревнований.</li>
                  <li class="inline-block w-full rounded-3xl bg-yellow-400 px-10 py-10 mb-4">Международное сотрудничество: Участие в международных турнирах, организация обменов опытом с другими федерациями по всему миру, продвижение культуры кикбоксинга и тайландского бокса на глобальном уровне.</li>
                  <li class="inline-block w-full rounded-3xl bg-yellow-400 px-10 py-10 mb-4">Увеличение уровня безопасности: Внедрение новейших методик и стандартов безопасности при занятиях и проведении соревнований, защита здоровья спортсменов.</li>
                  <li class="inline-block w-full rounded-3xl bg-yellow-400 px-10 py-10 mb-4">Продвижение молодежного спорта: Популяризация кикбоксинга и тайландского бокса среди молодежи, организация образовательных программ и мероприятий для поддержки и развития юных спортсменов.</li>
              </ul>
          </div>
      </section>
<!--      История федерации-->
      <section class="bg-zinc-300 text-black py-20">
          <div class="container mx-auto">
              <div class="text-6xl font-bold mb-10">История Федерации</div>
              <div class="mb-10">ТЕКСТ</div>
              <img class="w-full sepia" src="@/assets/chakuriki-history.png">
          </div>
      </section>
      <!--      Офицальные документы-->
      <section class="bg-white text-black py-20">
          <div class="container mx-auto">
              <div class="text-6xl font-bold mb-10">Офицальные документы</div>
              <div class="inline-grid">
                  <div class="mb-10">На нашем сайте вы можете ознакомиться со всеми необходимыми документами, регламентирующими работу федерации</div>
                  <el-link class="border-black mr-4 mb-6" url="/">Документы регламентирующие деятельность Федерации</el-link>
                  <el-link class="border-black mr-4 mb-6" url="/">Руководства и стандарты при проведении соревнований</el-link>
                  <el-link class="border-black mr-4 mb-6" url="/">Устав федерации</el-link>
              </div>
          </div>
      </section>
<!--      Школы кикбоксинга и тайландского бокса-->
<!--      Региональные Федерации-->
<!--      Устав-->
  </section>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'
import Navigator from "@/shared/navigator/Navigator.vue";

export default defineComponent({
    name: "Federation",
    components: {Navigator}
})
</script>