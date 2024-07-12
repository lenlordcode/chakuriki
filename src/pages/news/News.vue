<template>
  <section class="mb-20">
    <h1 class="font-bold text-red-600 mb-4">Новости</h1>
    <div class="grid grid-cols-3 sm:grid-cols-2 xs:inline-block gap-6">
      <div v-for="item in paginatedContent" class="xs:mb-8">
        <img class="size-24 mx-auto mb-2"
             :src="item.miniature ? item.miniature:'src/assets/chakuriki-logo.png'">
        <div>{{ item.miniature }}</div>
        <div class="bg-zinc-100 p-4 rounded-lg mb-4">
          <p class="text-xs mb-2">{{dayjs(item.date).locale('ru').format('D MMMM YYYY [г.]')}}</p>
          <p class="font-bold">{{item.title}}</p>
        </div>
        <div class="flex justify-center">
          <el-link :href="'/chakuriki/#/news/'+item.id">Подробнее</el-link>
        </div>
      </div>
    </div>
    <el-paginated :total-pages="Math.ceil(news.length/9)" :current-page="currentPage" @page-changed="onPageChanged" />
  </section>
</template>

<style scoped>

</style>

<script>
import api from "@/api.js";
import dayjs from "dayjs";

export default {
  name: "News",
  data () {
    return {
      currentPage: 1,
      news: [],
    }
  },
  computed: {
    paginatedContent() {
      const start = (this.currentPage - 1)*9;
      const end = start + 9;
      return this.news.length>9 ? this.news.slice(start, end): this.news;
    },
  },
  mounted() {
    this.getNewsData ();
  },
  methods: {
    dayjs,
    async getNewsData () {
      this.news = await api.get ('news', 'tess')
    },
    onPageChanged(page) {
      this.currentPage = page;
      // Загрузка данных для выбранной страницы
    }
  }
}
</script>
