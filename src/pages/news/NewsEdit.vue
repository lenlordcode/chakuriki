<template>
  <form>
    <div class="mb-4">
      <h2 class="font-bold text-red-600">Введите заголовок</h2>
      <input class="w-full p-2 border-black border-[1px]" placeholder="Введите заголовок" v-model="title">
    </div>
    <div class="mb-4">
      <h2>Редактора контента</h2>
      <div ref="editor"></div>
    </div>
    <div class="mb-4">
      <h2>Вставьте изображение для новости:</h2>
      <div class="text-xs opacity-80 text-red-600">*если не будет изображения, то поставится стандартное фото*</div>
      <input type="file" @change="onFileChange">
    </div>
    <div class="mb-4">
      <h2>Выберите дату новости</h2>
      <input class="p-2 border-[1px] border-black" type="date" v-model="date">
    </div>
    <div class="flex gap-8 ">
      <button class="p-2 border-[1px] border-black hover:opacity-80 active:opacity-50" @click="sendContent">Отправить</button>
      <button class="p-2 border-[1px] border-black hover:opacity-80 active:opacity-50" @click="previewContent">Предпросмотр</button>
    </div>
  </form>
  <div v-if="preview">
    <span v-html="convertToHtml"></span>
  </div>
</template>

<style scoped>

</style>

<script>
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ru.js';
import 'froala-editor/js/third_party/font_awesome.min.js';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import api from "@/api.js";

export default {
  name: "NewsEdit",
  data() {
    return {
      title: '',
      content: '',
      miniature: '',
      date: '',

      froalaEditorInstance: '',
      preview: false,
    }
  },
  computed: {
    convertToHtml() {
      return this.content;
    }
  },
  mounted() {
    this.froalaEditorInstance = new FroalaEditor(this.$refs.editor);
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.miniature = file;
    },

    previewContent () {
      this.preview = !this.preview;
      if (this.froalaEditorInstance) {
        var content = this.froalaEditorInstance.html.get();
        this.content = content;
      } else {
        console.error('Froala Editor instance is not initialized.');
      }
    },

    async sendContent() {
      if (this.froalaEditorInstance) {
        var content = this.froalaEditorInstance.html.get();

        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('content', content);
        formData.append('miniature', this.miniature); // Assuming this.miniature is the File object
        formData.append('date', this.date); // Assuming this.miniature is the File object

        try {
          const addNews = await api.post('news/add-news', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(addNews);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Froala Editor instance is not initialized.');
      }
    },
  }
}
</script>
