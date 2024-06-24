import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router.js";
import components from "./components/components.js";

const  app = createApp(App);
app.use (router);
app.use (components);


app.mount('#app')
