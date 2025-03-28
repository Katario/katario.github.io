import VueCookies from 'vue-cookies';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueCookies);

app.mount('#app');
