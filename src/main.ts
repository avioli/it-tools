import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { registerSW } from 'virtual:pwa-register';
import { plausible } from './plugins/plausible.plugin';

registerSW();

import { naive } from './plugins/naive.plugin';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(createHead());
app.use(router);
app.use(naive);
app.use(plausible);

app.mount('#app');
