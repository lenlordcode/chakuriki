<template>
  <div v-if="totalPages>1" class="flex justify-center w-full mt-10">
    <div v-if="currentPage > 1" class="ml-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200"
            @click="changePage(currentPage - 1)"><<</div>
    <span class="ml-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200" v-for="page in displayedPages" :key="page"
          :class="{ 'bg-red-600': page === currentPage}" @click="changePage(page)">{{ page }}</span>
    <div v-if="currentPage < totalPages" class="ml-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200" @click="changePage(currentPage + 1)">>></div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    maxVisiblePages: {
      type: Number,
      default: 5
    }
  },
  computed: {
    displayedPages() {
      const start = Math.max(1, this.currentPage - Math.floor(this.maxVisiblePages / 2));
      const end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);
      // console.log (end-start);
      // if (end-start === 3) {
      //   console.log (start);
      //   start = start-4;
      // }
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.$emit('page-changed', page);
      }
    }
  }
};
</script>