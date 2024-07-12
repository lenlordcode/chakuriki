<template>
  <a :href="`/${this.$route.path.split('/').slice(1, -1).join('/')}`"><- Назад</a>
  <div>{{ this.$route.path }}</div>
  <h1>{{ news.title }}</h1>
  <div>
    <div v-html="convertToHtml"></div>
  </div>
</template>

<style scoped>

</style>

<script>
import api from "@/api.js";

export default {
  name: "NewsDetail",
  data () {
    return {
      news: [],
    }
  },
  computed: {
    convertToHtml() {
      return this.news.content;
    }
  },
  mounted () {
    const newsId = this.$route.params.id;
    this.getNews(newsId);
  },

  methods: {
    async getNews (id) {
      this.news = await api.get ('news/'+id);
    },
  }
}
</script>
