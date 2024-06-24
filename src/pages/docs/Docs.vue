<template>
  <section class="docs">
    <h1 class="font-bold text-red-600 mb-4">Документы Федерации Чакурики</h1>
    <section class="mb-20">
      <h2 class="font-bold text-red-600">2024</h2>
      <div class="">
        <div v-for="item in paginatedContent" class="xs:mb-8">
          <div class="w-full px-4 py-4 mb-6 bg-zinc-100 text-center rounded-lg hover:bg-zinc-200">
            <a :href="item.url">{{ item.name }}</a>
          </div>
        </div>
      </div>
      <el-paginated :total-pages="Math.ceil(docs.length/9)" :current-page="currentPage" @page-changed="onPageChanged" />
    </section>
    <section>
      <h2 class="font-bold text-red-600">Архив</h2>
      <ul>
        <li>2023</li>
        <li>2022</li>
      </ul>
    </section>
  </section>
</template>
<style scoped>
  .docs ul {
    @apply pl-5
  }
  .docs li{
    @apply list-disc
  }
</style>

<script>
export default {
  name: "Docs",
  data () {
    return {
      currentPage: 1,
      docs: [
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
        {'name': 'Отчет о состоявшихся чемпионате и первенстве СКФО по виду спорта "кикбоксинг" в дисциплинах "фулл-контакт" и "К1" (с/м №№ 2095050017020790, 2095050018020789) 20-25.02.2024 г., в г. Избербаш', 'url':'/test'},
      ]
    }
  },
  computed: {
    paginatedContent() {
      const start = (this.currentPage - 1)*9;
      const end = start + 9;
      return this.docs.slice(start, end);
    },
  },
  methods: {
    onPageChanged(page) {
      this.currentPage = page;
    }
  }
}
</script>
