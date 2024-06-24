<template>
  <h1 class="font-bold text-red-600 mb-20">Главная</h1>
  <section class="mb-20">
    <div class="flex justify-between gap-6 sm:block sm:text-center xs:block xs:text-center">
      <div>
        <div class="mb-2 mx-auto rounded-full size-56 sm:size-34 xs:size-24 bg-cover bg-center bg-[url('@/assets/president-chakuriki.png')] shadow-2xl"></div>
        <div class="text-center">
          <p class="text-xs">Президент</p>
          <p class="italic">Хвостик Александра Александровна</p>
        </div>
      </div>
      <div class="w-2/3 sm:w-full xs:w-full">
        <h2 class="text-center mb-4">Дорогие друзья!</h2>
        <div ref="scrollingText" class="overflow-hidden text-xl h-96 mb-4" @mousedown="this.autoScrolling">Искренне рады приветствовать на официальном Интернет-представительстве Федерации «Чакурики» кикбоксинга и таиландского бокса России всех любителей, профессиональных спортсменов , тех кто ценит спорт.
          Стиль Чакурики собрал в себя все лучшее из мира единоборст. Расзвитие тела и духа, мышления, поведения закладывается с ранних лет. Поэтому особое внимание мы решили уделить развитию детского спорта в России.
          <br>
          Важно не только привлечь детей в секции, но и удержать в них на долгие годы!
          Спорт – это лишение, дисциплина и тяжелый труд. Любой тренер подтвердит , что желание является основополагающим в процессе тренировок, усердие всегда держится на стимуле. Чаще всего таким стимулом является желанием быть похожим на своего тренера или какого-либо спортсмена и повторить его успех на Олимпийских играх или чемпионатах. Иметь свой личный успех на глазах других людей.
          У детского спорта в наши дни серьезные противники в виде гаджетов и виртуальной реальности. У детей перед глазами должен быть пример успеха, основанного на труде и стойкости духа.
          <br>
          Детский спорт – это не только про здоровье, это и про воспитании нации.
          Наш клуб объединит в своих стенах детей, их родителей, титулованных спортсменов, готовых передавать свой опыт.
          Надеюсь, что наш официальный сайт «Федерации Чакурики» станет интересным и полезным ресурсом не только для спортсменов, тренеров, болельщиков, а так же широкого круга любителей этого прекрасного виде спорта.
          Давайте вместе пожелаем успехов нашим спортсменам, в предстоящих соревнованиях, детям терпения и мужества, а всем посетителям сайта – крепкого здоровья, оптимизма и неиссякаемой энергии, которрые дарит нам спорт.</div>
        <div class="font-semibold">Президент Федерации кикбоксинга и таиландского спорта «Чакурики»</div>
      </div>


    </div>
  </section>
  <section class="mb-20">
    <h2 class="font-bold text-red-600 mb-4">Внимание, важная информация</h2>
    <div class="grid grid-cols-3 sm:grid-cols-2 xs:inline-block gap-6">
      <div v-for="item in this.information" class="xs:mb-8">
        <img class="size-24 mx-auto mb-2" src="@/assets/chakuriki-logo.png">
        <div class="bg-zinc-100 p-4 rounded-lg mb-4">
          <p class="text-xs mb-2">{{item.date}}</p>
          <p class="font-bold">{{item.title}}</p>
        </div>
        <div class="flex justify-center">
          <el-link>Подробнее</el-link>
        </div>
      </div>
    </div>
    <div class="my-10">
      <el-link url="/important-info">ВСЯ ВАЖНАЯ ИНФОРМАЦИЯ</el-link>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-red-600 mb-4">Новости</h2>
    <div class="grid grid-cols-3 sm:grid-cols-2 xs:inline-block gap-6">
      <div v-for="item in this.information">
        <img class="size-24 mx-auto mb-2" src="@/assets/chakuriki-logo.png">
        <div class="bg-zinc-100 p-4 rounded-lg mb-4">
          <p class="text-xs mb-2">{{item.date}}</p>
          <p class="font-bold">{{item.title}}</p>
        </div>
        <div class="flex justify-center">
          <el-link class="">Подробнее</el-link>
        </div>
      </div>
    </div>
    <div class="my-10">
      <el-link url="/news">ВСЕ НОВОСТИ</el-link>
    </div>
  </section>
</template>

<style scoped>

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Home",
    data() {
      return {
        scrollingInfo: false,
        information: [
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
            {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
        ],
        news: [
          {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
          {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
          {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
          {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
          {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
          {'title': 'Вызов людей в сборную тестовая информация', 'date': '30 мая 2024'},
        ]
      }
    },
    methods: {
      autoScrolling() {
        const text = this.$refs.scrollingText;
        if (!this.scrollingInfo) {
          this.scrollingInfo = true;
          this.scrollInterval = setInterval(() => {
            text.scrollTop += 1;
          }, 100);
        }else{
          text.scrollTop = 0;
        }
      },
    },


})
</script>