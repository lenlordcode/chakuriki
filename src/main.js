import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router.js";
import components from "./components/components.js";

const  app = createApp(App);
app.use (router);
app.use (components);
app.use(createPinia);


app.mount('#app')
