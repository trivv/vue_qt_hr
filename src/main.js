import { createApp } from 'vue'
import Vuex from 'vuex';
import router from './router';
import App from './App.vue'
import Toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import './assets/main.css'
import { store } from '../src/store/index';

const app = createApp(App);
app.use(Vuex);
app.use(router);
app.use(Toast);
app.use(store);
app.mount('#app');
