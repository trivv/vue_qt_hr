import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import Toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount('#app');
